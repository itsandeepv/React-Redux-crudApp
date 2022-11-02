

import { configureStore ,createStore , applyMiddleware } from "redux";

import logger from "redux-logger";
import reduxThunk from "redux-thunk"; 
import rootReducer from "./root-reducer";



const middlewares = [ reduxThunk ]

if (process.env.NODE_ENV === "Development"){
    middlewares.push(logger)
}


const store = createStore(

   

    rootReducer ,
     applyMiddleware(...middlewares)
    
    )


export default store

