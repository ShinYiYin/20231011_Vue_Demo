<script>
import { RouterLink, RouterView} from 'vue-router';
export default{
    components:{
        RouterLink,
        RouterView,
    }
}
</script>

<template>
    <h3> vue跳轉頁面的方法 </h3>
    <h5> 方法1. router-link跳轉 </h5>
<RouterLink to="/VueRouter/RouterComA">ComA</RouterLink> <br>
<RouterLink to="/VueRouter/RouterComB">ComB</RouterLink>
<RouterView />
</template>

<style lang="scss" scoped>
h3{
    margin: 20px 0;
    background-color: rgb(251, 226, 230);
    color: rgb(251, 107, 124);
}
h5{
    margin: 10px 0;
    background-color: rgb(251, 237, 226);
    color: rgb(251, 179, 107);
}
</style>