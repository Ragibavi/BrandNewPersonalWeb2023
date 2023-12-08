<template>
    <div class="container-card">
      <h1 class="text-portfolio">Portfolio</h1>
      <p class="text-portfolio-description">Here are some collections of projects I have worked on</p>
      <PortfolioCard></PortfolioCard>
    </div>
  </template>
  
  <script>
  import PortfolioCard from '@/components/layouts/PortfolioCard.vue';
  
  export default {
    components: {
      PortfolioCard,
    },
  };
  </script>
  
  <style scoped>
  body.dark-mode .text-portfolio {
    color: #ffffff;
  }
  
  body.dark-mode .text-portfolio-description {
    color: #ffffff;
  }
  
  .container-card {
  box-sizing: border-box;
  max-width: 968px;
  width: 100%;
  margin: 25px auto;
  overflow: hidden;
}

  
  .text-portfolio {
    font-size: 40px;
    margin-top: -35px;
    font-family: pokemon-fill;
  }
  
  .text-portfolio-description {
    font-size: 20px;
    margin-top: -10px;
  }
  
  .portfolio-content {
    padding-bottom: 150px;
  }
  
  @media screen and (max-width: 719px) {
    .text-portfolio {
      margin-top: 20px;
    }
  }
  </style>
  