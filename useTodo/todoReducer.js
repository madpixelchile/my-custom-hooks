

export const todoReducer = (initialState = [], action = {}) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload];
        case '[TODO] Remove Todo':
            console.log(initialState.filter((todo) => todo.id !== action.payload))
            return initialState.filter((todo) => todo.id !== action.payload);
        case '[TODO] Toggle Todo':
            return initialState.map((todo)=>{
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })
        case '[TODO] Edit Todo':
            return initialState.map((todo)=>{
                if(todo.id === action.payload.id){
                    return {
                        ...todo,
                        description: action.payload.description
                    }
                }
                return todo;
            })
        default:
            return initialState;
    }

}