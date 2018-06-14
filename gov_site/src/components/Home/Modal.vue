<template>
    <div class="contentWrapper" :class="{ 'md-perspective': isPerspective}">
        <div class="body">
            <div class="md-modal md-effect-1" ref="modal-1" :class="{ 'md-show': isActive['modal-1']}">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button class="md-close" @click="close">Close me!</button>
                    </div>
                </div>
            </div >
            <div class="md-modal md-effect-2" ref="modal-2" :class="{ 'md-show': isActive['modal-2']}">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button class="md-close" @click="close">Close me!</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-3" ref="modal-3" :class="{ 'md-show': isActive['modal-3']}">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button class="md-close" @click="close">Close me!</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-4" ref="modal-4" :class="{ 'md-show': isActive['modal-4']}">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button class="md-close" @click="close">Close me!</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-5" ref="modal-5" :class="{ 'md-show': isActive['modal-5']}">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button class="md-close" @click="close">Close me!</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-6" ref="modal-6" :class="{ 'md-show': isActive['modal-6']}">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button class="md-close" @click="close">Close me!</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-7" ref="modal-7" :class="{ 'md-show': isActive['modal-7']}">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button class="md-close" @click="close">Close me!</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-8" ref="modal-8" :class="{ 'md-show': isActive['modal-8']}">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button class="md-close" @click="close">Close me!</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-9" ref="modal-9" :class="{ 'md-show': isActive['modal-9']}">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button class="md-close" @click="close">Close me!</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-10" ref="modal-10" :class="{ 'md-show': isActive['modal-10']}">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button class="md-close" @click="close">Close me!</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-11" ref="modal-11" :class="{ 'md-show': isActive['modal-11']}">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button class="md-close" @click="close">Close me!</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-12" ref="modal-12" :class="{ 'md-show': isActive['modal-12']}">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button class="md-close" @click="close">Close me!</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-13" ref="modal-13" :class="{ 'md-show': isActive['modal-13']}">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button class="md-close" @click="close">Close me!</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-14" ref="modal-14" :class="{ 'md-show': isActive['modal-14']}">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button class="md-close" @click="close">Close me!</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-15" ref="modal-15" :class="{ 'md-show': isActive['modal-15']}">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button class="md-close" @click="close">Close me!</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-16" ref="modal-16" :class="{ 'md-show': isActive['modal-16']}">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button class="md-close" @click="close">Close me!</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-17" ref="modal-17" :class="{ 'md-show': isActive['modal-17']}">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button class="md-close" @click="close">Close me!</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-18" ref="modal-18" :class="{ 'md-show': isActive['modal-18']}">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button class="md-close" @click="close">Close me!</button>
                    </div>
                </div>
            </div>
            <div class="md-modal md-effect-19" ref="modal-19" :class="{ 'md-show': isActive['modal-19']}">
                <div class="md-content">
                    <h3>Modal Dialog</h3>
                    <div>
                        <p>This is a modal window. You can do the following things with it:</p>
                        <ul>
                            <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li>
                            <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li>
                            <li><strong>Close:</strong> click on the button below to close the modal.</li>
                        </ul>
                        <button class="md-close" @click="close">Close me!</button>
                    </div>
                </div>
            </div>

            <div class="container">
                <button class="md-trigger" data-modal="modal-1" @click="open($event)">Fade in &amp; Scale</button>
                <button class="md-trigger" data-modal="modal-2" @click="open($event)">Slide in (right)</button>
                <button class="md-trigger" data-modal="modal-3" @click="open($event)">Slide in (bottom)</button>
                <button class="md-trigger" data-modal="modal-4" @click="open($event)">Newspaper</button>
                <button class="md-trigger" data-modal="modal-5" @click="open($event)">Fall</button>
                <button class="md-trigger" data-modal="modal-6" @click="open($event)">Side Fall</button>
                <button class="md-trigger" data-modal="modal-7" @click="open($event)">Sticky Up</button>
                <button class="md-trigger" data-modal="modal-8" @click="open($event)">3D Flip (horizontal)</button>
                <button class="md-trigger" data-modal="modal-9" @click="open($event)">3D Flip (vertical)</button>
                <button class="md-trigger" data-modal="modal-10" @click="open($event)">3D Sign</button>
                <button class="md-trigger" data-modal="modal-11" @click="open($event)">Super Scaled</button>
                <button class="md-trigger" data-modal="modal-12" @click="open($event)">Just Me</button>
                <button class="md-trigger" data-modal="modal-13" @click="open($event)">3D Slit</button>
                <button class="md-trigger" data-modal="modal-14" @click="open($event)">3D Rotate Bottom</button>
                <button class="md-trigger" data-modal="modal-15" @click="open($event)">3D Rotate In Left</button>
                <button class="md-trigger" data-modal="modal-16" @click="open($event)">Blur</button>
                <!-- special modal that will add a perspective class to the html element -->
                <button class="md-trigger md-setperspective" data-modal="modal-17" @click="open($event)">Let me in</button>
                <button class="md-trigger md-setperspective" data-modal="modal-18" @click="open($event)">Make way!</button>
                <button class="md-trigger md-setperspective" data-modal="modal-19" @click="open($event)">Slip from top</button>
            </div>
            <div class="md-overlay" @click="close"></div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                isActive: {
                    'modal-1': false,
                    'modal-2': false,
                    'modal-3': false,
                    'modal-4': false,
                    'modal-5': false,
                    'modal-6': false,
                    'modal-7': false,
                    'modal-8': false,
                    'modal-9': false,
                    'modal-10': false,
                    'modal-11': false,
                    'modal-12': false,
                    'modal-13': false,
                    'modal-14': false,
                    'modal-15': false,
                    'modal-16': false,
                    'modal-17': false,
                    'modal-18': false,
                    'modal-19': false
                },
                activeNode: '',
                isPerspective: false
            }
        },
        methods: {
            open(e){
                console.log(e.target.dataset.modal)
                this.activeNode = e.target.dataset.modal;
                this.isActive[this.activeNode] = true;

                if(this.activeNode == 'modal-17' || this.activeNode == 'modal-18' || this.activeNode == 'modal-19'){
                    this.isPerspective = true;
                }
                else{
                    this.isPerspective = false;
                }
            },
            close(){
                this.isActive[this.activeNode] = false;
                if (this.activeNode == 'modal-17' || this.activeNode == 'modal-18' || this.activeNode == 'modal-19') {
                    this.isPerspective = false;
                }
            }
        }
    }
