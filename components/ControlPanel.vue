<template>
    <div class="control-panel">
        <button @click="startSolving" :disabled="isSolving">Start</button>
        <button @click="stopSolving" :disabled="!isSolving">Stop</button>
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
/* Add your control panel styling here */
</style>
