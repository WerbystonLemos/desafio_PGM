import React from 'react'
import Header from './components/Header/Header';
import "./App.css";
import Routes from './Routers';
import Home from './pages/Home/Home';

function findMovie(e)
{
  let movieName = e.target.value
  // fetch('')
}

function App()
{
  return (
    <div>
      <Routes/>
    </div>

  );
}

export default App;
