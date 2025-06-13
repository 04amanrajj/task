const mockDestinations = [
    {
        name: 'Taj Mahal',
        state: 'Uttar Pradesh',
        description: 'Iconic white marble mausoleum, a UNESCO World Heritage Site',
        image: 'taj-mahal.jpg'
    },
    {
        name: 'Jaipur',
        state: 'Rajasthan',
        description: 'Pink City known for its palaces and forts',
        image: 'jaipur.jpg'
    },
    {
        name: 'Kerala Backwaters',
        state: 'Kerala',
        description: 'Serene network of canals and lagoons',
        image: 'kerala-backwaters.jpg'
    }
];

const mockPackages = [
    {
        name: 'Golden Triangle Tour',
        duration: '6D/5N',
        price: 33333,
        destinations: ['Delhi', 'Agra', 'Jaipur'],
        rating: 4.8
    },
    {
        name: 'Kerala Bliss',
        duration: '5D/4N',
        price: 18000,
        destinations: ['Kochi', 'Munnar', 'Alleppey'],
        rating: 4.9
    },
    {
        name: 'Rajasthan Royal',
        duration: '8D/7N',
        price: 32000,
        destinations: ['Jaipur', 'Udaipur', 'Jodhpur'],
        rating: 4.7
    }
];
module.exports = { mockDestinations, mockPackages }