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
        <div class="cardArea">
            <div class="card" style="width: 18rem;">
                <img src="../../public/HWPhoto/HW1.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Layout Practice 1</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <RouterLink class="routerItem btn btn-primary" to="/HW1">View More</RouterLink>
                </div>
            </div>
        </div>
        <div class="cardArea">
            <div class="card" style="width: 18rem;">
                <img src="../../public/HWPhoto/HW2.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Layout Practice 2</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <RouterLink class="routerItem btn btn-primary" to="/HW2">View More</RouterLink>
                </div>
            </div>
        </div>
        <div class="cardArea">
            <div class="card" style="width: 18rem;">
                <img src="../../public/HWPhoto/HW3.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Dessert</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <RouterLink class="routerItem btn btn-primary" to="/HW3">View More</RouterLink>
                </div>
            </div>
        </div>
        <div class="cardArea">
            <div class="card" style="width: 18rem;">
                <img src="../../public/HWPhoto/HW4.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Guess Number</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                        <RouterLink class="routerItem btn btn-primary" to="/HW4">View More</RouterLink>
                </div>
            </div>
        </div>
        <div class="cardArea">
            <div class="card" style="width: 18rem;">
                <img src="../../public/HWPhoto/Estate.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Estate</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                        <RouterLink class="routerItem btn btn-primary" to="/Estate">View More</RouterLink>
                </div>
            </div>
        </div>
        <div class="cardArea">
            <div class="card" style="width: 18rem;">
                <img src="../../public/HWPhoto/Accounting.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Accounting</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                        card's content.</p>
                    <RouterLink class="routerItem btn btn-primary" to="/Accounting_Login">View More</RouterLink>
                </div>
            </div>
        </div>
    </div>
    <RouterView />
</template>

<style lang="scss" scoped>
.bgArea {
    padding: 50px 100px;
    background-color: rgb(255, 255, 255);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
    grid-row-gap: 50px;

    .cardArea {
        display: flex;
        justify-content: center;
        .card{
            border-radius: 10px;
            box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

        }
        .card:hover{
            transform: scale(1.05);
        }
    }
}

.btn {
    background-color: pink;
    border: none;
}
</style>