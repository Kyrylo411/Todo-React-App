import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const API_URL = 'http://localhost:5000';

const api = axios.create({
	withCredentials: true,
	baseURL: API_URL,
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
	return config;
});

api.interceptors.response.use(
	(config: AxiosResponse) => config,
	async (error) => {
		const originalRequest = error.config;
		console.log(originalRequest);
		console.log(error.response.status);
		if (error.response.status === 401 || error.response.status === 500) {
			try {
				const response = await axios.get(`${API_URL}/auth/refresh`, {
					withCredentials: true,
				});
				console.log(response);
				localStorage.setItem('token', response.data.accessToken);
				return api.request(originalRequest);
			} catch (e) {
				console.log('Пользователь не авторизован');
			}
		}
	},
);

export default api;
