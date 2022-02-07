import { createStore } from 'redux'
import { cardReducer } from './reducers'

const store = createStore(cardReducer)
export default store