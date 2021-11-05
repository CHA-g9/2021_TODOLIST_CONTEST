import React, {useState, useCallback, useContext} from "react";
import moment from "moment";
import Calendar from './Calendar';
import TODOItem from "./TODOList2";
import Comment from "./Comment";

let TODODate = moment().format("YYYY-MM-DD");

// TODOLIST 외부
const TODOLISTBox = () => {
  return (
    <div className = "TODOLISTBox">
      <div className="TODOForm">
        <TODOItem TODODate = {TODODate} />
      </div>
    </div>
  );
}


const TODOLIST = () => {
    return (
        <>
            <Calendar className =  "Calender" />
            <div className = "Todo">
                <TODOLISTBox />
            </div>
            <div className = "Comment">
              <h4> 오늘도 하루를 이겨낸 당신에게 </h4>
              <Comment />
            </div>
        </>
    );

};

export default TODOLIST;