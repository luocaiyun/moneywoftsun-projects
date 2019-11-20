<template>
    <div class="index-nav-item">
        <img :src="data.pic">
        <p>{{data.name}}</p>
    </div>
</template>

<script>
    export default {
        name: "navItem",
        props:["data"]
    }
</script>

<style scoped>
.index-nav-item{
    width: 25%;
    height: 0.6rem;
    margin: 0.1rem 0;
}
.index-nav-item>img{
    margin-left: 0.32rem;
    width: 0.3rem;
    height: 0.3rem;
}
.index-nav-item>p{
    text-align: center;
    font-size: 0.13rem;
    margin-top: 0.04rem;
    font-weight: 500;
}
</style>