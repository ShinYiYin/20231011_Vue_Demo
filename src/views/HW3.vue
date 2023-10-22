<script>
export default {
    data() {
        return {
            arr1: ['../../public/cakePhoto/2.png',
                    '../../public/cakePhoto/3.png',
                    '../../public/cakePhoto/4.png',
                    ],
            arr2: ['../../public/cakePhoto/5.png', 
                    '../../public/cakePhoto/6.png', 
                    '../../public/cakePhoto/7.png']
        }

    }
}
</script>

<template>
    <div class="bgArea">
        <div class="header page">
            <div class="headerSquare">
            </div>
            <img src="../../public/cakePhoto/Group 10.png" alt="" class="hanburger">
        </div>

        <div class="title page">
            <div class="titleText">
                <h1>Title</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia recusandae pariatur sint repellat
                    suscipit. Iste voluptatem quibusdam esse temporibus. Saepe, assumenda! Rerum exercitationem, magni
                    commodi praesentium dolorem odio! Voluptatibus, deleniti!</p>
            </div>
            <div class="titleImg"></div>
        </div>

        <div class="sale page">
            <h1>On sale</h1>
            <div class="saleImgArea">
                <div class="saleImg" v-for=" element in arr1">
                    <img :src="element">
                    <button type="button" class="saleBtn">item</button>
                </div>
            </div>
        </div>

        <div class="news page">
            <h1>News</h1>
            <div class="cardArea">
                <div class="card" style="width: 16rem;" v-for=" element in arr2">
                    <img :src="element" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Detail</a>
                    </div>
                </div>
            </div>
            <button type="button" class="newBtn">More</button>
        </div>

        <div class="arrival page">
            <img src="../../public/cakePhoto/8.png" alt="">
            <div class="arrivalText">
            <h1>New Arrival</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis tempora laudantium aliquam, perferendis dolorem consectetur obcaecati unde, eaque illum nisi eius mollitia rerum beatae! Vel facere quo nisi asperiores cum?</p>
            </div>
        </div>

        <div class="footer page">
            <p>Copyright©2023 by kouhei</p>
        </div>


    </div>
</template>

<style lang="scss" scoped>
$mainColor: #DAA19F;

.bgArea {
    width: 100%;
    height: 295vh;
    background-color: #FEFAEC;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    &::after{
        content: "";
        width: 300px;
        height: 250px;
        background-color: $mainColor;
        position: absolute;
        left: 0;
        bottom: 8%;
        z-index: 1;
    }
}

.page {
    width: 90%;
    display: flex;
    margin-top: 5%;
}

.header {
    height: 20vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .headerSquare {
        width: 50px;
        height: 50px;
        background-color: $mainColor;
    }

    .hanburger {
        width: 20px;
        height: 20px;
    }
}

.title {
    height: 40vh;
    justify-content: space-between;

    .titleText {
        height: 100%;
        width: 40%;

        h1 {
            margin-left: 10%;
        }
    }

    .titleImg {
        height: 100%;
        width: 60%;
        background-image: url("../../public/cakePhoto/1.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: 100% 0%;
    }

}

.sale {
    height: 50vh;
    flex-direction: column;
    align-items: center;

    .saleImgArea {
        width: 100%;
        height: 90%;
        display: flex;
        justify-content: space-between;

        .saleImg {
            width: 30%;
            height: 100%;
            display: flex;
            justify-content: center;
            position: relative;

            .saleBtn{
                width: 100px;
                height: 40px;
                color: white;
                font-size: 20pt;
                border: 0;
                background-color: $mainColor;
                position: absolute;
                bottom: 20px;

            }
        }
    }
}

.news {
    height: 80vh;
    flex-direction: column;
    align-items: center;
    
    .cardArea{
        width: 100%;
        height: 80%;
        display: flex;
        justify-content: space-between;

        .card-body{
            background-color: white;

            .btn{
                background-color: black;
                color: white;
                border: none;
                border-radius: 0%;
            }
        }
    }

    .newBtn {
        width: 15%;
        height: 8%;
        background-color: $mainColor;
        border: 0;
        color: white;
        font-size: 16pt;
        box-shadow: 2px 2px 2px grey;
        margin-top: 5vh;
    }
}

.arrival {
    height: 50vh;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10vh;

    img{
        width: 350px;
        height: 200px;
        z-index: 2;
    }

    .arrivalText{
        width: 35%;
        height: 80%;
        background-color: #F0CFC2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p{
            margin: 1% 10%;
        }
    }
}

.footer {
    height: 10vh;
    width: 100%;
    margin: 0;
    background-color: $mainColor;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 12pt;
}</style>