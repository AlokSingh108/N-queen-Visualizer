<template>
    <div class="control-panel">
        <v-btn @click="startSolving" :disabled="isSolving" class="btn" variant="outlined">Start</v-btn>
        <v-btn @click="stopSolving" :disabled="!isSolving" class="btn" variant="outlined">Stop</v-btn>
    </div>
</template>

<script>
export default {
    props: {
        isSolving: Boolean,
    },
    methods: {
        startSolving() {
            this.$emit('start');
        },
        stopSolving() {
            this.$emit('stop');
        },
    },
};
</script>

<style scoped>
.control-panel{
    text-align: center;
    margin-bottom: 30px;
}
</style>
