<script>
export default {
    methods:{
        goToSearch(){
            this.$router.push('/Estate/EstateSearch')
        }
    }
}
</script>

<template>
    <div class="middle">
        <div class="contentArea">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../../public/estatePhoto/banner1.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../public/estatePhoto/banner2.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../public/estatePhoto/banner3.png" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
    <div class="footer">
        <button type="button" class="footerBtn" @click="goToSearch">タッグから探す</button>
        <button type="button" class="footerBtn" @click="goToSearch">エリアから探す</button>
        <button type="button" class="footerBtn" @click="goToSearch">沿線 駅から探す</button>
    </div>

</template>

<style lang="scss" scoped>
$mainColor: #4A5365;
$backgroundColor: #BFC0CC;

    .middle {
        width: 100%;
        height: auto;

        .carousel-indicators {

            button {
                width: 120px;
                height: 6px;
                margin-left: 15px;
                margin-right: 15px;
            }
        }
    }

    .footer {
        background-color: $backgroundColor;
        width: 100%;
        height: 40vh;
        display: flex;
        justify-content: space-around;
        padding-top: 50px;
        padding-left: 200px;
        padding-right: 200px;

        .footerBtn {
            width: 200px;
            height: 100px;
            border: 0;
            border-radius: 5px;
            background-color: $mainColor;
            color: white;
            font-size: 10pt;
            &:hover{
                background-color: #5a6377;
            }
        }

    }
</style>