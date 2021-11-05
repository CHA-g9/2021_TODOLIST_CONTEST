import React, {useState, useCallback} from "react";

let inputCom = "";
const Comment = () => {
    const [CommentInput, setCommentInput] = useState("");
    const onChangeComment = useCallback((e) => {
        inputCom = e.target.value; 
        return inputCom;
        
    }, []);
    const onClickComment = useCallback(() => {
        setCommentInput(inputCom);
        console.log(CommentInput);
    }, [CommentInput]);

    return (
        <>
            <input type = "text" className = "comment-input" onChange = {onChangeComment} placeholder = "응원의 한마디!"></input>
            <button className = "comment-button" onClick = {onClickComment}>입력</button>
            <div className = "self-comment">{CommentInput}</div>
        </>
    )
}

export default Comment;