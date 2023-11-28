<script></script>
<template>
    <div class="box">
        <div class="content">
        </div>
    </div>
</template>

<style lang="scss" scoped>
$mainColor: #4A5365;
$backgroundColor: #BFC0CC;


.box {
    background-image: url("../../public/estatePhoto/banner1.png");
    background-repeat: no-repeat;
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.content {
    backdrop-filter: blur(8px);
    /* 模糊效果 */
    width: 500px;
    height: 250px;
    border-radius: 5px;
    box-shadow: 5px 5px 8px 0 #767676;
    background: rgba(255, 255, 255, 0.2);
}
</style>