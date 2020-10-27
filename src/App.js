import React, { useState } from "react";
import "./index.css";
import Todolist from "./Todolist";
const App = () => {
    const [list, setList] = useState();
    const [item, setItem] = useState([]);
    const inputEvent = (val) => {
        setList(val.target.value)

    }

    const submitsout = () => {
        console.log("submit");
        setItem((listval) => {
            return ([...listval, list]);
        });
        setList("");
    }
    const deleteItem = (id) => {
        console.log("deleted");

        setItem((listval) => {
            return (listval.filter((arrElem, index) => {
                return (index !== id);
            })
            );
        });
    }

    return (
        <React.Fragment>
            <div className="container">
                <br />
                <h1 className="h1">ToDo List</h1>
                <br />
                <input className="input" type="text" name="list" placeholder="Item Name" onChange={inputEvent} value={list} />
                <button className="btn" type="button" onClick={submitsout} >+</button>
                <ol>
                    {item.map((ar, index) => {
                        return (<Todolist
                            key={index}
                            id={index}
                            text={ar}
                            onSelect={deleteItem}
                        />);
                    })}
                </ol>
            </div>
        </React.Fragment>
    );
}
export default App;