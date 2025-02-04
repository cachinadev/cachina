import React, { useEffect, useState } from "react";
import API from "../services/api";
import { FaStar } from "react-icons/fa";

const ReviewComponent = ({ adId, user }) => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({ rating: 0, comment: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const { data } = await API.get(`/ads/${adId}/reviews`);
                setReviews(data);
            } catch (err) {
                setError("Failed to load reviews");
            }
        };

        fetchReviews();
    }, [adId]);

    const handleReviewSubmit = async () => {
        if (newReview.rating === 0 || newReview.comment.trim() === "") {
            return alert("Please provide both a rating and comment.");
        }

        try {
            setLoading(true);
            const { data } = await API.post(`/ads/${adId}/reviews`, newReview);
            setReviews((prevReviews) => [data, ...prevReviews]);
            setNewReview({ rating: 0, comment: "" });
        } catch (err) {
            setError("Failed to submit review");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-2xl font-bold mb-4">Reviews</h2>

            {error && <p className="text-red-500">{error}</p>}

            {reviews.length === 0 ? (
                <p>No reviews yet.</p>
            ) : (
                <ul>
                    {reviews.map((review) => (
                        <div key={review._id} className="border p-4 rounded-md shadow-sm mb-2">
                            <h3 className="font-bold text-lg">
                                {review.user?.name || "Anonymous"}
                            </h3>
                            <p className="text-yellow-500">
                                {"⭐".repeat(review.rating)}
                            </p>
                            <p>{review.comment}</p>
                            <p className="text-gray-400 text-sm">
                                {new Date(review.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                    ))}
                </ul>
            )}

            {/* Allow only logged-in users to submit reviews */}
            {user ? (
                <div className="mt-4">
                    <h3 className="font-bold text-lg">Add Your Review</h3>
                    <div className="flex items-center my-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar
                                key={star}
                                className={`cursor-pointer text-2xl ${
                                    newReview.rating >= star
                                        ? "text-yellow-400"
                                        : "text-gray-300"
                                }`}
                                onClick={() =>
                                    setNewReview({ ...newReview, rating: star })
                                }
                            />
                        ))}
                    </div>

                    <textarea
                        className="w-full p-2 border rounded-md"
                        rows="3"
                        placeholder="Write your review here..."
                        value={newReview.comment}
                        onChange={(e) =>
                            setNewReview({
                                ...newReview,
                                comment: e.target.value,
                            })
                        }
                    ></textarea>

                    <button
                        onClick={handleReviewSubmit}
                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Submit Review"}
                    </button>
                </div>
            ) : (
                <p className="text-gray-500 mt-4">Log in to submit a review.</p>
            )}
        </div>
    );
};

export default ReviewComponent;
