<template>
  <div class="body-container">
    <div class="container-card">
      <h1 class="text-portfolio">Portfolio</h1>
      <p class="text-portfolio-description">Here are some collections of projects I have worked on</p>
      <div class="">
        <PortfolioCard></PortfolioCard>
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioCard from '@/components/layouts/PortfolioCard.vue'
export default {
    components: {
        PortfolioCard
    }
}

</script>

<style>
.container-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 968px;
  width: 100%;
  margin: 25px auto;
  overflow-y: auto;
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
</style>