<template>
    <div class="bg_col">
    <div class="btmItem">
        <p><a href=""><span class="redspan"></span>{{data.product_name}}</a><a href="" v-if="data.is_novice">{{data.is_novice}}</a></p>
        <div class="product-con">
            <div class="product-left">
                <p><span>{{data.rate}}</span><span>%</span></p>
                <p>{{data.text1}}</p>
                <i></i>
            </div>
            <div class="product-right">
                <p><span>项目期限</span><span>{{data.trade}}</span></p>
                <p><span>剩余金额</span><span>{{data.pro_balance}}</span></p>
                <span>一次性付息还本</span>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default{
        name:"btmItem",
        props:["data"]
    }

</script>

<style scoped>
    .bg_col{
        background-size: 100% 100%;
        background-image: url("../../../public/assets/images/background_preciousmetal_nodetail.png");
    }
    .redspan{
        position: absolute;
        left:0rem;
        top:0.06rem;
        display: block;
        width:0.05rem;
        height:0.15rem;
        background-color: red;
    }
    .btmItem{
        width:3.34rem;
        font-size: 0.16rem;
        padding-top:0.05rem;
        box-sizing: border-box;
        margin:0.1rem auto;
        /*border:0.005rem solid red;*/
        border-radius: 0.15rem;
        overflow:hidden;
        box-shadow:0rem 0rem 0.08rem -0.04rem;
    }
    .btmItem>p{
        height:0.54rem;
        position: relative;
        padding-top:0.1rem;
        box-sizing: border-box;
    }
    .btmItem>p>a{
        display: block;
        color:black;
        padding-left: 0.35rem;
        font-size: 0.12rem;
    }
    .btmItem>p>a:nth-child(1){
        background-color: white;
        padding-left:0.15rem;
        box-sizing: border-box;
        position: relative;
    }
    .btmItem>p>a:nth-child(2){
        background-color: #00B7FF;
        border-radius: 0.05rem;
        height:0.2rem;
        line-height: 0.1rem;
        color:white;
        text-align: center;
        margin-right:0.1rem;
        position: absolute;
    }
    .btmItem>p>a:nth-child(2){
        left:1.6rem;
        top:0.12rem;
    }
    .product-con>div{
        padding:0 0.1rem;
        box-sizing: border-box;
        color:rgb(153,153,153);
        width:60%;
        height:0.7rem;
        display: inline-block;
        margin:0.05rem 0 0.1rem 0;
        font-size: 0.16rem;
        float:left;
    }
    .product-con>div:nth-child(1){
        width:40%;
        border-right: 0.005rem rgb(153,153,153) dashed;
    }
    .btmItem>p>a{
        display: inline-block;
        height:0.2rem;
        padding:0.05rem 0.1rem;
    }
    .product-left{
        position: relative;
    }
    .product-left>p>span:nth-child(1){
        font-size: 0.3rem;
        font-weight: 800;
        color:red;
    }
    .product-left>p>span:nth-child(2){
        display: inline-block;
        padding-left: 0.1rem;
        color:black;
    }
    .product-left>i{
        position: absolute;
        display: block;
        left:0.1rem;
        top:0.68rem;
        border-radius: 0.05rem;
        width:1rem;
        height:0.04rem;
        background-color: orange;
    }
    .product-right>p:nth-child(1)>span:nth-child(2){
        display: inline-block;
        padding-left: 0.2rem;
        font-weight: 700;
        color:red;
    }
    .product-right>p:nth-child(2)>span:nth-child(2){
        display: inline-block;
        padding-left: 0.2rem;
        color:black;
    }
</style>