// Pinia提供一個編輯資料的空間（套件），在這支資料庫(indexState)底下我們可自己編輯變數、方法等放入pinia
//可以建立多個資料庫（只是檔案格式以js形式）
//pinia變數只能在pinia改，不能在vue改變

import { defineStore } from "pinia";

//類似addEventListener("click", ()=>{})
export default defineStore("indexState", {
    //data
    state: () => ({
        //範例
        location: 1,
    }),
    //computed (沒有this，本身能當變數)
    getters: {
        //locationInfo:(state) => {`現在位置${state.location}`}
        locationInfo(state) {
            return `現在位置${state.location}`;
        },
    },
    //methods
    actions: {
        getLocation() {
            console.log(this.location);
        },
        setLocation(num) {
            this.location = num;
        },
    },
});
