import React from "react";
import { useRouter } from "next/router";
import moment from "moment"; // For calculating time ago

const AdBox = ({ ad }) => {
    const router = useRouter();

    // Format time ago
    const getTimeAgo = (date) => {
        return moment(date).fromNow(); // Example: "2 days ago"
    };

    // Handle sharing the ad details
    const handleShare = () => {
        const adDetails = `
        Title: ${ad.title}
        Description: ${ad.description}
        Category: ${ad.category}
        Location: ${ad.departamento}
        Contact: ${ad.contactNumber}
        Created: ${getTimeAgo(ad.createdAt)}
        `;
        navigator.clipboard.writeText(adDetails);
        alert("Ad details copied to clipboard!");
    };

    return (
        <div className="border rounded-md shadow-md p-4">
            <h2
                className="text-xl font-bold mb-2 cursor-pointer hover:underline"
                onClick={() => router.push(`/ads/${ad._id}`)}
            >
                {ad.title}
            </h2>
            <p className="mb-2 text-gray-700">{ad.description}</p>
            <p className="text-sm text-gray-600">Category: {ad.category}</p>
            <p className="text-sm text-gray-600">Location: {ad.departamento}</p>
            <p className="text-sm text-gray-600">
                Contact:{" "}
                <a
                    href={`tel:${ad.contactNumber}`}
                    className="text-blue-600 underline"
                >
                    {ad.contactNumber}
                </a>
            </p>
            <p className="text-sm text-gray-500">Posted: {getTimeAgo(ad.createdAt)}</p>
            <div className="mt-4 flex gap-2">
                <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    onClick={() => router.push(`/ads/${ad._id}`)}
                >
                    View Details
                </button>
                <button
                    className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                    onClick={handleShare}
                >
                    Share
                </button>
            </div>
        </div>
    );
};

export default AdBox;