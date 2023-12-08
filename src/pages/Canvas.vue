<template>
    <div class="container-canvas">
        <div class="color-pick">
            <ul class="options">
                <li class="option active" @click="change" id="rgb(0, 0, 255, .005)"><ion-icon
                        class="icon-to-remove md hydrated" role="img" name="checkmark-circle-outline"
                        style="font-size: 30px;"></ion-icon></li>
                <li class="option" @click="change" id="rgb(255, 0, 0, .005)"></li>
                <li class="option" @click="change" id="rgb(0, 255, 0, .005)"></li>
                <li class="option-draw" @click="draw" @touchstart="startDrawing"><ion-icon name="pencil-outline"
                        style="margin-left: -1px; margin-top: -1px; font-size: 20px;  padding: 6px;"></ion-icon></li>
                <li class="option-draw" @click="refresh"><ion-icon name="trash-outline"
                        style="margin-left: -1px; margin-top: -1px; font-size: 20px;  padding: 6px;"></ion-icon></li>
            </ul>
        </div>
        <canvas ref="canvas"></canvas>
        <img :src="darkMode ? '/img/yui-dark-mode.png' : '/img/yui.png'" alt="" ref="canvasImg" class="canvas-img">
        <div class="canvas-text">
            <h3>
                <span>Hello, I'm Ragibavi</span><br>
                As a back-end developer, currently learning javascript and typescript. I'm interested and will explore
                technology especially in the world of AI.
            </h3>
        </div>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import FontFaceObserver from 'fontfaceobserver'

export default {
    data() {
        return {
            darkMode: false,
        };
    },

    mounted() {
        this.checkDarkMode();
    },

    methods: {
        checkDarkMode() {
            this.darkMode = document.body.classList.contains('dark-mode');
            console.log('Dark mode:', this.darkMode);
        },
        draw(event) {
            const starting = document.querySelector('.option-draw')
            const ion = document.querySelector('.md.hydrated')
            if (ion.classList.contains('start-drawing')) {
                ion.classList.remove('start-drawing')
            } else if (starting.classList.contains('start-drawing')) {
                starting.classList.remove('start-drawing')
            } else {
                starting.classList.add('start-drawing')
            }
        },
        refresh(event) {
            window.location.reload()
        }
    },

    setup() {
        const canvas = ref(null);
        let ctx;
        let isDrawing = false;
        let color = 'rgb(0, 0, 255, .002)'
        let active = null
        const change = (event) => {
            const activeElements = document.querySelectorAll('.option.active');
            if (activeElements) {
                activeElements.forEach((element) => {
                    element.classList.remove('active');
                    const existingIcon = element.querySelector('.icon-to-remove');
                    if (existingIcon) {
                        element.removeChild(existingIcon);
                    }
                });
            }

            event.target.classList.add('active');
            const newIcon = document.createElement('ion-icon');
            newIcon.name = 'checkmark-circle-outline';
            newIcon.classList.add('icon-to-remove');
            event.target.appendChild(newIcon);
            newIcon.style.fontSize = '30px';
            color = event.target.id;
            console.log(color)
        };

        const startDrawing = () => {
            const startToDraw = document.querySelector('.option-draw');
            if (startToDraw.classList.contains('start-drawing')) {
                isDrawing = true;
                ctx.beginPath();
                ctx.lineWidth = 7.5;
                ctx.lineJoin = 'round';
                ctx.lineCap = 'round';
            } else {
                isDrawing = false;
            }
        };

        const drawing = (e) => {
            if (!isDrawing) return;
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.strokeStyle = color;
            ctx.stroke();
        };

        const stopDrawing = () => {
            isDrawing = false;
        };

        const resizeCanvas = () => {
            canvas.value.width = window.innerWidth;
            canvas.value.height = window.innerHeight;
        };

        const setupTouchEvents = () => {
            canvas.value.addEventListener('touchstart', onTouchStart);
            canvas.value.addEventListener('touchmove', onTouchMove);
            canvas.value.addEventListener('touchend', onTouchEnd);
            canvas.value.addEventListener('touchcancel', onTouchCancel);
        };

        const onTouchStart = (e) => {
            startDrawing(e.touches[0]);
        };

        const onTouchMove = (e) => {
            drawing(e.touches[0]);
        };

        const onTouchEnd = (e) => {
            stopDrawing();
        };

        const onTouchCancel = (e) => {
            stopDrawing();
        };

        onMounted(() => {

            ctx = canvas.value.getContext('2d');
            setupTouchEvents();
            resizeCanvas();
            canvas.value.addEventListener('touchmove', drawing);
            canvas.value.addEventListener('touchend', () => isDrawing = false);
            canvas.value.addEventListener('touchcancel', () => isDrawing = false);
            canvas.value.addEventListener('mousedown', startDrawing);
            canvas.value.addEventListener('mousemove', drawing);
            canvas.value.addEventListener('mouseup', () => isDrawing = false);
            canvas.value.addEventListener('mouseout', () => isDrawing = false);

        });


        return {
            canvas,
            change,
        };
    },
};
</script>

