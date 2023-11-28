<script>
import Accounting_Add from "../components/Accounting_Add.vue";
import Accounting_Del from "../components/Accounting_Del.vue";
// import Accounting_Login from "../components/Accounting_Login.vue";
import Accounting_Show from "../components/Accounting_Show.vue";
// import Accounting_Signup from "../components/Accounting_Signup.vue";

export default {
    data() {
        return {
            addPage: false,
            delPage: false,
            // add子元件的inputData放入一陣列
            acceptData: [],
            incomeNum: 0,
            expenseNum: 0,
            balanceNum: 0,
            //設indexNum
            indexNum: 0,
        }
    },
    components: {
        // Accounting_Login,
        // Accounting_Signup,
        Accounting_Show,
        Accounting_Add,
        Accounting_Del,
    },
    methods: {
        //新增項目
        addShow() {
            this.addPage = !this.addPage
        },
        accept(data) {
            this.acceptData.push(data);
            let x = 0
            let y = 0
            // add子元件的inputData放入一陣列，並進行amount正負值的運算，重新賦值給變數：incomeNum、expenseNum、balanceNum
            this.acceptData.forEach(item => {
                // console.log(this.acceptData);
                if (item.amount >= 0) {
                    x += item.amount
                } else if (item.amount < 0) {
                    y += item.amount
                }
            })
            this.incomeNum = x
            this.expenseNum = y
            this.balanceNum = x + y
            this.addPage = !this.addPage;
        },

        //刪除項目
        delShow(index){
            //index重新賦予給indexNum，indexNum傳給Del子元件
            this.indexNum = index
            //顯示確認刪除頁面
            this.delPage = !this.delPage
        },
        removefn(data) {
            console.log(data);
            this.acceptData.splice(data,1);
            let x = 0
            let y = 0
            this.acceptData.forEach(item => {
                if (item.amount >= 0) {
                    x += item.amount
                } else if (item.amount < 0) {
                    y += item.amount
                }
            })
            this.incomeNum = x
            this.expenseNum = y
            this.balanceNum = x + y
            this.delPage = !this.delPage
        },
        delClosefn(){
            this.delPage = !this.delPage
        }
    },
}
</script>

<template>
    <!-- <ol>
        <li v-for="(element, index) in acceptData" :key="index">從子元件所接受到的數據：{{ index }}{{ element }}</li>
    </ol> -->
    <Accounting_Show @show="addShow" :outputData="acceptData" :income="incomeNum" :expense="expenseNum"
        :balance="balanceNum" @del="delShow"/>
    <!--父層接收Ｘ按鈕，並執行關閉add子元件頁面的指令 、 接收input資料，並執行accept方法，將資料放入 -->
    <Accounting_Add v-if="addPage" @show="addShow" @item="accept" />
    <Accounting_Del v-if="delPage" :propsIndex="indexNum" @remove="removefn" @delPageClose="delClosefn"/>
</template>

<style lang="scss" scoped></style>