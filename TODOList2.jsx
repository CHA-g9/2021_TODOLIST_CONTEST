import React, {useState, useReducer, createContext, useMemo, useCallback} from "react";
import TODOForm from "./TODOItemForm";

const TODOLIST = [];

const MakeTODOLIST = (id, text, date) => {
    TODOLIST.push({
        TODO_id : id,
        TODO_text : text,
        TODO_date : date,
    })
        return TODOLIST;
}

const TODOItem = ({TODODate}) => {
    const [TODOtext, setTODOtext] = useState("");
    // const [TODODate, setTODODate] = useState("2021-10-31");
    const [TODOId, setTODOId] = useState(0);
    // let textcolor = "black";
    
    MakeTODOLIST(TODOId, TODOtext, TODODate);
    console.log(TODOLIST, TODOLIST.length);

    return (
        <>
            <h3>{TODODate}</h3>        
            <TODOForm text = {setTODOtext} id = {setTODOId} />
            <div className = "TODOitem">
                {TODOLIST.map((item, i) => {if (i>0) return <div className = "todo-item" key = {i}><input type = "checkbox"></input><label>{item.TODO_id}. {item.TODO_text}</label></div>})}
            </div>
        </>
    )
};

export default TODOItem;