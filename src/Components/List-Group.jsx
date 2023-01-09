import { useContext } from "react"
import GlobelContext from "../Context/GlobelContext"
import ListGroupItems from "./List-Group-Items"
// import ListGroupItems2 from "./List-Group-Items2"

function ListGroup (){
    const {todos} = useContext(GlobelContext)
    return(
        <>
        <
            ul className="list-group">
                   {
                    todos.map((todo)=> <ListGroupItems key={todo.id} todo={todo}  />)
                   }
                    </ul>
                        <ul>
                            {/* <ListGroupItems2/>  */}
                        </ul>
        </>
    )
}

export default ListGroup