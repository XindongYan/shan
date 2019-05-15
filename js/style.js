/**
 * Created by Administrator on 2018/1/26.
 */
$(document).scroll(function(){
    if($(document).scrollTop()>100){
        $(".current-list").show().css({'position':'fixed','top':0,'z-index':1000})
    }else{
        $(".current-list").hide().css({'position':'','top':'','z-index':''})
    }
})
