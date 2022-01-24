import axios from "axios"

const api = axios.create({
    baseURL:'https://games.roblox.com/v2/users/49930246/favorite/games'
});


export default api;