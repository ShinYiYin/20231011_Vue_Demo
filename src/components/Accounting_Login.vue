<script>
export default {
    data() {
        return {
            userLogin: {
                account: "",
                pwd: "",
            },
            userLoginArr: JSON.parse(localStorage.getItem("user")),
            // 各帳戶可存花費的空陣列
            userAccountArr: [],
        }
    },
    components: {
    },
    methods: {
        goToSign() {
            this.$router.push('/Accounting_Signup')
        },
        // goToShow方法：將userLoginArr陣列內含有localStorge的資料(帳戶、密碼)進行判斷與用戶輸入的(v-model綁定變數及input)是否相符
        goToShow() {
            let found = this.userLoginArr.find(item => item.account === this.userLogin.account && item.pwd === this.userLogin.pwd);
            if (!found) {
                alert("帳戶或密碼錯誤")
                    return;
            } else{
                alert("登入成功");
                    // 登入成功時，即為該帳號建一陣列可存放花費
                    localStorage.setItem(this.userLogin.account, JSON.stringify(this.userAccountArr));
                    // 登入成功即跳轉進記帳頁面
                    this.$router.push('/Accounting')
            }
        },
    },
}
</script> 

<template>
    <div class="bgArea">
        <p class="title fontStyle">Expense Tracker</p>
        <div class="accountArea">
            <label for="" class="labelStyle fontStyle">Account</label><br>
            <input type="text" class="inputStyle" v-model="userLogin.account">
        </div>
        <div class="pwdArea">
            <label for="" class="labelStyle fontStyle">Password</label><br>
            <input type="password" class="inputStyle" v-model="userLogin.pwd">
        </div>
        <div class="btnArea">
            <button type="button" class="btn fontStyle" @click="goToSign">Sign Up</button>
            <!-- 登入按鈕點擊後執行goToShow方法 -->
            <button type="button" class="btn fontStyle" @click="goToShow">Log In</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bgArea {
    width: 100%;
    height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
        font-size: 40pt;
        font-weight: bolder;
        color: #4b85a0;
    }

    .labelStyle {
        font-size: 13pt;
        font-weight: bold;
        color: darkgray;
        margin-top: 10px;
    }

    .inputStyle {
        width: 35vw;
        height: 6vh;
        border-radius: 5px;
        border: 1px solid #4b85a0;
        text-indent: 10px;

        &:hover {
            box-shadow: 3px 3px lightgray;
            width: 36vw;
            height: 6vh
        }

    }

    .fontStyle {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    .btn {
        width: 100px;
        height: 37px;
        background-color: #4b85a0;
        color: white;
        font-size: 13pt;
        font-weight: bold;
        margin: 20px 20px;
        line-height: 2.5vh;
        border-radius: 5px;

        &:hover {
            box-shadow: 3px 3px lightgray;
            width: 105px;
            height: 40px;
            font-size: 15pt;
        }
    }
}
</style>