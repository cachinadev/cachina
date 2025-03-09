import axios from 'axios';

// Base URL for all API calls
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Axios instance with interceptors for token handling
const API = axios.create({
    baseURL: API_BASE_URL,
});

// ✅ Request Interceptor: Add Authorization header if token exists
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
// ✅ Response Interceptor: Handle errors globally
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


// ✅ Fetch Ads by Username (For Profile Pages)
export const getUserAds = async (username) => {
    try {
        const { data } = await API.get(`/users/${username}/ads`);
        return data;
    } catch (error) {
        console.error("❌ Error fetching user ads:", error.response?.data || error.message);
        return []; // Return empty array on failure
    }
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


// ✅ Delete an ad
export const deleteAd = async (adId) => {
    try {
        const { data } = await API.delete(`/ads/${adId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        console.log("✅ Ad Deleted:", data);
        return data;
    } catch (error) {
        console.error("❌ Delete Ad Error:", error.response?.data || error.message);
        throw error;
    }
};

// ✅ Create Ad with Images
export const createAd = async (formData) => {
    try {
        console.log("🚀 Creating Ad...");
        const { data } = await API.post("/ads/create-ad", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        console.log("✅ Ad Created Successfully:", data);
        return data;
    } catch (error) {
        console.error("❌ Create Ad Error:", error.response?.data || error.message);
        throw error;
    }
};

// ✅ Upload Images for Existing Ad
export const uploadImages = async (adId, newImages) => {
    if (newImages.length === 0) return [];

    const formData = new FormData();
    newImages.forEach((image) => formData.append("images", image));

    try {
        console.log("📤 Uploading New Images...");
        const { data } = await API.post(`/ads/${adId}/upload-images`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        console.log("✅ Images Uploaded Successfully:", data);
        return data.pictures || [];
    } catch (error) {
        console.error("❌ Error Uploading Images:", error.response?.data || error.message);
        return [];
    }
};

// ✅ Edit Ad (With Image Handling)
export const editAd = async (adId, updatedData, newImages = []) => {
    try {
        console.log("📝 Editing Ad:", adId, updatedData);

        let uploadedPictures = [];

        // ✅ Upload new images if available
        if (newImages.length > 0) {
            uploadedPictures = await uploadImages(adId, newImages);
        }

        // ✅ Merge existing & new images
        const formattedData = {
            ...updatedData,
            pictures: [...(updatedData.pictures || []), ...uploadedPictures],
        };

        console.log("📤 Final Ad Update Payload:", formattedData);
        const { data } = await API.put(`/ads/${adId}`, formattedData, {
            headers: { "Content-Type": "application/json" },
        });

        console.log("✅ Ad Updated Successfully:", data);
        return data;
    } catch (error) {
        console.error("❌ Edit Ad Error:", error.response?.data || error.message);
        throw error;
    }
};


// ---------------- IMAGE UPLOAD FUNCTION ----------------


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
    getUserAds, // ✅ Added User Ads
    addToFavorites,
    removeFromFavorites,
    getFavorites, // ✅ Ensure this is included
};

// ---------------- COMPLAINT FUNCTIONS ----------------
export const submitComplaint = async (complaintData) => {
    try {
        const filteredData = Object.fromEntries(
            Object.entries(complaintData).filter(([value]) => value !== "") //_,
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

export const removeFavorite = async (adId) => {
    try {
        const { data } = await API.delete(`/users/favorites/${adId}`);
        return data;
    } catch (error) {
        console.error("Error removing from favorites:", error.response?.data || error.message);
        throw error;
    }
};

// Default Export
export default API;
