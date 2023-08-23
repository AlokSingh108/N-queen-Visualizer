<template>
    <div v-if="isQueenPlaced==true">♛</div>
</template>

<script>
export default {
    props: {
        isQueenPlaced: Boolean,
    },
};
</script>

<style scoped>
/* Add your queen styling here */
</style>
