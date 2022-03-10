import React, { useRef, useState, useEffect } from "react";
import Header from './../../components/Header/Header';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";
import "./../../App.css";

export default function Home()
{
    const history                       = useHistory();
    const [moviesName, setMoviesName]   = useState([]);

    const loadAutocompleteMovieName     = async value => {
        const value_temp                = value.target.value
        const token                     = "8eef1f105dfbb5e8939df12d84546a10"
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${token}&query=${value_temp}&language=pt-BR`)
        .then( (e) => e.json() )
        .then( (json) => {
            setMoviesName(json.results.map(obj => {
                return {id: obj.id, label: obj.title}
            } ))
        })
    };

    const moveToMovie = (id) => {
        history.push(`/movie/${id}`);
    }

    return(
        <div>
            <Header/>
            <div id="containerMain">
                <div>
                    <div>
                        <h1>Olá!</h1>
                        <h4>Bem-vindo ao Movie Finder</h4>
                        <p id="textlevl3" >Aqui você encontra tudo sobre filmes: sinopse, capa oficial, avaliação e muito mais.</p>
                    </div>
                    <div id="containerInput">
                        <label>Busque um filme para começar.</label><br/>
                        <Autocomplete
                            disablePortal
                            id              = "iptMovieName"
                            options         = {moviesName}
                            renderInput     = {(params) => <TextField {...params} label="Filme" />}
                            onInputChange   = {loadAutocompleteMovieName}
                            onChange        = {(event, newValue) => {
                                moveToMovie(newValue.id)
                            }}
                        />
                    </div>
                </div>
            </div>
            <div id="containerFooter">
                <p id="textFooter">Todos os direitos reservados. 2022</p>
            </div>
        </div>  
    )
}