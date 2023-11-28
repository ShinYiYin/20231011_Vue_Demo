<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
    components: {
        RouterLink,
        RouterView,
    }
}
</script>

<template>
    <div class="bgArea">
        <div class="line">
            <a href="" class="scroll-icon">
                <i class="fas fa-caret-up"></i>
            </a>
        </div>
        <div class="area-1">
            <div class="section">
                <p>HW1</p>
                <button type="button">
                    <RouterLink class="routerItem" to="/HW1">HW1</RouterLink>
                </button>
                <img src="../../public/HWPhoto/Snipaste_2023-10-28_22-37-02.png" alt="" class="HW1Img">
            </div>
        </div>
        <div class="area-2">
            <div class="section">
                <p>HW2</p>
                <button type="button">
                    <RouterLink class="routerItem" to="/HW2">HW2</RouterLink>
                </button>
            </div>
        </div>
        <div class="area-1">
            <div class="section">
                <p>HW3</p>
                <button type="button">
                    <RouterLink class="routerItem" to="/HW3">HW3</RouterLink>
                </button>
            </div>
        </div>
        <div class="area-2">
            <div class="section">
                <p>HW4</p>
                <button type="button">
                    <RouterLink class="routerItem" to="/HW4">HW4</RouterLink>
                </button>
            </div>
        </div>
        <div class="area-1">
            <div class="section">
                <p>Waterfall</p>
                <button type="button">
                    <RouterLink class="routerItem" to="/Waterfall">Waterfall</RouterLink>
                </button>
            </div>
        </div>
        <div class="area-2">
            <div class="section">
                <p>Estate</p>
                <button type="button">
                    <RouterLink class="routerItem" to="/Estate">Estate</RouterLink>
                </button>
            </div>
        </div>
        <div class="area-1">
            <div class="section">
                <p>Accounting</p>
                <button type="button">
                    <RouterLink class="routerItem" to="/Accounting_Login">Accounting</RouterLink>
                </button>
            </div>
        </div>
    </div>
    <!-- <ul>
        <li><RouterLink class="routerItem" to="/Props_sign">Props_sign</RouterLink></li>
        <li><RouterLink class="routerItem" to="/Emit_sign">Emit & Props_sign</RouterLink></li>
    </ul> -->
    <RouterView />
</template>

<style lang="scss" scoped>
.bgArea {
    width: 100vw;
    padding: 20px 20px;
    background-color: rgb(101, 167, 197);
    position: relative;

    .line {
        height: 100%;
        width: 4px;
        background-color: white;
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
    }
    .area-1 {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        // .section::before{
        //     right: -7px;
        // }
        .section::before{
            right: -40px;
        }
        .section::after{
            right: -40px;
        }
    }

    .area-2 {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        // .section::before{
        //     left: -7px;
        // }
        .section::before{
            left: -40px;
        }
        .section::after{
            left: -58px;
        }
        
    }

    .section{
        background-color: white;
        border-radius: 5px;
        width: calc(50% - 40px);
        height: 100px;
        padding: 20px;        
        position: relative;
        // &::before{
        //     content: "";
        //     position: absolute;
        //     width: 15px;
        //     height: 15px;
        //     background-color: white;
        //     top: 30px;
        //     transform: rotate(45deg);
        // }
        // border: 1px solid red;
        &::before{
            content: "";
            position: absolute;
            width: 40px;
            height: 5px;
            background-color: white;
            top: 50px;
        }
        &::after{
            content: "";
            position: absolute;
            width: 17px;
            height: 17px;
            border-radius: 50%;
            background-color: white;
            top: 45px;
            transform: translateX(50%);
        }
        .section:hover{
            transform: scale(1.2);
        }
    }
    button{
        border-radius: 5px;
        border: none;
        background-color: rgb(85, 164, 191);
    }
    .routerItem{
        text-decoration: none;
        color: white;
    }
    .fa-star, .scroll-icon{
        //這行不太懂 bgArea relative
        position: absolute;
        // background-color: #f2f2f2;
        // width: 40px;
        // height: 40px;
        // text-align: center;
        // line-height: 40px;
        // border-radius: 50%;
        // color: rgb(85, 164, 191);
        // box-shadow: 0 0 0 4px white, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
    }
    .scroll-icon{
        font-size: 25px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        // 待解決
        transform: translateY(-50%);
    }
    .HW1Img{
        width: 50px;
        height: 50px;
        position: relative;
        bottom: 30px;
        right: -20px;
    }
}
</style>