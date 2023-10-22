<script>
export default{
    methods:{
        goTo(){
            this.$router.push('/Von')
        }
    }
}
</script>

<template>
    <p>此頁面為ComA</p>
    <h5> 方法2. this.$router.push() </h5>
    <button type="button" @click="goTo">Go To Other Router</button>
</template>

<style lang="scss" scoped>
h5{
    margin: 10px 0;
    background-color: rgb(251, 237, 226);
    color: rgb(251, 179, 107);
}
</style>