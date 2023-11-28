<script>
export default {
    data(){
        return{
            point: 0,
            ntd: 0,
        }
    },
    methods:{
        addPoint(){
            this.point += 1;
        }
    },

    // 監聽語法 (監聽此數值)，監控實際變數的值，產生新的值
    watch: {
        point(){
            this.ntd = this.point *10;
        }
    },

    // 渲染暫存的值，return將資料傳出來
    computed: {
        jyp(){
            return this.ntd * 4.63
        }
    },
    beforeCreate(){
        console.log("beforeCreate" + this.point);
    },
    created(){
        console.log("Create" + this.point);
    },
    beforeMount(){
        console.log("beforeMount" + this.point);
    },
    mounted(){
        console.log("mounted" + this.point);
    },
    beforeUpdate(){
        console.log("beforeUpdate" + this.point);
    },
    updated(){
        console.log("updated" + this.point);
    },
    beforeUnmount(){
        console.log("beforeUnmount" + this.point);
    },
    unmounted(){
        console.log("unmounted" + this.point);
    },
}

</script>

<template>
    <h3> • Watch & Computed 教學 </h3>
    <p>Point: {{ this.point }}</p>
    <p>ntd: {{ this.ntd }}</p>
    <!-- jyp 非變數，但仍可渲染 -->
    <p>日幣換算jyp: {{ this.jyp }}</p>
    <div class="circle" @click="addPoint()"></div>
    <h1 v-if=" this.point == 10">100</h1>
</template>

<style lang="scss" scoped>
h3{
    margin: 20px 0;
    background-color: rgb(251, 226, 230);
    color: rgb(251, 107, 124);
}

.circle{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: pink;
    cursor: pointer;
    
    //hover時，整體縮放1.2倍
    &:hover{
        scale: 1.2;
    }
}
</style>