<script>
import test from '../components/test.vue'
export default{
    data(){
        return{
        // 放變數
        // V-text 渲染變數到畫面上
        title: "Title",
        address:"XX路",
        info:{
            name:"JoJo",
            age:18,
        },
        // v-model 雙向綁定(把變數與標籤綁定，直接渲染網頁)
        // 若checkbox給的值是“”空字串，則會顯示true、false
        cool:"",
        age:18,
        selectText:"",
        lazyText:"",
        numberText:0,
        trimText:"",
        checkText:[],
        radioText:"請選擇"
        }
    },
    //放匯入元件
    components:{
        test
    },
    //放方法
    // methods:{
    //         test(){
    //             }
    //         }
}
</script>

<template>
    <!-- v-text 渲染變數到畫面上 -->
    <h3>• v-text 教學</h3>
    <p>{{ this.title }}</p>
    <p v-text="address"></p>
    <p v-text="info"></p>
    <!-- vue也可作為元件方式直接插入 (上面import、components輸入)-->
    <test v-text="address"/>

    <br/>
    <!-- v-model 雙向綁定(把變數 與 標籤的值 綁定，直接渲染網頁)-->
    <h3>• v-model 教學</h3>
    <input type="text" v-model="cool">
    <p>{{ this.cool }}</p>
    <input type="number" v-model="age">
    <p v-text="'age:'+age"></p>

    <select name="" id="" v-model="selectText">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <p>{{ this.selectText }}</p>

    <!-- lazy, number, trim 練習-->

    <!-- lazy 不會即時顯示，將鼠標移開input後，才顯示 -->
    <h5>• v-model.lazy</h5>
    <input type="text" v-model.lazy="lazyText">
    <p>{{ this.lazyText }}</p>

    <h5>• v-model.number</h5>
    <input type="number" v-model.number="numberText">
    <p>{{ this.numberText }}</p>

    <!-- trim 去掉前後空白格 -->
    <h5>v-model.trim</h5> 
    <input type="text" v-model.trim="trimText">
    <p>{{ this.trimText }}</p>

    <!-- checkbox 練習 (複選可搭配使用陣列來進行多個物件的存放)-->
    <h5>• 搭配checkbox</h5>
    <label for="">早餐</label>
    <input type="checkbox" v-model="checkText" name="meal" value="breakfast" id="breakfast">
    <label for="">中餐</label>
    <input type="checkbox" v-model="checkText" name="meal" value="lunch" id="lunch">
    <label for="">晚餐</label>
    <input type="checkbox" v-model="checkText" name="meal" value="dinner" id="dinner">
    <p>{{ this.checkText }}</p>

    <!-- radio 練習 （單選可搭配字串“”(若空字串中間不用空格，空格也算一個字元)-->
    <h5>• 搭配radio</h5>
    <label for="">早餐</label>
    <input type="radio" v-model="radioText" name="food" value="breakfast" id="breakfast">
    <label for="">中餐</label>
    <input type="radio" v-model="radioText" name="food" value="lunch" id="lunch">
    <label for="">晚餐</label>
    <input type="radio" v-model="radioText" name="food" value="dinner" id="dinner">
    <p>{{ this.radioText }}</p>


</template>

<style lang="scss" scoped>
h3{
    margin: 20px 0;
    background-color: rgb(251, 226, 230);
    color: rgb(251, 107, 124);
}
h5{
    margin: 10px 0;
    background-color: rgb(251, 237, 226);
    color: rgb(251, 179, 107);
}
</style>