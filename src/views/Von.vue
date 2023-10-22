<script>
export default {
    //原本js的打法＝> data: function(){}
    //ES6 語法糖
    //this.變數，代表指向變數，即可讀取到變數的值
    data() {
        return {
            title: "cool",
            x: ""
        }
    },
    methods: {
        print(){  //print: function(){} //print自定義
            console.log(this.title)
            this.x = this.title
        },  //","後即可新增方法
        sky() {
            console.log("sky");
        },
    }
}
</script>

<template>
    <!-- v-on 監聽 -->
    <h3>• v-on 教學</h3>
    <!-- 寫法1-->
    <!-- <button type="button" v-on:click="print()">btn</button> -->
    <!-- 寫法2 縮寫-->
    <button type="button" @click="print()">btn</button>
    <p>{{ this.x }}</p>

    <!-- 還有其他 @keyup.enter -->
</template>

<style lang="scss" scoped>
h3 {
    margin: 20px 0;
    background-color: rgb(251, 226, 230);
    color: rgb(251, 107, 124);
}
</style>