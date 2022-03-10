import React, {useState, useEffect} from 'react';
import Header from './../../components/Header/Header';
import {Link, useParams} from 'react-router-dom';
import './movie.css';

  
function Movie()
{
    const {id}                      = useParams()
    const [dataMovie, setDataMovie] = useState({})
    const getInfoMovie              = async () => {
        const token = "8eef1f105dfbb5e8939df12d84546a10"
        await fetch(`https://api.themoviedb.org/3/movie/${id}?&api_key=${token}&language=pt-BR`)
        .then( (e) => e.json() )
        .then( (json) => {
            setDataMovie(json)            
        })
    };

    useEffect(() => {
        getInfoMovie()
    }, []);

    return(
        <div>
            <Header/>
            <div id="containerMain">
                <div id="btnVoltar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                    <Link to="/">Voltar</Link>
                </div>
                <div id="containerMainSecundary">
                    <h4 className="nameMovie">{ dataMovie.title }</h4>
                    <div className="cotnainerMovie">
                        <div className="capaMovie">
                            <img src={ 'https://image.tmdb.org/t/p/original'+dataMovie.poster_path} alt="capa filme" />
                        </div>
                        <div className="containerDescriptionMovie">
                            <p><b>Título original:</b></p>
                            <p className="originalTitleMovie">{ dataMovie.title }</p>

                            <p><b>Sinopse:</b></p>
                            <p className="sinopsText">{ dataMovie.overview }</p>

                            <p><b>Avaliação:</b></p>
                            <p className="avaliacao">
                                <svg xmlns="http://www.w3.org/2000/svg" color="#fb0" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg> { dataMovie.vote_average }/10
                            </p>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie;