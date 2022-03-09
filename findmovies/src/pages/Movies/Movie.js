import React from 'react';
import Header from './../../components/Header/Header';
import {Link} from 'react-router-dom';
import './movie.css';

function Movie()
{
    return(
        <div>
            <Header/>
            <div id="containerMain">
                <div id="btnVoltar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                    <Link to="/">Voltar</Link>
                </div>
                <div id="containerMainSecundary">
                    <h4 className="nameMovie">Os Vingadores</h4>
                    <div className="cotnainerMovie">
                        <div className="capaMovie">
                            <img src="https://upload.wikimedia.org/wikipedia/pt/thumb/6/69/The_Avengers_Cartaz.jpg/250px-The_Avengers_Cartaz.jpg" alt="capa filme" />
                        </div>
                        <div className="containerDescriptionMovie">
                            <p><b>Título original:</b></p>
                            <p className="originalTitleMovie">The Avengers</p>

                            <p><b>Sinopse:</b></p>
                            <p className="sinopsText">Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.</p>

                            <p><b>Avaliação:</b></p>
                            <p className="avaliacao">
                                <svg xmlns="http://www.w3.org/2000/svg" color="#fb0" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg> 7.3/10
                            </p>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie;