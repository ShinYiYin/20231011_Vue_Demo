<script>
export default{
    props:[
        "person"
    ]
}
</script>

<template>
<div class="textShow">
    <p>子元件(粉色色塊)</p>
    <p style=" color: gray;"> (將父元件資料(如下)傳遞給子元件) </p>
    {{ this.person }}
</div>
</template>

<style lang="scss" scoped>
.textShow{
    width: 600px;
    height: 300px;
    background-color: rgb(251, 213, 220);
    text-align: center
}
</style>