import React, { useEffect, useState } from "react";

const HowNotToFetchApi = () => {
    const [data, setData] = useState(null);
    const API = 'https://pokeapi.co/api/v2/pokemon/pikachu';

    const fetchPokemon = () => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        fetchPokemon();
    }, []);

    if(!data) return <h1>
        loading....
    </h1>;

    return <>{data.name}</>
};

export default HowNotToFetchApi;
