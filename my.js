//窗口缩放执行方法
$(window).on('resize',function(){
	setHeight();
});
//取窗口滚动条高度
function getScrollTop(){
    var scrollTop=0;
    if(document.documentElement&&document.documentElement.scrollTop){
        scrollTop=document.documentElement.scrollTop;
    }else if(document.body){
        scrollTop=document.body.scrollTop;
    }
    return scrollTop;
}
//取文档内容实际高度
function documentHeight(){
    return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);
}
//获取页面浏览器视口的高度
var clientHeight = 0;
if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
}
else {
    clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
}
//显示隐藏回到顶部按钮>>>>>>>>>>>>>>>>>>>>>>>>>
$(window).scroll(function() {
    var domHeight=documentHeight();
    var scrollHeight=getScrollTop();
    var w_s_height = window.screen.height ;
    // 当滚动超过窗口高度时，加载下一页
    if (scrollHeight>w_s_height) {
        $('.go-top').show();
    }else {
        $('.go-top').hide();
    }
});
$('.go-top').click(function(){
    $('body,html').animate({scrollTop:0},500);
});
//音、视频播放
function audioPlay(){
    var myAudio=document.getElementById("music1");
        if(myAudio.paused){
            myAudio.play();
            $('.clock').addClass('clock-animate');
            return false;
        }else{
            myAudio.pause();
            $('.clock').removeClass('clock-animate');
            return false;
        }
}
//更换分享内容
function preWxShare(shareUrl){
    wxUrl=shareUrl;// 分享链接
	//分享接口    
	//获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
	shareTimeLine();
	//获取“分享给朋友”按钮点击状态及自定义分享内容接口
	shareFriend();
}
//4.7 解决IOS下:active无效
document.body.addEventListener('touchstart',function(){});

//调整图片大小和全屏查看大图
<!--预览大图-->
<div class="window">
    <div class="cloes-tag highlight"></div>
        <img>
</div>
/*显示预览大图*/
.cloes-tag {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 20px;
    height: 20px;
    border: none;
    cursor: pointer;
    -webkit-transition: all .3s;
    -ms-transition: all .3s;
    -moz-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
    z-index: 200;
}
.cloes-tag:before,
.cloes-tag:after {
    content: '';
    position: absolute;
    background-color: #fff;
    transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
}
.cloes-tag:before {
    left: 45%;
    top: -10%;
    width: 10%;
    height: 120%;
}
.cloes-tag:after {
    top: 45%;
    left: -10%;
    width: 120%;
    height: 10%;
}

