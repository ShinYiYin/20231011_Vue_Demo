<script setup>
import Header from "./components/Header.vue"
import {RouterLink, RouterView} from 'vue-router'

</script>

<template>
    <div class="topHeader">
        <Header />
    </div>
    <div class="content">
        <RouterView />
    </div>
</template>

<style lang="scss" scoped>
    .content{
        // text-align: center;
        margin-top: 20px;
        margin-left: 30px;
        margin-right: 30px;
    }
</style>