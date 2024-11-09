<template>
    <div class="card-container">
        
        <div class="card">
            <div class="img_2">
                <img src="/img/personalweb.png" alt="">
            </div>
            <div class="content">
                <div class="title">
                    <h1>My Personal Web</h1>
                </div>
                <div class="description">
                    <p>Muhammad Syams Ragibavi Personal Web</p>
                    <div class="element">
                        <span class="vue">Vue</span>
                        <span class="javascript"> JavaScript</span>
                        <span class="html">HTML</span>
                        <span class="css">CSS</span>
                    </div>
                    <br>
                    <div class="links">
                        <a href="/" target="_blank" class="icon-visit"><ion-icon name="arrow-forward-outline"></ion-icon></a>
                        <a href="/" target="_blank" class="visit-link">Click Here To Visit Project</a>
                        <a href="https://github.com/Ragibavi/BrandNewPersonalWeb2023.git" target="_blank"
                            class="icon-source"><ion-icon name="logo-github" class="icon-visit"></ion-icon></a>
                        <a href="https://github.com/Ragibavi/BrandNewPersonalWeb2023.git" target="_blank"
                            class="source-link">Source Code</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="img_2">
                <img src="/img/piketkuy.png" alt="">
            </div>
            <div class="content">
                <div class="title">
                    <h1>PiketKuy</h1>
                </div>
                <div class="description">
                    <p>Website monitoring students who picket at Vocational School Wikrama Bogor</p>
                    <div class="element">
                        <span class="laravel">Laravel</span>
                        <span class="javascript"> JavaScript</span>
                        <span class="html">HTML</span>
                        <span class="css">CSS</span>
                    </div>
                    <br>
                    <div class="links">
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="img_2">
                <img src="/img/kejaksaan.png" alt="">
            </div>
            <div class="content">
                <div class="title">
                    <h1>Monitoring Tools for Election</h1>
                </div>
                <div class="description">
                    <p>Website monitoring Kejaksaan RI for Election 2024</p>
                    <div class="element">
                        <span class="laravel">Laravel</span>
                        <span class="javascript"> JavaScript</span>
                        <span class="python">Python</span>
                        <span class="html">Bootstrap</span>
                        <span class="css">Jquery</span>
                    </div>
                    <br>
                    <div class="links">
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="img_2">
                <img src="/img/simRs.png" alt="">
            </div>
            <div class="content">
                <div class="title">
                    <h1>SimRS for Dr.Iqbali Taufan</h1>
                </div>
                <div class="description">
                    <p>Website Administration for Rumah Sakit Dr.Iqbali Taufan</p>
                    <div class="element">
                        <span class="laravel">Laravel</span>
                        <span class="javascript"> JavaScript</span>
                        <!-- <span class="python">Python</span> -->
                        <span class="html">Java</span>
                        <span class="css">Jquery</span>
                    </div>
                    <br>
                    <div class="links">
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="img_2">
                <img src="/img/Rekam-Akademik.png" alt="">
            </div>
            <div class="content">
                <div class="title">
                    <h1>Rekam Akademik</h1>
                </div>
                <div class="description">
                    <p>Website for data monitoring student, attandance, and absence at Vocational School Wikrama Bogor</p>
                    <div class="element">
                        <span class="laravel">Laravel</span>
                        <span class="javascript"> Express</span>
                        <!-- <span class="python">Python</span> -->
                        <span class="html">Bootstrap</span>
                        <span class="css">Jquery</span>
                    </div>
                    <br>
                    <div class="links">
                    </div>
                </div>
            </div>
        </div>
    </div>


    
</template>

<style scoped>

body.dark-mode .card {
    border: 1px solid white;
}

body.light-mode .card {
    border: 1px solid black;
}

body.dark-mode .title{
    color: #FFFFFF;
}
body.dark-mode .description{
    color: #FFFFFF;
}

body.light-mode .description a {
    color: black;
}

.card-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.card {
    display: flex;
    align-items: flex-start;
    width: 100%;
    border-radius: 10px;
    margin: 10px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.19);
}

.img {
    margin: 10px 10px;
    flex: 1;
}

.img_2 {
    margin: 10px 10px;
    flex: 1;
}

.img_2 img {
    width: 420px;
}

.content {
    flex: 2;
    display: flex;
    flex-direction: column;
}

.description {
    display: flex;
    flex-direction: column;
}

.javascript {
    background-color: yellow;
    color: black;
    padding: 1px 5px 1px 5px;
    border-radius: 5px;
    margin-right: 10px;
}

.laravel {
    background-color: rgb(0, 255, 234);
    color: black;
    padding: 1px 5px 1px 5px;
    border-radius: 5px;
    margin-right: 10px;
}

.html {
    background-color: red;
    color: black;
    padding: 1px 5px 1px 5px;
    border-radius: 5px;
    margin-right: 10px;
}

.css {
    background-color: rgb(0, 128, 255);
    color: black;
    padding: 1px 5px 1px 5px;
    border-radius: 5px;
    margin-right: 10px;
}
.vue {
    background-color: rgb(20, 100, 0);
    color: black;
    padding: 1px 5px 1px 5px;
    border-radius: 5px;
    margin-right: 10px;
}

.python {
    background-color: rgb(71, 64, 175);
    color: black;
    padding: 1px 5px 1px 5px;
    border-radius: 5px;
    margin-right: 10px;
}

.icon-visit {
    padding-right: 5px;
}

.icon-source {
    margin-left: 25px;
    padding-right: 5px;
}

.links {
    font-size: 20px;
    display: flex;
    align-items: center;
}

.description a {
    text-decoration: none;
    color: white;
}

@media screen and (max-width: 719px) {
    .card {
        flex-direction: column;
    }

    .img {
        margin: 10px auto;
        text-align: center;
    }

    .img_2 {
        margin: 10px auto;
        text-align: center;
    }

    .title {
        margin: 5px 5px 5px 5px;
    }

    .description {
        margin: 5px 5px 5px 5px;
    }
}

@media screen and (max-width: 635px) {

    .img img {
        width: 75%;
        height: auto;
    }
}

@media screen and (max-width: 495px){

    .img img{
        width: 60%;
        height: auto;
    }

    .img_2 img{
        width: 300px;
    }
}

</style>
