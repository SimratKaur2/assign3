//pages/api/pokemon.js

export default async function handler(req,res) {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
    const posts = await response.json();

    res.status(200).json(posts);
}