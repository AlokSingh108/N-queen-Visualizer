<template>
    <div>
        <div v-if="solutions != undefined && solutions.length > 0" class="d-flex justify-sm-space-around flex-wrap">
            <div v-for="(sol, index) in solutions" :key="index" class="parent ma-3">
                <h1>Solution {{ index + 1 }}:</h1>
                <div v-for="(col, i) in boardSize" :key="col"  class='parent'>
                    <div v-for="(row, idx) in solutions[index]" :key="row" :class = "(isSolutionFound===true && index+1==solutions.length)?((i + idx)%2 ? 'child1large' : 'child2large'):((i + idx)%2 ? ['child1'] : ['child2'])">
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
        isSolutionFound: Boolean,
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

.child1large {
    width: 60px;
    height: 60px;
    display: inline-block;
    background-color: grey;
    font-size: 30px;
    border: 1px solid black;
    text-align: center;
    vertical-align: middle;
    
    
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
}

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
    transition: all 1s ;
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
    transition: all 1s ;
}
</style>