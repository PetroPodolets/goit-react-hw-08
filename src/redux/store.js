import { configureStore } from '@reduxjs/toolkit';
import contactsReduser from './contacts/slice'
import searchReducer from './filters/slice';
import authReduser from './auth/slice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
    key: "auth",
    storage,
    whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReduser);

export const store = configureStore({
    reducer: {
        contacts: contactsReduser,
        filters: searchReducer,
        auth: persistedAuthReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);