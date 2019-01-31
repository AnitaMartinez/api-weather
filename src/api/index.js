const URL = "https://www.metaweather.com/api/location";

export const Api = {
  getCitiesByName: value => {
    return new Promise((resolve, reject) => {
      fetch(`${URL}/search/?query=${value}`)
        .then(response => response.json())
        .then(cities => resolve(cities))
        .catch(err => reject(err));
    });
  },
  getWeatherByCity: cityLocation => {
    return new Promise((resolve, reject) => {
      fetch(`${URL}/${cityLocation}`)
        .then(response => response.json())
        .then(weather => resolve(weather))
        .catch(err => reject(err));
    });
  }
};
