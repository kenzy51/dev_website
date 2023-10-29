const axios = require('axios');

const GOOGLE_API_KEY = 'AIzaSyCgR0JWc3mHXV1k6slvdjG4H6_2QXO6Juw';

const GRID_SIZE = 5;
const SEARCH_TERMS = ['Швейный цех', 'Швейное производство', 'Швейная мастерская']; // Add more related terms if you know any

const BISHKEK_BOUNDS = {
    sw: { lat: 42.80, lng: 74.52 },
    ne: { lat: 42.92, lng: 74.65 }
};

async function getPlaceDetails(center, term) {
    const endpoint = `https://maps.googleapis.com/maps/api/place/nearbysearch/json`;
    
    try {
        const response = await axios.get(endpoint, {
            params: {
                location: `${center.lat},${center.lng}`,
                radius: 1000,
                keyword: term,
                key: GOOGLE_API_KEY
            }
        });

        return response.data.results.map(place => ({
            name: place.name,
            address: place.vicinity,
            lat: place.geometry.location.lat,
            lng: place.geometry.location.lng
        }));
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

async function searchSewingWorkshopsInBishkek() {
    const latStep = (BISHKEK_BOUNDS.ne.lat - BISHKEK_BOUNDS.sw.lat) / GRID_SIZE;
    const lngStep = (BISHKEK_BOUNDS.ne.lng - BISHKEK_BOUNDS.sw.lng) / GRID_SIZE;

    let allResults = [];

    for (let term of SEARCH_TERMS) {
        for (let i = 0; i < GRID_SIZE; i++) {
            for (let j = 0; j < GRID_SIZE; j++) {
                const center = {
                    lat: BISHKEK_BOUNDS.sw.lat + (i + 0.5) * latStep,
                    lng: BISHKEK_BOUNDS.sw.lng + (j + 0.5) * lngStep
                };

                const results = await getPlaceDetails(center, term);
                allResults = allResults.concat(results);
            }
        }
    }

    const uniqueResults = Array.from(new Set(allResults.map(r => r.name + r.address)))
                                .map(id => allResults.find(r => r.name + r.address === id));

    return uniqueResults;
}

(async () => {
    const results = await searchSewingWorkshopsInBishkek();
    console.log(results.length);
})();
