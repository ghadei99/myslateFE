import { createStore } from "redux";
import tokenReducers from "../reducers/tokenReducers";
import rootReducer from "../reducers/rootReducer";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

//for white listing and blacklisting we need to provide type

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['modalflag', 'modalFlags']
}

const persistedReducer = persistReducer(persistConfig, tokenReducers)



export const stores = createStore(persistedReducer)
export const persistor = persistStore(stores);
export const store = () => {
    return stores
}