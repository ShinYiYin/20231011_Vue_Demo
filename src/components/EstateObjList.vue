<script>
export default{
    methods:{
        goToObj(){
            this.$router.push('/Estate/EstateObj')
        }
    }
}
</script>

<template>
    <div class="bgArea">
        <div class="gridArea">
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <div class="box"></div>
            <a href="" class="ObjA" @click.prevent="goToObj">都心区 A物件
                <hr>
            </a>
            <a href="" class="ObjB" @click.prevent="goToObj">都心区  B物件
                <hr>
            </a>
            <a href="" class="ObjC" @click.prevent="goToObj">都心区 C物件
                <hr>
            </a>
            <a href="" class="ObjD" @click.prevent="goToObj">都心区 D物件
                <hr>
            </a>
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
        height: 80%;
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-template-rows: repeat(4, 1fr);
        column-gap: 5px;
        row-gap: 20px;

        .box {
            width: 90px;
            height: 90px;
            background-color: $mainColor;
            border-radius: 10px;
            grid-column: 1/2;
        }

        a{
            font-size: 13pt;
            text-decoration: none;
            color: black;
        }

        hr{
            margin: 0;
            border: 0.5px solid black;
        }

        .ObjA{
            grid-column: 2/3;
            grid-row: 1/2;
        }
        .ObjB{
            grid-column: 2/3;
            grid-row: 2/3;
        }
        .ObjC{
            grid-column: 2/3;
            grid-row: 3/4;
        }
        .ObjD{
            grid-column: 2/3;
            grid-row: 4/5;
        }
    }
}
</style>