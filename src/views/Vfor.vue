<script>
export default {
    data() {
        return {
            arr: [1, 2, 3, 4, 5],
            arr2: [
                {
                    name: "JoJo",
                    age: 18,
                    address: "XXX路1號"
                },
                {
                    name: "Tom",
                    age: 21,
                    address: "XXX路2號"
                },
                {
                    name: "Mary",
                    age: 23,
                    address: "XXX路3號"
                },
            ]
        }
    }
}
</script>

<template>
    <h1>v-for</h1>
    <!-- arr -->
    <p v-for=" item in arr">{{ item }}</p>

    <!-- arr2 -->
    <ol v-for="x in arr2">
        <li>{{ x.name }}</li>
        <li>{{ x.age }}</li>
        <li>{{ x.address }}</li>
    </ol>
</template>

<style></style>
