import moment, { add, clone } from "moment";
import React, { createContext, useContext, useState } from "react";

{/*달력 함수 컴포넌트*/}
const Calendar_show = () => {
    const [dayname, setDayname] = useState(['일', '월', '화', '수','목','금','토']);
    const [today, setToday] = useState(() => (moment().format("YYYY-MM-DD")));
    const [selectDate, setSelectDate] = useState(moment().format("YYYY-MM-DD"));

    // 날짜를 누르면 해당 날짜를 강조하기 + 해당 날짜 반환
    function selectDayClick (clickedDate) {
        setSelectDate(clickedDate);
        if (moment(clickedDate).format("MM") !== moment(today).format("MM")){
            if (moment(clickedDate).format("MM") >= moment(today).format("MM")) {
                changeMonth(1);
            } else {
                changeMonth(0);
            }
        }
        return selectDate;
    };
    
    const changeMonth = (num) => (num ? setToday(moment(today).clone().add(1, 'month')) : setToday(moment(today).clone().subtract(1, 'month')));

    const firstWeekofMonth = moment(today).clone().startOf('month').week();
    // 1년은 52주 + @, 이것을 moment는 1로 표현하므로 53으로 변경
    const lastWeekofMonth = moment(today).clone().endOf("month").week() === 1 ? 53 : 
    moment(today).clone().endOf('month').week();

    const makeCalendar = () => {
        let Calendar = [];
        let week = firstWeekofMonth;
        for ( week; week <= lastWeekofMonth; week++) {
            // console.log(week);
            Calendar = Calendar.concat(
                <tr className = "Calendar-tr" key = {week}>
                    {Array(7).fill(0).map((data,index) => {
                        let days = moment(today).clone().startOf('year').week(week).
                        startOf('week').add(index, "day");
                        // 오늘이 속한 주를 기준으로 0부터 7까지 인덱스를 더해가며
                        // 각 주의 일을 표기.
                        let Selected = moment(selectDate).format("YYYYMMDD") === moment(days).format("YYYYMMDD") ? true: false;
                        let Grayed = moment(days).format("MM") !== moment(today).format("MM") ? true: false;
                        
                        if (Selected) {
                            return (
                                <td className = "date" key = {index} style = {{border: '1px solid red'}} 
                                 onClick = {() => selectDayClick(days)}>
                                    <span className="text">{days.format('D')}</span>
                                </td>
                            )
                        }

                        if (Grayed) {
                            return (
                                <td className = "date" key = {index} style = {{backgroundColor: '#E0E0E0'}} 
                                onClick = {() => selectDayClick(days)}>
                                    <span className="text">{days.format('D')}</span>
                                </td>
                            )
                        }
                        return (
                            <td className = "date" key = {index} onClick = {() => selectDayClick(days)}>
                                <span className="text">{days.format('D')}</span>
                            </td>
                        );
                    })}
                </tr>,
            );
        }
        return Calendar;
    }
    return(
        <>
        <div className="Header">
            <ul className="header-buttons">
                <li className="move-button" onClick={() => { changeMonth(0); } }>
                    <img src="outline_arrow_left_black_24dp.png" className="icon"></img>
                </li>
                <li className = "CalendarTitle">
                    <h3 className="YM">{moment(today).format("YYYY년 MM월")}</h3> 
                </li>
                <li className="move-button" onClick={() => { changeMonth(1); } }>
                    <img src="outline_arrow_right_black_24dp.png" className="icon"></img>
                </li>
            </ul>
            <div className="dayname">
                {dayname.map((name) =>(
                <div className="box" key={name}>
                    {name}
                </div>))}
            </div>
        </div>
        <div className="Month">
                <table>
                    <tbody>
                        {makeCalendar()}
                    </tbody>
                </table>
        </div>
        </>
    )
}
export default Calendar_show;