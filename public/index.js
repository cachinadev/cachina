document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/data');
    const data = await response.json();

    const businessList = document.getElementById('business-list');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const locationFilter = document.getElementById('locationFilter');

    function renderBusinesses(filteredData) {
        businessList.innerHTML = '';
        filteredData.forEach(business => {
            const businessDiv = document.createElement('div');
            businessDiv.className = 'business';

            const photosHtml = business.photos.length > 1 ?
                `<div class="photos-slider">
                    ${business.photos.map((photo, index) => `<img src="/uploads/${photo}" alt="${business.businessName} photo ${index + 1}" class="${index === 0 ? 'active' : ''}">`).join('')}
                </div>` :
                `<div class="photos">
                    ${business.photos.map(photo => `<img src="/uploads/${photo}" alt="${business.businessName} photo">`).join('')}
                </div>`;

            businessDiv.innerHTML = `
                <h2>${business.businessName}</h2>
                <p><small>${business.category} - ID: ${business.id}</small></p>
                ${photosHtml}
                <p><strong>Location:</strong> ${business.location}</p>
                <p><strong>Contact Number:</strong> <a href="tel:${business.contactNumber}">${business.contactNumber}</a></p>
                <p><strong>Map:</strong> <a href="${business.mapLink}" target="_blank">View Map</a></p>
                <p><strong>Payment:</strong> ${business.payment}</p>
                <p><strong>Description:</strong> ${business.description}</p>
                <button onclick="shareBusiness('${business.businessName}', '${business.location}', '${business.contactNumber}', '${business.mapLink}', '${business.description}')">Share</button>
            `;

            businessList.appendChild(businessDiv);

            // Slide functionality for photos
            if (business.photos.length > 1) {
                const slider = businessDiv.querySelector('.photos-slider');
                let currentIndex = 0;
                setInterval(() => {
                    const images = slider.querySelectorAll('img');
                    images[currentIndex].classList.remove('active');
                    currentIndex = (currentIndex + 1) % images.length;
                    images[currentIndex].classList.add('active');
                }, 3000);
            }
        });
    }

    function filterBusinesses() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        const selectedLocation = locationFilter.value;

        const filteredData = data.filter(business => {
            return (
                (business.businessName.toLowerCase().includes(searchTerm) || business.description.toLowerCase().includes(searchTerm)) &&
                (selectedCategory === '' || business.category === selectedCategory) &&
                (selectedLocation === '' || business.location === selectedLocation)
            );
        });

        renderBusinesses(filteredData);
    }

    searchInput.addEventListener('input', filterBusinesses);
    categoryFilter.addEventListener('change', filterBusinesses);
    locationFilter.addEventListener('change', filterBusinesses);

    renderBusinesses(data);
});

function shareBusiness(name, location, contact, mapLink, description) {
    const message = `Business Name: ${name}\nLocation: ${location}\nContact Number: ${contact}\nMap: ${mapLink}\nDescription: ${description}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Detect user location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
} else {
    console.log("Geolocation is not supported by this browser.");
    getIPLocation();
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    fetch(`https://ipapi.co/${latitude},${longitude}/json/`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('location-name').textContent = data.city ? data.city + ', ' + data.country_name : 'Location Unavailable';
        })
        .catch(error => console.error('Error:', error));
}

function showError(error) {
    console.warn(`ERROR(${error.code}): ${error.message}`);
    getIPLocation();
}

function getIPLocation() {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('location-name').textContent = data.city ? data.city + ', ' + data.country_name : 'Perú';
        })
        .catch(error => console.error('Error:', error));
}

// Display current local time
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('local-time').textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime();

// Page visit counter
let visitCount = localStorage.getItem('visitCount') || 0;
visitCount++;
localStorage.setItem('visitCount', visitCount);
document.getElementById('visit-count').textContent = 'Visits: ' + visitCount;

// Image slider functionality is handled by CSS animation
