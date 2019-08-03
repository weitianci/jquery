//属性
// 1、$("img").attr("src")
    // 返回文档中所有图像的src属性值

// 2、$("img").removeAttr("src");
    // 将文档中图像的src属性删除

// 3、$("img").attr({ src: "test.jpg", alt: "Test Image" })
    // 为所有图像设置src和alt属性

// 4、$("img").attr("src","test.jpg")
    // 为所有图像设置src属性

// 5、$("img").attr("title", function() { return this.src })
    // 把src属性的值设置为title属性的值（回调函数）

// 6、$("input[type='checkbox']").prop("checked")
    // 选中复选框为true，没选中为false

// 7、$("input[type='checkbox']").prop("checked", true)
    // 选中所有页面上的复选框

// 8、$("input[type='checkbox']").prop("disabled", true})
    // 禁用页面上的所有复选框

// 9、$("input[type='checkbox']").prop("checked", function( i, val ) {
    //   return !val;
    // });
    // 通过函数来设置所有页面上的复选框被选中（回调函数）

// 10、$para.removeProp("luggageCode");
    // 删除luggageCode属性，默认返回undefined

//css类
// 参数：function(index, class)
    // 此函数必须返回一个或多个空格分隔的class名。接受两个参数
    // index参数为对象在这个集合中的索引值
    // class参数为这个对象原先的class属性值
// 1、$("p").addClass("selected");
    // 为匹配的元素加上 'selected' 类，可以是多个类

// 2、$('ul li:last').addClass(function() {
    //   return 'item-' + $(this).index();
    // });
    // 给li加上不同的class

// 3、$("p").removeClass("selected")
    // 从匹配的元素中删除 'selected' 类

// 4、$("p").removeClass()
    // 删除匹配元素的所有类

// 5、$('li:last').removeClass(function() {
    //    return $(this).prev().attr('class');
    // });
    // 删除最后一个元素上与前面重复的class

// 6、$("p").toggleClass("selected")
    // 为匹配的元素切换 'selected' 类
    
// 7、var count = 0;
    // $("p").click(function(){
    //    $(this).toggleClass("highlight", count++ % 3 == 0);
    // });
    // 每点击三下加上一次 'highlight' 类（回调函数）

// 8、$('div.foo').toggleClass(function() {
    //   if ($(this).parent().is('.bar') {
    //     return 'happy';
    //   } else {
    //     return 'sad';
    //   }
    // });
    // 根据父元素来设置class属性（回调函数）

// HTML代码/文本/值
// 参数：function(index, html)
    // 此函数返回一个HTML字符串。接受两个参数
    // index为元素在集合中的索引位置
    // html为原先的HTML值
// 1、$('p').html()
    // 返回p元素的内容

// 2、$("p").html("Hello <b>world</b>!")
    // 设置所有 p 元素的内容

// 3、$("p").html(function(n){
    //   return "这个 p 元素的 index 是：" + n;
    // });
    // 使用函数来设置所有匹配元素的内容（回调函数）

// 4、$('p').text()
    // 返回p元素的文本内容

// 5、$("p").text("Hello world!")
    // 设置所有 p 元素的文本内容

// 6、$("p").text(function(n){
    //   return "这个 p 元素的 index 是：" + n;
    // });
    // 使用函数来设置所有匹配元素的内容（回调函数）

// 7、$("input").val();
    // 获取文本框中的值

// 8、$("input").val("hello world!");
    // 设定文本框的值

// 9、$('input:text.items').val(function() {
    //   return this.value + ' ' + this.className;
    // });
    // 设定文本框的值（回调函数）