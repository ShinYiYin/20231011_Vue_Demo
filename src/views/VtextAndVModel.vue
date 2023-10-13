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
        radioText:""
        }
    },
    //放匯入元件
    components:{
        test
    },
    //放方法
    // methods:{
    //         test(){
    //                 document.write("abc");
    //             }
    //         }
}
</script>

<template>
    <!-- v-text 渲染變數到畫面上 -->
    <h1>v-text And V-Model</h1>
    <p>{{ this.title }}</p>
    <p v-text="address"></p>
    <p v-text="info"></p>
    <test v-text="address"/>

    <br/>
    <!-- v-model 雙向綁定(把變數與標籤綁定，直接渲染網頁)-->
    <h1>v-model</h1>
    <input type="text" v-model="cool">
    <h4>{{ this.cool }}</h4>
    <input type="number" v-model="age">
    <h4 v-text="'age:'+age"></h4>

    <select name="" id="" v-model="selectText">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <p>{{ this.selectText }}</p>

    <!-- lazy, number, trim 練習-->

    <!-- lazy 不會即時顯示，將鼠標移開input後，才顯示 -->
    <p>v-model.lazy</p>
    <input type="text" v-model.lazy="lazyText">
    <p>{{ this.lazyText }}</p>

    <p>v-model.number</p>
    <input type="number" v-model.number="numberText">
    <p>{{ this.numberText }}</p>

    <!-- trim 去掉前後空白格 -->
    <p>v-model.trim</p> 
    <input type="text" v-model.trim="trimText">
    <p>{{ this.trimText }}</p>

    <!-- checkbox 練習-->
    <p>checkbox</p>
    <label for="">早餐</label>
    <input type="checkbox" v-model="checkText" name="meal" value="breakfast" id="breakfast">
    <label for="">中餐</label>
    <input type="checkbox" v-model="checkText" name="meal" value="lunch" id="lunch">
    <label for="">晚餐</label>
    <input type="checkbox" v-model="checkText" name="meal" value="dinner" id="dinner">
    <h3>{{ this.checkText }}</h3>

    <!-- radio 練習-->
    <p>radio</p>
    <label for="">早餐</label>
    <input type="radio" v-model="radioText" name="food" value="breakfast" id="breakfast">
    <label for="">中餐</label>
    <input type="radio" v-model="radioText" name="food" value="lunch" id="lunch">
    <label for="">晚餐</label>
    <input type="radio" v-model="radioText" name="food" value="dinner" id="dinner">
    <h3>{{ this.radioText }}</h3>


</template>

<style>
</style>