<template>
    <component :is="type" :param1="param1" :param2="param2" :param3="param3" :param4="param4"></component>
</template>

<script>

    export default {
        name: "App",
        created() {
        },
        mounted() {
        },
        data() {
            return {}
        },
        methods: {},
        props: {
            type: String,
            param1: String,
            param2: String,
            param3: String,
            param4: String,
        },
        components: {
            index: () => import('./nativeApps/index'),
            test: () => import('./nativeApps/test'),
            background: () => import('./nativeApps/background/index'),
            qr: () => import('./nativeApps/qrcode/qr'),
        },
    }
</script>