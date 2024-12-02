import axios from "axios";

const config = {
    endpoint: {
        TopAlbum: "https://qtify-backend-labs.crio.do/albums/top",
        NewAlbum: "https://qtify-backend-labs.crio.do/albums/new",
        Songs: "https://qtify-backend-labs.crio.do/songs",
        Genres: "https://qtify-backend-labs.crio.do/genres",
    },
};

/**
 * @param {'TopAlbum' | 'NewAlbum' | 'Songs' | 'Genres'}  type
 */
export const fetchData = async (type) => {
    try {
        let res = await axios.get(config.endpoint[type]);
        return res.data;
    } catch (err) {
        console.error(`Failed to fetch ${type}. \n`, err);
        return [];
    }
};