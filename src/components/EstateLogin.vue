<script>
export default{
    methods:{
        goTo(){
            this.$router.push('/Estate/EstatePerson')
        }
    }
}
</script>

<template>
    <div class="bgArea">
        <div class="content">
            <div class="emailArea">
                <label for="">Email</label>
                <input type="email" name="" id="" class="form-control">
                <i class="fa-regular fa-envelope"></i>
            </div>
            <div class="passwordArea">
                <label for="">Name/Password</label>
                <input type="password" name="" id="" class="form-control">
            </div>
            <div class="keepLoginArea">
                <div class="keepLogin">
                    <input type="checkbox" name="" id="">
                    <label for="">ログインを保持する</label>
                </div>
                <a href="">新規登録</a>
            </div>
            <div class="loginArea">
                <!-- vue跳轉頁面的方法 方法1：router-link跳轉-->
                <RouterLink to="/Estate/EstatePerson">
                <button class="btn" @click="goTo()">ログイン</button>
                </RouterLink>
            </div>
        </div>
    </div>
    <RouterView/>
</template>

<style lang="scss" scoped>
$mainColor: #4A5365;
$backgroundColor: #BFC0CC;

.bgArea {
    height: 100vh;
    background-color: $backgroundColor;
    display: flex;
    justify-content: center;

    .content {
        width: 30vw;
        height: 50vh;
        margin-top: 15vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        // border: 1px solid red;

        .emailArea {
            width: 100%;
            height: 22%;
            // border: 1px solid blue;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;

            .fa-envelope {
                position: absolute;
                top: 55%;
                left: 3%;
                // transform: translateY(-50%);
            }
        }

        .passwordArea {
            width: 100%;
            height: 22%;
            // border: 1px solid red;
        }

        .form-control {
            height: 5vh;
            width: 100%;
            border-radius: 5px;
            text-indent: 6%;
        }

        .keepLoginArea {
            width: 100%;
            height: 12%;
            // border: 1px solid green;
            display: flex;
            justify-content: space-between;
            font-size: 10pt;

            a {
                text-decoration: none;
                color: black;

                &:hover {
                    color: grey;
                }
            }
        }

        .loginArea {
            width: 100%;
            height: 20%;
            // border: 1px solid orange;
            font-size: 10pt;
            display: flex;
            justify-content: center;

            .btn {
                width: 150px;
                height: 35px;
                border-radius: 5px;
                background-color: $mainColor;
                color: white;

                &:hover {
                    background-color: #5a6377;
                }
            }
        }
    }
}
</style>