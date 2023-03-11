<template>
    <div>
        <p>api response:</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>

const { data } = await useFetch('/api/ninja')

</script>

<style lang="scss" scoped>

</style>