import { combineReducers, legacy_createStore as createStore } from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { usersReducer } from "./usersReducer";

let rootReducer = combineReducers({
    dialogsPage: dialogsReducer, 
    profilePage: profileReducer,
    usersPage: usersReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer);
