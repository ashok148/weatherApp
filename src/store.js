import { createStore,applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducers } from "./redux/rootReducer";
import mySaga from "./sagas/saga";

const saaMiddleware= createSagaMiddleware();

export default createStore(rootReducers, applyMiddleware(saaMiddleware));
saaMiddleware.run(mySaga);