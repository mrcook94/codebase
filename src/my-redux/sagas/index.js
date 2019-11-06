import { all, fork } from 'redux-saga/effects';
import * as watchLogin from './loginSaga'

export default function* rootSaga() {
  yield all([
    ...Object.values(watchLogin),
  ].map(fork))
}