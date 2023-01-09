function ListGroupItems ({todo, deleteTodo, editTodo}){
    return (
        <>
        <li className="list-group-item mt-2 border fw-bold "> {todo.text} 
        <button className="btn btn-success float-end ms-3" onClick={()=>editTodo(todo)} >Edit</button> 
                        <button className="btn btn-danger float-end" onClick={(e)=>deleteTodo(todo.id)}>Delete</button>
                        </li>
                    {/* <li className="list-group-item mt-2 border "><input type="checkbox"/> Important Task </li>
                    <li className="list-group-item mt-2 border"> Market Work </li> */}
        </>
    )
}

export default ListGroupItems