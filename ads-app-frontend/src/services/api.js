import axios from 'axios';

// Base URL for all API calls
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'; // Default to localhost

// Axios instance with interceptors for token handling
const API = axios.create({
    baseURL: API_BASE_URL,
});

// Add Authorization header to all requests if a token exists
API.interceptors.request.use(
    (req) => {
        const token = localStorage.getItem("token");
        if (token) {
            req.headers.Authorization = `Bearer ${token}`;
        }
        return req;
    },
    (error) => {
        console.error("Error in request interceptor:", error);
        return Promise.reject(error);
    }
);

// Handle responses globally
API.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API Response Error:", {
            message: error.response?.data?.message || error.message,
            status: error.response?.status || "No status",
        });
        return Promise.reject(error);
    }
);

// --- User Functions ---

/**
 * Register a new user
 * @param {Object} userData - User registration data
 * @returns {Promise<Object>} API response data
 */
export const registerUser = async (userData) => {
    const { data } = await API.post('/users/register', userData);
    return data;
};

/**
 * Log in a user
 * @param {Object} credentials - User login credentials
 * @returns {Promise<Object>} API response data
 */
export const loginUser = async (credentials) => {
    const { data } = await API.post('/users/login', credentials);
    return data;
};

/**
 * Fetch authenticated user's details
 * @returns {Promise<Object>} User details
 */
export const getUserDetails = async () => {
    const { data } = await API.get('/users/me');
    return data;
};

// --- Ad Functions ---

/**
 * Fetch all ads
 * @returns {Promise<Array>} List of ads
 */
export const fetchAds = async () => {
    const { data } = await API.get('/ads');
    return data;
};

/**
 * Fetch ads created by the authenticated user
 * @returns {Promise<Array>} User's ads
 */
export const fetchMyAds = async () => {
    const { data } = await API.get('/ads/my-ads');
    return data;
};

/**
 * Create a new ad
 * @param {Object} adData - Ad data
 * @returns {Promise<Object>} Created ad details
 */
export const createAd = async (adData) => {
    const formData = new FormData();
    Object.entries(adData).forEach(([key, value]) => {
        if (key === "pictures" && Array.isArray(value)) {
            value.forEach((file) => formData.append("images", file));
        } else {
            formData.append(key, value);
        }
    });

    const { data } = await API.post('/ads/upload-images', formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
};

/**
 * Delete an ad
 * @param {String} adId - Ad ID
 * @returns {Promise<Object>} API response data
 */
export const deleteAd = async (adId) => {
    const { data } = await API.delete(`/ads/${adId}`);
    return data;
};

/**
 * Edit/Update an ad
 * @param {String} adId - Ad ID
 * @param {Object} updatedData - Updated ad data
 * @returns {Promise<Object>} Updated ad details
 */
export const editAd = async (adId, updatedData) => {
    const { data } = await API.put(`/ads/${adId}`, updatedData, {
        headers: { "Content-Type": "application/json" },
    });
    return data;
};

// Grouped exports for maintainability
export const UserAPI = {
    registerUser,
    loginUser,
    getUserDetails,
};

export const AdAPI = {
    fetchAds,
    fetchMyAds,
    createAd,
    deleteAd,
    editAd,
};

// Default Export
export default API;
