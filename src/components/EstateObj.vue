<script>
</script>
<template>
<div class="bgArea">
    <div class="topArea">
        <div class="box"></div>
        <div class="title">
            <span>都心区 A物件</span>
            <hr>
        </div>
    </div>
    <div class="content"></div>
</div>
</template>
<style lang="scss" scoped>
$mainColor: #4A5365;
$backgroundColor: #BFC0CC;
.bgArea {
    height: 90vh;
    background-color: $backgroundColor;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .topArea{
        width: 80%;
        height: 20%;
        display: flex;
        margin: 0;
        .box{
            width: 100px;
            height: 100px;
            background-color: $mainColor;
            border-radius: 5px;
        }
        .title{
            width: 75%;
            height: 100px;
            margin-left: 20px;
            position: absolute;
            right: 5%;
        }
    }
    .content{
        width: 90%;
        height: 60%;
        margin-top: 15px;
        background-color: white;
    }

}
</style>