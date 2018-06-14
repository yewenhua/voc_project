<template>
    <div class="frame-content">
        <div id="drawer">
            <mu-appbar :title="title">
                <mu-icon-button icon="menu" slot="left" @click="toggle(true)"/>
                <mu-icon-menu icon="more_vert" slot="right">
                    <mu-menu-item title="菜单 1"/>
                    <mu-menu-item title="菜单 2"/>
                    <mu-menu-item title="菜单 3"/>
                    <mu-menu-item title="菜单 4"/>
                    <mu-menu-item title="菜单 5"/>
                </mu-icon-menu>
            </mu-appbar>
            <mu-drawer :open="open" :docked="docked" @close="toggle()">
                <mu-list @itemClick="docked ? '' : toggle()">
                    <mu-list-item title="Menu Item 1"/>
                    <mu-list-item title="Menu Item 2"/>
                    <mu-list-item title="Menu Item 3"/>
                    <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
                </mu-list>
            </mu-drawer>
        </div>


        <div class="frame-view">
            <transition :name="animateName">
                <router-view class="frame-view"></router-view>
            </transition>
        </div>

        <div class="tabnav">
            <mu-paper style="max-width: 100%; ">
                <mu-bottom-nav :value="bottomNav" shift @change="tabChange">
                    <mu-bottom-nav-item value="movies" title="Movies" icon="ondemand_video" replace="replace" to="/frame/movies"/>
                    <mu-bottom-nav-item value="news" title="News" icon="music_note" replace="replace" to="/frame/news"/>
                    <mu-bottom-nav-item value="mall" title="Mall" icon="books" replace="replace" to="/frame/mall"/>
                    <mu-bottom-nav-item value="picture" title="Pictures" icon="photo" replace="replace" to="/frame/picture"/>
                </mu-bottom-nav>
            </mu-paper>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapGetters([
                'loading',
            ])
        },
        data () {
            return {
                title: 'movies',
                animateName: 'fade',
                bottomNav: 'movies',
                bottomNavColor: 'movies',
                open: false,
                docked: true,
                replace: true,
            }
        },
        created(){
            if(this.$router.currentRoute.name){
                this.title = this.$router.currentRoute.name;
                this.bottomNav = this.$router.currentRoute.name;
            }
        },
        methods:{
            tabChange (val) {
                this.bottomNav = val
            },
            toggle (flag) {
                this.open = !this.open
                this.docked = !flag
            }
        },
        watch: {
            '$route' (to, from) {
                if(to.name){
                    this.title = to.name;
                    this.bottomNav = to.name;
                }
            }
        },
    }
</script>

<style scoped>
    .mu-appbar{
        height: 0.56rem;
    }
    .mu-bottom-nav{
        height: 0.56rem;
    }
    .frame-content{
        width:100%;
        height:100%;
    }
    .router-link-active{
        color:#f60;
        font-size: 0.3rem;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s ease;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
    .frame-view {
        position: absolute;
        top:0.56rem;
        left: 0px;
        width:100%;
        height:calc( 100% - 1.12rem );
        transition: all 250ms cubic-bezier(.55,0,.1,1);
        will-change: transform;
        backface-visibility: hidden;
    }
    .tabnav{
        position: fixed;
        bottom: 0px;
        left: 0px;
        width: 100%;
        z-index: 1;
    }
    .mu-appbar-title{
        text-align: center;
    }
</style>
