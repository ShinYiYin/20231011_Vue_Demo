<script>
export default{
    data(){
        return{

        }
    }
}
</script>

<template>
    <div class="header">
        <img src="../../public/waterfallPhoto/pinterest-logo-8561DDA2E1-seeklogo.com.png" style="width: 30px; height: 30px;" alt="">
        <button type="button" class="homeBtn">首頁</button>
        <select name="" id="" class="select">
            <option selected="建立">建立</option>
            <option value="建立 Idea Pin">建立 Idea Pin</option>
            <option value="建立 Pin">建立 Pin</option>
        </select>
        <input type="text" class="searchBar" placeholder="搜尋">
        
    </div>
    <div class="content"></div>
</template>

<style lang="scss" scoped>
.header{
    width: 100%;
    height: 10vh;
    display:flex;
    align-items: center;
    

    .homeBtn{
        width: 60px;
        height: 40px;
        border-radius: 25px;
        border: none;
        color: white;
        background-color: black;
        margin: 0 10px;
    }

    .select{
        width: 60px;
        height: 40px;
        border-radius: 25px;
        border: none;
        color: black;
        margin: 0 10px;
    }

    .searchBar{
        width: 60%;
        height: 40px;
        border-radius: 25px;
        border: none;
        background-color: #cdcdcd;
        opacity:0.4;
        color: black;
        margin: 0 10px;
    }
}



</style>