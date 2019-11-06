import { takeLatest, delay } from 'redux-saga/effects'
import { LOGGING_IN } from 'my-redux/actions';
import { showLoading, hideLoading } from 'libraries/components/LoadingModal';

// eslint-disable-next-line import/prefer-default-export
export function* watchLogin() {
  yield takeLatest(LOGGING_IN, onLogin)
}

function* onLogin(action) {
  try {
    showLoading()
    yield delay(2000)
    hideLoading()
    console.log(action, 'ahihi')
  } catch (error) {

  }
}
