<template>
    <div class="container-blog">
      <h1 class="text-blog">Blog</h1>
      <p class="text-blog-description">Here are some collections of blog I have worked</p>
    </div>
    <h2 class="coming-soon">Coming Soon</h2>
</template>


<style scoped>

body.dark-mode .text-blog{
    color: #FFFFFF;
}

body.dark-mode .text-blog-description{
    color: #FFFFFF;
}

body.dark-mode .coming-soon {
    color: #FFFFFF;
}

.container-blog {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 968px;
  width: 100%;
  margin: 25px auto;
}

.text-blog {
  font-size: 40px;
  margin-top: -35px;
  font-family: pokemon-fill;
}

.text-blog-description {
  font-size: 20px;
  margin-top: -10px;
}

.coming-soon {
    text-align: center;
    font-size: 3rem;
    font-family: pokemon-fill;
    margin: 0; 
  }

  @media screen and (max-width: 719px) {
    .text-blog{
      margin-top: 20px;
    }
  }
</style>