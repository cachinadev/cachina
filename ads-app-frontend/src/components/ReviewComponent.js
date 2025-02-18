import React, { useEffect, useState, useCallback } from "react";
import API from "../services/api";
import { FaStar } from "react-icons/fa";

const ReviewComponent = ({ adId, user }) => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({ rating: 0, comment: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // ✅ Fetch Reviews Function
    const fetchReviews = useCallback(async () => {
        try {
            const { data } = await API.get(`/ads/${adId}/reviews`);
            setReviews(data);
        } catch (err) {
            setError("❌ No se pudo cargar las reseñas.");
        }
    }, [adId]);

    // ✅ Load Reviews on Component Mount
    useEffect(() => {
        if (adId) fetchReviews();
    }, [adId, fetchReviews]);

    // ✅ Handle Review Submission
    const handleReviewSubmit = async () => {
        if (!newReview.rating || !newReview.comment.trim()) {
            return alert("⚠️ Por favor, proporciona una calificación y un comentario.");
        }

        try {
            setLoading(true);
            const { data } = await API.post(`/ads/${adId}/reviews`, newReview);
            setReviews((prevReviews) => [data, ...prevReviews]); // Add new review at the top
            setNewReview({ rating: 0, comment: "" }); // Reset input
        } catch (err) {
            setError("❌ No se pudo enviar la reseña.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mt-4">
            <h2 className="text-2xl font-bold mb-4">📢 Reseñas</h2>

            {/* 🔴 Error Message */}
            {error && <p className="text-red-500 font-semibold">{error}</p>}

            {/* 📝 Review List */}
            {reviews.length === 0 ? (
                <p className="text-gray-500">⚠️ No hay reseñas todavía. ¡Sé el primero en dejar una opinión!</p>
            ) : (
                <div className="space-y-4">
                    {reviews.map((review) => (
                        <div key={review._id} className="border p-4 rounded-md shadow-sm bg-gray-50">
                            <h3 className="font-bold text-lg text-gray-800">
                                {review.user?.name || "Usuario Anónimo"}
                            </h3>
                            <p className="text-yellow-500 flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
                                    />
                                ))}
                            </p>
                            <p className="text-gray-700">{review.comment}</p>
                            <p className="text-gray-400 text-sm">
                                {new Date(review.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {/* ✍ Allow only logged-in users to submit reviews */}
            {user ? (
                <div className="mt-6">
                    <h3 className="font-bold text-lg">📝 Añade tu opinión</h3>

                    {/* ⭐ Interactive Star Rating */}
                    <div className="flex items-center my-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar
                                key={star}
                                className={`cursor-pointer text-2xl transition-all duration-200 ${
                                    newReview.rating >= star ? "text-yellow-400 scale-110" : "text-gray-300"
                                }`}
                                onClick={() => setNewReview({ ...newReview, rating: star })}
                            />
                        ))}
                    </div>

                    {/* 📝 Review Input */}
                    <textarea
                        className="w-full p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400"
                        rows="3"
                        placeholder="Escribe tu reseña aquí..."
                        value={newReview.comment}
                        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    ></textarea>

                    {/* 🔘 Submit Button */}
                    <button
                        onClick={handleReviewSubmit}
                        className={`mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ${
                            loading ? "cursor-not-allowed opacity-50" : ""
                        }`}
                        disabled={loading}
                    >
                        {loading ? "⏳ Enviando..." : "📤 Enviar Reseña"}
                    </button>
                </div>
            ) : (
                <p className="text-gray-500 mt-4">🔒 Inicia sesión para dejar una reseña.</p>
            )}
        </div>
    );
};

export default ReviewComponent;
