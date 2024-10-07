import { useReducer } from "react"

export function TodoList() {
    
    const todoList = [
        {
            id: 1,
            status: 1,
            name: "Study ReactJS"
        },
        {
            id: 2,
            status: 0,
            name: "Study Docker"
        },
        {
            id: 3,
            status: 0,
            name: "Study GitLab CICD"
        },
    ]

    const todoListReducer = (state, action) => {
        switch(action.status){
            case 1: 
                return state.map(ele=>{
                    if(ele.id === action.id){
                        return { ...ele, status: 1}
                    }
                    return ele
                })

            case 0: 
                return state.map(ele=>{
                    if(ele.id === action.id){
                        return { ...ele, status: 0}
                    }
                    return ele
                })
            default: 
                return state
        }            
    }

    const [todos, dispatch] = useReducer(todoListReducer, todoList);

    const handleOnChange = (todo) => {
        dispatch({status: todo.status ? 0 : 1, id: todo.id})
    }
    
    return (
        <div>
            {todos.map(todo =>            
                <div key={todo.id}>
                    <label>
                        <input type="checkbox" checked={todo.status} onChange={() => handleOnChange(todo)}></input>

                        <span style={{ textDecoration: todo.status ? 'line-through' : 'none' }}>
                        {todo.name}
                        </span>
                    </label>
                </div>
            )}
        </div>
    )
}