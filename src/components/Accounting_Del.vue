<script>
export default {
    data() {
        return {
            // delPage: false,
            
        }
    },

    components: {
    },
    methods: {
        delClose() {
            this.$emit('delPageClose')
        },
        del(propsIndex) {
            let x = propsIndex
            this.$emit('remove', x)
        }
    },
    props:[
        "propsIndex",
    ]
}


</script>

<template>
    <div class="bgArea">
        <div class="delete">
            <button type="button" class="closeBtn" @click="delClose()">X</button>
            <p>Sure to Delete ?</p>
            <button type="button" class="delBtn" @click="del(propsIndex)">Delete</button>
            <!-- <p>{{ "index=" + this.propsIndex }}</p> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bgArea {
    // width: 500px;
    // height: 500px;
    // background-color: pink;
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

    .delete {
        width: 280px;
        height: 230px;
        background-color: white;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;

        .delBtn {
            width: 100px;
            height: 30px;
            background-color: rgb(202, 56, 56);
            color: white;
            border-radius: 5px;
            border: none;
            &:hover{
                background-color: rgb(215, 125, 125);
                box-shadow: 2px 2px lightgray;
            }
        }
        .closeBtn{
            position: absolute;
            top: 15px;
            right: 20px;
            background-color: white;
            color: #4b85a0;
            border-radius: 50%;
            border: none;
            font-size: 15pt;
            font-weight: bold;
            &:hover{
                color: #88aab9;
                text-shadow: 1px 1px lightgray;
            }
            
        }
    }
}
</style>