
import { useState } from "react"
import Form from "./Components/Form"
import ListGroup from "./Components/List-Group"
import { v4 as uuidv4 } from 'uuid';




function App() {
    const [todos, setTodos] = useState([])
    const [edit , setEdit] = useState({
        todo:{},
        isEdit : false
    })
    
    const saveTodo = (text)=>{
        const newTodo = {
            id:uuidv4(),
            text:text
        }

        setTodos([...todos , newTodo])
    }
    
    const deleteTodo = (id)=>{
        setTodos(todos.filter((item)=>item.id !== id))
    }
    const editTodo = (todo)=>{
        setEdit({
            todo:todo,
            isEdit:true

        })
    }

    const updateTodo = (id, text)=>{
        setTodos(todos.map(item=> item.id === id ? {id:id, text:text}: item))
        setEdit({
            todo:{},
            isEdit:false
        })
    }
    
    return (
        <>
            <div className="container m-5 p-5 ">
                <h1 className="text-center mb-3 ">Todo App Task List</h1>
                <Form saveTodo = {saveTodo} edit={edit} updateTodo={updateTodo}  />
                <ListGroup todos={todos} deleteTodo={deleteTodo} editTodo={editTodo}  />
            
            </div>
        </>
            )
}

            export default App