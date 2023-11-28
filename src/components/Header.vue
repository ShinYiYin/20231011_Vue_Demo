<script>
// 只有'vue-router' 有無setup都無差別
import { RouterLink } from "vue-router";
//將pinia內建立的資料庫(indexState)提供Vue使用
import { mapState, mapActions } from "pinia";
import indexState from "../stores/indexState";
export default {
    components: {
        RouterLink,
    },
    //將Pinia內資料庫的變數傳到Vue
    computed: {
        ...mapState(indexState, ["location", "locationInfo"]),
    },
    //將Pinia內資料庫的方法傳到Vue
    methods: {
        ...mapActions(indexState, ["getLocation", "setLocation"]),
    },
};
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: pink; font-weight: bolder;">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Sally's portfolio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto px-4">
                    <li class="nav-item">
                        <RouterLink class="routerItem nav-link active" to="/">Home</RouterLink>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Vue
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <RouterLink class="routerItem dropdown-item" to="/VtextAndVModel">v-text & v-model
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink class="routerItem dropdown-item" to="/Vfor">v-for</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="routerItem dropdown-item" to="/Von">v-on</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="routerItem dropdown-item" to="/Vbind">v-bind</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="routerItem dropdown-item" to="/VifAndVshow">v-if & v-show</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="routerItem dropdown-item" to="/VueRouter">Vue Router</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="routerItem dropdown-item" to="/Props">Props</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="routerItem dropdown-item" to="/Emit">Emit</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="routerItem dropdown-item" to="/ProvideAndInject">Provide & Inject
                                </RouterLink>
                            </li>
                            <li>
                                <RouterLink class="routerItem dropdown-item" to="/WatchAndComputed">Watch & Computed
                                </RouterLink>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="routerItem nav-link" to="/Practice_2">Practice</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- <RouterLink class="routerItem" to="/Bootstrap">Bootstrap</RouterLink> -->
    <!-- <RouterLink class="routerItem" to="/Practice">Practice</RouterLink> -->

    <!-- Vue把Pinia內資料庫的變數印出來 -->
    <!-- <p>{{ location }}</p> -->
</template>

<style lang="scss" scoped>

</style>
