<template>
    <div class="container-canvas">
        <div class="color-pick">
            <ul class="options">
                <li class="option active" @click="change" id="rgb(0, 0, 255, .002)"><ion-icon
                        class="icon-to-remove md hydrated" role="img" name="checkmark-circle-outline"
                        style="font-size: 30px;"></ion-icon></li>
                <li class="option" @click="change" id="rgb(255, 0, 0, .002)"></li>
                <li class="option" @click="change" id="rgb(0, 255, 0, .002)"></li>
                <li class="option-draw" @click="draw"><ion-icon name="pencil-outline"
                        style="margin-left: -1px; margin-top: -1px; font-size: 20px;  padding: 6px;"></ion-icon></li>
                <li class="option-draw" @click="refresh"><ion-icon name="trash-outline"
                        style="margin-left: -1px; margin-top: -1px; font-size: 20px;  padding: 6px;"></ion-icon></li>
            </ul>
        </div>
        <canvas ref="canvas" class="no-scroll"></canvas>
    </div>
</template>
  
<script>
import { onMounted, ref } from 'vue';
import FontFaceObserver from 'fontfaceobserver'

export default {

    methods: {
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

        const startdrawing = () => {
            const startToDraw = document.querySelector('.option-draw');
            if (startToDraw.classList.contains('start-drawing')) {
                isDrawing = true
                ctx.beginPath();
                ctx.lineWidth = 7.5;
                ctx.lineJoin = 'round';
                ctx.lineCap = 'round';
            }
            else {
                isDrawing = false
            }
        };

        const drawing = (e) => {
            if (!isDrawing) return;
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.strokeStyle = color;
            ctx.stroke();
        };

        const resizeCanvas = () => {
            canvas.value.width = window.innerWidth;
            canvas.value.height = window.innerHeight;

            const image = new Image();
            image.onload = function () {
                const aspectRatio = image.width / image.height;
                const maxWidth = canvas.value.width * 0.8;
                const maxHeight = canvas.value.height * 0.8;

                let width = maxWidth;
                let height = maxWidth / aspectRatio;

                if (height > maxHeight) {
                    height = maxHeight;
                    width = maxHeight * aspectRatio;
                }

                let x = (canvas.value.width - width) / 1.5;
                let y = (canvas.value.height - height) / 3;

                if (x < 382.2054286272212) {
                    x = (canvas.value.width - width) / 1.5;
                    y = 0;
                    width = 375;
                    height = 500;
                }
                if (x < 194.87209529388784) {
                    x = (canvas.value.width - width) / 2;
                    y = 0;
                }
                ctx.drawImage(image, x, y, width, height);
            };

            let bodyClass = document.body.className;
            if (bodyClass.includes('dark-mode')) {
                image.src = '/img/yui-dark-mode.png';
            } else {
                image.src = '/img/yui.png';
            }

            writeText();
        };


        onMounted(() => {

            ctx = canvas.value.getContext('2d');
            canvas.value.addEventListener('touchstart', startdrawing);
            canvas.value.addEventListener('touchmove', drawing);
            canvas.value.addEventListener('touchend', () => isDrawing = false);
            canvas.value.addEventListener('touchcancel', () => isDrawing = false);
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();
            canvas.value.addEventListener('touchmove', drawing);
            canvas.value.addEventListener('touchend', () => isDrawing = false);
            canvas.value.addEventListener('touchcancel', () => isDrawing = false);
            canvas.value.addEventListener('mousedown', startdrawing);
            canvas.value.addEventListener('mousemove', drawing);
            canvas.value.addEventListener('mouseup', () => isDrawing = false);
            canvas.value.addEventListener('mouseout', () => isDrawing = false);

            writeText();
        });

        const writeText = () => {
            const font = new FontFaceObserver('pokemon-fill');
            font.load().then(() => {
                console.log('Font loaded successfully');
                canvas.value.width = window.innerWidth;
                canvas.value.height = window.innerHeight;

                let xMainText = 180;
                let yMainText = 340;
                let xSubText = 180;
                let ySubText = 380;


                if (canvas.value.width < 1420) {
                    xMainText = 80;
                    yMainText = 340;
                    xSubText = 80;
                    ySubText = 380;
                }
                if (canvas.value.width < 1265) {
                    xMainText = 2;
                    yMainText = 340;
                    xSubText = 2;
                    ySubText = 380;
                }
                if (canvas.value.width <= 1126) {
                    xMainText = canvas.value.width / 4;
                    yMainText = 530;
                    xSubText = canvas.value.width / 4;
                    ySubText = 570;
                }
                if (canvas.value.width <= 900) {
                    xMainText = canvas.value.width / 4.5;
                    yMainText = 530;
                    xSubText = canvas.value.width / 4.5;
                    ySubText = 570;
                }
                if (canvas.value.width <= 800) {
                    xMainText = canvas.value.width / 6;
                    yMainText = 530;
                    xSubText = canvas.value.width / 6;
                    ySubText = 570;
                }
                if (canvas.value.width <= 720) {
                    xMainText = canvas.value.width / 13;
                    yMainText = 530;
                    xSubText = canvas.value.width / 13;
                    ySubText = 570;
                }

                let bodyClass = document.body.className;
                if (bodyClass.includes('dark-mode')) {
                    ctx.fillStyle = 'rgb(203, 47, 47)';
                } else if (bodyClass.includes('light-mode')) {
                    ctx.fillStyle = 'rgb(0, 55, 255)';
                }

                if (canvas.value.width < 720) {
                    ctx.font = 'bold 30px "pokemon-fill", sans-serif';
                } else {
                    ctx.font = 'bold 30px "pokemon-fill", sans-serif';
                }

                ctx.fillText(`Hello, I'm Ragibavi.`, xMainText, yMainText);

                let text = `As a backend developer, currently learning javascript\nand typescript. I'm interested and will explore technology,\nespecially in the world of AI.`;
                let lineHeight = 30;
                let lines = text.split('\n');
                let x = xSubText;
                let y = ySubText;

                if (bodyClass.includes('dark-mode')) {
                    ctx.fillStyle = '#ffffff';
                } else if (bodyClass.includes('light-mode')) {
                    ctx.fillStyle = '#000000';
                }

                if (canvas.value.width > 720) {
                    ctx.font = '20px sans-serif';
                } else if (canvas.value.width <= 720) {
                    ctx.font = '18px sans-serif';
                }
                if (canvas.value.width <= 520) {
                    ctx.font = '15px sans-serif';
                }
                if (canvas.value.width <= 440) {
                    ctx.font = '12px sans-serif';
                }
                for (let i = 0; i < lines.length; i++) {
                    ctx.fillText(lines[i], x, y + i * lineHeight);
                }
                console.log(ctx.fillStyle);

                let image = new Image();
                image.onload = function () {
                    const aspectRatio = image.width / image.height;
                    const maxWidth = canvas.value.width * 0.8;
                    const maxHeight = canvas.value.height * 0.8;

                    let width = maxWidth;
                    let height = maxWidth / aspectRatio;

                    if (height > maxHeight) {
                        height = maxHeight;
                        width = maxHeight * aspectRatio;
                    }

                    let x = (canvas.value.width - width) / 1.5;
                    let y = (canvas.value.height - height) / 3;

                    if (x < 382.2054286272212) {
                        x = (canvas.value.width - width) / 1.5;
                        y = 0;
                        width = 375;
                        height = 500;
                    }
                    if (x < 194.87209529388784) {
                        x = (canvas.value.width - width) / 2;
                        y = 0;
                    }
                    ctx.drawImage(image, x, y, width, height);
                }

                if (bodyClass.includes('dark-mode')) {
                    image.src = '/img/yui-dark-mode.png';
                } else {
                    image.src = '/img/yui.png';
                }


            }).catch((error) => {
                console.error('Font loading failed:', error);
            });
        };


        return {
            canvas,
            change,
        };
    },
};
</script>
    
<style>
body {
    overflow-x: hidden;
}

@font-face {
    font-family: 'Sickness';
    src: url('../assets/fonts/Sickness.ttf');
}

body.dark-mode .color-pick {
    background-color: #252525;
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

.no-scroll {
    overflow: hidden;
}

.canvas-container {
    overflow: hidden;
}

@media screen and (max-width: 720px) {
    body {
        overflow-y: scroll;
        height: 900px;
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