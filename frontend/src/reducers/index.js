// Formation OpenClassrooms - Développeur Web - Projet 7 - Grégory VENET

import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import usersReducer from "./users.reducer";
import postReducer from "./post.reducer";

export default combineReducers({
	userReducer,
	usersReducer,
	postReducer
})
