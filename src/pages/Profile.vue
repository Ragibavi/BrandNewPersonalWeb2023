<template>
  <div class="container-profile">
    <div class="img_profile">
      <img src="/img/pokemon.png" alt="" class="no-stretch">
    </div>
    <div class="title">
      <h1>About</h1>
    </div>
    <div class="desc">
      <p>Hello, my name is Muhammad Syams Ragibavi and I am a full-stack developer(Specially Back-end Developer). I am
        passionate about creating efficient, secure, and scalable solutions that meet the needs of the clients and
        users. I enjoy learning new skills and exploring new challenges in the field of web development. I am
        looking forward to working with you and sharing my knowledge and expertise. Thank you for your attention.
      </p>
    </div>
    <div class="title">
      <h1>Skills</h1>
    </div>
    <div class="marquee" ref="marquee">
      <div class="marquee__inner" ref="marqueeInner">
        <p class="marquee__line">
          HTML, CSS, Javascript, Node.js, Express.js, Vue.js, React.js, Laravel, C++, Git, Node.JS, MySQL
        </p>
        <p class="marquee__line">
          HTML, CSS, Javascript, Node.js, Express.js, Vue.js, React.js, Laravel, C++, Git, Node.JS, MySQL
        </p>
      </div>
    </div>
    <div class="title">
      <h1>Contact</h1>
    </div>
    <div class="desc-social">
      <p>Im always interested in learning new things, so come connect with me: </p>
      <a href="pdf/RagibaviCVNew2023.pdf" style="font-family: pokemon-fill;">Download CV</a>
      <ul>
        <li> <a href="mailto:syams280606.gmail.com" target="_blank">Email - syams280606.gmail.com</a></li>
        <li><a href="https://github.com/ragibavi" target="_blank">Github - https://github.com/ragibavi</a></li>
        <li><a href="https://www.linkedin.com/in/muhammad-syams-ragibavi-78213b24a/" target="_blank">LinkedIn -
            https://www.linkedin.com/in/muhammad-syams-ragibavi</a></li>
        <li><a href="https://www.instagram.com/neoudean/" target="_blank">Instagram -
            https://www.instagram.com/ragibavi</a></li>
        <li><a href="https://open.spotify.com/user/316epynfsv4qew2rcgebfdy36jka" target="_blank">Spotify -
            https://open.spotify.com/Armaggudean</a></li>
        <li><a href="https://wa.me/6282299666066" target="_blank">Whatsapp -
            https://wa.me/6282299666066</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.makeMarqueeResponsive();
    window.addEventListener('resize', this.makeMarqueeResponsive);
  },
  destroyed() {
    window.removeEventListener('resize', this.makeMarqueeResponsive);
  },
  methods: {
    makeMarqueeResponsive() {
      const marqueeInner = this.$refs.marqueeInner;
      const availableWidth = window.innerWidth;
      marqueeInner.style.maxWidth = `${availableWidth}px`;
      marqueeInner.style.width = `${availableWidth / 1.2}px`;
      marqueeInner.offsetWidth;
    },
  },
};
</script>

<style scoped>
body.dark-mode .title {
  color: #FFFFFF;
}

body.dark-mode .desc {
  color: #FFFFFF;
}

body.dark-mode .desc-social {
  color: #FFFFFF;
}

body.dark-mode .desc-social a {
  color: #FFFFFF;
}

body.dark-mode .marquee {
  background-color: #252525;
  color: #FFFFFF;
}

.container-profile {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 968px;
  width: 100%;
  margin: 25px auto;
}

.img_profile {
  margin: 10px auto;
  text-align: center;
}

/* .img_profile img {
  border-radius: 50%;
  width: 300px;
  height: 300px;
} */

img {
  max-width: 100%;
  height: auto;
}

.no-stretch {
  max-width: 100%;
  height: auto;
}

.title {
  font-size: 30px;
  margin-top: -35px;
  font-family: pokemon-fill;
}

.desc {
  font-size: 25px;
  margin-top: -10px;
}

.desc-social {
  font-size: 25px;
  padding-bottom: 150px;
}

.desc-social a {
  text-decoration: none;
  color: #000000;
  font-size: 25px;
}

.marquee {
  overflow: hidden;
  font-family: "Pridi", sans-serif;
  font-weight: 600;
  font-size: 34px;
  margin: 10px auto;
  text-align: center;
  text-transform: uppercase;
  background-color: #F5F5F5;
  max-width: 968px;
}

.marquee__inner {
  display: flex;
  white-space: nowrap;
}

.marquee__line {
  flex-shrink: 0;
  margin: 0;
  padding: 10px 15px;
  min-width: 100%;
  white-space: nowrap;
  animation-name: marqueeLine;
  animation-duration: 15s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes marqueeLine {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
}

@media screen and (max-width: 719px) {
  .title {
    font-size: 20px;
  }

  .desc {
    font-size: 15px;
  }

  /* .img_profile img {
    width: 200px;
    height: 200px;
  } */

  .desc-social {
    font-size: 15px;
  }

  .desc-social a {
    font-size: 15px;
  }

  .marquee {
    margin: 10px auto;
    text-align: center;
    font-size: 25px;
  }

}</style>