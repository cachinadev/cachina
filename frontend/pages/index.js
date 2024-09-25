import axios from 'axios';
import { useState } from 'react';

export default function Home() {
  const [search, setSearch] = useState('');
  const [ads, setAds] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get('http://localhost:5000/ads');
      setAds(res.data);
    } catch (error) {
      console.error("Error fetching ads", error);
    }
  };

  return (
    <div>
      <main>
        <h1>Welcome to Ads MVP</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for ads..."
          />
          <button type="submit">Search</button>
        </form>
        <div>
          {ads.map((ad, index) => (
            <div key={index}>
              <h2>{ad.title}</h2>
              <p>Category: {ad.category}</p>
              <p>Location: {ad.location}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
