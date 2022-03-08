import React from 'react'
import Header from './../../components/Header/Header';
import "./../../App.css";

function findMovie(e)
{
  let movieName = e.target.value
  // fetch('')
}

function Home()
{
  return (
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
            <input id="iptMovieName" type="text" onChange={findMovie} placeholder="Pesquise pelo nome do filme..."/>
            <button id="btnSearch" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div id="containerFooter">
        <p id="textFooter">Todos os direitos reservados. 2022</p>
      </div>
    </div>

  );
}

export default Home;