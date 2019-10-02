import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import gameReducer from './reducers/gameReducer'
import personReducer from './reducers/personReducer'
import userReducer from './reducers/userReducer'
import thunk from 'redux-thunk'

const AllReducers = combineReducers({person: personReducer, game: gameReducer, users: userReducer})

const InitialStates = {
  game:{name: 'Football'},
  person:{name:'Joice', 'email':'test1@test.com'},
  users:[]
}

const middleware =[thunk]
const store = createStore(
  AllReducers, 
  InitialStates, 
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)


export default store

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()