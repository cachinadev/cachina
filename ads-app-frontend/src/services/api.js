import axios from 'axios';

// Base URL for all API calls
const API_BASE_URL = 'http://localhost:5000/api'; // Ensure this matches your backend URL

// Axios instance with interceptors for token handling
const API = axios.create({
    baseURL: API_BASE_URL,
});

// Add Authorization header to all requests if a token exists
API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token"); // Retrieve token from localStorage
    if (token) {
        req.headers.Authorization = `Bearer ${token}`; // Add token to Authorization header
        console.log("Request headers:", req.headers); // Log headers for debugging
    }
    return req;
});

// --- User Functions ---

// Function to register a user
export const registerUser = async (userData) => {
    const response = await API.post('/users/register', userData);
    return response.data;
};

// Function to log in a user
export const loginUser = async (credentials) => {
    const response = await API.post('/users/login', credentials);
    return response.data;
};

// Function to fetch the details of the authenticated user
export const getUserDetails = async () => {
    const response = await API.get('/users/me');
    return response.data;
};

// --- Ad Functions ---

// Function to fetch all ads
export const fetchAds = async () => {
    const response = await API.get('/ads');
    return response.data;
};

// Function to fetch ads created by the authenticated user
export const fetchMyAds = async () => {
    const response = await API.get('/ads/my-ads');
    return response.data;
};

// Function to create a new ad
export const createAd = async (adData) => {
    const response = await API.post('/ads', adData); // Updated to match RESTful standards
    return response.data;
};

// Function to delete an ad
export const deleteAd = async (adId) => {
    const response = await API.delete(`/ads/${adId}`);
    return response.data;
};

// Function to edit/update an ad
export const editAd = async (adId, updatedData) => {
    const response = await API.put(`/ads/${adId}`, updatedData);
    return response.data;
};

// Export the API instance for direct use
export default API;