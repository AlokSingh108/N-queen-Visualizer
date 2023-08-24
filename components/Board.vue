<template>
    <div>
        <div class="parent">
            <div v-for="col in boardSize" :key="col">
                <div v-for="row in board" :key="row" class="child">
                    <Queen :isQueenPlaced="(row == (col - 1))" />
                </div>
            </div>
            <br>
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
        board: Array,
        boardSize: Number,
    },
};
</script>

<style scoped>
/* Add your board styling here */
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
}

.parent {
    /* border: 1px solid black; */
    /* margin: 1rem; */
    padding: 4rem;

    text-align: center;
}
</style>
