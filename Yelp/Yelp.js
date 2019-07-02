import axios from 'axios';

const YELP_API_KEY = 'Vt3o-aXGdEya8XVt9xJ0Ah_Eghx9GrqwBvlGvLer0RtcqBat0hiEdLErnx81r6cyHT7wWPoWbEETiJ7gAk84hkMbKdjqBMBFA3c5FVq4VSpcWwBvoMeQi8hn9rYXXXYx';

const api = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer ${YELP_API_KEY}`
  }
});

const getBobaShops = userLocation => {
  return api
    .get('/businesses/search', {
      params: {
        limit: 25,
        categories: 'bubbletea,bubbleteashops,bobashops,bobateashops',
        ...userLocation
      }
    })
    .then(res =>
      res.data.businesses.map(business => {
        return {
          name: business.name,
          price : business.price,
          rating: business.rating,
          coords: business.coordinates,
         
        };
      })
    )
    .catch(error => console.error(error));
};

export default {
  getBobaShops
};