const axios = require('axios');

const TWO_GIS_API_KEY = 'YOUR_2GIS_API_KEY';

const GRID_SIZE = 5;
const SEARCH_TERMS = ['Швейный цех', 'Швейное производство', 'Швейная мастерская']; 

const BISHKEK_BOUNDS = {
    sw: { lat: 42.80, lng: 74.52 },
    ne: { lat: 42.92, lng: 74.65 }
};

async function getPlaceDetails(center, term) {
    const endpoint = 'https://catalog.api.2gis.com/3.0/items';
    
    try {
        const response = await axios.get(endpoint, {
            params: {
                key: TWO_GIS_API_KEY,
                q: term,
                page: 1,
                page_size: 50, 
                sort: 'distance',
                lat: center.lat,
                lon: center.lng
            }
        });

        return response.data.result.items.map(place => ({
            name: place.name,
            address: place.address_name,
            lat: place.point.lat,
            lng: place.point.lon
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

    // Deduplicate based on name and address
    const deduplicatedResults = [];
    const seen = new Set();

    for (const result of allResults) {
        const id = result.name + result.address;
        if (!seen.has(id)) {
            deduplicatedResults.push(result);
            seen.add(id);
        }
    }

    return deduplicatedResults;
}

(async () => {
    const results = await searchSewingWorkshopsInBishkek();
    console.log(results.length);
})();
