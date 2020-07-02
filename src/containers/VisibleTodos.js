import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import {toggleTodo} from '../actions'

// Let's tell our to-do component that here this is the toggle todo function and this is the state

// we map state to props
const mapStateToProps =state =>({
    todos: state.todos
})

// we map dispatch to props
const mapDispatchToProps = dispatch => ({
    // we map the toggle todo method to dispatch our action
    toggleTodo: id => dispatch(toggleTodo(id))
})


// pass them into the connect method
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)