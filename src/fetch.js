import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

export async function fetchImages(searchQuery, page) {
  const response = await axios.get('search/photos/', {
    params: {
      client_id: 'ZgsDDMcbIHP1kBg7KRAtq3dKTHV11P8derHAuaJ8fzg',
      query: searchQuery,
      per_page: 10,
      page,
      order_by: 'relevant',
      lang: 'en',
      orientation: 'landscape',
    },
  });
  console.log(response.data);
  return response.data;
}
