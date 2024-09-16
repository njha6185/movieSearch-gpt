const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_small.jpg";
const BG_SRCSET =
  "https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg 1800w";
const PROFILE_URL =
  "https://occ-0-7724-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4";
const TBMD_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+process.env.REACT_APP_TBDM_AUTH_TOKEN,
  },
};
const NOW_PLAYING_MOVIE_URL = "https://api.themoviedb.org/3/movie/now_playing?page=1";
const IMAGE_URL="https://image.tmdb.org/t/p/w500"
const POPULAR_MOVIE_URL='https://api.themoviedb.org/3/movie/popular?page=1';
const getMovieUrlByType = (type)=>{
  return `https://api.themoviedb.org/3/movie/${type}?page=1`
}
const getTvSeriesUrlByType = (type)=>{
  return `https://api.themoviedb.org/3/tv/${type}?page=1`
}
const TYPE = ['upcoming','top_rated']
const SERIES_TYPE = ['airing_today','on_the_air','popular','top_rated']
const SUPPORTED_LANGUAGES = [
  { identifier:"en",name:"English"},
  { identifier:"hindi",name:"हिन्दी"},
  { identifier:"spanish",name:"español"}
]
const GPT_API_KEY=process.env.REACT_APP_BARD_API_KEY
const BARD_MODEL_NAME="gemini-1.5-flash"
module.exports = {
  LOGO_URL,
  BG_URL,
  BG_SRCSET,
  PROFILE_URL,
  TBMD_OPTIONS,
  NOW_PLAYING_MOVIE_URL,
  IMAGE_URL,
  POPULAR_MOVIE_URL,
  getMovieUrlByType,
  TYPE,
  SERIES_TYPE,
  getTvSeriesUrlByType,
  SUPPORTED_LANGUAGES,
  GPT_API_KEY,
  BARD_MODEL_NAME
};
