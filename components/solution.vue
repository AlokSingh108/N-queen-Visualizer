<template>
    <div>
        <div v-if="solutions != undefined && solutions.length > 0" class="d-flex justify-sm-space-around flex-wrap">

            <div v-for="(sol, index) in solutions" :key="index" class="parent ma-3">
                <h1>Solution {{ index + 1 }}:</h1>
                <div v-for="col in boardSize" :key="col" class="parent">
                    <div v-for="row in solutions[index]" :key="row" class="child">
                        <Queen :isQueenPlaced="(row == (col - 1))" />
                    </div>
                </div>
                <br>
            </div>
        </div>
    </div>
</template>

<script>
import Queen from './Queen.vue';
export default {
    components: {
        Queen,
    },
    props: {
        solutions: Array,
        boardSize: Number,
    },
};
</script>

<style scoped>
.parent {
    /* border: 1px solid black; */
    /* margin: 1rem; */
    /* padding: 2rem 2rem; */

    text-align: center;
}

.child {
    display: inline-block;
    background-color: rgba(17, 138, 145, 0.715);
    font-size: 30px;
    border: 1px solid black;
    text-align: center;
    /* padding: 1rem 1rem; */
    height: 50px;
    width: 50px;
    vertical-align: middle;
}</style>