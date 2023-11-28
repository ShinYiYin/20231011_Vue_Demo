<script>
export default {
    data() {
        return {
            // addPage:false,
            delPage: false,
        }
    },
    components: {
    },
    methods: {
        addShow() {
            this.$emit('show', this.addPage)
        },
        delPageShow(x) {
            this.$emit('del', x)
        },
        logOut() {
            this.$router.push('/Accounting_Login')
        }
    },
    props: [
        "outputData",
        "income",
        "expense",
        "balance",
    ],
}
</script>

<template>
    <div class="bgArea fontStyle">
        <div class="blueArea">
            <p class="title">Expense Tracker</p>
            <p class="text">Your Balance</p>
            <div class="text"> {{ '$ ' + this.balance }}</div>
            <button type="button" class="logOutBtn" @click="logOut()">Log Out</button>
        </div>

        <div class="whiteArea">
            <div class="top">
                <div class="topLeft">
                    <p>Income</p>
                    <div> {{ this.income }}</div>
                </div>
                <div class="topRight">
                    <p>Expense</p>
                    <div> {{ this.expense }}</div>
                </div>
            </div>
            <!-- 點擊按鈕 顯示add元件 -->
            <button class="addBtn fontStyle" @click="addShow()">Add transaction</button>
            <!-- 花費項目 -->
            <div class="itemArea fontStyle">
                <ul>
                    <li class="item" v-for="(item, index) in outputData">
                        <div class="itemText">
                            <p class="spanText">{{ item.text }}</p>
                        </div>
                        <div class="itemAmount">
                            <p class="spanAmount">{{ item.amount }}</p>
                        </div>
                        <div class="btnArea">
                            <!-- delPageShow(x) {
                                    this.$emit('del', x ) }-->
                            <button class="delBtn" @click="delPageShow(index)">Delete</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.fontStyle {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
}

.bgArea {
    width: 100%;
    height: 95vh;
    display: flex;

    .blueArea {
        width: 30vw;
        height: 100%;
        background-color: #4b85a0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .title {
            color: white;
            font-size: 30pt;
            margin-bottom: 50px;
        }

        .text {
            color: white;
            font-size: 20pt;
        }

        .logOutBtn {
            width: 100px;
            height: 37px;
            background-color: white;
            color: #4b85a0;
            font-size: 13pt;
            font-weight: bold;
            margin: 50px 20px 0;
            line-height: 2.5vh;
            border-radius: 5px;
            border: none;

            &:hover {
                background-color: #88aab9;
                color: white;
                box-shadow: 3px 3px lightgray;
                width: 105px;
                height: 40px;
                font-size: 15pt;
            }
        }
    }

    .whiteArea {
        width: 70vw;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .top {
            width: 100%;
            height: 30vh;
            display: flex;
            justify-content: space-around;
            align-items: center;

            .topLeft {
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: 20pt;
                color: green;
            }

            .topRight {
                display: flex;
                flex-direction: column;
                align-items: center;
                font-size: 20pt;
                color: red;
            }
        }

        .addBtn {
            width: 180px;
            height: 35px;
            background-color: #4b85a0;
            color: white;
            border-radius: 5px;
            border: none;
            font-size: 12pt;

            &:hover {
                width: 182px;
                height: 37px;
                background-color: #88aab9;
                box-shadow: 2px 2px lightgray;
            }
        }

        .itemArea {
            width: 100%;
            height: 65%;
            display: flex;
            justify-content: center;
            overflow: scroll;

            .item {
                width: 500px;
                height: 40px;
                border: 2px solid #4b85a0;
                border-radius: 10px;
                list-style: none;
                display: flex;
                align-items: center;
                margin: 10px auto;

                .itemText {
                    width: 200px;
                    height: inherit;
                    line-height: 40px;
                    padding-left: 15px;
                }

                .itemAmount {
                    width: 200px;
                    height: inherit;
                    line-height: 40px;
                }

                .btnArea {
                    width: 70px;
                    height: inherit;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-left: 20px;

                    .delBtn {
                        width: 50px;
                        height: 30px;
                        background-color: #4b85a0;
                        color: white;
                        border-radius: 5px;
                        border: none;
                        font-size: 10pt;

                        &:hover {
                            background-color: #88aab9;
                            box-shadow: 2px 2px lightgray;
                        }
                    }
                }
            }
        }
    }
}
</style>