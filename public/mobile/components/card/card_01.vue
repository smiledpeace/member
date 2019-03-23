<template>
    <div class="card" @click="fullScreen" :class="{'full-screen': full}">
        <div class="card-img_box">
            <img src="https://groups35-images.b0.upaiyun.com/2019/03/933b12de_harry-potter.jpg!normal" alt="" class="card-img">
        </div>
        <div class="p16 bgwh">

            <div class="card-title">望岳</div>
            <div class="card-title_second">杜甫（唐）</div>
            <div class="card-info">
                <p class="pb10">岱宗夫如何，齐鲁青未了。</p>
                <p class="pb10">造化钟神秀，阴阳割昏晓。</p>
                <p class="pb10">荡胸生层云，决眦入归鸟。</p>
                <p >会当凌绝顶，一览众山小。</p>
            </div>
            <!--
            《望岳》
杜甫（唐）
岱宗夫如何，齐鲁青未了。
造化钟神秀，阴阳割昏晓。
荡胸生层云，决眦入归鸟。
会当凌绝顶，一览众山小。
/images/wind.jpg-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "card_01",
        created() {
        },
        mounted() {
        },
        data() {
            return {
                full: false
            }
        },
        methods: {
            fullScreen() {
                this.$emit('on-click');
            }
        },
        props: {},
        components: {},
    }
</script>