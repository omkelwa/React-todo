import { useEffect, useState } from "react"

function Form ({saveTodo, edit, updateTodo }){

    const [text , setText] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(edit.isEdit){
            updateTodo(edit.todo.id, text)
        }
        else{
            saveTodo(text)
        }
        setText("")

    }
    useEffect(()=>{
        setText(edit.todo.text)
    },[edit])
        return(
        <>
         <form  onSubmit={(e)=>handleSubmit(e)} >
                    <div className="mb-3">
                        <input value={text}  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required onChange={(e)=>setText(e.target.value)}  />
                        
                     
                    </div>
                        <button type="submit" className="btn btn-primary m-5  ">Submit</button>
                        
                        
                </form>
        </>
    )
}
export default Form