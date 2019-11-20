<template>
    <div class="info" v-if="Info">
        <InfoHeader :data="Info.head"/>
        <InfoSlide/>
        <InfoDoc :data="Info.doc"/>
        <InfoCon :data="Info.con[number1]"/>
    </div>
</template>

<script>
    import header from "../components/info/info-header"
    import slide from "../components/info/info-slide"
    import doc from "../components/info/info-doc"
    import con from "../components/info/info-con"
    import infoApi from "../apis/infoApi";
    export default {
        name: "information",
        data(){
            return{
                Info:[],
                'number1':'0'
            }
        },
        components:{
            "InfoHeader":header,
            "InfoSlide":slide,
            "InfoDoc":doc,
            "InfoCon":con,
        },
        methods:{
            async _initPageInfo(){
                let data=await infoApi.getInfoPage();
                this.Info=data;
                //console.log(data);
            }
        },
        async mounted() {
            this._initPageInfo();
            this.$eventBus.$on("cone",(a)=>{
                this.number1=a;
            })
        },
    }
</script>

<style scoped>
.info{
    font-size: 0.14rem;
    background-color: rgb(238,238,238);
}
</style>
