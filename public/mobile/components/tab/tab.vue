<template>
    <div class="tab">
        <div class="tab-item" v-for="item in items">{{ item.label }}</div>
        <div class="tab-bar"></div>
    </div>
</template>

<script>
    export default {
        name: "Tab",
        created() {
        },
        mounted() {
        },
        data() {
            return {
                items: [
                    { label: 'FLY', value: this.$fn.uuid() },
                    { label: 'SLEEP', value: this.$fn.uuid() },
                    { label: 'EAT', value: this.$fn.uuid() },
                ]
            }
        },
        methods: {},
        props: {},
        components: {},
    }
</script>