import React from "react";
import "./TodoList.css";

const TodoList = (props) => {
    return (
        <div className="task">
            {props.tasks.map((item, index) => (
                <ul key={"index-" + index}>
                    <li className="name">
                        {item.name}
                    </li>
                    <li>
                    {/* <img className="toggle" src={item.image} />
                        <li className="toggle">{item.description}</li> */}
                    </li>
                    <button className="close-btn" onClick={() => props.handleDelete(item.id)} >&times;</button>
                    <button className="edit-btn" onClick={() => props.handleEdit(index)}>Edit</button>
                    <button className="edit-btn" onClick={() => props.handleInfo(item.id)}>Info</button>
                </ul>
            ))}
        </div>
    );
};

export default TodoList;