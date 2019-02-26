<template>
    <div class="pt30">index</div>
</template>
<script>
    export default {
        name: "index",
        created() {
        },
        mounted() {
        },
        data() {
            return {
                uuid: this.$fn.uuid()
            }
        },
        methods: {},
        props: {
            param1: String,
            param2: String,
            param3: String,
            param4: String,
        },
        components: {},
    }
</script>