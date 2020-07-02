const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                /// We pass the original array with the spread operator (...) and then we add a new value to it (object)
                ...state, {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            /// We'll map over the todos and change the completed status
            return state.map(
                todo => // Get each todo
                (todo.id === action.id) // and check if todo.id == action.id (with a ternary operator) 
                ? {...todo, completed: !todo.completed } :
                todo) // we pass the actual todo and update the completed to the opposite of existing value

        default:
            return state
    }
}

export default todos