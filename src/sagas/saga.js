import { call, put,takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA, receiveApiData } from "../redux/actionType";
import { fetchData } from '../redux/Api';

function* getApiData({ payload: value }) {
    try {
        const data = yield call(fetchData, value);
        yield put(receiveApiData(data));
    } catch (e) {
        console.log(e);
    }
}

function* mySaga() {
    yield takeLatest(REQUEST_API_DATA, getApiData);
}

export default mySaga;