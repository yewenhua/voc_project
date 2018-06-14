import ProgressbarComponent from './Progressbar.vue'

const Progressbar = {
    install: function(Vue){
        Vue.component('Progressbar', ProgressbarComponent);
    }
}

export default Progressbar;