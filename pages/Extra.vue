<template>
    <div>
        <div><v-btn @click="findsolution()">start</v-btn></div>
        <div class="d-flex">
            <v-sheet v-for="i in 9" :key="i">
                <v-sheet v-for="j in 9" :key="j">
                    <v-sheet class="pa-2" align="middle" height="60" width="60" border
                        :color="((i + j) % 2) ? 'blue' : 'teal-accent-3'">
                        <v-icon v-show="newboard[i - 1][j - 1] == 1" icon="mdi-chess-queen" color="black"></v-icon>
                    </v-sheet>
                </v-sheet>
                <br>
            </v-sheet>
        </div>
    </div>
</template>

<script>
// import { waitForDebugger } from 'inspector';
import { ref, watch, computed } from 'vue';
export default {
    setup() {
        const board = ref([[0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]]);
        board.__v_isShallow = true;
        // // board.dep.n=3;
        // console.log(board.value[0]);


        function check(i, j) {
            for (let k = 0; k < i; k++) {
                if (board.value[k][j] == 1) return false;
            }
            for (let k = 0; k < j; k++) {
                if (board.value[i][k] == 1) return false;
            }
            for (let k = 1; i - k >= 0 && j - k >= 0; k++) {
                if (board.value[i - k][j - k] == 1) return false;
            }
            for (let k = 1; i - k >= 0 && j + k < 9; k++) {
                if (board.value[i - k][j + k] == 1) return false;
            }
            return true;
        }


        var wait = (ms) => {
            const start = Date.now();
            let now = start;
            while (now - start < ms) {
                now = Date.now();
            }
        }
        watch(board, (newvalue) => {
            console.log(newvalue);
        })

        function filp(i, j) {
            if (board.value[i][j] == 1) {
                board.value[i][j] = 0;
            }
            else {
                board.value[i][j] = 1;
            }
            return;
        }

        function find(i) {
            if (i == 9) {
                return;
            }
            for (let j = 0; j < 9; j++) {
                console.log(board, i, j);
                filp(i, j);

                // find(i+1);
                // if(check(i,j)){
                // //     board.value[i][j] = 1;
                wait(500);
                //     find(i+1);
                // //     board.value[i][j]=0;
                // }
                // filp(i,j);
            }
            return;
        }

        function findsolution() {
            // board.value[2][3]=1;
            find(0);
            find(1);
        }
        const newboard = computed(function () {
            return board.value;
        })
        return {
            board,
            findsolution,
            newboard
        }
    }
}
</script>

<style scoped></style>