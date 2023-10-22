<script>
import Accounting_Add from "../components/Accounting_Add.vue";
import Accounting_Del from "../components/Accounting_Del.vue";
import Accounting_Login from "../components/Accounting_Login.vue";
import Accounting_Show from "../components/Accounting_Show.vue";
import Accounting_Signup from "../components/Accounting_Signup.vue";

export default {
    data() {
        return {
            addPage: false,
            acceptData: [],
        }
    },
    components: {
        Accounting_Show,
        Accounting_Add,
        Accounting_Del,
        Accounting_Login,
        Accounting_Signup,
    },
    methods: {
        addShow() {
            this.addPage = !this.addPage
        },
        accept(data) {
            this.acceptData.push(data);
        }

    }
}
</script>

<template>
    <p>Accounting father</p>
    <ol>
        <li v-for="element in acceptData">從子元件所接受到的數據：{{ element }}</li>
    </ol>
    <div class="Area">
        <div class="Show">
            <Accounting_Show @show="addShow" />
        </div>
        <div class="add">
            <Accounting_Add v-if="addPage" @show="addShow" @item="accept" />
        </div>
    </div>

    <Accounting_Del />
    <Accounting_Login />
    <Accounting_Signup />
</template>

<style lang="scss" scoped>
.Area {
    width: 800px;
    height: 500px;
    border: 1px solid green;
    z-index: 0;
    position: relative;
}

.show {
    border: 1px solid red;
    z-index: 1;
    position: absolute;
}

.add {
    border: 1px solid blue;
    z-index: 2;
    margin-top: 50px;
    position: absolute;
}
</style>