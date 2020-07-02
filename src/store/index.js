import {createStore} from 'redux'
import rootReducer from '../reducers'

// we'll combine together all reducers on this rootReducer
export default store = createStore(rootReducer)