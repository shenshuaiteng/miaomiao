<template>
    <header id="header">
        <slot></slot> <h1>{{ title }}</h1>
    </header>
</template>

<script>
    export default {
        name : 'Header',
        props : {
            title : {
                type : String,
                default : '喵喵电影'
            }
        }
    }
</script>

<style scoped>
    #header{width: 100%;height: 50px;position: relative;background: red;}
    #header h1{line-height: 50px;text-align: center;color: #f1f1f1;font-size: 18px}
    #header i{ position: absolute; left: 5px; top: 50%; margin-top: -13px; font-size: 26px;}
</style>
