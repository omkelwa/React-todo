import { createContext,useReducer,useState  } from "react";
import GlobelReducer from "./GlobelReducer";



 const GlobelContext = createContext()


export const GlobleProvider = ({children})=>{

const intialstate = {
    todos: [],
    edit:{todo:{}, isEdit:false}
}

const [state, dispatch] = useReducer(GlobelReducer, intialstate)
    
    const [todos, setTodos] = useState([])
    const saveTodo = (text)=>{
        const newTodo = {
            id:crypto.randomUUID(),
            text:text
        }
        
        // setTodos([...todos , newTodo])
        dispatch({
            type:"Save_todo",
            payload:newTodo
        })
    }
    const editTodo = (todo)=>{
        // setEdit({
        //     todo:todo,
        //     isEdit:true

        // }
        // )
        dispatch({
            type:"Edit_todo",
            payload:todo
        })
    }
    // const [edit , setEdit] = useState({
    //     todo:{},
    //     isEdit : false
    // })
    const deleteTodo = (id)=>{
        // setTodos(todos.filter((item)=>item.id !== id))
        dispatch({
            type:"Delete_todo",
            payload:id
        })
    }
    const updateTodo = (id, text)=>{
        setTodos(todos.map(item=> item.id === id ? {id:id, text:text}: item))
       const updatedTodo = {
        id:id,
        text:text
       }

       dispatch({
        type:"Update_todo",
        payload:updatedTodo
       })
        // setEdit({
        //     todo:{},
        //     isEdit:false
        // })
    }

    return(

        <GlobelContext.Provider value={{
            todos:state.todos,
            saveTodo,
            editTodo,
            edit:state.edit,
            deleteTodo,
            updateTodo
        }}>
            {children}
        </GlobelContext.Provider>
    )
}
export default GlobelContext