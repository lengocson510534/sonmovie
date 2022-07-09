const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: 'c11653b7592ce24e97a3f1d6dea325cc',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig