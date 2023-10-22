<script>
export default{
    data(){
        return{
            // addPage:false,
            inputData:{
                text:"",
                amount:"",
            }
        }
    },
    components:{
    },
    methods:{
        addShow(){
            this.$emit('show', this.addPage)
        },
        itemShow(){
            this.$emit('item',this.inputData)
        }
    }
}
</script>

<template>
    <div class="add">
        <div class="text">
            <label for="text">Text</label>
            <input type="text" placeholder="Empty" v-model="inputData.text">
        </div>
        <div class="amount">
            <label for="amount">Amount</label>
            <input type="text" placeholder="Empty" v-model="inputData.amount">
        </div>
        <button class="addBtn" @click="itemShow()">Add transaction</button>
        <button class="closeBtn" @click="addShow()">X</button>

    </div>
</template>

<style lang="scss" scoped>
.add {
    width: 400px;
    height: 200px;
    background-color: rgb(255, 170, 170);
    margin-bottom: 100px;
}
</style>