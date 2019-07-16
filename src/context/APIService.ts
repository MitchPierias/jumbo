
const API_KEY = process.env.API_KEY || "";

export const query = () => {

    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`).then(response => response.json()).then(response => {
        console.log(response);
        return response.results.map((result:any) => result['original_title']);
    });
}