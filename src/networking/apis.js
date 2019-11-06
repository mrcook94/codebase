import axios from 'axios';
import database from 'libraries/utils/database';
import constants from 'libraries/constants/constants';

const instance = axios.create({
	baseURL: constants.BASE_API_URL,
	timeout: constants.SERVER_TIMEOUT,
})

const AUTH = {
	YES: true,
	NO: false,
}

function fetch(url, data, isAuth) {
	let headers = null
	if (isAuth) {
		headers = {
			Authorization: `Bearer ${database.tokenCache}`
		}
	}
	return instance.get(url, {
		params: {
			...data
		},
		headers
	}).then(response => response.data).catch(error => error)
}

function post(url, data, isAuth) {
	let headers = null
	if (isAuth) {
		headers = {
			Authorization: `Bearer ${database.tokenCache}`,
		}
	}

	return instance.post(url, { ...data }, {
		headers
	}).then((response) => response.data).catch(error => error)
}


function postForm(url, data, isAuth) {
	let formData = new FormData();

	Object.keys(data).forEach(key => {
		const value = data[key];
		if (Array.isArray(value)) {
			value.forEach(val => formData.append(`${key}[]`, val));
		} else {
			formData.append(key, value);
		}
	})
	let headers = null
	if (isAuth) {
		headers = {
			Authorization: `Bearer ${database.tokenCache}`,
		}
	}
	return instance.post(url, formData, {
		headers
	}).then((response) => response.data).catch(error => error)
}

function put(url, data, isAuth) {
	let headers = null
	if (isAuth) {
		headers = {
			Authorization: `Bearer ${database.tokenCache}`
		}
	}

	return instance.put(url, { ...data }, {
		headers
	}).then((response) => response.data).catch(error => error)
}

function del(url, isAuth) {
	let headers = null
	if (isAuth) {
		headers = {
			Authorization: `Bearer ${database.tokenCache}`
		}
	}

	return instance.delete(url, {
		headers
	}).then((response) => response.data).catch(error => error)
}

export default apis = {
	PATH: {
	},
	AUTH,
	fetch,
	post,
	put,
	postForm,
	del,
}
