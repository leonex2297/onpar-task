import React from "react";
const Todolist = (props) => {
    
    return (
        <>
            <div>   
                <li><button className="btn1" onClick={()=>{
                    props.onSelect(props.id);
                }}>x</button>&nbsp;&nbsp;&nbsp;&nbsp;{props.text}</li>
            </div>
        </>
    );
}
export default Todolist;