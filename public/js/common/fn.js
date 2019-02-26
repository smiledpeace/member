/*
//                    _ooOoo_
//                   o8888888o
//                   88" . "88
//                   (| -_- |)
//                    O\ = /O
//                ____/`---'\____
//              .   ' \\| |// `.
//               / \\||| : |||// \
//             / _||||| -:- |||||- \
//               | | \\\ - /// | |
//             | \_| ''\---/'' | |
//              \ .-\__ `-` ___/-. /
//           ___`. .' /--.--\ `. . __
//        ."" '< `.___\_<|>_/___.' >'"".
//       | | : `- \`.;`\ _ /`;.`/ - ` : | |
//         \ \ `-. \_ __\ /__ _/ .-` / /
// ======`-.____`-.___\_____/___.-`____.-'======
//                    `=---='
//
// .............................................
//          佛祖保佑             永无BUG
*/
// findIndex 兼容
if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, 'findIndex', {
        value: function (predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            var o = Object(this);

            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;

            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }

            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];

            // 5. Let k be 0.
            var k = 0;

            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return k.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return k;
                }
                // e. Increase k by 1.
                k++;
            }

            // 7. Return -1.
            return -1;
        }
    });
}
if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value: function (predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            var o = Object(this);

            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;

            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }

            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];

            // 5. Let k be 0.
            var k = 0;

            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return kValue.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return kValue;
                }
                // e. Increase k by 1.
                k++;
            }

            // 7. Return undefined.
            return undefined;
        }
    });
}
let MAX_ARRAY_INDEX = Math.pow(2, 53) - 1,                  //js数组最大索引号
    toString = window.toString,
    viewUtil = window.viewUtil,
    dr = window.dr,
    QUERY_SERVICE = window.QUERY_SERVICE,
    SERVICE_PREFIX = window.SERVICE_PREFIX,
    // uploadApi4base64    = window.uploadApi4base64,
    // uploadPath          = window.uploadPath,
    // createfolderApi     = window.createfolderApi,
    rtype = window.rtype,
    rid = window.rid,
    nowCompanyId = window.nowCompanyId;


var getProto = Object.getPrototypeOf;


var class2type = {};

// var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call(Object);

