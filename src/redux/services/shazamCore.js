import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '38dc50287bmsh4bed387d626f116p1f14c1jsnc532a124b9cb',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    export const shazamCoreApi = 