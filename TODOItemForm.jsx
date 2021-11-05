import React, {useCallback, useRef, useState} from "react";

let inputItem = "";

const TODOForm = ({text, id}) => {
  const [inputList, setInputList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const inputId = inputList.length;
  const inputRef = useRef();

  // 아이템 하나 만들기
  const onChangeItem = useCallback((e) => {
    inputItem = e.target.value;
    setInputValue(e.target.value);
    return inputItem;
  }, [])

  // 아이템 만든 거 리스트에 추가하기
  const onClickBtn = useCallback(() => {
    setInputList(
      inputList.concat([inputItem])
    );
    
    if (inputList.length === 0){
    } else {
      text(inputItem);
      id(inputId);
    }
    setInputValue("");
    inputRef.current.focus();
    return inputList;
  }, [inputList])

  // enter 키에도 동일하게 반응하도록
  const onKeyPressEnter = (e)=>{
    if(e.key === 'Enter'){
        onClickBtn();
    }
  }

  return (
    <>
    <div className="form">
      <input type="text" placeholder = "오늘의 할 일은?" value = {inputValue} onChange={onChangeItem} onKeyPress={onKeyPressEnter} ref={inputRef}></input>
      <div className = "make-button" onClick = {onClickBtn}>추가</div>
    </div>
    </>
  );
}

export default TODOForm;