import axios from 'axios';

// Base URL for all API calls
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Axios instance with interceptors for token handling
const API = axios.create({
    baseURL: API_BASE_URL,
});

// Request Interceptor: Add Authorization header if token exists
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

// Response Interceptor: Global error handling
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

// ---------------- USER FUNCTIONS ----------------

export const registerUser = async (userData) => {
    const { data } = await API.post('/users/register', userData);
    return data;
};

export const loginUser = async (credentials) => {
    const { data } = await API.post('/users/login', credentials);
    return data;
};

export const getUserDetails = async () => {
    const { data } = await API.get('/users/me');
    return data;
};

// Add to Favorites
export const addToFavorites = async (adId) => {
    try {
        const { data } = await API.post(`/users/favorites/${adId}`);
        return data;
    } catch (error) {
        console.error("Error adding to favorites:", error.response?.data || error.message);
        if (error.response && error.response.status === 401) {
            console.warn("You must be logged in to add favorites.");
            return null; // Return null for unauthenticated users
        }
        throw error;
    }
};

// Remove from Favorites
export const removeFromFavorites = async (adId) => {
    try {
        const { data } = await API.delete(`/users/favorites/${adId}`);
        return data;
    } catch (error) {
        console.error("Error removing from favorites:", error.response?.data || error.message);
        if (error.response && error.response.status === 401) {
            console.warn("You must be logged in to remove favorites.");
            return null;
        }
        throw error;
    }
};

// Get All Favorites
export const getFavorites = async () => {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            return []; // Return an empty array if the user is not logged in
        }

        const { data } = await API.get("/users/favorites");
        return data;
    } catch (error) {
        console.error("Error fetching favorites:", error.response?.data || error.message);
        return []; // Return an empty array if there's an error
    }
};

// ---------------- AD FUNCTIONS ----------------

export const fetchAds = async () => {
    const { data } = await API.get('/ads');
    return data;
};

export const fetchMyAds = async () => {
    const { data } = await API.get('/ads/my-ads');
    return data;
};

export const getAdDetails = async (adId) => {
    const { data } = await API.get(`/ads/${adId}`);
    return data;
};

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

export const deleteAd = async (adId) => {
    const { data } = await API.delete(`/ads/${adId}`);
    return data;
};

export const editAd = async (adId, updatedData) => {
    const { data } = await API.put(`/ads/${adId}`, updatedData, {
        headers: { "Content-Type": "application/json" },
    });
    return data;
};

// ---------------- REVIEW FUNCTIONS ----------------

export const addReview = async (adId, reviewData) => {
    const { data } = await API.post(`/ads/${adId}/reviews`, reviewData);
    return data;
};

export const getReviews = async (adId) => {
    const { data } = await API.get(`/ads/${adId}/reviews`);
    return data;
};

export const deleteReview = async (adId, reviewId) => {
    const { data } = await API.delete(`/ads/${adId}/reviews/${reviewId}`);
    return data;
};

// ---------------- EXPORT GROUPS ----------------

export const UserAPI = {
    registerUser,
    loginUser,
    getUserDetails,
    addToFavorites,
    removeFromFavorites,
    getFavorites, // ✅ Ensure this is included
};

export const AdAPI = {
    fetchAds,
    fetchMyAds,
    getAdDetails,
    createAd,
    deleteAd,
    editAd,
    addReview,
    getReviews,
    deleteReview,
};

// Default Export
export default API;
