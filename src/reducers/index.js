import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'


//We hace two separate files with two different reducers,
// redux is smart enough to know that we are combining them
export default combineReducers({
    todos, 
    visibilityFilter
})