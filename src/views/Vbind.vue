<script>
export default {
    data(){
        return{
            title:"cool",
            isRed: false,
            isLarge: false,
            styleArr: [],
            imgText:"https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/0783062d0d860b8ae7d8e859241a700359c4d981.png"
        }
    },
    // 生命週期
    // created(){
    //     this.print()
    // }
}
</script>

<template>
    <!-- v-model ==>綁定標籤的值 -->
    <!-- v-bind  ==>綁定標籤屬性 -->

    <h3> • v-bind 教學</h3>
    <h1 class="cool">COOL1</h1>
    <h2 v-bind:class="title">COOL2</h2>
    <!-- <h2 :class="title">COOL2</h2> -->

    <h5> • class {} 用法</h5>
    <label for="">isRed</label>
    <input type="checkbox" value="true" v-model="isRed">
    <label for="">isLarge</label>
    <input type="checkbox" value="true" v-model="isLarge">

    <!-- 未啟動時，h2無class名稱 -->
    <h2 :class="{
        red:isRed,
        large:isLarge
    }">在這裡</h2>
    <!-- 當isRed/isLarge 為true時，立即賦予h2標籤 red/large class名稱 -->

    <!-- styleArr是變數，記得在data()之中宣告並使它成為空陣列 -->
    <h5> • class [] 用法</h5>
    <label for="">Red</label>
    <input type="checkbox" value="red" v-model="styleArr">
    <label for="">Large</label>
    <input type="checkbox" value="large" v-model="styleArr">
    <label for="">Bold</label>
    <input type="checkbox" value="bold" v-model="styleArr">

    <!-- 標籤的屬性(HTML) <==> 變數(JS) -->
    <h2 :class="styleArr">在那裡</h2>
    <!-- <p>{{ this.styleArr }}</p> -->

    <!-- 綁定圖片網址 -->
    <h5> • 綁定圖片網址 </h5>
    <img :src="imgText" alt="">
    <!--之前寫法直接插入圖片網址 <img src="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/0783062d0d860b8ae7d8e859241a700359c4d981.png" alt=""> -->

    <!-- radio進行單選更換圖片 -->
    <h5> • 單選更換圖片 </h5>
    <label for="">傑尼龜</label>
    <input type="radio" value="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png" v-model="imgText">
    <label for="">可達鴨</label>
    <input type="radio" value="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/0783062d0d860b8ae7d8e859241a700359c4d981.png" v-model="imgText">
    <label for="">小火龍</label>
    <input type="radio" value="https://tw.portal-pokemon.com/play/resources/pokedex/img/pm/d0ee81f16175c97770192fb691fdda8da1f4f349.png" v-model="imgText">

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
.cool{
    color: hotpink;
}
.red{
    color: red;
}
.large{
    font-size: 56pt;
}
.bold{
    font-weight: bold;
}

img{
    width: 300px;
    height: auto;
}
</style>