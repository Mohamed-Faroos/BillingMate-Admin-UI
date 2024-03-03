/* eslint-disable @typescript-eslint/no-explicit-any */
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"
import { applyMiddleware, compose, createStore, } from "redux";
import { rootSaga } from "./rootSaga";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const persistConfig = {
    key: "persist-invomate",
    storage
}

/* `const sagaMiddleware = createSagaMiddleware();` creates a new instance of the Redux Saga
middleware, which will be used to run sagas in the Redux store. */
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

/**
 * This function is a reducer that takes in a state and an action, and returns the result of calling
 * the rootReducer function with those parameters.
 */
const reducer = (state: any, action: any): ReturnType<typeof rootReducer> => {
    return rootReducer(state, action);
};

/* This allows the application state to be stored and retrieved from the specified 
* storage across browser sessions. 
*/
const persistedReducer = persistReducer(persistConfig, reducer);

/* This line of code is setting up the `composeEnhancers` variable based on whether the Redux DevTools
Extension is installed in the browser. */
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

/* This line of code is creating a Redux store by calling the `createStore` function from Redux. It
takes in two main arguments: */
const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middleware))
);

/* The persistor ensures that the state is saved and
rehydrated across browser sessions, allowing the application to maintain its state even after a page
refresh or when the browser is closed and reopened. */
const persistor = persistStore(store);


/*  By calling `sagaMiddleware.run(rootSaga);`, you are essentially starting the saga middleware and kicking off
the saga processes defined in `rootSaga`. */
sagaMiddleware.run(rootSaga);

type AppDispatch = typeof store.dispatch;

type RootStateType = ReturnType<typeof store.getState>;

export { persistor, store }
export type { AppDispatch, RootStateType }