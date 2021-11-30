import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://localhost:49543/.netlify/functions/',
});
