<script>
export default {
    data() {
        return {
            text: "orange",
        }
    },
    methods: {
        emitGo(){
            //我要往父元件傳遞訊息，告知父元件執行apple(,左邊的值)暗號並給予紙條(,右邊的值)
            this.$emit("apple", this.text)
        }
    }
}
</script>

<template>
    <div class="showArea">
        <h4> Emit child </h4>
        <p> text變數： {{ this.text }}</p>
        <button type="button" @click="emitGo"> emitgo</button>
        <!-- 寫法2 -->
        <!-- <button type="button" @click="$emit('apple', this.text)"> emitgo</button> -->
    </div>
</template>

<style lang="scss" scoped>
.showArea{
    width: 600px;
    height: 300px;
    background-color: rgb(251, 213, 220);
    text-align: center
}
</style>