.min-img{
    cursor: pointer;
}
.window{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 50%;
    top: 50%;
    visibility: hidden;
    opacity: 0;
    background-color: #000;
    z-index: 20;
    -webkit-transition: all 0.3s;
    -webkit-transform: translateX(-50%) translateY(-50%) scale(0.6);
}
.window img{
    width: 100%;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
.window-show{
    visibility: visible;
    opacity: 1;
    -webkit-transform: translateX(-50%) translateY(-50%) scale(1);
}

.post-img{
    display: block;
}
.post-img-long{
    width: 2rem;
}
.post-img-wide{
    height: 2rem;
}
<!--判断图片是横向还是纵向，添加不同的类名-->
$(".post-img").each(function(i){
    var img = $(this);
    var realWidth;//真实的宽度
    var realHeight;//真实的高度
    $("<img/>").attr("src", $(img).attr("src")).load(function() {
        realWidth = this.width;
        realHeight = this.height;
        if(realWidth<realHeight){
            img.addClass('post-img-long');
        }else {
            img.addClass('post-img-wide');
        }
    });
});
//显示大图
$(document).ready(function(){//设置类名为.min-img
    var initWindowWithIMGAndShow = function( src ){
        $('.window img').attr('src',src);
        $('.window').addClass('window-show');
    };
    $('.min-img').click(function(){
         //alert('kkk');
        var src = this.src;
        initWindowWithIMGAndShow( src );

    });
    $('.cloes-tag').click(function(){
        //alert('gg');
        $('.window').removeClass('window-show');
    });
});
//时间显示
//js函数代码：字符串转换为时间戳
function getDateTimeStamp(dateStr){
    return Date.parse(dateStr.replace(/-/gi,"/"));
}
var minute = 1000 * 60;
var hour = minute * 60;
var day = hour * 24;
function getDateDiff(dateTimeStamp){
    var now = new Date().getTime();
    console.log(now);
    var date = new Date(dateTimeStamp);
    var diffValue = now - dateTimeStamp;
    if(diffValue < 0){
        //若日期不符则弹出窗口告之
        //alert("结束日期不能小于开始日期！");
        result='';
    }else{
        var weekC =diffValue/(7*day);
        var dayC =diffValue/day;
        var hourC =diffValue/hour;
        var minC =diffValue/minute;
        if(weekC>=1){
            result="" + date.getFullYear()+'-'+(date.getMonth()+1) + "-"+date.getDay();
        }else if(dayC>=1){
            result=""+ parseInt(dayC) +"天前";
        }else if(hourC>=1){
            result=""+ parseInt(hourC) +"个小时前";
        }else if(minC>=1){
            result=""+ parseInt(minC) +"分钟前";
        }else
            result="刚刚发表";
    }
    return result;
}
//vm模板里的date型转换
var startTime = "$!date.format('yyyy/MM/dd HH:mm:ss',$!nowDate)";
/削字
function GetLength(str,x){//50个字
    var realLength=0;
    var newStr="";
    for(var i=0; i<str.length; i++) {
        var charCode=str.charCodeAt(i);
        if(charCode>=0 && charCode<=128){
            realLength+=1;
        }else{
            realLength+=2;
        }
        if(realLength<=x){
            newStr+=str[i];
        }else{
            newStr+="...";
            break;
        }
    }
    return newStr;
}
//返回上一页
$('#goBack').click(function(){
    window.history.back(-1);
})
//上传图片
var images = {
    localId: [],  //选定照片的本地ID列表
    serverId: []  //图片的服务器端ID
};

var upImgCount = 3;//总共可以上传照片张数
//添加照片
function addImg(){
    if(images.serverId.length == "undefined" || images.serverId.length == null || images.serverId.length == ""){
        images.serverId.length = 0;
    }
    if(upImgCount - images.serverId.length <= 0){
        popBoxAlert("" , "只能上传3张照片哟~");
        return false;
    }
    //拍照或从手机相册中选图接口
    wx.chooseImage({
        count: upImgCount - images.serverId.length, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
            images.localId = res.localIds;// 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片

            var i = 0;
            var length = images.localId.length;

            var upload = function(){
                wx.uploadImage({
                    localId: images.localId[i], // 需要上传的图片的本地ID，由chooseImage接口获得
                    isShowProgressTips: 1, // 默认为1，显示进度提示
                    success: function (res) {
                        images.serverId.push(res.serverId);

                        var pic = $('<div class="post-line post-line-min"><img src="img/topic/line.png" alt=""></div>'+
                            '<div class="post-img-box"><img class="imgX" src="img/topic/x0607.png">' +
                            '<img class="post-img2" src="'+ images.localId[i] +'"></div>'+
                            '<div class="post-line post-line-min"><img src="img/topic/line.png" alt=""></div>');
                        pic.appendTo('.post-img-list2');
                        if(upImgCount - images.serverId.length>0){
                            $('.canUpPicNum').text(upImgCount - images.serverId.length);
                            $('.canUpPicNum-box').show();
                        }else {
                            $('.canUpPicNum-box').hide();
                        }
                        $(".post-img2").each(function(i){
                            var img = $(this);
                            var realWidth;//真实的宽度
                            var realHeight;//真实的高度
                            $("<img/>").attr("src", $(img).attr("src")).load(function() {
                                realWidth = this.width;
                                realHeight = this.height;
                                if(realWidth<realHeight){
                                    img.addClass('post-img-long');
                                }else {
                                    img.addClass('post-img-wide');

                                }
                            });
                        });

                        i++;
                        if(i < length){
                            upload();
                        }
                    },
                    fail: function () {
                        popBoxAlert("" , "上传失败");
                    }

                });
            };
            upload();
            $(".imgX").click(function(){
                $(this).parent(".post-img-box").hide();
                var picSrc = $(this).next("img").attr("src");
                for(var j=0; j<images.serverId.length; j++){
                    if(picSrc == result.data.picUrl + images.serverId[j]){
                        images.serverId.splice(j , 1);
                        return false;
                    }
                }
            });
        }

    });
}
/*textarea字数限制*/
$("#area").on("input propertychange", function() {
    var $this = $(this),
        _val = $this.val(),
        count = "";
    if (_val.length > 300) {
        $this.val(_val.substring(0, 300));
    }
    count =$this.val().length;
    $("#text-count").text(count);
});
//分页获取评论列表>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var h=0;
//图片查询中正对浏览器主页面滚动事件处理(瀑布流)。只能使用window方式绑定，使用document方式不起作用
$(window).on('scroll',function(){
    if(documentHeight()>h&&getScrollTop() + windowHeight() >= (documentHeight() -20/*滚动响应区域高度取50px*/)){
        waterallowData();
        h=documentHeight();
    }
});
function waterallowData(){
    $('.waterfllow-loading').addClass('active');
    if(pages>page){
        //getTopicThreadOneCommentPage();
        getTopicThreadOneCommentPageOnResult(TopicThreadOneCommentPageService);
    }
}