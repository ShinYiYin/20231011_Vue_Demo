<script>
import Provide_child2 from '../components/Provide_child2.vue';
export default{
    data(){
        return{

        }
    },
    components:{
        Provide_child2
    }
}
</script>

<template>
    <div class="wrap">
        <h1>這是父層</h1>
        <Provide_child2 />
    </div>
</template>

<style lang="scss" scoped>
.wrap{
    width: 400px;
    height: 400px;
    border: 1px solid black;
}
</style>