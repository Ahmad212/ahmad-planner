import { projectReducer } from './projectReducer'
import { authReducer } from './authReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase' 
 export const rootReducer = combineReducers({
    auth : authReducer,
    project : projectReducer,
    firestore : firestoreReducer,
    firebase : firebaseReducer 
})

