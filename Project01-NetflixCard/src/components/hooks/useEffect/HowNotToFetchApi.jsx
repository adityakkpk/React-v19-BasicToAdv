import React, { useEffect, useState } from "react";

const HowNotToFetchApi = () => {
    const [data, setData] = useState(null);
    const [loadingState, setLoadingState] = useState(true);
    const [errorState, setErrorState] = useState(null);
    const API = 'https://pokeapi.co/api/v2/pokemon/pikachu';

    // const fetchPokemon = () => {
        // fetch(API)
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setData(data)
        //         setLoadingState(false);
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //         setErrorState(err); 
        //         setLoadingState(false);
        //     });
    // }

    const fetchPokemon = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            setData(data);
            setLoadingState(false)
        } catch (error) {
            console.log(err)
            setErrorState(err); 
            setLoadingState(false);
        }
    }

    useEffect(() => {
        fetchPokemon();
    }, []);

    if(loadingState) return <h1>
        loading....
    </h1>;

    if(errorState) return <h1>Error: {errorState.message}</h1>

    return <>{data.name}</>
};

export default HowNotToFetchApi;
