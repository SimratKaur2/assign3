// pages/api/types.js

export default async function handler(req,res) {
    const response = await fetch("https://pokeapi.co/api/v2/type/?limit=18");
    const types = await response.json();

    res.status(200).json(types);
}