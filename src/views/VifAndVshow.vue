<script>
export default{
    data(){
        return{
            title:"cool",
            car: false,
            car2: false,
            house: 0,
            house2: 0,
        }
    },
    // methods:{
    //     print(){
    //         if(this.title == "cool"){
    //             console.log("XXXX");
    //         }
    //     }
    // }
}
</script>

<template>
<!-- v-if 教學 -->
<h3> • v-if 教學</h3>
<label for="">小明有車</label>
<input type="checkbox"  value="true" v-model="car">
<p v-if="car">確實有車</p>

<!-- v-show 教學 -->
<h3> • v-show 教學</h3>
<label for="">小明有車</label>
<input type="checkbox" value="true" v-model="car2">
<p v-show="car2">確實有車</p>

<!-- v-if & v-else 教學 -->
<h3> • v-if & v-else 教學</h3>
<label for="">小明的房子是</label>
<select name="" id="" v-model="house">
    <option value="1">1</option>
    <option value="2">2</option>
</select>
<p v-if="house == 1">中等的房子</p>
<p v-if="house == 2">豪華的房子</p>
<p v-else>一般的房子</p>

<!-- v-if & v-else-if & v-else 教學 -->
<h3> • v-if & v-else-if & v-else 教學</h3>
<label for="">大明的房子是</label>
<select name="" id="" v-model="house2">
    <option value="0">0</option>
    <option value="1">1</option>
    <option value="2">2</option>
</select>
<p v-if="house2 == 1">中等的房子</p>
<p v-else-if="house2 == 2">豪華的房子</p>
<p v-else>一般的房子</p>

</template>

<style lang="scss" scoped>
h3{
    margin: 20px 0;
    background-color: rgb(251, 226, 230);
    color: rgb(251, 107, 124);
}
</style>