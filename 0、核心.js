// jquery
    // 1版本：兼容IE678
    // 2版本：不兼容IE678
    // 3版本：兼容移动端

    // 闭包函数：
    // 1. 形成一个私有作用域，保护里面的变量不受外界的干扰；
    // 2. 储存值,是不销毁的作用域；
    // 在NODE环境中，没有window这个对象，只有global;

    // jquery核心:
    (function (global, factory) {

    })(typeof window !== "undefined" ? window : this, function () {
        var jQuery = function (selector, context) {
            // 返回一个jQuery.fn.init的实例
            return new jQuery.fn.init(selector, context);
        }
        jQuery.fn = jQuery.prototype = {};
        // extend : 扩展；jQuery.fn.extend({}):把这个对象中的所有的键值对，放到jQuery.fn的空间地址中；jQuery.extend将方法放到自己的私有属性上，$.ajax
        jQuery.extend = jQuery.fn.extend = function () { }
        init = jQuery.fn.init = function (selector, context) { };

        init.prototype = jQuery.fn;// 改变了init的原型；那么创建的jquery实例可以使用jQuery.fn中的方法；

        if (typeof noGlobal === strundefined) {// 当前是window环境，这个条件会成立；
            //把jquery这个方法给了window下的属性名为$和jQuery 的属性名的属性值；
            window.jQuery = window.$ = jQuery;
        }
    });

// jQuery :{fn:{extend:function,init:function},prototype:{}}
// jQuery:{ajax:function(){}}