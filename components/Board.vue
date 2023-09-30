<template>
    <div>
        <div class="parent">
            <div class="newDiv">
                <div v-for="(col, i) in boardSize" :key="col">
                    <div v-for="(row, index) in board" :key="row"
                        :class="(i + index) % 2 ? ((isSolutionFound == true) ? ['child1large'] : 'child1') : ((isSolutionFound == true) ? ['child2large'] : 'child2')">
                        <!-- <div :class = "(i + idx)%2 ? 'child1' : 'child2'" ></div> -->
                        <Queen :isQueenPlaced="(row == (col - 1))" />

                    </div>
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
        isSolutionFound: Boolean,
    },
};
</script>

<style scoped>
/* Add your board styling here */

.child1large {
    width: 60px;
    height: 60px;
    display: inline-block;
    background-color: grey;
    font-size: 30px;
    border: 1px solid black;
    text-align: center;
    vertical-align: middle;
    transition: all 1s ;
    
    /* margin: 0 auto; */
}


.child2large {
    width: 60px;
    height: 60px;
    display: inline-block;
    background-color: white;
    font-size: 30px;
    border: 1px solid black;
    text-align: center;
    vertical-align: middle;
    transition: all 1s ;
}


.exit {}

.child2 {
    display: inline-block;
    background-color: rgba(143 100 10);
    font-size: 30px;
    border: 1px solid black;
    text-align: center;
    /* padding: 1rem 1rem; */
    height: 50px;
    width: 50px;
    vertical-align: middle;
}

.child1 {
    display: inline-block;
    background-color: rgb(243 234 109);
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

.newDiv {
    border: 4px solid #437979;
    ;
    display: inline-block;
}</style>
