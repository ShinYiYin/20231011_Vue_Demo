<script setup>
import { RouterLink } from 'vue-router'
//只有'vue-router'setup都無差別
// export default{
//     components:{
//         RouterLink
//     }
// }
</script>

<template>
    <nav class="topNav">
        <RouterLink class="routerItem" to="/">Home</RouterLink>
        <RouterLink class="routerItem" to="/VtextAndVModel">v-text & v-model</RouterLink>
        <RouterLink class="routerItem" to="/Vfor">v-for</RouterLink>
        <RouterLink class="routerItem" to="/Von">v-on</RouterLink>
        <RouterLink class="routerItem" to="/Vbind">v-bind</RouterLink>
        <RouterLink class="routerItem" to="/VifAndVshow">v-if & v-show</RouterLink>
        <RouterLink class="routerItem" to="/VueRouter">Vue Router</RouterLink>
        <RouterLink class="routerItem" to="/Props">Props</RouterLink>
        <RouterLink class="routerItem" to="/Emit">Emit</RouterLink>
        <RouterLink class="routerItem" to="/Bootstrap">Bootstrap</RouterLink>
        <RouterLink class="routerItem" to="/Practice">Practice</RouterLink>
        
        
    </nav>
</template>

<style lang="scss" scoped>


.topNav{
    width: 100vw;
    height: auto;
    background-color: pink;
    font-size: 16pt;
    // text-align: center;
    color: white;
    // display: flex;
    justify-content: center;
    align-items: center;

    .routerItem{
        margin: 10px 15px;
        text-decoration: none;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: white;

        &:hover{
            color: gray;
        }
    }
    
}
</style>
