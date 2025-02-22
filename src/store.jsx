import { applyMiddleware, createStore } from "redux";
import todosReducers from "./services/reducers/TodosReducers";
import thunk from "redux-thunk";

const store = createStore(todosReducers, applyMiddleware(thunk))
export default store