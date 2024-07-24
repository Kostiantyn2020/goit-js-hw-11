const API_KEY = '45081240-5f1794f19be8a159ba53eac07';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, perPage = 12) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return await response.json();
}
