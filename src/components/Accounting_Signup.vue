<script>
export default {
    data() {
        return {
            //帳戶資料判斷，才能註冊成功
            userSignup: {
                account: "",
                pwd: "",
                repwd: "",
            },
            // 存放用戶所有資訊(帳號、密碼)=>用於註冊時(資料存放localStorage)
            userSignupArr: [],
        }
    },
    components: {
    },
    methods: {
        goToLogin() {
            this.$router.push('/Accounting_Login')
        },
        // sign方法：將綁定的input各資料放入userSignupArr陣列，將陣列資料存放localStorage
        goToSign() {
            //input資料不得為空、密碼與確認密碼需相同
            if (this.userSignup.account === "" || this.userSignup.pwd === "" || this.userSignup.repwd === "") {
                alert("不得為空");
                return;
            }
            if (this.userSignup.pwd !== this.userSignup.repwd) {
                alert("密碼與確認密碼不同");
                return;
            }
            // 第一個註冊的帳戶
            let arr = [];
            if (JSON.parse(localStorage.getItem("user")) === null) {
                this.userSignupArr.push(this.userSignup)
                arr = this.userSignupArr;
                localStorage.setItem("user", JSON.stringify(arr))
                alert("註冊成功");
                this.$router.push('/Accounting_Login')
                return;
            }
            //使用Array.prototype.find()判斷陣列中是否有與用戶輸入完全相同的對象，如果没有則新增至陣列
            arr = JSON.parse(localStorage.getItem("user"))
            let found = arr.find(item => item.account === this.userSignup.account);
            if (!found) {
                arr.push(this.userSignup)
                localStorage.setItem("user", JSON.stringify(arr));
                alert("註冊成功");
                this.$router.push('/Accounting_Login')
                return;
            } else{
                alert("該email已註冊");
            }

            // if (arr.length > 0) {
            //     arr.forEach(element => {
            //         if (element.account == this.userSignup.account) {
            //             alert("該email已註冊");
            //             return;
            //         } else {
            //             arr.push(this.userSignup)
            //             localStorage.setItem("user", JSON.stringify(arr));
            //             alert("註冊成功");
            //             return;
            //         }
            //     }
            //     )
            // }
        }
    }
}

</script>

<template>
    <div class="bgArea">
        <p class="title fontStyle">Sign Up</p>
        <div class="accountArea">
            <label for="" class="labelStyle fontStyle">Account</label><br>
            <input type="text" class="inputStyle" v-model="userSignup.account">
        </div>
        <div class="pwdArea">
            <label for="" class="labelStyle fontStyle">Password</label><br>
            <input type="password" class="inputStyle" v-model="userSignup.pwd">
        </div>
        <div class="repwdArea">
            <label for="" class="labelStyle fontStyle">Repeat Password</label><br>
            <input type="password" class="inputStyle" v-model="userSignup.repwd">
        </div>
        <div class="btnArea">
            <button type="button" class="btn fontStyle" @click="goToLogin">Cancel</button>
            <!-- 註冊按鈕點擊後執行sign方法 -->
            <button type="button" class="btn fontStyle" @click="goToSign">Sign Up</button>
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
    background-color: #4b85a0;

    .title {
        font-size: 40pt;
        font-weight: bolder;
        color: white;
    }

    .labelStyle {
        font-size: 13pt;
        font-weight: bold;
        color: white;
        margin-top: 10px;
    }

    .inputStyle {
        width: 35vw;
        height: 6vh;
        border-radius: 5px;
        background-color: #4b85a0;
        border: 1px solid white;
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
        background-color: white;
        color: #4b85a0;
        font-size: 13pt;
        font-weight: bold;
        margin: 20px 20px;
        line-height: 2.5vh;

        &:hover {
            background-color: #88aab9;
            color: white;
            box-shadow: 3px 3px lightgray;
            width: 105px;
            height: 40px;
            font-size: 15pt;
        }
    }
}
</style>