<script>
import { RouterLink, RouterView} from 'vue-router';
export default{
    components:{
        RouterLink,
        RouterView,
    }
}
</script>

<template>
    <ul>
        <li><RouterLink class="routerItem" to="/HW1">HW1</RouterLink></li>
        <li><RouterLink class="routerItem" to="/HW2">HW2</RouterLink></li>
        <li><RouterLink class="routerItem" to="/HW3">HW3</RouterLink></li>
        <li><RouterLink class="routerItem" to="/HW4">HW4</RouterLink></li>
        <li><RouterLink class="routerItem" to="/Waterfall">Waterfall</RouterLink></li>
        <!-- 寫法2 於index.js 加上alias-->
        <li><RouterLink class="routerItem" to="/Estate">Estate</RouterLink></li>
        <!-- 欲將Estate點進去即顯示Home內容 -->
        <!-- 寫法1:未加alias <RouterLink class="routerItem" to="/Estate/EstateHome">Estate</RouterLink> -->
        <!-- 自己寫法：<RouterLink class="routerItem" to="/Estate">Estate</RouterLink> -->
        <li><RouterLink class="routerItem" to="/Props_sign">Props_sign</RouterLink></li>
        <li><RouterLink class="routerItem" to="/Emit_sign">Emit & Props_sign</RouterLink></li>
        <li><RouterLink class="routerItem" to="/Accounting_Login">Accounting</RouterLink></li>
    </ul>
    <RouterView />
    
</template>

<style lang="scss" scoped>
.routerItem{
    color: black;

}

</style>