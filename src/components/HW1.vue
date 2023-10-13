<script>
export default{
    data(){
        return{
            arr:[1,2,3]
        }
        
    }
}
</script>

<template>
    <div class="topArea">
    </div>

    <div class="secondArea">
        <p v-for="item in arr"></p>
    </div>

    <div class="thirdArea">
        <div class="square"></div>
        <div class="textArea">
            <h2>Title</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatum porro tempore! Incidunt, doloribus ipsa nulla quidem modi saepe doloremque.</p>
        </div>
    </div>

    <div class="bottomArea">
    </div>

</template>

<style lang="scss" scoped>

.topArea{
    width: 100%;
    height: 10vh;
    background-color: #9BDBD3;
}

.secondArea{
    margin-top: 10px;
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p{
        width: 150px;
        height: 150px;
        background-color: #9BDBD3;
    }
}

.thirdArea{
    width: 100%;
    height: 45vh;
    display: flex;
    align-items: center;
    .square{
        width: 50%;
        height: 200px;
        background-color: #9BDBD3;
        margin-left: 0;
    }
    .textArea{
        width: 50%;
        height: 200px;
        margin: 0 50px;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
}

.bottomArea{
    width: 100%;
    height: 5vh;
    background-color: #9BDBD3;
}

</style>