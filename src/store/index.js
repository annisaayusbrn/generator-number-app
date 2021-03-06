import generatorReducer from "./reducers/generatorReducer"
import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware} from 'redux'
const middleware = [thunk]
const store = createStore(combineReducers({generator: generatorReducer}),applyMiddleware(...middleware))
export default store
