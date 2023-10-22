<script>
import Emit_sign_child1 from "../components/Emit_sign_child1.vue";
import Emit_sign_child2 from "../components/Emit_sign_child2.vue";
export default {
    data() {
        return {
            acceptData: {
            },
            page: false
        }
    },
    components: {
        Emit_sign_child1,
        Emit_sign_child2,
    },
    methods: {
        accept(data) {
            this.acceptData = data
            this.page = !this.page
        },
        // 傳遞方法
        signup(parm) {
            console.log(parm)
            // this.page = !this.page
        },
    },
}
</script>


<template>
    <p>從子元件所接受到的數據：{{ this.acceptData }}</p>
    <div v-show="page == false" class="signup">
        <Emit_sign_child1 @send="accept"/>
    </div>
    <div v-show="page == true" class="check">
        <!-- (但若要v-model進行雙向綁定，使子元件可再將輸入資料回傳給父元件進行更新，此時資料內的每物件需要獨立寫) (姓名以外進行示範)-->
        <Emit_sign_child2 :checkName="acceptData.name"
                        v-model:checkGender="acceptData.gender"
                        v-model:checkPhone="acceptData.phone"
                        v-model:checkEmail="acceptData.email"
                        v-model:checkAdd="acceptData.add"
                        v-model:checkGrad="acceptData.grad"
                        v-model:checkHobbit="acceptData.hobbit"
                        :sign="signup"/>

        <!-- 子元件props不輸入任何暗號，也會自動解構 -->
        <!-- <Emit_sign_child2 v-bind="acceptData" :sign="signup"/> -->
        
        
    </div>
</template>

<style lang="scss" scoped>
.btn {
            border-radius: 5px;
            background-color: gray;
            color: white;

            &:hover {
                background-color: rgb(197, 197, 197);
                color: white
            }
        }
</style>