var export_count = 0;
//vue通用api插件
const api = {
    //类型判断
    //数组
    findName(info, name, search_key = 'name') {
        if (Array.isArray(info)) {
            return info.find(item => item[search_key] === name) || {value: {value_name: ''}}
        }
        var findkey = Object.keys(info).find(key => info[key][search_key] === name);
        return findkey ? info[findkey] : {value: {value_name: ''}};
    },
    isarray: Array.isArray || function (target) {
        return toString.call(target) === '[object Array]';
    },
    //类数组
    isarraylike(target) {
        let len = target && target.length;
        return len && 'number' === typeof len && 0 <= len && len <= MAX_ARRAY_INDEX;
    },
    isboolean(target) {
        return target === true || target === false || toString.call(target) === '[object Boolean]';
    },
    isdate(target) {
        return toString.call(target) === '[object Date]';
    },
    isnumber(target) {
        return typeof (target) === 'number';
    },
    isstring(target) {
        return typeof (target) === 'string';
    },
    isfunction(target) {
        return typeof (target) === 'function';
    },
    //普通对象
    isobject(target) {
        return typeof(target) === 'object';
    },
    //键值对象
    isplainobject(target) {
        return target && api.isobject(target) && Object.getPrototypeOf(target) === Object.prototype;
    },
    // 空对象
    isEmptyObject(target) {
        for (var key in target) {
            return false
        }
        return true
    },
    // 随机颜色值
    // 设置颜色值
    getColor(){
        return '#' + Math.floor(Math.random()*16777215).toString(16);
        // //定义字符串变量colorValue存放可以构成十六进制颜色值的值
        // var colorValue="0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
        // //以","为分隔符，将colorValue字符串分割为字符数组["0","1",...,"f"]
        // var colorArray = colorValue.split(",");
        // var color="#";//定义一个存放十六进制颜色值的字符串变量，先将#存放进去
        // //使用for循环语句生成剩余的六位十六进制值
        // for(var i=0;i<6;i++){
        //     //colorArray[Math.floor(Math.random()*16)]随机取出
        //     // 由16个元素组成的colorArray的某一个值，然后将其加在color中，
        //     //字符串相加后，得出的仍是字符串
        //     color+=colorArray[Math.floor(Math.random()*16)];
        // }
        // return color;
    },
    isInIframe() {
        try {
            return self.frameElement && self.frameElement.tagName == "IFRAME" ||
                window.frames.length != parent.frames.length || self != top;
        } catch (e) {
            return false;
        }
    },
    //域名判断
    isdomain(target) {
        if (api.isstring(target)) {
            target = [target];
        }
        if (-1 < target.indexOf(window.location.host)) {
            return true;
        }
    },
    // 创建 加密id
    // https://stackoverflow.com/a/2117523/535606
    uuid() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        )
    },
    // 显示员工姓名
    calculatedName(excel_nickname, excel_user_id, is_hxo_view) {
        if (is_hxo_view) {
            return ''
        }
        var d_name = '', nickname;
        // console.log(excel_nickname, excel_user_id);

        if (excel_nickname) {
            d_name = excel_nickname + '(已离职)'
        }
        ;
        nickname = excel_user_id && _getUserInfo(excel_user_id) ? _getUserInfo(excel_user_id).nickname : d_name;

        return nickname;
    },
    isPlainObject: function (obj) {
        var proto, Ctor;

        // Detect obvious negatives
        // Use toString instead of jQuery.type to catch host objects
        if (!obj || toString.call(obj) !== "[object Object]") {
            return false;
        }

        proto = getProto(obj);

        // Objects with no prototype (e.g., `Object.create( null )`) are plain
        if (!proto) {
            return true;
        }

        // Objects with prototype are plain iff they were constructed by a global Object function
        Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
        return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    },
    // 获取每年每月对应的天数
    perMonthDays(year) {
        if ((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)) {
            return [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        } else {
            return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        }
    },
    // 对象的深度复制
    clone: function copy(copyObj) {
        const type = Object.prototype.toString.call(copyObj);
        if (~['[object Array]', '[object Object]'].indexOf(type)) {
            const target = type === '[object Array]' ? [] : {};
            for (let key in copyObj) {
                target[key] = copy(copyObj[key]);
            }
            return target
        }
        return copyObj
    },
    /**
     * 对象的深度复制
     * @param obj
     * @returns {{}}
     */
    objectDepthCopy: function (obj) {
        var temp = null;
        if (obj && !(obj instanceof Array)) {
            temp = {};
            for (var item in obj) {
                if (obj[item] && typeof obj[item] == 'object') {
                    //if(item == '')
                    temp[item] = this.objectDepthCopy(obj[item]);
                } else {
                    temp[item] = obj[item];
                }
            }
        } else {
            temp = [];
            if (obj) {
                for (var i = 0, _i = obj.length; i < _i; i++) {
                    if (obj[i] && typeof obj[i] == 'object') {
                        temp[i] = this.objectDepthCopy(obj[i]);
                    } else {
                        temp[i] = obj[i];
                    }
                }
            }
        }
        return temp;
    },
    getCss(o, key) {
        return o.currentStyle ? o.currentStyle[key] : document.defaultView.getComputedStyle(o, false)[key];
    },
    checkEmail: function (email) {
        return email.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)
    },
    checkPhone: function (phone) {
        return phone.match(/^1[3|4|5|8|7][0-9]\d{4,8}$/);
    },
    checkUrl: function (str) {
        //在JavaScript中，正则表达式只能使用"/"开头和结束，不能使用双引号
        var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
        var objExp = new RegExp(Expression);
        if (str.indexOf("localhost")) {
            str = str.replace("localhost", "127.0.0.1");
        }
        return objExp.test(str);

    },
    checkTel: function (tel) {
        if (!/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(tel)) {
            return false;
        }
        return true;
    },
    checkNumber: function (theObj) {
        var reg = /^-?[0-9]+.?[0-9]*$/;
        if (reg.test(theObj)) {
            return true;
        }
        return false;
    },
    //数字转换为中文大写
    getChineseDigital: function (num, type) {
        if (!/^\d*(\.\d*)?$/.test(num)) {
            return "Number is wrong!";
        }
        if (!num || num === '0') {
            var value = "零"
            if (type == 'currency') {
                value += "元整"
            }
            return value
        }
        var AA = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
        var BB = ["", "拾", "佰", "仟", "万", "億", "", ""];
        var BB_ = ["角", "分", "厘", ""];
        var a = ("" + num).replace(/(^0*)/g, "").split("."), k = 0, re = "";
        for (var i = a[0].length - 1; i >= 0; i--) {
            switch (k) {
                case 0:
                    re = BB[7] + re;
                    break;
                case 4:
                    if (!new RegExp("0{4}\\d{" + (a[0].length - i - 1) + "}$").test(a[0]))
                        re = BB[4] + re;
                    break;
                case 8:
                    re = BB[5] + re;
                    BB[7] = BB[5];
                    k = 0;
                    break;
            }
            if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0) {
                re = AA[0] + re
            }
            ;
            if (a[0].charAt(i) != 0) {
                re = AA[a[0].charAt(i)] + BB[k % 4] + re;
            }
            k++;
        }
        if (type == 'currency') {
            re = re + '元';
        }
        if (a.length > 1) {
            re += BB[6];
            if (type != 'currency') {
                re = re + '点'
            }
            for (var i = 0; i < a[1].length; i++) {
                if (type == 'currency') {
                    if (i <= 2) {
                        re += AA[a[1].charAt(i)] + BB_[i];
                    } else {
                        re += AA[a[1].charAt(i)];
                    }
                } else {
                    re += AA[a[1].charAt(i)];
                }
            }
        }
        if (type == 'currency') {
            return re + '整'
        } else {
            return re;
        }
    },
    //判断某值是否存在于对象类型数组的某属性
    hasvalue(obj, key, value) {
        let res = false;
        api.each(obj, (item, i) => {
            if (item[key] && item[key] === value) {
                res = true;
                return false;
            }
        });
        return res;
    },
    //判断对象是否包含某直接属性（非原型）
    haskey(obj, key) {
        return obj !== null && hasOwnProperty.call(obj, key);
    },
    //获取对象所有属性名
    allkeys(obj) {
        if (!api.isobject(obj)) {
            return [];
        }
        let keys = [], key;
        for (key in obj) {
            keys.push(key);
        }
        return keys;
    },
    //获取对象自有属性名（不包含原型属性）
    keys(obj) {
        if (!api.isobject(obj)) {
            return [];
        }
        if (Object.keys) {
            return Object.keys(obj);
        }
        let keys = [], key;
        for (key in obj) {
            if (api.haskey(obj, key)) {
                keys.push(key);
            }
        }
        return keys;
    },
    //获取对象自有属性值（数组）
    values(obj) {
        let keys = api.keys(obj),
            len = keys.length,
            i = 0,
            arr = Array(len);

        for (; i < len; i++) {
            arr[i] = obj[keys[i]];
        }
        return arr;
    },
    /**
     * 计算返回值
     * @param  {Object} item excel字段
     * @return {String}      [description]
     */
    judgeExcel(item) {
        if (!item.value) {
            return '';
        }
        if (item.value.type == 28) {
            return item.hint;
        }
        if (item.value.type == 4 || item.value.type == 19) {
            if (item.value.files && item.value.files.length) {
                let html = '';
                item.value.files.forEach(file => {
                    if (file.type == 'pic' || file.type == 1) {
                        html += `<img src="${file.file_url}" onclick="window.rootVue.vm.$preview.showImgDetail(this)" style="width: 30px; height: 30px;cursor: pointer;"/> `
                    } else {
                        var name = file.file_name || file.title
                        var url = name && `/newFilePreview?type=${name.split('.').pop()}&file_name=${name}&file_id=${file.file_id || file._id}`;
                        html += `<a href="${url}" class="link">${name}</a>`
                    }
                })
                return html
            } else {
                return '未填写'
            }

        }
        if (item.value.value_name) {
            return item.value.value_name;
        }
        if (item.value.value_names && item.value.value_names.length) {
            return item.value.value_names[0];
        }
        if (item.value.value) {
            return item.value.value;
        }
        if (item.value.values && item.value.values.length) {
            return item.value.values[0];
        }
        if (item.value.files && item.value.files.length) {
            return item.value.files;
        }
        if (item.value.table && item.value.table.length) {
            return item.value.table.length + '项';
        }
        return '未填写'
    },
    sendNotice(type, timeout) {
        if (!type) {
            return false;
        }
        try {
            window.localStorage.removeItem(type, '');
        } catch (e) {
            console.log(e);
        }
        if (timeout) {
            setTimeout(() => {
                window.localStorage.setItem(type, type);
            }, timeout);
        } else {
            window.localStorage.setItem(type, type);
        }
    },
    getNotice(cb) {
        if (cb && typeof cb === 'function') {
            try {
                window.removeEventListener('storage', cb, false);
            } catch (e) {
                console.log(e);
            }
            window.addEventListener('storage', cb, false);
        }
    },
    //对象属性扩展覆盖（同jQuery/Angularjs）
    //放弃使用Object.assign, 因为Object.assign只能覆盖一层，不能深度扩展
    //return Object.assign.apply( (arguments.length > 0 ? arguments[0] : this), arguments);
    extend: function (/*isdeep,*/ obj) {
        let len = arguments.length, idx = 1, isdeep = false;
        if (len < 2 || obj === null) {
            return obj;
        }
        if (api.isboolean(arguments[0])) {
            isdeep = arguments[0];
            obj = arguments[1];
            idx++;
        }
        let source, keys, proplen, i, key, iscopyarr, clone;
        for (; idx < len; idx++) {                                        //多对象
            source = arguments[idx];                                    //扩展目标对象
            keys = api.allkeys(source);
            proplen = keys.length;
            for (i = 0; i < proplen; i++) {
                key = keys[i];
                if (source[key] === obj) {                            //防止引用对象包含关系，导致死循环
                    continue;
                }
                if (isdeep && (api.isplainobject(source[key]) || (iscopyarr = api.isarray(source[key])))) {
                    if (iscopyarr) {
                        iscopyarr = false;
                        clone = obj[key] && api.isarray(obj[key]) ? obj[key] : [];
                    } else {
                        clone = obj[key] && api.isplainobject(obj[key]) ? obj[key] : {};
                    }
                    obj[key] = api.extend(isdeep, clone, source[key]);
                } else if (void 0 !== source[key]) {
                    obj[key] = source[key];
                }
            }
        }
        return obj;
    },
    //拷贝
    copy(target, isdeep = true) {
        let clone;
        if (api.isarray(target)) {
            clone = [];
        } else {
            clone = {};
        }
        return api.extend(isdeep, clone, target);
    },
    //遍历工具，dataset可以是数组和对象
    //回调函数 fn( item, index|key, dataset);
    // break----用return false;
    // continue --用return ture;
    each(dataset, fn, context) {
        let callback = 'undefined' === typeof context ? fn : function (value, index, collection) {
            return fn.call(context, value, index, collection);
        };
        let i, len, res;
        if (api.isarraylike(dataset)) {                                   //类数组
            i = 0;
            len = dataset.length;
            for (; i < len; i++) {
                res = callback(dataset[i], i, dataset);
                if (false === res) {
                    break;
                } else if (true === res) {
                    continue;
                }
            }
        } else {                                                            //键值对象
            let keys = api.keys(dataset);
            i = 0;
            len = keys.length;
            for (; i < len; i++) {
                res = callback(dataset[keys[i]], keys[i], dataset);
                if (false === res) {
                    break;
                } else if (true === res) {
                    continue;
                }
            }
        }
        return dataset;
    },
    //队列缓存对象生产器（返回一个缓存区对象）
    createcache(maxlen) {
        let keys = [];

        function cache(key, value) {
            if (false !== maxlen && keys.push[key + ' '] > maxlen) {        //key加一个空格符，与原型属性做一下区分，避免原型属性被修改
                delete cache[keys.shift()];
            }
            if ('undefined' !== typeof value) {
                return (cache[key + ' '] = value);
            } else {
                return cache[key + ' '];
            }
        }

        return cache;
    },
    setTitle: function (title) {
        var $body = $('body');
        document.title = title;
        var $iframe = $("<iframe src='/platform/images/favicon.ico' style='border: none;' width='0' height='0'></iframe>");
        $iframe.on('load', function () {
            setTimeout(function () {
                $iframe.off('load').remove();
            }, 0);
        }).appendTo($body);
    },
    /**
     * @author SmiledPeace
     * @date 2018/11/21
     * @Description: 将excel_content_list 数组转换为 对象
     */
    arrayToObject(excel_content_list) {
        if (Object.prototype.toString.call(excel_content_list) != "[object Array]") {
            return excel_content_list;
        }
        const data = {};
        excel_content_list.length && excel_content_list.forEach(item => {
            item.key && (data[item.key] = item);
        });
        return data;
    },
    //降频处理器
    later(fn, delay, immediate) {
        let timer;
        return function () {
            let context = this, args = arguments, callnow = immediate && !timer;
            clearTimeout(timer);
            timer = setTimeout(function () {
                if (!immediate) {
                    fn.apply(context, args);
                }
                timer = null;
            }, delay);
            if (callnow) {
                fn.apply(context, args);
            }
        };
    },

    //去掉字符串前后空格
    trim(str) {
        return 'undefined' !== typeof str.trim ? str.trim() : str.replace(/(^\s*)|(\s*$)/g, '');
    },
    //裁剪字符串
    substr(str, start, len) {
        str = String(str).toString();
        start = start || 0;
        len = len || str.length;
        return str.substr(start, len);
    },
    //前置补零
    prefillzero(num, len) {
        num = num.toString();
        while (num.length < len) {
            num = '0' + num;
        }
        return num;
    },
    //获取文件后缀
    sufix(url, islower = true) {
        url = url.substr(url.lastIndexOf('.') + 1);
        return true === islower ? url.toLowerCase() : url.toUpperCase();
    },

    //字符串转日期
    str2date(strdate) {
        let arr = strdate.split(/[- \/:]/g) || [];
        arr[0] = arr[0] || 1986;
        arr[1] = arr[1] || 6;
        arr[2] = arr[2] || 1;
        arr[3] = arr[3] || 0;
        arr[4] = arr[4] || 0;
        arr[5] = arr[5] || 0;
        return new Date(arr[0], --arr[1], arr[2], arr[3], arr[4], arr[5]);
    },
    //日期格式化
    fmtdate(date, fmt = 'yyyy-MM-dd hh:mm:ss') {
        let o = {
            'M+': date.getMonth() + 1, //月份
            'd+': date.getDate(), //日
            'h+': date.getHours(), //小时
            'm+': date.getMinutes(), //分
            's+': date.getSeconds(), //秒
            'q+': Math.floor((date.getMonth() + 3) / 3), //季度
            'S': date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp('(' + k + ')').test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
            }
        }
        return fmt;
    },
    //获得日期对应的星期数
    getweekday(date) {
        let map = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

        if (api.isdate(date)) {
            return map[date.getDay()];

        } else if (api.isstring(date)) {
            date = date.split(/[- :]/g);
            date = new Date(date[0], --date[1], date[2]);
            return map[date.getDay()];

        } else {
            return '';
        }
    },
    //获得日期对应的星期数
    dateplus(date) {
        if (api.isstring(date)) {
            date = api.str2date(date);
        }
        return {
            self: date,
            text: api.fmtdate(date),                      //字符串全日期
            time: date.getTime(),                           //整数时间戳
            y: date.getFullYear(),                          //年
            M: date.getMonth() + 1,                         //月
            d: date.getDate(),                              //日
            D: api.getweekday(date),                      //星期
            h: date.getHours(),
            m: date.getMinutes(),
            s: date.getSeconds(),
            q: Math.floor((date.getMonth() + 3) / 3),       //季度
            S: date.getMilliseconds()                       //毫秒
        };
    },
    //日期加减
    // fmt = '-d5'; //五天前
    // fmt = '+d5'; //五天后
    // fmt = '-M5'; //五个月前
    // fmt = '+M5'; //五个月后
    adddate(date, fmt) {
        let dateplus, matchs, mothed, type, value;
        dateplus = api.dateplus(date);

        matchs = fmt.match(/^([-+])([A-Za-z])(\d)*$/);
        if (matchs && matchs[1] && matchs[2] && matchs[3]) {
            mothed = matchs[1];
            type = matchs[2];
            value = matchs[3];

            switch (type) {
                case 'y':
                    dateplus.y += parseInt(mothed + value);
                    date.setFullYear(dateplus.y);
                    break;
                case 'M':
                    dateplus.M += parseInt(mothed + value);
                    date.setMonth(dateplus.M);
                    break;
                case 'd':
                    dateplus.d += parseInt(mothed + value);
                    date.setDate(dateplus.d);
                    break;
                case 'h':
                    dateplus.h += parseInt(mothed + value);
                    date.setHours(dateplus.h);
                    break;
                case 'm':
                    dateplus.m += parseInt(mothed + value);
                    date.setMinutes(dateplus.m);
                    break;
            }
            return date;
        } else {
            return false;
        }
    },
    //切换图片upyun尺寸
    imagemode(url, mode) {
        if (!url || !mode) {
            return url;
        }
        if ('NORMAL' === mode) {
            return url.replace(/\!\w*/, '!normal');
        } else if ('THUMBNAIL' === mode) {
            return url.replace(/\!\w*/, '!thumbnail');
        } else if ('ORIGIN' === mode) {
            return url.replace(/\!\w*/, '');
        }
    },
    //筛选用户
    queryusers(keywords, source) {
        let res = [];
        keywords = keywords.toUpperCase();
        if (keywords !== '') {
            api.each(source, function (user, index) {
                if (user.nickname_en && -1 < user.nickname_en.replace('/,/g', '').toUpperCase().indexOf(keywords)) {
                    res.push(user);
                    return true;
                } else if (user.nickname && -1 < user.nickname.replace('/,/g', '').toUpperCase().indexOf(keywords)) {
                    res.push(user);
                    return true;
                }
            });
        }
        return res;
    },
    formatDate(date, format) {
        if (Object.prototype.toString.call(date) != '[object Date]') {
            date = new Date(date.replace(/-/g, "/"));
        }
        var paddNum = function (num) {
            num += "";
            return num.replace(/^(\d)$/, "0$1");
        }
        //指定格式字符
        var cfg = {
            yyyy: date.getFullYear() //年 : 4位
            ,
            yy: date.getFullYear().toString().substring(2) //年 : 2位
            ,
            M: date.getMonth() + 1 //月 : 如果1位的时候不补0
            ,
            MM: paddNum(date.getMonth() + 1) //月 : 如果1位的时候补0
            ,
            d: date.getDate() //日 : 如果1位的时候不补0
            ,
            dd: paddNum(date.getDate()) //日 : 如果1位的时候补0
            ,
            h: date.getHours(), //时
            hh: paddNum(date.getHours()) //时
            ,
            mm: paddNum(date.getMinutes()) //分
            ,
            ss: paddNum(date.getSeconds()) //秒
        }
        format || (format = "yyyy-MM-dd hh:mm:ss");
        return format.replace(/([a-z])(\1)*/ig, function (m) {
            return cfg[m];
        });
    },
    /*//向pomelo服务器发送消息
    send_comment( opt ) {
        let params = {
            httpType: 'post',
            serviceName: 'task',
            functionName: 'addComment',
            user_id: '',
            token: '',
        };
        if( opt.type ){
            params.sub_type = opt.type;
        }
        if( opt.data ){
            params.data = opt.data;
        }

        return api.ajax( false, params ).then(( res ) => {
            if( res && res.result && 'TRUE'===res.result ) {

            } else {
                //
            }
        }, ( res ) => {
            //
        });
    }*/
};
//扩展部分
api.extend(api, {
    //创建一个全局缓存队列
    cache: api.createcache(false),
});

