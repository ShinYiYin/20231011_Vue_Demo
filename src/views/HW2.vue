<script>
export default{
    data(){
        return{
            arr:[1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
        
    }
}
</script>

<template>
    <div class="topArea">
    </div>

    <div class="secondArea">
        
    </div>

    <div class="thirdArea">
        <div class="leftArea"></div>
        <div class="rightArea">
            <div class="textArea">
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptas?</p>
            </div>
            <div class="arrArea" >
                <div class="boxArea" v-for="item in arr">
                    <div class="box"></div>
                    <p>Product name</p>
                </div>
            </div>
        </div>
    </div>

    <div class="bottomArea">
    </div>

</template>

<style lang="scss" scoped>

.topArea{
    width: 100%;
    height: 5vh;
    background-color: #9BDBD3;
}

.secondArea{
    width: 100%;
    height: 13vh;
    background-color: #D5F7F2;
}

.thirdArea{
    width: 100%;
    height: 70vh;
    display: flex;
    align-items: center;
    .leftArea{
        width: 25%;
        height: 90%;
        background-color: #9BDBD3;
        margin-left: 0;
    }
    .rightArea{
        width: 75%;
        height: 90%;
        display: flex;
        flex-direction: column;

        .textArea{
            width: 100%;
            height: 15%;
            display: flex;
            align-items: center;
            margin: 0 10px;
            font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            h2{
                margin: 0 10px;
            }
            p{
                margin: 0 10px;
            }
        }
        .arrArea{
            width: 100%;
            height: 85%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            .boxArea{
                width: 30%;
                height: 120px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .box{
                    width: 75px;
                    height: 75px;
                    background-color: #9BDBD3;
                }
                p{
                    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                    font-size: 10pt;
                    
                }
            }
        }
    }
}

.bottomArea{
    width: 100%;
    height: 5vh;
    background-color: #9BDBD3;
}
</style>