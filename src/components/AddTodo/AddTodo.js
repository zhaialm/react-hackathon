import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./AddTodo.css";

const AddTodo = (props) => {
    let [name, setName] = useState("");
    let [image, setImage] = useState("");
    let [description, setDescription] = useState("");

    function handleClick() {
        let newTask = {
            name,
            image,
            description,
            id: Date.now()
        };

        postNewTask(newTask);
        // deleteBtn()
        props.handleNewTask(newTask);
        setName("");
        setImage("");
        setDescription("");
    }
    function postNewTask(newTask) {
        fetch("http://localhost:8000/task", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset = utf-8",
            },
            body: JSON.stringify(newTask),
        }).then(() => props.render());
    }
    
    

    return (
        <div className="inp-crud">
            <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Название"
                value={name}
            />
            <input
                onChange={(e) => setImage(e.target.value)}
                type="text"
                placeholder="Фотография"
                value={image}
            />
            <input
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Описание"
                value={description}
            />
            <button className="add-btn" onClick={handleClick}>+Добавить</button>
        </div>
    );
};

export default AddTodo;