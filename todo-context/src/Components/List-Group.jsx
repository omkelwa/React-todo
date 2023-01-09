import ListGroupItems from "./List-Group-Items"
// import ListGroupItems2 from "./List-Group-Items2"

function ListGroup ({todos, deleteTodo, editTodo}){
    return(
        <>
        <ul className="list-group">
                   {
                    todos.map((todo)=> <ListGroupItems todo={todo} deleteTodo={deleteTodo} editTodo={editTodo}/>)
                   }
                    </ul>
                        <ul>
                            {/* <ListGroupItems2/>  */}
                        </ul>
        </>
    )
}

export default ListGroup