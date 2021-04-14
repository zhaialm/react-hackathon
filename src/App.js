import React, { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import EditModal from "./components/EditModal/EditModal";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import InfoModal from './components/InfoModal/InfoModal'

function App() {
    let [tasks, setTasks] = useState([]);
    let [modal, setModal] = useState(false);
    let [editTodo, setEditTodo] = useState({})
    let [infoDetails,setInfoDetails] = useState({})
    let [infoTodo, setInfoTodo] = useState(false)
    // render()
    async function render() {
        let res = await fetch('http://localhost:8000/task');
        let data = await res.json();
        setTasks(data);
        console.log(data);
    }

    useEffect(() => {
        render()
    }, [])

    

    function handleNewTask(newTask) {
        let newTasksArray = [...tasks];
        newTasksArray.push(newTask);

        setTasks(newTasksArray);
    }
    function changeStatus(id){
        // console.log(id)
        let newTodos = tasks.map(item =>{
            if(item.id === id){
                item.status = !item.status
            }
            return item
        })
        setEditTodo(newTodos)
    }

    function handleDelete(id){
        let newTodos = tasks.filter(item =>{
            fetch(`http://localhost:8000/task/${id}`,{
            method: 'DELETE'
        })
        .then(() => render())
        })
        // let newTodos = tasks.filter(item =>{
        //     return item.id !== id
        // })
        setTasks(newTodos);
    }



    function handleEdit(index){
        setModal(true)
        setEditTodo(tasks[index])
    }
    function handleSaveName(newName){
        let newTodos = tasks.map(item =>{
            if(item.id === newName.id){
                return newName
            }
            return item
        })
        setTasks(newTodos)
        handleCloseModal()
    }


    async function render() {
        let res = await fetch('http://localhost:8000/task');
        let data = await res.json();
        setTasks(data);
        console.log(data);
    }

    function handleCloseModal(){
        setModal(false)
    }


    function handleInfo(id){
        const findObj = tasks.find((item) => item.id === id)
        setInfoDetails(findObj);
        setInfoTodo(true)   
    }

    function handleCloseModalSecond(){
        setInfoTodo(false)
    }


    return (
        <div className="App">
            <Header />
            <AddTodo 
            render={render}
            handleNewTask={handleNewTask}
            />
            <TodoList 
                tasks={tasks} 
                handleEdit={handleEdit} 
                handleDelete={handleDelete} 
                changeStatus={changeStatus}

                handleInfo={handleInfo}
            />
            {modal ? 
                <EditModal 
                    editTodo={editTodo}
                    handleSaveName={handleSaveName}
                    handleCloseModal={handleCloseModal}
                /> 
            : null}

            {infoTodo ? 
                <InfoModal
                    infoDetails={infoDetails}
                    handleCloseModalSecond={handleCloseModalSecond}
                /> 
            : null}
        </div>
    );
}

export default App;