// var houseIndex = 0;
// var Timer = null;

// function house_f() {
//     clearInterval(Timer);
//     var ul = $("#house ul");
//     var li = ul.children("li");
//     var h = li.height();
//     var index = 0;
//     ul.css("height", h * li.length * 2);
//     ul.html(ul.html() + ul.html());

//     function run() {
//         if (houseIndex >= li.length) {
//             ul.css({ top: 0 });
//             houseIndex = 1;
//             ul.animate({ top: -houselIndex * h }, 200);
//         } else {
//             houseIndex++;

//             ul.animate({ top: -houseIndex * h }, 200);
//         }
//     }
//     Timer = setInterval(run, 1500);
// }
// $(function() {
//     house_f();
// })

$(function() {
    $('.menu li').click(function() {
        /*
        var arr = [96, 82, 82, 82, 82];
        var index = $(this).index();
        var result = 0;
        for (var i = 0; i < index; i++) {
            result += arr[i];
        }
        result += arr[index] / 2 - 10;
        */
        var arr = [48, 137, 219, 301, 383];
        var index = $(this).index();
        $('show div').animate({
            left: arr[index] - 10
        }, 200)
    })
    $(window).scroll(function() {
        // 获取页面滚动的距离
        var top = $(window).scrollTop();
        // 背景图片滚动的距离
        var bgY = top / 10;
        $('body').css('background-position-y', -bgY)
    })
})

//选项卡
var li = document.querySelectorAll('.menu li');
var div = document.querySelectorAll('.show div');

// 通过循环完成开发
var len = li.length;
for (var i = 0; i < len; i++) {
    li[i].onmouseover = function() {
        for (var j = 0; j < len; j++) {
            div[j].className = 'hide';
            // 去掉所有的li的背景颜色
            li[j].className = '';
        }

        var index = this.getAttribute('data-index');

        // 让对应的div显示
        div[index].className = '';
        // 对应的li的背景色改变
        li[index].className = 'active';
    }
}


var menus = document.getElementsByClassName('menu-t_intro');
var hides = document.getElementsByClassName('hides');

for (var i = 0; i < menus.length; i++) {
    //添加索引属性
    menus[i].setAttribute('data-num', i);
    menus[i].onmouseenter = function() {
        //自身添加id属性名为active
        this.setAttribute('id', 'active');
        //获取添加的索引属性值
        var index = this.getAttribute('data-num');
        var actives = document.getElementById('actives');
        //移出id属性
        actives.removeAttribute('id');
        hides[index].setAttribute('id', 'actives');
    }
    menus[i].onmouseleave = function() {
        this.removeAttribute('id');
    }
}
/*贴顶*/
$(function() {
    // 获取导航距页面顶部的距离
    var top = $('.si').offset().top;
    $(window).scroll(function() {
        // 当滚动距离超过上面top的时候，固定定位
        var sTop = $(window).scrollTop();
        // console.log(sTop,top);
        if (sTop >= top) {
            // console.log('你已经超过导航');
            $('.si').addClass('active')
        } else {
            // console.log(123);
            $('.si').removeClass('active');
        }
    })
})