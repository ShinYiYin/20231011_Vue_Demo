<script>

</script>

<template>
    <div class="bgArea">
        <div class="gridArea">
            <button type="button" class="box">お気に入り物件</button>
            <button type="button" class="box">お気に入りタッグ</button>
            <button type="button" class="box">ユーザー設定</button>
            <button type="button" class="box">XXXXXX</button>
            <button type="button" class="box">OOOOOO</button>
            <button type="button" class="box">お問い合わせ履歴</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$mainColor: #4A5365;
$backgroundColor: #BFC0CC;

.bgArea {
    height: 100vh;
    background-color: $backgroundColor;
    display: flex;
    justify-content: center;

    .gridArea {
        margin-top: 10%;
        width: 70%;
        height: 50%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: repeat(2, 1fr);
        gap: 30px;

        .box{
            // width: 100%;
            // height: 100%;
            background-color: #4A5365;
            border: none;
            border-radius: 10px;
            color: white;
            text-align: center;
            line-height: 140px;

            &:hover{
                background-color: #5a6377;
            }
        }

    }
}
</style>