<template>
    <div>
        <h1>{{ message }}</h1>
    </div>
</template>

<script>
export default {
    name: 'Hello',
    data() {
        return {
            message: 'Hello Vue!',
        };
    },
};
</script>

<style>
h1 {
    color: red;
}
</style>
