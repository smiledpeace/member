<template>
    <div >
        <tab @click="handleClick"></tab>

        <div class="feed-wrap">
            <div class="pt10"></div>
            <card @on-click="showNavigation" :class="{'move10': show}"></card>
            <div class="pt10"></div>

            <card @on-click="showNavigation" :class="{'move10': show}"></card>
            <div class="pt10"></div>

            <card @on-click="showNavigation" :class="{'move10': show}"></card>
            <div class="navigation" :class="{'show': show}" @click="show = false;">
                <div class="card" :class="{'ha': show}">
                    <div class="card-img_box">
                        <img src="/images/wind.jpg" alt="" class="card-img">
                    </div>
                    <div class="p16">
                        <div class="card-title">望岳</div>
                        <div class="card-title_second">杜甫（唐）</div>
                        <div class="card-info">
                            <p class="pb10">岱宗夫如何，齐鲁青未了。</p>
                            <p class="pb10">造化钟神秀，阴阳割昏晓。</p>
                            <p class="pb10">荡胸生层云，决眦入归鸟。</p>
                            <p >会当凌绝顶，一览众山小。</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </div>
</template>
<script>
    import  card from '../components/card/card_01';
    import  tab from '../components/tab/tab';
    export default {
        name: "index",
        created() {
        },
        mounted() {
        },
        data() {
            return {
                uuid: this.$fn.uuid(),
                show: false
            }
        },
        methods: {
            showNavigation() {

                this.show = true;
            },
            handleClick(item) {
                console.log(item);
            }
        },
        props: {
            param1: String,
            param2: String,
            param3: String,
            param4: String,
        },
        components: {
            card,
            tab
        },
    }
</script>