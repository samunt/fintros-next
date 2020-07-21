import React, {useState, useEffect} from 'react';
import axios from 'axios';
export default function StarWarsMovies() {
    const [number, setNumber] = useState(1);
    const [movie, setMovie] = useState("")
    useEffect( () => {
        async function getData() {
            const res = await axios.get(`https://swapi.dev/api/films/${number}/`)
            console.log(res);
            setMovie(res.data);
        }
        getData();
    },[number]); // only cal useEffect when number changes (from options)
     return (
        <div>
            <h3>Pick a movie</h3>
            <h5>{movie.title}</h5>
            <select value={number} onChange={e=> setNumber(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
        </div>
    )
}
