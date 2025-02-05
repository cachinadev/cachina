import React, { useEffect, useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import API from "../../services/api";

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Tooltip, Legend);

const AdAnalytics = () => {
    const [analytics, setAnalytics] = useState([]);
    const [selectedAd, setSelectedAd] = useState(null);

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const { data } = await API.get("/ads/analytics");
                setAnalytics(data);
                setSelectedAd(data[0]); // Default to the first ad
            } catch (error) {
                console.error("Error fetching ad analytics:", error);
            }
        };

        fetchAnalytics();
    }, []);

    const handleAdChange = (e) => {
        const adTitle = e.target.value;
        const ad = analytics.find((item) => item.title === adTitle);
        setSelectedAd(ad);
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { position: "top" },
        },
    };

    const summaryData = {
        labels: analytics.map((ad) => ad.title),
        datasets: [
            {
                label: "Views",
                data: analytics.map((ad) => ad.views),
                backgroundColor: "#4CAF50",
            },
            {
                label: "Favorites",
                data: analytics.map((ad) => ad.favorites),
                backgroundColor: "#FF9800",
            },
            {
                label: "Engagement Rate (%)",
                data: analytics.map((ad) => parseFloat(ad.engagementRate)),
                backgroundColor: "#3F51B5",
            },
        ],
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-lg space-y-6">
            <h2 className="text-3xl font-bold text-center">Panel de análisis de anuncios</h2>

            <div className="flex justify-center">
                <label className="mr-2 font-semibold">Select an Ad:</label>
                <select onChange={handleAdChange} className="border rounded-md p-2">
                    {analytics.map((ad) => (
                        <option key={ad.title} value={ad.title}>
                            {ad.title}
                        </option>
                    ))}
                </select>
            </div>

            {selectedAd && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-4 border rounded-lg shadow-sm">
                        <h3 className="font-semibold text-xl mb-2 text-center">📈 Views Chart</h3>
                        <Bar
                            data={{
                                labels: [selectedAd.title],
                                datasets: [
                                    {
                                        label: "Views",
                                        data: [selectedAd.views],
                                        backgroundColor: "#4ade80",
                                    },
                                ],
                            }}
                            options={chartOptions}
                        />
                    </div>

                    <div className="p-4 border rounded-lg shadow-sm">
                        <h3 className="font-semibold text-xl mb-2 text-center">❤️ Favorites Chart</h3>
                        <Pie
                            data={{
                                labels: ["Favorites", "Not Favorited"],
                                datasets: [
                                    {
                                        data: [selectedAd.favorites, selectedAd.views - selectedAd.favorites],
                                        backgroundColor: ["#f87171", "#d1d5db"],
                                    },
                                ],
                            }}
                            options={chartOptions}
                        />
                    </div>

                    <div className="p-4 border rounded-lg shadow-sm">
                        <h3 className="font-semibold text-xl mb-2 text-center">⚡ Engagement Rate</h3>
                        <Line
                            data={{
                                labels: [selectedAd.title],
                                datasets: [
                                    {
                                        label: "Engagement Rate (%)",
                                        data: [parseFloat(selectedAd.engagementRate)],
                                        borderColor: "#60a5fa",
                                        backgroundColor: "#bfdbfe",
                                    },
                                ],
                            }}
                            options={chartOptions}
                        />
                    </div>
                </div>
            )}

            <div className="mt-8">
                <h3 className="text-xl font-semibold text-center mb-4">📋 Summary Overview</h3>
                <Bar data={summaryData} options={chartOptions} />
            </div>
        </div>
    );
};

export default AdAnalytics;
