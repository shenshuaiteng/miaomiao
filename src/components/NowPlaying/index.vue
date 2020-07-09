<template>
    <div class="nowPlaying_container">
        <ul>
            <li>
                <div class="nowPlaying_img">
                    <img src="../../../public/images/movie_1.jpg" alt="无名之辈">
                </div>
                <div class="nowPlaying_content">
                    <h3>{{ movie_name }}</h3>
                    <p>观众评：<span class="nowPlaying_movie_score">{{ movie_score }}</span></p>
                    <p>主演：<span v-for="item in movie_act"class="nowPlaying_movie-act">{{ item+'  ' }}</span></p>
                    <p>今天{{ movie_count }}家影院放映{{ movie_cinema_count }}场</p>
                </div>
                <div class="nowPlaying_movie_btn">
                    购票
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'nowPlaying',
        data(){
            return{
                movie_name:"无名之辈",
                movie_score:9,
                movie_act:["陈建斌","任素喜","潘斌龙"],
                movie_count:509,
                movie_cinema_count:10
            }
        }
    }
</script>

<style scoped>
    img{
        display: block;
    }
    .nowPlaying_container ul{
         overflow: hidden;
    }
    .nowPlaying_container ul li{
        margin:0 12px; padding-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;
    }
    .nowPlaying_container .nowPlaying_img {
        width:64px;
        height:90px;
    }
    .nowPlaying_container .nowPlaying_img img{
        width: 100%;
    }
    .nowPlaying_container .nowPlaying_content{
        margin-left: 10px; flex:1; position: relative
    }
    .nowPlaying_container .nowPlaying_content h3{
        font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis
    }
    .nowPlaying_container .nowPlaying_content p{
        font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis
    }
    .nowPlaying_container .nowPlaying_content .nowPlaying_movie_score{
        font-weight: 700; color: #faaf00; font-size: 15px
    }
    .nowPlaying_container .nowPlaying_movie_btn{
        width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;
    }
</style>
