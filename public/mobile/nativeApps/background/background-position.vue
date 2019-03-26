<template>
    <div class="p16 background" >
        <div class="background-position">123 123412 124123 12341232 </div>
    </div>
</template>

<script>
    export default {
        name: "background-position",
        created() {
        },
        mounted() {
        },
        data() {
            return {}
        },
        methods: {},
        props: {},
        components: {},
    }
</script>

<style lang="less" rel="stylesheet/less">
    .background-position {
        background: url("https://developer.mozilla.org/samples/cssref/images/startransparent.gif") #FFEE99 bottom no-repeat;
        background-color: #FFEE99;
        width: 300px;
        height: 80px;
        margin-bottom: 12px;
        background-size: contain;
    }

    @keyframes bgp {
        from {
            background-position: 0 0;
        }
        to {
            background-position: -100% 0 ;
        }
    }


</style>