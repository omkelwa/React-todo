
const GlobelReducer = (state, action) =>{

    switch(action.type){
            case "Save_todo" :
                return{
                    ...state,
                    todos:[...state.todos, action.payload]

                }
            case "Delete_todo":
                return{
                    ...state,
                    todos:[...state.todos.filter((item)=>item.id !== action.payload)]
            
                }

            case "Edit_todo":
                return{
                                   
                    ...state,
                    edit:{todo:action.payload, isEdit:true}
                    
                }
            case "Update_todo":
                return{
                    ...state,
                    todos:state.todos.map((item)=> item.id === action.payload.id ? {...item, text:action.payload.text} : item),
                    edit:{todo:{}, isEdit:false}
                }
            default :
            return state
    }


}

export default GlobelReducer