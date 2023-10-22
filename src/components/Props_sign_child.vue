<script>
export default {
    props: [
        "outputInfo"
    ],
}
</script>

<template>
    <div class="signup">
        <h3>確認帳戶資訊</h3>
        <!-- 基於資料安全性，props僅能單向傳遞，v-model禁用！(避免用戶在確認資料做更動) -->
        <p v-text="'姓名：'+ outputInfo.name"></p>
        <p v-text="'性別：'+ outputInfo.gender"></p> 
        <p v-text="'電話：'+ outputInfo.phone"></p> 
        <p v-text="'信箱：'+ outputInfo.email"></p> 
        <p v-text="'地址：'+ outputInfo.add"></p> 
        <p v-text="'畢業學校：'+ outputInfo.grad"></p> 
        <p v-text="'興趣：'+ outputInfo.hobbit"></p> 
        <!-- <ul class="list">
            <li>
                <label for="姓名">姓名：</label><br>
                <input type="text" name="" id="姓名" v-model="outputInfo.name" >
                <input type="text" name="" id="姓名" v-model="outputInfo[0]" disabled>

            </li>
            <li>
                <label for="性別">性別：</label>
                <input type="radio" name="" value="男" id="男" v-model="outputInfo.gender" disabled>
                <label for="男"> 男 </label>
                <input type="radio" name="" value="女" id="女" v-model="outputInfo.gender" disabled>
                <label for="女"> 女 </label>
            </li>
            <li>
                <label for="電話">電話：</label><br>
                <input type="tel" name="" id="電話" v-model="outputInfo.phone" disabled>
            </li>
            <li>
                <label for="信箱">信箱：</label><br>
                <input type="email" name="" id="信箱" v-model="outputInfo.email" disabled>
            </li>
            <li>
                <label for="地址">地址：</label><br>
                <input type="text" name="" id="地址" v-model="outputInfo.add" disabled>
            </li>
            <li>
                <label for="畢業學校">畢業學校：</label><br>
                <input type="text" name="" id="畢業學校" v-model="outputInfo.grad" disabled>
            </li>
            <li>
                <label for="興趣">興趣：</label><br>
                <textarea v-model="outputInfo.hobbit" disabled></textarea>
            </li>
        </ul> -->
    </div>
</template>

<style lang="scss" scoped>
.signup {
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        margin-bottom: 15px;
    }

    .list {
        list-style: none;
    }
}
</style>