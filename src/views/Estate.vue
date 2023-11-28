<script>
// import EstateHome from "../components/EstateHome.vue"
import { RouterView, RouterLink } from 'vue-router'
export default{
    methods:{
        goToHome(){
            this.$router.push('/Estate/EstateHome')
        }
    }
}

</script>

<template>
    <div class="header">
        <div class="headerLeft">
            <button type="button" class="square" @click="goToHome">
            </button>
            <p>会社案内 | 店舗アクセス</p>
        </div>
        <div class="headerRight">
            <i class="fa-solid fa-mobile-screen-button"></i>
            <p>010-123456789 </p>
            <div class="loginAndInquiry">
                <RouterLink to="/Estate/EstateLogin" class="loginAndInquiryText">ログイン</RouterLink>
                <RouterLink to="/Estate/EstateInquiry" class="loginAndInquiryText">お問い合わせ</RouterLink>
            </div>
        </div>
    </div>
    <div class="content">
        <RouterView />
    </div>
</template>

<style lang="scss" scoped>
$mainColor: #4A5365;
$backgroundColor: #BFC0CC;

.header {
    width: 100%;
    height: 10vh;
    padding: 0 5%;
    background-color: rgb(239, 239, 239);
    display: flex;

    .headerLeft {
        width: 50%;
        height: inherit;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .square {
            width: 40px;
            height: 40px;
            background-color: $mainColor;
            border: none;
        }

        p {
            color: black;
            font-size: 10pt;
            margin-right: 120px;
            margin-top: 0;
            margin-bottom: 0;
        }
    }

    .headerRight {
        width: 50%;
        height: inherit;
        padding-left: 20%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        i {
            font-size: 10pt;
        }

        p {
            color: black;
            font-size: 10pt;
            margin-top: 0;
            margin-bottom: 0;
        }

        .loginAndInquiry {
            width: 200px;
            height: 25px;
            background-color: $mainColor;
            border: 0;
            border-radius: 5px;
            display: flex;
            justify-content: space-around;
            align-items: center;

            .loginAndInquiryText {
                color: white;
                font-size: 10pt;
                text-decoration: none;
                &:hover{
                color: #c8c8c8;
            }
            }
        }
    }
}
</style>
