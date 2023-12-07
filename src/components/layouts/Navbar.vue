<template>
        <div class="dark-mode-buttons">
        <button @click="toggleDarkMode" class="moon-button">
            <ion-icon style="margin-top: 5px;" :name="darkMode ? 'sunny-outline' : 'moon-outline'"></ion-icon>
        </button>
    </div>

    <div class="navbar">
        <router-link to="/">
            <ion-icon name="home-outline" class="icon  active" @click="change">
            </ion-icon>
            <div class="nav-icon">Ragibavi</div>
        </router-link>

        <router-link to="/portfolio">
            <ion-icon name="folder-outline" class="icon" @click="change">
            </ion-icon>
            <div class="nav-text">Portfolio</div>
        </router-link>

        <router-link to="/profile">
            <ion-icon name="person-outline" class="icon" @click="change">
            </ion-icon>
            <div class="nav-text">Profile</div>
        </router-link>

        <router-link to="/blog">
            <ion-icon name="book-outline" class="icon" @click="change">
            </ion-icon>
            <div class="nav-text">Blog</div>
        </router-link>

        <router-link to="/playlist">
            <ion-icon name="radio-outline" class="icon" @click="change">
            </ion-icon>
            <div class="nav-text">Playlist</div>
        </router-link>

        <button @click="toggleDarkMode" class="dark-mode-button">
            <ion-icon style="margin-top: 5px;" :name="darkMode ? 'sunny-outline' : 'moon-outline'"></ion-icon>
        </button>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({

    data() {
        return {
            darkMode: false
        };
    },
    methods: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode
            const theme = localStorage.getItem('theme');
            if (theme === 'light') {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
            if (this.darkMode) {
                document.body.classList.add('dark-mode');
                document.body.classList.remove('light-mode')
                window.location.reload();
            } else {
                document.body.classList.add('light-mode');
                document.body.classList.remove('dark-mode');
                window.location.reload();
            }
        },
        change(event) {
            const button = document.getElementsByClassName('active');
            button[0].classList.remove('active');
            event.target.classList.add('active');
        },
        applyThemeFromStorage() {
            const theme = localStorage.getItem('theme');
            if (theme === 'light') {
                this.darkMode = true;
                document.body.classList.add('dark-mode');
                document.body.classList.remove('light-mode');
            } else {
                this.darkMode = false;
                document.body.classList.add('light-mode');
                document.body.classList.remove('dark-mode');
            }
        }
    },
    mounted() {
        this.applyThemeFromStorage();
    },
},
);
</script>

<style>

body.dark-mode .dark-mode-button{
    background-color: #ffffff;
    color: #252525;
}

body.dark-mode .moon-button{
    background-color: #ffffff;
    color: #252525;
}

.dark-mode-buttons{
    display: none;
}

.moon-button {
    font-size: 25px;
    width: 40px;
    height: 40px;
    border-radius: 100px 100px 100px 100px;
    background-color: #252525;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    position: absolute;
    top: 10px;
    right: 10px;
}

body.dark-mode .nav-icon:hover {
    background-color: #252525;
}


.dark-mode-button {
    font-size: 25px;
    margin-top: 20px;
    margin-left: 80px;
    width: 40px;
    height: 40px;
    border-radius: 100px 100px 100px 100px;
    background-color: #252525;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
}

body.light-mode {
    background-color: #ffffff;
    color: #000000;
}

body.dark-mode {
    background-color: #121212;
    color: #ffffff;
}

body.dark-mode .navbar {
    background-color: #121212;
    box-shadow: 0 5px 10px 0 rgba(255, 255, 255, 0.2);
}

body.dark-mode .navbar a {
    color: #ffffff;
}

body.dark-mode .navbar a:hover {
    background-color: #252525;
}

body.dark-mode .nav-icon {
    color: rgb(203, 47, 47);
}

body.dark-mode .icon {
    color: #ffffff;
}

body.dark-mode .icon.active {
    background-color: rgb(203, 47, 47);
}

.navbar {
    cursor: auto;
    display: flex;
    position: relative;
    justify-content: center;
    height: 70px;
    background-color: #ffffff;
    overflow: hidden;
    width: 100%;
    margin-top: -18px;
    margin-left: -10px;
    padding-left: 20px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
}

.navbar a {
    display: block;
    color: #000000;
    text-align: center;
    text-decoration: none;
    font-size: 22px;
}

.nav-text {
    margin-top: 4px;
    padding: 25px;
}

.nav-icon {
    font-family: pokemon-fill;
    font-size: 25px;
    color: rgb(0, 55, 255);
    font-weight: bold;
    padding: 0px 10px 0px 10px;
}

.nav-icon:hover {
    background-color: #d4d4d4;
    height: 80px;
}

.navbar a:hover {
    background-color: #d4d4d4;
}

.icon {
    display: none;
}


@media screen and (max-width: 719px) {
    .dark-mode-buttons {
        position: absolute;
        display: contents;
    }

    .navbar {
        background-color: #ffffff;
        height: 65px;
        width: 600px;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        position: fixed;
        bottom: 0;
        margin-left: .5px;
        margin-bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
        overflow: visible;
    }

    .nav-icon {
        display: none;
    }

    .navbar a:hover {
        background-color: rgba(0, 0, 0, 0);
    }

    .icon {
        display: block;
        color: black;
        font-size: 1.4em;
        padding: 0.5em;
        margin: 0.5em;
        cursor: pointer;
        transition: 0.5s ease-in-out;
        border-radius: 100%;
    }

    .nav-text {
        display: none;
    }

    .icon.active {
        transform: scale(1.2) translateY(-25px);
        background-color: rgb(0, 55, 255);
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
        color: #ffffff;
    }

    body.dark-mode .navbar a:hover {
        background-color: rgb(0, 0, 0, 0.0);
    }

    .dark-mode-button {
        display: none;
    }

}

@media screen and (max-width: 635px) {
    .navbar {
        width: 500px;
    }

    .icon {
        font-size: 1.2em;
    }
}

@media screen and (max-width: 530px) {
    .navbar {
        width: 400px;
    }

    .icon {
        font-size: 1.1em;
    }
}

@media screen and (max-width: 428px) {
    .navbar {
        width: 350px;
    }

    .icon {
        font-size: 1em;
    }

}

@media screen and (max-width: 375px) {
    .navbar {
        height: 50px;
        width: 270px;
    }

    .icon {
        font-size: 0.8em;
    }

}
</style>