<script>
export default {
    data() {
        return {
            // addPage:false,
            inputData: {
                text: "",
                amount: "",
            }
        }
    },
    components: {
    },
    methods: {
        addShow() {
            this.$emit('show', this.addPage)
        },
        itemShow() {
            this.$emit('item', this.inputData)
        }
    }
}
</script>

<template>
    <div class="bgArea">
        <div class="add">
            <button type="button" class="closeBtn" @click="addShow()">X</button>
            <div class="text">
                <label for="text">Text</label><br>
                <input type="text" placeholder="Empty" v-model="inputData.text">
            </div>
            <div class="amount">
                <label for="amount">Amount</label><br>
                <input type="number" placeholder="Empty" v-model="inputData.amount">
            </div>
            <!-- 點擊按鈕 將新input的資料新增至項目 -->
            <button type="button" class="addBtn" @click="itemShow()">Add transaction</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bgArea {
    width: 100%;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.5);
    //使畫面可以固定最上層
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .add {
        width: 400px;
        height: 300px;
        background-color: white;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;

        .text{
            margin-bottom: 10px;
        }
        .amount{
            margin-bottom: 10px;
        }
        label{
            color: #4b85a0;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

        }
        input{
            width: 200px;
            height: 30px;
            border-radius: 5px;
            border: 1px solid #4b85a0;
            text-indent: 10px;
            &:hover{
                width: 205px;
                height: 32px;
            }
        }

        .closeBtn{
            position: absolute;
            top: 15px;
            right: 20px;
            background-color: white;
            color: #4b85a0;
            border: none;
            font-size: 15pt;
            font-weight: bold;
            &:hover{
                color: #88aab9;
                text-shadow: 1px 1px lightgray;
            }
        }

        .addBtn{
            width: 150px;
            height: 30px;
            background-color: #4b85a0;
            color: white;
            border-radius: 5px;
            border: none;
            font-size: 13pt;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            margin-top: 10px;
            &:hover{
                width: 155px;
                height: 32px;
                background-color: #88aab9;
                box-shadow: 2px 2px lightgray;
            }
        }
    }

}
</style>