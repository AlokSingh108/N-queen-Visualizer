<template>
    <div class="container">
        <!-- <Board :board="board" :boardSize="boardSize" />
        <ControlPanel :isSolving="isSolving" @start="startSolving" @stop="stopSolving" />
        <solution :solutions="solutions" :boardSize="boardSize" /> -->
    </div>
</template>
<!-- 
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
        const boardSize = 8;
        let board = reactive(Array.from({ length: boardSize }, () => -1));
        const isSolving = ref(false);
        let solutions = reactive([]);

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
            if (col >= boardSize) {
                solutions.push([...board]);
                await new Promise((resolve) => setTimeout(resolve, 1000)); // Add delay for visualization
                console.log(solutions);
                return;
            }
            if (isSolving.value === false) {
                return;
            }
            for (let row = 0; row < boardSize; row++) {
                board[col] = row;
                await new Promise((resolve) => setTimeout(resolve, 100)); // Add delay for visualization
                if (isSafe(row, col)) {
                    await new Promise((resolve) => setTimeout(resolve, 150)); // Add delay for visualization
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
            for (let i = 0; i < boardSize; i++) {
                board[i] = -1;
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
        };
    },
    provide() {
        return {

            Size: this.boardSize,
        }
    }
};
</script>

<style>
/* Add your container styling here */
</style> -->
