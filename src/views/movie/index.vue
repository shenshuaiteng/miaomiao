<template>
    <div id="main">
        <Header />
            <div id="content">
                <div class="movie-menu">
                    <div class="city_name">大连</div>
                    <div class="hot_switch">
                        <router-link to="/movie/NowPlaying" tag="div" class="hot_item">正在热映</router-link>
                        <router-link to="/movie/ComingSoon" tag="div" class="hot_item">即将播出</router-link>
                    </div>
                    <router-link to="/movie/Search" class="movie_search" tag="div">
                        <i class="iconfont icon-sousuo"></i>
                    </router-link>
                </div>
                <keep-alive>
                    <router-view />
                </keep-alive>
            </div>
        <tab-bar />
    </div>
</template>

<script>
    import tabBar from  '@/components/tabBar'
    import Header from  '@/components/Header'
    import NowPlaying from  '@/components/NowPlaying'
    import Search from  '@/components/Search'
    import ComingSoon from  '@/components/ComingSoon'
    import City from  '@/components/City'
    export default {
        name: "movie",
        data() {
            return {}
        },
        components:{
            tabBar,
            Header,

        }
    }
</script>

<style scoped>
    #content .movie-menu{
        width: 100%;
        height: 45px;
        display: flex;
        justify-content: space-between;
        align-content: center;
        border-bottom: 1px red solid;
        background:white
    }
    .movie-menu .city_name{
        height: 100%;
        line-height: 45px;
        margin-left:45px ;
    }
    .movie-menu .city_name.active{
        color: red;
    }
    .movie-menu .hot_switch{
        display: flex;
        height: 100%;
        line-height: 45px;
    }
    .movie-menu .hot_switch .hot_item{
        margin-right:20px;
    }
    .movie-menu .hot_switch .hot_item.router-link-active{
        border-bottom:2px red solid;
        color: red;
    }
    .movie-menu .movie_search{
        height:100%;
        line-height: 45px;
        margin-right:20px;
    }
    .movie-menu .movie_search i{
        font-size: 24px;
        color: red;
    }
</style>