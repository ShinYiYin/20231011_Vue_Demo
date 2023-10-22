<script>
export default{
    data(){
        return{
            // addPage:false,
        }
    },
    components:{
    },
    methods:{
        addShow(){
            this.$emit('show', this.addPage)
        }
    }
}
</script>

<template>
    <div class="show">
        <p>Show</p>
        <div class="balance"></div>
        <div class="income"></div>
        <div class="expense"></div>
        <button class="showBtn" @click="addShow()">Add transaction</button>
        <div class="itemArea">
            
        </div>

    </div>

</template>

<style lang="scss" scoped>
.show{
    width: 600px;
    height: 400px;
    background-color: rgb(175, 175, 175);
}
</style>