<style scoped>
body.dark-mode .color-pick {
    background-color: #252525;
}

body.dark-mode .canvas-text h3 {
    color: #ffffff;
}

body.dark-mode .canvas-text h3 span {
    color: rgb(0, 255, 255);
}

.canvas-text h3 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 21px;
    font-weight: 100;
    position: absolute;
    top: 47%;
    left: 26.3%;
    transform: translate(-50%, -50%);
    user-select: none;
    z-index: -9999;
    max-width: 500px;
}

.canvas-text h3 span {
    font-size: 30px;
    font-weight: bold;
    font-family: pokemon-fill;
    color: rgb(0, 55, 255);
}

.canvas-img {
    width: 550px;
    height: auto;
    z-index: -9999;
    position: absolute;
    top: 100px;
    left: 900px;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}

.color-pick {
    position: fixed;
    height: 240px;
    top: 50%;
    right: 0%;
    width: 50px;
    transform: translate(-50%, -50%);
    background-color: #f5f5f5;
    border-radius: 25px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
}

h3 {
    display: block;
}

.options {
    list-style: none;
    padding: 0;
    margin: 0;
}

.option {
    height: 30px;
    width: 30px;
    margin-top: 15px;
    margin-left: 10px;
    border-radius: 50%;
    transition: 0.5s ease-in-out;
    cursor: pointer;
}

.option, .option-draw {
    height: 30px;
    width: 30px;
    margin-top: 15px;
    margin-left: 10px;
    border-radius: 50%;
    transition: 0.5s ease-in-out;
    cursor: pointer;
}

.option-draw {
    height: 30px;
    width: 30px;
    margin-top: 15px;
    margin-left: 10px;
    border-radius: 50%;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    background-color: #121212;
}

.dark-mode .option.active {
    box-shadow: 0 0px 10px 0 rgba(255, 255, 255);
}

.option.active {
    box-shadow: 0 0px 10px 0 rgb(0, 0, 0);
}

.dark-mode .option-draw {
    background-color: rgb(255, 255, 255);
    color: #252525;
}


.option {
    color: white;
}

.option-draw {
    color: white;
}

.dark-mode .option-draw.start-drawing {
    box-shadow: 0 0px 10px 0 rgba(255, 255, 255);
}

@media screen and (max-width: 1510px) {

    .canvas-img {
        left: 700px;
    }

}

@media screen and (max-width: 1310px) {

    .canvas-img {
        left: 500px;
    }

}

@media screen and (max-width: 1110px) {

    .canvas-img {
        left: 400px;
    }

    .canvas-text h3 {
        font-size: 15px;
        left: 180px;
        max-width: 350px;
    }

}

@media screen and (max-width: 1010px) {

    .canvas-img {
        left: 300px;
    }

}



@media screen and (max-width: 720px) {
    body {
        height: 900px;
    }

    .canvas-img {
        width: 400px;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
    }

    .canvas-text h3 {
        left: 50%;
        top: 500px;
        transform: translateX(-50%);
        padding-bottom: 100px;
    }

    .canvas-text h3 span {
        font-size: 20px;
    }

    .color-pick {
        top: 350px;
    }
}


.option:nth-child(1) {
    background-color: rgb(0, 0, 255);
}

.option:nth-child(2) {
    background-color: rgb(255, 0, 0);
}

.option:nth-child(3) {
    background-color: rgb(0, 255, 0);
}
</style>