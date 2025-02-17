// Fetch ou Axios
import axios from "axios";
import "dotenv/config";

const URL = "https://deploy-ac-sounds.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
