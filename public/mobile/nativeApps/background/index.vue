<template>
    <component :is="param1"></component>
</template>

<script>
    import position from './background-position';
    export default {
        name: "index",
        created() {
        },
        mounted() {
        },
        data() {
            return {}
        },
        methods: {},
        props: {
            param1: String,
            param2: String,
            param3: String,
            param4: String,
        },
        components: {
            position
        },
    }
</script>

<style lang="less" rel="stylesheet/less">

</style>