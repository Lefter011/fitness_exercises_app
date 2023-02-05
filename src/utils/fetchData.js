import Loader from "../components/Loader";

export const exerciseOptions = {
  method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  }
};

export const fetchData = async (url, option) => {
  let data;
  const response = await fetch(url, option);
  if (response.ok === true) {
    data = await response.json();
    return data;
  } return data = [];
}