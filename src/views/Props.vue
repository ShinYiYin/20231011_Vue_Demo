<script>
import child from "../components/child.vue";
export default{
    data(){
        return{
            propsObj:{
                name:"Mary",
                age:58,
                email:"xxx@gmail.com"
            }
        }
    },
    components:{
        child
    },
    methods:{
        goToPractice(){
            this.$router.push('/Props_sign')
        }
    }
}
</script>

<template>
    <!-- 運用於父元件單向傳遞資料給子元件 -->
    <h3> • Props 教學 </h3>
    <p>(Vue Props 運用於父元件單向傳遞資料給子元件)</p>
    <p style="text-align: center;">父元件於此</p>
    <div class="show">
        <child
        :person="propsObj"
        />

    <!-- 連接練習題 -->
    <button class="practice" @click="goToPractice"> Go To Practice </button>
    </div>

</template>

<style lang="scss" scoped>
h3{
    margin: 20px 0;
    background-color: rgb(251, 226, 230);
    color: rgb(251, 107, 124);
}
.show{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.practice{
    margin-top: 5vh;
    border-radius: 5px;
    border: none;
    box-shadow: (2px 2px 2px);
}
</style>