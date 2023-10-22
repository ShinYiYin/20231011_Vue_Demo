<script>
export default {
    data() {
        return {}
    },
    methods: {
    },
    props: [
        "checkName",
        "checkGender",
        "checkAge",
        "checkPhone",
        "checkEmail",
        "checkAdd",
        "checkGrad",
        "checkHobbit",
        "sign"
    ]
}
</script>

<template>
    <div class="bgArea">
        <div class="signupArea">
            <h3>確認帳戶資訊</h3>
            <!-- <p v-text="'姓名：' + checkName"></p> -->
            <p>姓名：{{ this.checkName }}</p>
            <p>性別：{{ this.checkGender }}</p>
            <p>電話：{{ this.checkPhone }}</p>
            <p>信箱：{{ this.checkEmail }}</p>
            <p>地址：{{ this.checkAdd }}</p>
            <p>畢業學校：{{ this.checkGrad }}</p>
            <p>興趣：{{ this.checkHobbit }}</p>

            <!-- 父元件傳遞方法 -->
            <button type="button" @click="sign('Success')" class="btn">Sign Up</button>
        </div>
        <div class="changeArea">
            <h3>更改帳戶資訊</h3>
            <ul class="list">
                <!-- 回傳給父元件進行更新 -->
                <!-- @change 或 ＠click都可以 但要點擊後取消選曲另一個選項，必須給予相同“name”！-->
                <!-- radio 在此不用v-bind 僅需要更新回傳資料 -->
                <li>
                    <label for="性別">性別：</label>
                    <input type="radio" name="gender" value="男" id="男"
                        @change="$emit(`update:checkGender`, $event.target.value)">
                    <label for="男"> 男 </label>
                    <input type="radio" name="gender" value="女" id="女"
                        @change="$emit(`update:checkGender`, $event.target.value)">
                    <label for="女"> 女 </label>
                </li>
                <li>
                    <label for="電話">更改電話：</label><br>
                    <!--添加 :value="checkPhone" 可使input顯示元父元件傳遞的資料-->
                    <input type="text" name="" id="電話" :value="checkPhone"
                        @input="$emit(`update:checkPhone`, $event.target.value)">
                    <!-- 印出後F12可以看到所有屬性 -->
                    <!-- <input type="text" :value="checkPhone" @input="console.log($event)"> -->
                </li>
                <li>
                    <label for="信箱">更改信箱：</label><br>
                    <input type="email" name="" id="信箱" :value="checkEmail"
                        @input="$emit(`update:checkEmail`, $event.target.value)">
                </li>
                <li>
                    <label for="地址">更改地址：</label><br>
                    <input type="text" name="" id="地址" :value="checkAdd"
                        @input="$emit(`update:checkAdd`, $event.target.value)">
                </li>
                <li>
                    <label for="畢業學校">更改畢業學校：</label><br>
                    <input type="text" name="" id="畢業學校" :value="checkGrad"
                        @input="$emit(`update:checkGrad`, $event.target.value)">
                </li>
                <li>
                    <label for="興趣">更改興趣：</label><br>
                    <textarea :value="checkHobbit"
                        @input="$emit(`update:checkHobbit`, $event.target.value)"></textarea>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bgArea {
    width: 100%;
    height: 90vh;
    background-color: rgb(230, 230, 230);
    display: flex;
    justify-content: space-around;
    align-items: center;

    .signupArea {
        display: flex;
        flex-direction: column;
        align-items: center;

        h3 {
            margin-bottom: 15px;
        }

        .list {
            list-style: none;
        }

        .btn {
            border-radius: 5px;
            background-color: gray;
            color: white;

            &:hover {
                background-color: rgb(197, 197, 197);
                color: white
            }
        }
    }

    .changeArea {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 15px;
        .list {
            list-style: none;
        }
    }
}
</style>