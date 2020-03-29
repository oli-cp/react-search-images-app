import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID fyowKV769QMXINZR12hmenIvQ3Uy7M-aAbjsk70CyPw"
    }
});