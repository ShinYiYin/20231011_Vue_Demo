<script>
export default{
    methods:{
        goToObjList(){
            this.$router.push('/Estate/EstateObjList')
        }
    }
}
</script>

<template>
    <div class="bgArea">
        <div class="gridArea">
            <!-- 事件修飾符 .prevent : 避免瀏覽器預設行為。 原本按下超連結後會直接開啟 href 設定的頁面，可是因為 click 事件有設定 .prevent 修飾符，所以不會開啟連結。 -->
            <a href="" class="topArea" @click.prevent="goToObjList">都心区
                <hr>
            </a>
            <div class="box">
                <input type="checkbox">
                <label for="">千代田区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">千代田区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">千代田区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">千代田区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">六本木区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">六本木区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">六本木区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">六本木区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">秋葉原区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">秋葉原区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">秋葉原区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">秋葉原区</label>
            </div>
            <a href="" class="middleArea">23区東部
                <hr>
            </a>
            <div class="box">
                <input type="checkbox">
                <label for="">台場区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">台場区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">台場区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">台場区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">秋葉原区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">秋葉原区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">秋葉原区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">秋葉原区</label>
            </div>
            <a href="" class="bottomArea">23区西部
                <hr>
            </a>
            <div class="box">
                <input type="checkbox">
                <label for="">千代田区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">千代田区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">千代田区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">千代田区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">六本木区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">六本木区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">六本木区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">六本木区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">秋葉原区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">秋葉原区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">秋葉原区</label>
            </div>
            <div class="box">
                <input type="checkbox">
                <label for="">秋葉原区</label>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$mainColor: #4A5365;
$backgroundColor: #BFC0CC;

.bgArea {
    height: 90vh;
    background-color: $backgroundColor;
    display: flex;
    justify-content: center;
    align-items: center;

    .gridArea {
        width: 40%;
        height: 90%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(11, 1fr);
        column-gap: 20px;
        row-gap: 15px;
        // border: 1px solid black;

        a{
            font-size: 13pt;
            text-decoration: none;
            color: black;
        }
        .topArea{
            grid-column: 1/5;
            grid-row: 1/2;
            font-size: 13pt;
            text-decoration: none;
            color: black;
            
        }
        .middleArea{
            grid-column: 1/5;
            grid-row: 5/6;
        }
        .bottomArea{
            grid-column: 1/5;
            grid-row: 8/9;
        }
        .box{
            width: 1fr;
            height: 1fr;
            background-color: $mainColor;
            border-radius: 5px;
            color: white;
            display: flex;
            align-items: center;
        }
        input{
            margin-left: 10px;
            width: 14px;
            height: 14px;
        }
        label{
            font-size: 10pt;
            margin-left: 20px;
        }
        hr{
            margin: 0;
            border: 0.5px solid black;
        }
    }
}
</style>