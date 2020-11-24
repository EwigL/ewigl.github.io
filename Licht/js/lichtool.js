//生成随机rgba颜色
function randomColor() {
    return "rgba(" + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + ",1" + ")";
}

//跨浏览器兼容阻止默认行为
function preDef(ev) {
    return ev.preventDefault ? ev.preventDefault() : window.event.returnValue = false;
}

//跨浏览器兼容阻止事件冒泡函数
function stopBubble(e) {
    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
}

// 拖拽窗口函数（不限制出界）
function dragable(node) {
    node.onmousedown = function (ev) {
        var e = ev || window.event;
        var offsetX = e.clientX - node.offsetLeft;
        var offsetY = e.clientY - node.offsetTop;

        document.onmousemove = function (ev) {
            var e = ev || window.event;
            var l = e.clientX - offsetX;
            var t = e.clientY - offsetY;

            node.style.left = l + "px";
            node.style.top = t + "px";
        }
    }
    document.onmouseup = function (ev) {
        document.onmousemove = null;
    }
}

// 拖拽窗口函数（限制出界）
function limitedDragable(node) {
    node.onmousedown = function (ev) {
        var e = ev || window.event;
        var offsetX = e.clientX - node.offsetLeft;
        var offsetY = e.clientY - node.offsetTop;

        document.onmousemove = function (ev) {
            var e = ev || window.event;
            var l = e.clientX - offsetX;
            var t = e.clientY - offsetY;
            var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
            var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;

            if (l <= 0) {
                l = 0;
            }
            if (l >= windowWidth - node.offsetWidth) {
                l = windowWidth - node.offsetWidth;
            }
            if (t <= 0) {
                t = 0;
            }
            if (t >= windowHeight - node.offsetHeight) {
                t = windowHeight - node.offsetHeight;
            }

            node.style.left = l + "px";
            node.style.top = t + "px";
        }
    }

    document.onmouseup = function (ev) {
        document.onmousemove = null;
    }
}