<template>
    <div class="container-profile">
        <div class="img_profile">
            <img src="/img/canvas.png" alt="">
        </div>
        <div class="title">
            <h1>About</h1>
        </div>
        <div class="desc">
            <p>Hello, my name is Muhammad Syams Ragibavi and I am a full-stack developer(Specially Back-end Developer). I am passionate about creating efficient, secure, and scalable solutions that meet the needs of the clients and users. I enjoy learning new skills and exploring new challenges in the field of web development. I am looking forward to working with you and sharing my knowledge and expertise. Thank you for your attention.</p>
        </div>
        <div class="title">
            <h1>Skills</h1>
        </div>
        <div class="desc">
            
        </div>
        <div class="title">
            <h1>Contact</h1>
        </div>
        <div class="desc">
            <p>Im always interested in learning new things, so come connect with me: </p>
            <ul>
                <li> <a href="mailto:syams280606.gmail.com" target="_blank">Email - syams280606.gmail.com</a></li>
                <li><a href="https://github.com/ragibavi" target="_blank">Github - https://github.com/ragibavi</a></li>
                <li><a href="https://www.linkedin.com/in/muhammad-syams-ragibavi-78213b24a/" target="_blank">LinkedIn - https://www.linkedin.com/in/muhammad-syams-ragibavi</a></li>
                <li><a href="https://www.instagram.com/neoudean/" target="_blank">Instagram - https://www.instagram.com/ragibavi</a></li>
                <li><a href="https://open.spotify.com/user/316epynfsv4qew2rcgebfdy36jka" target="_blank">Spotify - https://open.spotify.com/Armaggudean</a></li>
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

.desc{
    font-size: 25px;
    margin-top: -10px;
}

a{
    text-decoration: none;
    color: white;
}
</style>