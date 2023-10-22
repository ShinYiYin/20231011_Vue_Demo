<script>
export default {
    data() {
        return {
            inputInfo:{
                name:"",
                gender:"",
                phone:"",
                email:"",
                add:"",
                grad:"",
                hobbit:"",
            },
        }
    },
    methods:{
        nextPage(){
            this.$emit("send", this.inputInfo)
            
        }
    }
}
</script>

<template>
    <div class="bgArea">
        <div class="signup">
            <h3>註冊帳戶</h3>
            <ul class="list">
                <li>
                    <label for="姓名">姓名：</label><br>
                    <input type="text" name="" id="姓名" v-model="inputInfo.name">
                </li>
                <li>
                    <label for="性別">性別：</label>
                    <input type="radio" name="" value="男" id="男" v-model="inputInfo.gender">
                    <label for="男"> 男 </label>
                    <input type="radio" name="" value="女" id="女" v-model="inputInfo.gender">
                    <label for="女"> 女 </label>
                </li>
                <li>
                    <label for="電話">電話：</label><br>
                    <input type="tel" name="" id="電話" v-model="inputInfo.phone">
                </li>
                <li>
                    <label for="信箱">信箱：</label><br>
                    <input type="email" name="" id="信箱" v-model="inputInfo.email">
                </li>
                <li>
                    <label for="地址">地址：</label><br>
                    <input type="text" name="" id="地址" v-model="inputInfo.add">
                </li>
                <li>
                    <label for="畢業學校">畢業學校：</label><br>
                    <input type="text" name="" id="畢業學校" v-model="inputInfo.grad">
                </li>
                <li>
                    <label for="興趣">興趣：</label><br>
                    <textarea v-model="inputInfo.hobbit"></textarea>
                </li>
            </ul>
            <button type="button" @click="nextPage()" class="btn">Next Page</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bgArea {
    width: 100%;
    height: 90vh;
    background-color: rgb(230, 230, 230);
    display: flex;
    justify-content: center;
    align-items: center;

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
}
</style>