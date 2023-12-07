<template>
    <div class="container-playlist">
      <h1 class="text-playlist">playlist</h1>
      <p class="text-playlist-description">Here are some collections of my music playlist</p>
    </div>
    <h2 class="coming-soon">Coming Soon</h2>
  </template>
  
  <style>
  .container-playlist {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    max-width: 968px;
    width: 100%;
    margin: 25px auto;
  }
  
  .text-playlist {
    font-size: 40px;
    margin-top: -35px;
    font-family: pokemon-fill;
  }
  
  .text-playlist-description {
    font-size: 20px;
    margin-top: -10px;
  }
  
  .coming-soon {
    text-align: center;
    line-height: 100vh;
    font-size: 3rem;
    font-family: pokemon-fill;
    margin: 0; 
  }
  </style>
  