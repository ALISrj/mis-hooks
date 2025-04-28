export const todoReducer = (initalState = [], action) => {

    switch (action.type) {

        case 'ADD_TODO':
            return [...initalState, action.payload];
        case 'REMOVE_TODO':
            return initalState.filter(todo => todo.id !== action.payload);
        case 'TOGGLE_TODO':
            return initalState.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            done: !todo.done
                        }
                    }
                    return todo;
                }
            )
        default:
            return initalState;
    }

}