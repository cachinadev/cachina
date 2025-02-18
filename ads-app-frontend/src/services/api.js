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
            // ✅ Append each image individually
            value.forEach((file) => formData.append("images", file));
        } else if (Array.isArray(value)) {
            // ✅ Handle multiple selections (deporteType, categories, etc.), removing empty values
            value.filter(item => item.trim() !== "").forEach(item => formData.append(key, item));
        } else if (value !== null && value !== undefined && value !== "") {
            // ✅ Avoid sending `null` or `undefined` values
            formData.append(key, value);
        }
    });

    // ✅ Ensure all necessary fields are sent properly
    console.log("Sending FormData:", [...formData.entries()]);
    console.log(formData.get("address")) ///Added
    try {
        const { data } = await API.post('/ads/upload-images', formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return data;
    } catch (error) {
        console.error("Error creating ad:", error.response?.data || error.message);
        throw error;
    }
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

// ---------------- COMPLAINT FUNCTIONS ----------------
export const submitComplaint = async (complaintData) => {
    try {
        const filteredData = Object.fromEntries(
            Object.entries(complaintData).filter(([_, value]) => value !== "")
        );

        const { data } = await API.post("/complaints/submit", {
            ...filteredData,
            acceptedPrivacyPolicy: complaintData.acceptedPrivacyPolicy === true, // Ensure boolean
            status: "pending", // Default status
        });

        return data;
    } catch (error) {
        console.error("Error submitting complaint:", error.response?.data || error.message);
        throw error;
    }
};

// ---------------- ROUTES (TRANSPORT) FUNCTIONS ----------------

// Fetch all routes (Public Transport Paths)
export const fetchRoutes = async () => {
    try {
        const { data } = await API.get("/rutas"); // ✅ Ensure correct API path
        return data;
    } catch (error) {
        console.error("Error fetching routes:", error.response?.data || error.message);
        return [];
    }
};

// Fetch specific route details by ID
export const getRouteDetails = async (routeId) => {
    try {
        const { data } = await API.get(`/rutas/${routeId}`);
        return data;
    } catch (error) {
        console.error("Error fetching route details:", error.response?.data || error.message);
        return null;
    }
};

// Fetch real-time vehicle locations for a route
export const getVehicleLocations = async (routeId) => {
    try {
        const { data } = await API.get(`/rutas/${routeId}/vehicles`);
        return data;
    } catch (error) {
        console.error("Error fetching vehicle locations:", error.response?.data || error.message);
        return [];
    }
};

// ---------------- EXPORT GROUPS ----------------
export const RoutesAPI = {
    fetchRoutes,
    getRouteDetails,
    getVehicleLocations,
};

export const removeFavorite = async (adId) => {
    const token = localStorage.getItem("token");
    await fetch(`/api/favorites/${adId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
};


// Default Export
export default API;
