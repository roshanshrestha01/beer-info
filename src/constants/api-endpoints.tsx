const BASE_URL = 'https://api.punkapi.com/v2';
const PER_PAGE = 10;

export const API = {
  V2: {
    allBeers: {
      index: (page: number) =>
        `${BASE_URL}/beers?page=${page}&per_page=${PER_PAGE}`,
    },
  },
};
