//��������ִ�з���
$(window).on('resize',function(){
	setHeight();
});
//ȡ���ڹ������߶�
function getScrollTop(){
    var scrollTop=0;
    if(document.documentElement&&document.documentElement.scrollTop){
        scrollTop=document.documentElement.scrollTop;
    }else if(document.body){
        scrollTop=document.body.scrollTop;
    }
    return scrollTop;
}
//ȡ�ĵ�����ʵ�ʸ߶�
function documentHeight(){
    return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);
}
//��ȡҳ��������ӿڵĸ߶�
var clientHeight = 0;
if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
}
else {
    clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
}
//��ʾ���ػص�������ť>>>>>>>>>>>>>>>>>>>>>>>>>
$(window).scroll(function() {
    var domHeight=documentHeight();
    var scrollHeight=getScrollTop();
    var w_s_height = window.screen.height ;
    // �������������ڸ߶�ʱ��������һҳ
    if (scrollHeight>w_s_height) {
        $('.go-top').show();
    }else {
        $('.go-top').hide();
    }
});
$('.go-top').click(function(){
    $('body,html').animate({scrollTop:0},500);
});
//������Ƶ����
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
//������������
function preWxShare(shareUrl){
    wxUrl=shareUrl;// ��������
	//����ӿ�    
	//��ȡ����������Ȧ����ť���״̬���Զ���������ݽӿ�
	shareTimeLine();
	//��ȡ����������ѡ���ť���״̬���Զ���������ݽӿ�
	shareFriend();
}
//4.7 ���IOS��:active��Ч
document.body.addEventListener('touchstart',function(){});

//����ͼƬ��С��ȫ���鿴��ͼ
<!--Ԥ����ͼ-->
<div class="window">
    <div class="cloes-tag highlight"></div>
        <img>
</div>
/*��ʾԤ����ͼ*/
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
<!--�ж�ͼƬ�Ǻ�����������Ӳ�ͬ������-->
$(".post-img").each(function(i){
    var img = $(this);
    var realWidth;//��ʵ�Ŀ��
    var realHeight;//��ʵ�ĸ߶�
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
//��ʾ��ͼ
$(document).ready(function(){//��������Ϊ.min-img
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
//ʱ����ʾ
//js�������룺�ַ���ת��Ϊʱ���
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
        //�����ڲ����򵯳����ڸ�֮
        //alert("�������ڲ���С�ڿ�ʼ���ڣ�");
        result='';
    }else{
        var weekC =diffValue/(7*day);
        var dayC =diffValue/day;
        var hourC =diffValue/hour;
        var minC =diffValue/minute;
        if(weekC>=1){
            result="" + date.getFullYear()+'-'+(date.getMonth()+1) + "-"+date.getDay();
        }else if(dayC>=1){
            result=""+ parseInt(dayC) +"��ǰ";
        }else if(hourC>=1){
            result=""+ parseInt(hourC) +"��Сʱǰ";
        }else if(minC>=1){
            result=""+ parseInt(minC) +"����ǰ";
        }else
            result="�ոշ���";
    }
    return result;
}
//vmģ�����date��ת��
var startTime = "$!date.format('yyyy/MM/dd HH:mm:ss',$!nowDate)";
/����
function GetLength(str,x){//50����
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
//������һҳ
$('#goBack').click(function(){
    window.history.back(-1);
})
//�ϴ�ͼƬ
var images = {
    localId: [],  //ѡ����Ƭ�ı���ID�б�
    serverId: []  //ͼƬ�ķ�������ID
};

var upImgCount = 3;//�ܹ������ϴ���Ƭ����
//�����Ƭ
function addImg(){
    if(images.serverId.length == "undefined" || images.serverId.length == null || images.serverId.length == ""){
        images.serverId.length = 0;
    }
    if(upImgCount - images.serverId.length <= 0){
        popBoxAlert("" , "ֻ���ϴ�3����ƬӴ~");
        return false;
    }
    //���ջ���ֻ������ѡͼ�ӿ�
    wx.chooseImage({
        count: upImgCount - images.serverId.length, // Ĭ��9
        sizeType: ['original', 'compressed'], // ����ָ����ԭͼ����ѹ��ͼ��Ĭ�϶��߶���
        sourceType: ['album', 'camera'], // ����ָ����Դ����ỹ�������Ĭ�϶��߶���
        success: function (res) {
            images.localId = res.localIds;// ����ѡ����Ƭ�ı���ID�б�localId������Ϊimg��ǩ��src������ʾͼƬ

            var i = 0;
            var length = images.localId.length;

            var upload = function(){
                wx.uploadImage({
                    localId: images.localId[i], // ��Ҫ�ϴ���ͼƬ�ı���ID����chooseImage�ӿڻ��
                    isShowProgressTips: 1, // Ĭ��Ϊ1����ʾ������ʾ
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
                            var realWidth;//��ʵ�Ŀ��
                            var realHeight;//��ʵ�ĸ߶�
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
                        popBoxAlert("" , "�ϴ�ʧ��");
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
/*textarea��������*/
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
//��ҳ��ȡ�����б�>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var h=0;
//ͼƬ��ѯ�������������ҳ������¼�����(�ٲ���)��ֻ��ʹ��window��ʽ�󶨣�ʹ��document��ʽ��������
$(window).on('scroll',function(){
    if(documentHeight()>h&&getScrollTop() + windowHeight() >= (documentHeight() -20/*������Ӧ����߶�ȡ50px*/)){
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