</script>
<style>
    button {
        border: none;
        outline: none;
        padding: 0.6em 1.2em;
        background: #c0392b;
        color: #fff;
        font-family: 'Lato', Calibri, Arial, sans-serif;
        font-size: 1em;
        letter-spacing: 1px;
        text-transform: uppercase;
        cursor: pointer;
        display: inline-block;
        margin: 3px 2px;
        border-radius: 2px;
    }
    button:hover {
        background: #A5281B;
    }
    .contentWrapper, .body{
        height: 100%;
        width: 100%;
        background: #e74c3c;
    }
    .container {
        background: #e74c3c;
        min-height: 100%;
        display: flex;
        justify-content:center;
        align-items:center;
        flex-wrap: wrap;
    }
    .md-perspective,
    .md-perspective .body {
        height: 100%;
        overflow: hidden;
    }
    .md-perspective .body  {
        background: #222;
        -webkit-perspective: 600px;
        -moz-perspective: 600px;
        perspective: 600px;
    }
    .container {
        background: #e74c3c;
        min-height: 100%;
    }
    .md-modal {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 50%;
        max-width: 630px;
        min-width: 320px;
        height: auto;
        z-index: 2000;
        visibility: hidden;
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform: translateX(-50%) translateY(-50%);
        -moz-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
    }
    .md-show {
        visibility: visible;
    }
    .md-overlay {
        position: fixed;
        width: 100%;
        height: 100%;
        visibility: hidden;
        top: 0;
        left: 0;
        z-index: 1000;
        opacity: 0;
        background: rgba(143,27,15,0.8);
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
    }
    .md-show ~ .md-overlay {
        opacity: 1;
        visibility: visible;
    }
    /* Content styles */
    .md-content {
        color: #fff;
        background: #e74c3c;
        position: relative;
        border-radius: 3px;
        margin: 0 auto;
    }
    .md-content h3 {
        margin: 0;
        padding: 0.4em;
        text-align: center;
        font-size: 2.4em;
        font-weight: 300;
        opacity: 0.8;
        background: rgba(0,0,0,0.1);
        border-radius: 3px 3px 0 0;
    }
    .md-content > div {
        padding: 15px 40px 30px;
        margin: 0;
        font-weight: 300;
        font-size: 1.15em;
    }
    .md-content > div p {
        margin: 0;
        padding: 10px 0;
    }
    .md-content > div ul {
        margin: 0;
        padding: 0 0 30px 20px;
    }
    .md-content > div ul li {
        padding: 5px 0;
    }
    .md-content button {
        display: block;
        margin: 0 auto;
        font-size: 0.8em;
    }
    /* Individual modal styles with animations/transitions */
    /* Effect 1: Fade in and scale up */
    .md-effect-1 .md-content {
        -webkit-transform: scale(0.7);
        -moz-transform: scale(0.7);
        -ms-transform: scale(0.7);
        transform: scale(0.7);
        opacity: 0;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
    }
    .md-show.md-effect-1 .md-content {
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        opacity: 1;
    }
    /* Effect 2: Slide from the right */
    .md-effect-2 .md-content {
        -webkit-transform: translateX(20%);
        -moz-transform: translateX(20%);
        -ms-transform: translateX(20%);
        transform: translateX(20%);
        opacity: 0;
        -webkit-transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
        -moz-transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
        transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
    }
    .md-show.md-effect-2 .md-content {
        -webkit-transform: translateX(0);
        -moz-transform: translateX(0);
        -ms-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
    }
    /* Effect 3: Slide from the bottom */
    .md-effect-3 .md-content {
        -webkit-transform: translateY(20%);
        -moz-transform: translateY(20%);
        -ms-transform: translateY(20%);
        transform: translateY(20%);
        opacity: 0;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
    }
    .md-show.md-effect-3 .md-content {
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
    }
    /* Effect 4: Newspaper */
    .md-effect-4 .md-content {
        -webkit-transform: scale(0) rotate(720deg);
        -moz-transform: scale(0) rotate(720deg);
        -ms-transform: scale(0) rotate(720deg);
        transform: scale(0) rotate(720deg);
        opacity: 0;
    }
    .md-show.md-effect-4 ~ .md-overlay,
    .md-effect-4 .md-content {
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        transition: all 0.5s;
    }
    .md-show.md-effect-4 .md-content {
        -webkit-transform: scale(1) rotate(0deg);
        -moz-transform: scale(1) rotate(0deg);
        -ms-transform: scale(1) rotate(0deg);
        transform: scale(1) rotate(0deg);
        opacity: 1;
    }
    /* Effect 5: fall */
    .md-effect-5.md-modal {
        -webkit-perspective: 1300px;
        -moz-perspective: 1300px;
        perspective: 1300px;
    }
    .md-effect-5 .md-content {
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transform: translateZ(600px) rotateX(20deg);
        -moz-transform: translateZ(600px) rotateX(20deg);
        -ms-transform: translateZ(600px) rotateX(20deg);
        transform: translateZ(600px) rotateX(20deg);
        opacity: 0;
    }
    .md-show.md-effect-5 .md-content {
        -webkit-transition: all 0.3s ease-in;
        -moz-transition: all 0.3s ease-in;
        transition: all 0.3s ease-in;
        -webkit-transform: translateZ(0px) rotateX(0deg);
        -moz-transform: translateZ(0px) rotateX(0deg);
        -ms-transform: translateZ(0px) rotateX(0deg);
        transform: translateZ(0px) rotateX(0deg);
        opacity: 1;
    }
    /* Effect 6: side fall */
    .md-effect-6.md-modal {
        -webkit-perspective: 1300px;
        -moz-perspective: 1300px;
        perspective: 1300px;
    }
    .md-effect-6 .md-content {
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transform: translate(30%) translateZ(600px) rotate(10deg);
        -moz-transform: translate(30%) translateZ(600px) rotate(10deg);
        -ms-transform: translate(30%) translateZ(600px) rotate(10deg);
        transform: translate(30%) translateZ(600px) rotate(10deg);
        opacity: 0;
    }
    .md-show.md-effect-6 .md-content {
        -webkit-transition: all 0.3s ease-in;
        -moz-transition: all 0.3s ease-in;
        transition: all 0.3s ease-in;
        -webkit-transform: translate(0%) translateZ(0) rotate(0deg);
        -moz-transform: translate(0%) translateZ(0) rotate(0deg);
        -ms-transform: translate(0%) translateZ(0) rotate(0deg);
        transform: translate(0%) translateZ(0) rotate(0deg);
        opacity: 1;
    }
    /* Effect 7:  slide and stick to top */
    .md-effect-7{
        top: 0;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
    }
    .md-effect-7 .md-content {
        -webkit-transform: translateY(-200%);
        -moz-transform: translateY(-200%);
        -ms-transform: translateY(-200%);
        transform: translateY(-200%);
        -webkit-transition: all .3s;
        -moz-transition: all .3s;
        transition: all .3s;
        opacity: 0;
    }
    .md-show.md-effect-7 .md-content {
        -webkit-transform: translateY(0%);
        -moz-transform: translateY(0%);
        -ms-transform: translateY(0%);
        transform: translateY(0%);
        border-radius: 0 0 3px 3px;
        opacity: 1;
    }
    /* Effect 8: 3D flip horizontal */
    .md-effect-8.md-modal {
        -webkit-perspective: 1300px;
        -moz-perspective: 1300px;
        perspective: 1300px;
    }
    .md-effect-8 .md-content {
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transform: rotateY(-70deg);
        -moz-transform: rotateY(-70deg);
        -ms-transform: rotateY(-70deg);
        transform: rotateY(-70deg);
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
        opacity: 0;
    }
    .md-show.md-effect-8 .md-content {
        -webkit-transform: rotateY(0deg);
        -moz-transform: rotateY(0deg);
        -ms-transform: rotateY(0deg);
        transform: rotateY(0deg);
        opacity: 1;
    }
    /* Effect 9: 3D flip vertical */
    .md-effect-9.md-modal {
        -webkit-perspective: 1300px;
        -moz-perspective: 1300px;
        perspective: 1300px;
    }
    .md-effect-9 .md-content {
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transform: rotateX(-70deg);
        -moz-transform: rotateX(-70deg);
        -ms-transform: rotateX(-70deg);
        transform: rotateX(-70deg);
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
        opacity: 0;
    }
    .md-show.md-effect-9 .md-content {
        -webkit-transform: rotateX(0deg);
        -moz-transform: rotateX(0deg);
        -ms-transform: rotateX(0deg);
        transform: rotateX(0deg);
        opacity: 1;
    }
    /* Effect 10: 3D sign */
    .md-effect-10.md-modal {
        -webkit-perspective: 1300px;
        -moz-perspective: 1300px;
        perspective: 1300px;
    }
    .md-effect-10 .md-content {
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transform: rotateX(-60deg);
        -moz-transform: rotateX(-60deg);
        -ms-transform: rotateX(-60deg);
        transform: rotateX(-60deg);
        -webkit-transform-origin: 50% 0;
        -moz-transform-origin: 50% 0;
        transform-origin: 50% 0;
        opacity: 0;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
    }
    .md-show.md-effect-10 .md-content {
        -webkit-transform: rotateX(0deg);
        -moz-transform: rotateX(0deg);
        -ms-transform: rotateX(0deg);
        transform: rotateX(0deg);
        opacity: 1;
    }
    /* Effect 11: Super scaled */
    .md-effect-11 .md-content {
        -webkit-transform: scale(2);
        -moz-transform: scale(2);
        -ms-transform: scale(2);
        transform: scale(2);
        opacity: 0;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
    }
    .md-show.md-effect-11 .md-content {
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        opacity: 1;
    }
    .md-effect-12 .md-content {
        -webkit-transform: scale(0.8);
        -moz-transform: scale(0.8);
        -ms-transform: scale(0.8);
        transform: scale(0.8);
        opacity: 0;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
    }
    .md-show.md-effect-12 ~ .md-overlay {
        background: #e74c3c;
    }
    .md-effect-12 .md-content h3,
    .md-effect-12 .md-content {
        background: transparent;
    }
    .md-show.md-effect-12 .md-content {
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        opacity: 1;
    }
    .md-effect-13.md-modal {
        -webkit-perspective: 1300px;
        -moz-perspective: 1300px;
        perspective: 1300px;
    }
    .md-effect-13 .md-content {
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transform: translateZ(-3000px) rotateY(90deg);
        -moz-transform: translateZ(-3000px) rotateY(90deg);
        -ms-transform: translateZ(-3000px) rotateY(90deg);
        transform: translateZ(-3000px) rotateY(90deg);
        opacity: 0;
    }
    .md-show.md-effect-13 .md-content {
        -webkit-animation: slit .7s forwards ease-out;
        -moz-animation: slit .7s forwards ease-out;
        animation: slit .7s forwards ease-out;
    }
    @-webkit-keyframes slit {
        50% { -webkit-transform: translateZ(-250px) rotateY(89deg); opacity: .5; -webkit-animation-timing-function: ease-out;}
        100% { -webkit-transform: translateZ(0) rotateY(0deg); opacity: 1; }
    }
    @-moz-keyframes slit {
        50% { -moz-transform: translateZ(-250px) rotateY(89deg); opacity: .5; -moz-animation-timing-function: ease-out;}
        100% { -moz-transform: translateZ(0) rotateY(0deg); opacity: 1; }
    }
    @keyframes slit {
        50% { transform: translateZ(-250px) rotateY(89deg); opacity: 1; animation-timing-function: ease-in;}
        100% { transform: translateZ(0) rotateY(0deg); opacity: 1; }
    }
    .md-effect-14.md-modal {
        -webkit-perspective: 1300px;
        -moz-perspective: 1300px;
        perspective: 1300px;
    }
    .md-effect-14 .md-content {
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transform: translateY(100%) rotateX(90deg);
        -moz-transform: translateY(100%) rotateX(90deg);
        -ms-transform: translateY(100%) rotateX(90deg);
        transform: translateY(100%) rotateX(90deg);
        -webkit-transform-origin: 0 100%;
        -moz-transform-origin: 0 100%;
        transform-origin: 0 100%;
        opacity: 0;
        -webkit-transition: all 0.3s ease-out;
        -moz-transition: all 0.3s ease-out;
        transition: all 0.3s ease-out;
    }
    .md-show.md-effect-14 .md-content {
        -webkit-transform: translateY(0%) rotateX(0deg);
        -moz-transform: translateY(0%) rotateX(0deg);
        -ms-transform: translateY(0%) rotateX(0deg);
        transform: translateY(0%) rotateX(0deg);
        opacity: 1;
    }
    .md-effect-15.md-modal {
        -webkit-perspective: 1300px;
        -moz-perspective: 1300px;
        perspective: 1300px;
    }
    .md-effect-15 .md-content {
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transform: translateZ(100px) translateX(-30%) rotateY(90deg);
        -moz-transform: translateZ(100px) translateX(-30%) rotateY(90deg);
        -ms-transform: translateZ(100px) translateX(-30%) rotateY(90deg);
        transform: translateZ(100px) translateX(-30%) rotateY(90deg);
        -webkit-transform-origin: 0 100%;
        -moz-transform-origin: 0 100%;
        transform-origin: 0 100%;
        opacity: 0;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
    }
    .md-show.md-effect-15 .md-content {
        -webkit-transform: translateZ(0px) translateX(0%) rotateY(0deg);
        -moz-transform: translateZ(0px) translateX(0%) rotateY(0deg);
        -ms-transform: translateZ(0px) translateX(0%) rotateY(0deg);
        transform: translateZ(0px) translateX(0%) rotateY(0deg);
        opacity: 1;
    }
    .md-show.md-effect-16 ~ .md-overlay {
        background: rgba(180,46,32,0.5);
    }
    .md-show.md-effect-16 ~ .container {
        -webkit-filter: blur(3px);
        -moz-filter: blur(3px);
        filter: blur(3px);
    }
    .md-effect-16 .md-content {
        -webkit-transform: translateY(-5%);
        -moz-transform: translateY(-5%);
        -ms-transform: translateY(-5%);
        transform: translateY(-5%);
        opacity: 0;
    }
    .md-show.md-effect-16 ~ .container,
    .md-effect-16 .md-content {
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
    }
    .md-show.md-effect-16 .md-content {
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
    }
    .md-show.md-effect-17 ~ .container {
        height: 100%;
        overflow: hidden;
        -webkit-transition: -webkit-transform 0.3s;
        -moz-transition: -moz-transform 0.3s;
        transition: transform 0.3s;
    }
    .md-show.md-effect-17 ~ .container,
    .md-show.md-effect-17 ~ .md-overlay  {
        -webkit-transform: rotateX(-2deg);
        -moz-transform: rotateX(-2deg);
        -ms-transform: rotateX(-2deg);
        transform: rotateX(-2deg);
        -webkit-transform-origin: 50% 0%;
        -moz-transform-origin: 50% 0%;
        transform-origin: 50% 0%;
        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        transform-style: preserve-3d;
    }
    .md-effect-17 .md-content {
        opacity: 0;
        -webkit-transform: translateY(200%);
        -moz-transform: translateY(200%);
        -ms-transform: translateY(200%);
        transform: translateY(200%);
    }
    .md-show.md-effect-17 .md-content {
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
        -webkit-transition: all 0.3s 0.2s;
        -moz-transition: all 0.3s 0.2s;
        transition: all 0.3s 0.2s;
    }
    .md-show.md-effect-18 ~ .container {
        height: 100%;
        overflow: hidden;
    }
    .md-show.md-effect-18 ~ .md-overlay {
        background: rgba(143,27,15,0.8);
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        transition: all 0.5s;
    }
    .md-show.md-effect-18 ~ .container,
    .md-show.md-effect-18 ~ .md-overlay {
        -webkit-transform-style: preserve-3d;
        -webkit-transform-origin: 0% 50%;
        -webkit-animation: rotateRightSideFirst 0.5s forwards ease-in;
        -moz-transform-style: preserve-3d;
        -moz-transform-origin: 0% 50%;
        -moz-animation: rotateRightSideFirst 0.5s forwards ease-in;
        transform-style: preserve-3d;
        transform-origin: 0% 50%;
        animation: rotateRightSideFirst 0.5s forwards ease-in;
    }
    @-webkit-keyframes rotateRightSideFirst {
        50% { -webkit-transform: translateZ(-50px) rotateY(5deg); -webkit-animation-timing-function: ease-out; }
        100% { -webkit-transform: translateZ(-200px); }
    }
    @-moz-keyframes rotateRightSideFirst {
        50% { -moz-transform: translateZ(-50px) rotateY(5deg); -moz-animation-timing-function: ease-out; }
        100% { -moz-transform: translateZ(-200px); }
    }
    @keyframes rotateRightSideFirst {
        50% { transform: translateZ(-50px) rotateY(5deg); animation-timing-function: ease-out; }
        100% { transform: translateZ(-200px); }
    }
    .md-effect-18 .md-content {
        -webkit-transform: translateX(200%);
        -moz-transform: translateX(200%);
        -ms-transform: translateX(200%);
        transform: translateX(200%);
        opacity: 0;
    }
    .md-show.md-effect-18 .md-content {
        -webkit-transform: translateX(0);
        -moz-transform: translateX(0);
        -ms-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
        -webkit-transition: all 0.5s 0.1s;
        -moz-transition: all 0.5s 0.1s;
        transition: all 0.5s 0.1s;
    }
    .md-show.md-effect-19 ~ .container {
        height: 100%;
        overflow: hidden;
    }
    .md-show.md-effect-19 ~ .md-overlay {
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        transition: all 0.5s;
    }
    .md-show.md-effect-19 ~ .container,
    .md-show.md-effect-19 ~ .md-overlay {
        -webkit-transform-style: preserve-3d;
        -webkit-transform-origin: 50% 100%;
        -webkit-animation: OpenTop 0.5s forwards ease-in;
        -moz-transform-style: preserve-3d;
        -moz-transform-origin: 50% 100%;
        -moz-animation: OpenTop 0.5s forwards ease-in;
        transform-style: preserve-3d;
        transform-origin: 50% 100%;
        animation: OpenTop 0.5s forwards ease-in;
    }
    @-webkit-keyframes OpenTop {
        50% {
            -webkit-transform: rotateX(10deg);
            -webkit-animation-timing-function: ease-out;
        }
    }
    @-moz-keyframes OpenTop {
        50% {
            -moz-transform: rotateX(10deg);
            -moz-animation-timing-function: ease-out;
        }
    }
    @keyframes OpenTop {
        50% {
            transform: rotateX(10deg);
            animation-timing-function: ease-out;
        }
    }
    .md-effect-19 .md-content {
        -webkit-transform: translateY(-200%);
        -moz-transform: translateY(-200%);
        -ms-transform: translateY(-200%);
        transform: translateY(-200%);
        opacity: 0;
    }
    .md-show.md-effect-19 .md-content {
        -webkit-transform: translateY(0);
        -moz-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
        -webkit-transition: all 0.5s 0.1s;
        -moz-transition: all 0.5s 0.1s;
        transition: all 0.5s 0.1s;
    }
</style>