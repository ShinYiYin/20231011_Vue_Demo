<!-- 猜數字 -->
<script>
export default {
    data() {
        return {
            smallNum: 1,
            bigNum: 100,
            ansNum: Math.floor((Math.random()*100)+ 1 ),
            // resNum: parseInt(guessNum.value),
            // guessNum.value: "",
        }
    },
    methods: {
        run() {
            console.log(this.ansNum);
            // console.log(this.reNum);
            // if (resNum == ansNum) {
            //     showText.innerText = "答對了";
            //     return;
            // }
            // if (resNum < smallNum || resNum > bigNum) {
            //     showText.innerText = "請猜範圍值內的數字";
            //     return;
            // }

            // if (resNum > ansNum) {
            //     bigNum = resNum;
            //     max.innerText = resNum;
            // }

            // if (resNum < ansNum) {
            //     smallNum = resNum;
            //     min.innerText = resNum;
            // }
        }
    }
}
</script>

<template>
    <div class="bgArea">
        <div class="container">
            <div class="topArea">
                <h5 id="showText">猜一個數字</h5>
                <span id="min">1</span>
                <span>-</span>
                <span id="max">100</span>
            </div>
            <div class="bottomArea">
                <input type="number" id="guessNum">
                <button type="button" id="btn" v-on:click="run()">回答</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bgArea {
    width: 100%;
    height: 90vh;
    background-color: #868686;
    display: flex;
    align-items: center;
}

.container {
    width: 40%;
    height: 60%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 5px 5px 5px black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    .topArea {
        width: 100%;
        height: 30%;
        margin-top: 10px;
        text-align: center;

        span {
            font-size: 40pt;
            margin: 5px;
        }
    }

    .bottomArea {
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        input {
            width: 70%;
            height: 20%;
            border-color: #868686;
            border-radius: 5px;
            border: 1px solid gray;
        }

        button {
            width: 40%;
            height: 20%;
            border-radius: 5px;
            background-color: #868686;
            color: white;
            border: none;
            margin-top: 20px;
        }
    }
}
</style>