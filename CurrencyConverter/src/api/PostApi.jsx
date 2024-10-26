import axios from "axios";

// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-02/v1/currencies/usd.json

axios.create({
  baseURL:
    "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-02/v1/currencies/",
});


export const currencyConverter = async (currency) => {
    try {
        const res = await axios.get(`/${currency}.json`);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}