//扩展部分-自建应用相关功能函数
api.extend(api, {
    //补全自建应用字段数据结构
    copyotherstr4form: function (list) {
        if (list) {
            let type;
            api.each(list, (field, idx) => {
                type = parseInt(field.value.type);
                if (26 === type) {
                    api.each(field.value.table, (table, idx) => {
                        api.copyotherstr4form(table.excel_content_list);
                    });
                } else if (3 === type) {
                    let num = Number(field.value.value);
                    field.value.value = !isNaN(num) ? num : 0;
                    field.value.value_name = field.value.value;

                } else if (5 === type) {
                    let date, year, month, day;
                    date = new Date(field.value.value);
                    year = date.getFullYear();
                    month = date.getMonth() + 1;
                    day = date.getDate();
                    if (month < 10) {
                        month = '0' + month;
                    }
                    if (day < 10) {
                        day = '0' + day;
                    }
                    field.value.value = year + '-' + month + '-' + day;

                } else if (8 === type) {
                    field.value.value_name = field.value.values.join(',');
                    field.value.value = field.value.value_name;

                } else if (-1 < [15, 24, 25].indexOf(type)) {
                    field.value.value = field.value.value_name;
                } else {
                    field.value.value_name = field.value.value;
                }

            });
        }
        return list;
    }
});

export default api;
