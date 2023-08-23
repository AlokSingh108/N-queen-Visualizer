<template>
    <div>
        <div v-if="solutions!=undefined && solutions.length>0">

            <div v-for="(sol,index) in solutions" :key="index">
                Solution {{ index+1 }}:
                <div class="grid-container">
                    <div v-for="row in solutions[index]" :key="row" class="board-row">
                        <div v-for="col in boardSize" :key="col" class="board-cell grid-item">
                            <Queen :isQueenPlaced="(row == (col - 1))" />
                        </div>
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
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  background-color: #2196F3;
  padding: 2px;
  width:256px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  /* padding: 10px; */
  font-size: 30px;
  text-align: center;
  height:50px;
  width:50px;
  /* width:50px */
}
</style>