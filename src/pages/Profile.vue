<template>
    <div class="container-profile">
        <div class="img_profile">
            <img src="/img/canvas.png" alt="">
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
        <div class="desc">
            <div class="marquee">
                <div class="marquee__inner">
                    <p class="marquee__line">HTML, CSS, Javascript, Node.js, Express.js, Vue.js, React.js, C++, 
                        Git, Node.JS, MySQL, PostgreSQL
                    </p>
                    <p class="marquee__line">HTML, CSS, Javascript, Node.js, Express.js, Vue.js, React.js, C++, 
                        Git, Node.JS, MySQL, PostgreSQL
                    </p>
                </div>
            </div>
        </div>
        <div class="title">
            <h1>Contact</h1>
        </div>
        <div class="desc-social">
            <p>Im always interested in learning new things, so come connect with me: </p>
            <ul>
                <li> <a href="mailto:syams280606.gmail.com" target="_blank">Email - syams280606.gmail.com</a></li>
                <li><a href="https://github.com/ragibavi" target="_blank">Github - https://github.com/ragibavi</a></li>
                <li><a href="https://www.linkedin.com/in/muhammad-syams-ragibavi-78213b24a/" target="_blank">LinkedIn -
                        https://www.linkedin.com/in/muhammad-syams-ragibavi</a></li>
                <li><a href="https://www.instagram.com/neoudean/" target="_blank">Instagram -
                        https://www.instagram.com/ragibavi</a></li>
                <li><a href="https://open.spotify.com/user/316epynfsv4qew2rcgebfdy36jka" target="_blank">Spotify -
                        https://open.spotify.com/Armaggudean</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>

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

.img_profile img {
    border-radius: 50%;
    width: 300px;
    height: 300px;
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

.desc-social{
    font-size: 25px;
    padding-bottom: 150px;
}
.desc-social a {
    text-decoration: none;
    color: white;
    font-size: 25px;
}

body.light-mode .desc-social a {
    color: black;
}

.marquee {
  overflow: hidden;
  font-family: "Pridi", sans-serif;
  font-weight: 600;
  font-size: 34px;
  text-transform: uppercase;
  background-color: #252525;
}

body.light-mode .marquee {
  background-color: #f5f5f5;
}

.marquee__inner {
  display: flex;
  width: 968px;
}

.marquee__line {
  flex-shrink: 0;
  margin: 0;
  padding: 10px 15px;
  min-width: 2.5%;
  white-space: nowrap;
  animation-name: marqueeLine;
  animation-duration: 5s;
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

@media screen and (max-width: 719px){

    body{
        height: 25000px;
    }
    .title{
        font-size: 20px;
    }

    .desc{
        font-size: 15px;
    }

    .desc-social{
        font-size: 15px;
    }
    .desc-social a{
        font-size: 15px;
    }
    .marquee{
        margin-left: -25px;
        font-size: 25px;
    }

}
</style>