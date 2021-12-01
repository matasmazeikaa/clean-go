import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://localhost:57341/.netlify/functions/',
});
