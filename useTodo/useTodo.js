import { useReducer, useEffect } from "react"
import { todoReducer } from "./todoReducer";

const initialState = [];

const initAll = ()=>{
    return JSON.parse(localStorage.getItem('todoState')) || [];
}

export const useTodo = () => {

    const [todoState, dispatch] = useReducer(todoReducer, initialState, initAll);

    const handleNewTodo = (data)=>{
        console.log(data);

        const action = {
            type: '[TODO] Add Todo',
            payload: data
        }

        dispatch(action);

    }

    const handleEditTodo = (data)=>{
        const action = {
            type: '[TODO] Edit Todo',
            payload: data
        }
        dispatch(action);
    }

    useEffect(()=>{
        localStorage.setItem("todoState", JSON.stringify(todoState));
    },[todoState])

    const handleDeleteTodo = (id)=>{
        // console.log('id;', id);
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })

    }

    const handleToggleTodo = (id)=>{
        console.log('id:', id);
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    return{
        todoState: todoState,
        todoPending: todoState.filter((obj)=> obj.done === false ).length,
        todoResolved: todoState.filter((obj)=> obj.done === true ).length,
        handleNewTodo: handleNewTodo,
        handleDeleteTodo: handleDeleteTodo,
        handleToggleTodo: handleToggleTodo,
        handleEditTodo: handleEditTodo,
    }
}

