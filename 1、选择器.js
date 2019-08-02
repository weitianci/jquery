// 1、选择器
// 基本
    // 1、$("*")
        // 查找所有元素

    // 2、#foo\\[bar\\]
        // 查找含有特殊字符的元素
        // HTML 代码：<span id="foo[bar]"></span>
        // jQuery 代码：#foo\\[bar\\]
        // 结果[ <span id="foo[bar]"></span>]

    // 3、$("#id")
        // 查找ID元素

    // 4、$("div")
        // 查找标签元素

    // 5、$(".class")
        // 查找class元素

    // 6、$("div,span,p.myClass")
        // 查找任意一个类的元素。
        // [ <div>div</div>, <span>span</span>, <p class="myClass"><p class="myClass"</p>]

    // 7、$( "div" ).find( "." + $.escapeSelector( ".box" ) );
        // 查找包含.box的div元素
        // 这个方法通常被用在类选择器或者ID选择器中包含一些CSS特殊字符的时候
        // 这个方法基本上与CSS中CSS.escape()方法类似
        // 唯一的区别是jquery中的这个方法支持所有浏览器
//层级
    // 1、$("form input")
        // 查找form元素下所有的input元素

    // 2、$("form > input")
        // 查找form元素下所有的input子元素

    // 3、$("label + input") 或 $("label").next("input")
        // 查找所有跟在label后面的input元素包括所有子孙元素

    // 4、$("form ~ input") 或 $("form").siblings("input")
        // 查找form元素的兄弟元素

//基本筛选器
    // 1、:focus
        // 查找当前获取焦点的元素

    // 2、$("input:not(:checked)")
        // 查找所有没有焦点的input元素

    // 3、$("li:first")
        // 查找第一个li元素

    // 4、$("li:last")
        // 查找最后一个li元素

    // 5、$("li:eq(1)")
        // 查找索引1的li元素

    // 6、$("tr:gt(0)")
        // 查找比索引0大的元素

    // 7、$("tr:lt(2)")
        // 查找比索引2小的元素

    // 8、$("tr:even")
        // 查找所有索引为偶数的tr元素

    // 9、$("tr:odd")
        // 查找所有索引为奇数的tr元素

    // 10、$("div:lang(en)")
        // <div lang="en"> and <div lang="en-us">
        // 查找所有行内属性名为lang，属性值有en或en-的div标签 （和他们的后代<div>）
    
    // 11、$(":root")
        // 设置<html>

    // 12、$(":header")
        // $(":header") === $("*:header") //*可以省略
        // 查找所有 h1, h2, h3之类的标题元素
    
    // 13、$( "p:target" )
    // 选择URI的格式识别码表示的目标元素
    // http://example.com/#foo
    // 给p标签添加#foo ID属性
    // <p id="foo">
    
//内容
    // 1、$("div:contains('John')")
        // 查找内容有John的div元素

    // 2、$("div:has(p)")
        // 查找有p标签的div元素

    // 3、$("td:empty")
        // 查找所有不包含子元素或者文本的空元素

    // 4、$("td:parent")
        // 查找所有含有子元素或者文本的td元素

//隐藏显示
    // 1、$("tr:hidden")
        // 查找所有隐藏的tr元素（样式为style="display:none"或type="hidden"）

    // 2、$("tr:visible")
        // 查找所有显示的tr元素

//属性
    // 1、$("div[id]")
        // 查找所有含有id属性的div元素

    // 2、$("input[name='newsletter']")
        // 查找所有name属性的值是newsletter的input元素

    // 3、$("input[name*='man']")
        // 查找所有name属性的值包含man的input元素

    // 4、$("input[name!='newsletter']")
        // 查找所有name属性的值不是newsletter的input元素.

    // 5、$("input[name^='news']")
        // 查找所有name属性的值以news开头的input元素

    // 6、$("input[name$='letter']")
        // 查找所有name属性的值以letter结尾的input元素

    // 7、$("input[id][name$='man']")
        // 查找所有含有id属性，并且它的name属性是以man结尾的input元素

// 子元素
    // 参数：
        // n：匹配子元素序号，必须为整数，注意从1开始而不是0
        // even：匹配所有偶数元素
        // odd：匹配所有奇数元素
        // formula：使用特殊公式如(an + b)进行选择. 例如:nth-last-child(3n+2) 从倒数第二个子元素开始，匹配每个3的倍数的元素

    // 1、$("ul li:first-child")
        // 在每个ul中查找第一个li

    // 2、$("ul li:last-child")
        // 在每个ul中查找最后一个li

    // 3、$("ul li:nth-child(2)")
        // 在每个ul查找第2个li

    // 4、$("ul li:nth-last-child(2)");
        // 在每个匹配的ul中查找倒数第二个li

    // 5、$("span:first-of-type");
        // 查找span父元素下的第一个span类型的元素

    // 6、$("span:last-of-type");
        // 查找span父元素下的最后一个span类型的元素

    // 7、$("span:nth-of-type(2)");
        // 查找每个span，这个span是其所有兄弟span元素中的第二个元素

    // 8、$("ul li:only-child")
        // 在所有ul中查找唯一子元素的li

    // 9、$("li:only-of-type")
        // 查找所有没有兄弟元素的li

//表单
    // 1、$(":input")
        // 查找所有input,textarea,select和button元素

    // 2、$(":text")
        // 查找所有text文本框

    // 3、$(":password")
        // 查找所有password密码框

    // 4、$(":checkbox")
        // 查找所有checkbox复选框

    // 5、$(":radio")
        // 查找所有radio单选框

    // 6、$(":button")
        // 查找所有button按钮

    // 7、$(":submit")
        // 查找所有submit提交按钮

    // 8、$(":reset")
        // 查找所有reset重置按钮

    // 9、$(":image")
        // 查找所有image图像域

    // 10\$(":file")
        // 查找所有file文件域

//表单对象属性
    // 1、$("input:enabled")
        // 查找所有可用的input元素

    // 2、$("input:disabled")
        // 查找所有不可用的input元素

    // 3、$("input:checked")
        // 查找所有选中的checked复选框元素

    // 4、$("select option:selected")
        // 查找下拉框选中的元素