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
            this.$nextTick(() => {
                this.saveAs();
            })
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
            },
            saveAs() {
                var triggerEvent = "touchstart"; //指定下载方式

                function saveAs(Url){

                    var blob = new Blob([''], {type:'application/octet-stream'});

                    var url = URL.createObjectURL(blob);

                    var a = document.createElement('a');

                    a.href = Url;

                    a.download = Url.replace(/(.*\/)*([^.]+.*)/ig,"$2").split("?")[0];

                    console.log(url);

                    var event = document.createEvent('Event');

                    event.initEvent('click', true, true);

                    a.dispatchEvent(event);

                    URL.revokeObjectURL(url);

                }



                var imgs = document.getElementsByTagName("img");

                for(var i = 0,o;o = imgs[i];i++){

                    o.addEventListener(triggerEvent, function(){

                        var url = this.getAttribute("src");
                        console.log(url);
                        saveAs(url);

                    },false);

                }
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