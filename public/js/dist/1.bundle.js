webpackJsonp([1],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card",
    class: {
      'full-screen': _vm.full
    },
    on: {
      "click": _vm.fullScreen
    }
  }, [_vm._m(0), _vm._v(" "), _vm._m(1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card-img_box"
  }, [_c('img', {
    staticClass: "card-img",
    attrs: {
      "src": "https://groups35-images.b0.upaiyun.com/2019/03/933b12de_harry-potter.jpg!normal",
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "p16 bgwh"
  }, [_c('div', {
    staticClass: "card-title"
  }, [_vm._v("望岳")]), _vm._v(" "), _c('div', {
    staticClass: "card-title_second"
  }, [_vm._v("杜甫（唐）")]), _vm._v(" "), _c('div', {
    staticClass: "card-info"
  }, [_c('p', {
    staticClass: "pb10"
  }, [_vm._v("岱宗夫如何，齐鲁青未了。")]), _vm._v(" "), _c('p', {
    staticClass: "pb10"
  }, [_vm._v("造化钟神秀，阴阳割昏晓。")]), _vm._v(" "), _c('p', {
    staticClass: "pb10"
  }, [_vm._v("荡胸生层云，决眦入归鸟。")]), _vm._v(" "), _c('p', [_vm._v("会当凌绝顶，一览众山小。")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-18c265bc", module.exports)
  }
}

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(41)(
  /* script */
  __webpack_require__(102),
  /* template */
  __webpack_require__(103),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\project\\member\\public\\mobile\\components\\tab\\tab.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] tab.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-52999140", Component.options)
  } else {
    hotAPI.reload("data-v-52999140", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//

exports.default = {
    name: "Tab",
    created: function created() {},
    mounted: function mounted() {},
    data: function data() {
        return {
            items: [{ label: 'FLY', value: this.$fn.uuid() }, { label: 'SLEEP', value: this.$fn.uuid() }, { label: 'EAT', value: this.$fn.uuid() }]
        };
    },

    methods: {
        handleClick: function handleClick(item) {
            this.$emit('click', item);
        }
    },
    props: {},
    components: {}
};

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tab"
  }, [_vm._l((_vm.items), function(item) {
    return _c('div', {
      staticClass: "tab-item",
      on: {
        "click": function($event) {
          return _vm.handleClick(item)
        }
      }
    }, [_vm._v(_vm._s(item.label))])
  }), _vm._v(" "), _c('div', {
    staticClass: "tab-bar"
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-52999140", module.exports)
  }
}

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('tab', {
    on: {
      "click": _vm.handleClick
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "feed-wrap"
  }, [_c('div', {
    staticClass: "pt10"
  }), _vm._v(" "), _c('card', {
    class: {
      'move10': _vm.show
    },
    on: {
      "on-click": _vm.showNavigation
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "pt10"
  }), _vm._v(" "), _c('card', {
    class: {
      'move10': _vm.show
    },
    on: {
      "on-click": _vm.showNavigation
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "pt10"
  }), _vm._v(" "), _c('card', {
    class: {
      'move10': _vm.show
    },
    on: {
      "on-click": _vm.showNavigation
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "navigation",
    class: {
      'show': _vm.show
    },
    on: {
      "click": function($event) {
        _vm.show = false;
      }
    }
  }, [_c('div', {
    staticClass: "card",
    class: {
      'ha': _vm.show
    }
  }, [_vm._m(0), _vm._v(" "), _vm._m(1)])])], 1), _vm._v(" "), _c('img', {
    attrs: {
      "src": "http://localhost:3000/qrcode?time=10000"
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card-img_box"
  }, [_c('img', {
    staticClass: "card-img",
    attrs: {
      "src": "/images/wind.jpg",
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "p16"
  }, [_c('div', {
    staticClass: "card-title"
  }, [_vm._v("望岳")]), _vm._v(" "), _c('div', {
    staticClass: "card-title_second"
  }, [_vm._v("杜甫（唐）")]), _vm._v(" "), _c('div', {
    staticClass: "card-info"
  }, [_c('p', {
    staticClass: "pb10"
  }, [_vm._v("岱宗夫如何，齐鲁青未了。")]), _vm._v(" "), _c('p', {
    staticClass: "pb10"
  }, [_vm._v("造化钟神秀，阴阳割昏晓。")]), _vm._v(" "), _c('p', {
    staticClass: "pb10"
  }, [_vm._v("荡胸生层云，决眦入归鸟。")]), _vm._v(" "), _c('p', [_vm._v("会当凌绝顶，一览众山小。")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5b45efec", module.exports)
  }
}

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(41)(
  /* script */
  __webpack_require__(97),
  /* template */
  __webpack_require__(104),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\project\\member\\public\\mobile\\nativeApps\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5b45efec", Component.options)
  } else {
    hotAPI.reload("data-v-5b45efec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _card_ = __webpack_require__(98);

var _card_2 = _interopRequireDefault(_card_);

var _tab = __webpack_require__(101);

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: "index",
    created: function created() {},
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
            _this.saveAs();
        });
    },
    data: function data() {
        return {
            uuid: this.$fn.uuid(),
            show: false
        };
    },

    methods: {
        showNavigation: function showNavigation() {

            this.show = true;
        },
        handleClick: function handleClick(item) {
            console.log(item);
        },
        saveAs: function saveAs() {
            var triggerEvent = "touchstart"; //指定下载方式

            function saveAs(Url) {

                var blob = new Blob([''], { type: 'application/octet-stream' });

                var url = URL.createObjectURL(blob);

                var a = document.createElement('a');

                a.href = Url;

                a.download = Url.replace(/(.*\/)*([^.]+.*)/ig, "$2").split("?")[0];

                console.log(url);

                var event = document.createEvent('Event');

                event.initEvent('click', true, true);

                a.dispatchEvent(event);

                URL.revokeObjectURL(url);
            }

            var imgs = document.getElementsByTagName("img");

            for (var i = 0, o; o = imgs[i]; i++) {

                o.addEventListener(triggerEvent, function () {

                    var url = this.getAttribute("src");
                    console.log(url);
                    saveAs(url);
                }, false);
            }
        }
    },
    props: {
        param1: String,
        param2: String,
        param3: String,
        param4: String
    },
    components: {
        card: _card_2.default,
        tab: _tab2.default
    }
};

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(41)(
  /* script */
  __webpack_require__(99),
  /* template */
  __webpack_require__(100),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "G:\\project\\member\\public\\mobile\\components\\card\\card_01.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] card_01.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-18c265bc", Component.options)
  } else {
    hotAPI.reload("data-v-18c265bc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: "card_01",
    created: function created() {},
    mounted: function mounted() {},
    data: function data() {
        return {
            full: false
        };
    },

    methods: {
        fullScreen: function fullScreen() {
            this.$emit('on-click');
        }
    },
    props: {},
    components: {}
};

/***/ })

});