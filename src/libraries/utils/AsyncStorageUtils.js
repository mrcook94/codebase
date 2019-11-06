import AsyncStorage from '@react-native-community/async-storage';

const KEY = {
  USER: 'user',
  TOKEN: 'token'
};

function save(key, value) {
  AsyncStorage.setItem(key, value);
}

// sử dụng nếu AsyncStorage dữ liệu dạng Json object
function saveObject(key, value) {
  AsyncStorage.setItem(key, JSON.stringify(value));
}

async function get(key) {
  return AsyncStorage.getItem(key);
}

async function remove(key) {
  return AsyncStorage.removeItem(key)
}

// sử dụng nếu AsyncStorage dữ liệu dạng Json object
async function getObject(key) {
  let value = await AsyncStorage.getItem(key)
  return JSON.parse(value)
}

export default {
  save,
  saveObject,
  get,
  getObject,
  remove,
  KEY,
};
