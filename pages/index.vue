<template>
    <div class="container">
        <div class="cen">
            <label for="">Number of Queens</label><br>
            <input type="text" :disabled="isSolving" v-model.number="NoQ">
        </div>
        <Board :board="board" :boardSize="boardSize" :isSolutionFound="isSolutionFound" />
        <!-- <template> -->
            <div class="w-75 mx-auto">
                <label for="" class="mx-3">Speed Bar</label><br>
                <v-slider v-model="val" :min="0" :max="500" :step="20" thumb-label></v-slider>
            </div>
        <!-- </template> -->
        <ControlPanel :isSolving="isSolving" @start="startSolving" @stop="stopSolving" />
        <solution :solutions="solutions" :boardSize="boardSize" :isSolutionFound="isSolutionFound" />
    </div>
</template>

<script>
import { ref, reactive } from 'vue';
import Board from '/components/Board.vue';
import ControlPanel from '/components/ControlPanel.vue';
import solution from '/components/solution.vue';


export default {
    components: {
        Board,
        ControlPanel,
        solution,
    },
    setup() {
        let boardSize = ref(5);
        let board = reactive(Array.from({ length: boardSize.value }, () => -1));
        const isSolving = ref(false);
        let solutions = reactive([]);
        let NoQ = ref(5);
        let val = ref(100);
        let isSolutionFound=ref(false);

        // console.log(board);

        const isSafe = (row, col) => {
            for (let i = 0; i < col; i++) {
                if (board[i] === row || Math.abs(board[i] - row) === Math.abs(i - col)) {
                    return false;
                }
            }
            return true;
        };

        const solveNQueensUtil = async (col) => {
            if (col >= boardSize.value) {
                isSolutionFound.value=true;
                solutions.push([...board]);
                await new Promise((resolve) => setTimeout(resolve, 2000)); // Add delay for visualization
                isSolutionFound.value=false;
                await new Promise((resolve) => setTimeout(resolve, 1000)); // Add delay for visualization
                console.log(solutions);
                return;
            }
            if (isSolving.value === false) {
                return;
            }
            for (let row = 0; row < boardSize.value; row++) {
                board[col] = row;
                // await new Promise((resolve) => setTimeout(resolve, 100)); // Add delay for visualization
                // console.log(val.value);
                await new Promise((resolve) => setTimeout(resolve, 500 - val.value)); // Add delay for visualization
                if (isSafe(row, col)) {
                    await new Promise((resolve) => setTimeout(resolve, 500 - val.value)); // Add delay for visualization
                    // await new Promise((resolve) => setTimeout(resolve, 150)); // Add delay for visualization
                    await solveNQueensUtil(col + 1)
                }
                if (isSolving.value === false) {
                    return;
                }
                board[col] = -1; // Backtrack
            }
            return;
        };

        const startSolving = async () => {
            isSolving.value = true;
            solutions.length = 0;
            boardSize.value = NoQ.value;
            board.length = 0;
            for (let i = 0; i < NoQ.value; i++) {
                board.push(-1);
            }
            // board= reactive(Array.from({ length: boardSize }, () => -1));
            await solveNQueensUtil(0);
            isSolving.value = false;
        };

        const stopSolving = () => {
            isSolving.value = false;
        };

        return {
            board,
            boardSize,
            isSolving,
            startSolving,
            stopSolving,
            solutions,
            NoQ,
            val,
            isSolutionFound,
        };
    },

};
</script>

<style>
.cen {

    text-align: center;
    margin-top: 10px;

}

input[type=text] {
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 3px solid #ccc;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
}

/* Add your container styling here */
</style>
