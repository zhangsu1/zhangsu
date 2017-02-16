$(function(){
	
	function Zs(result){
		this.create_time = result.create_time;
		this.name=result.name;
		this.profile_image=result.profile_image;
		this.text=result.text;
		this.type=result.type;
		this.video_uri=result.video_uri;
		this.voice_uri	=result.voice_uri	
		this.image0 =result.image0;
		
		
		
		
	}
	Zs.prototype={
		start:function(id){
			var str ='';
			
//			var a=	if(this.type==10){
//					return '<h3>'+this.text+'</h3>'
//						+'<img src="'+this.image0+'"/>'
//				}else if(this.type ==29 ){
//					return '<p>'+this.text+'</p>'
//				}else if(this.type==31){
//					return '<h3>'+this.text+'</h3>'
//							+'<audio src="'+this.voiceuri+'"  loop="loop" controls="controls"></audio>'
//				}else if(this.type==41){
//					return '<video width="600" height="600">'
//								+'<source src="'+this.video_uri+'" ></source>'
//							+'</video>'
//				}


			str+='<div class="minImg">'
					+'<a href="#"><img src="'+this.profile_image+'"/></a>'
					+'<span>'+this.name+'</span>'
					+'<span class="time">'+this.create_time+'</span>'
				+'</div>'
				+'<div class="text">'+this.text+'</div>'
				+'<div class="best">';
				if(this.type==10){
					 str+='<img src="'+this.image0+'"/>'
				}else if(this.type==31){
					str+='<audio src="'+this.voice_uri+'"  loop="loop" controls="controls"></audio>'
				}else if(this.type==41){
					str+='<video width="600" height="" controls>'
								+'<source src="'+this.video_uri+'" ></source>'
							+'</video>'
				}
				
				str+='</div>';
				str+='<div class="line"></div>'


			
			id.append(str);
		
		}
	}
	
	
	
	
	
	
	
	
	
function ajiakesi(page,type){
		
	$.ajax({
    type: 'post',
    url: 'http://route.showapi.com/255-1',
    dataType: 'jsonp',
    data: {
         "showapi_appid": 31725, //这里需要改成自己的appid
         "showapi_sign": '3f1940e38db64105a00820a699479ae3' , //这里需要改成自己的应用的密钥secret，
 		'page':page,
 		'type':type
    },
    jsonp: 'jsonpcallback', //这个方法名很重要,不能改变
    error: function(XmlHttpRequest, textStatus, errorThrown) {
        alert("操作失败!");
    },
    success: function(result) {

        console.log(result) //console变量在ie低版本下不能用
        
        var list = result.showapi_res_body.pagebean.contentlist;
        for (var i=0;i<list.length;i++){
        	var zs = new Zs(list[i]);
        	zs.start($('#main_text'))
        }
    }
    
    
    
    
});
}
ajiakesi(1);
		$('#change1').click(function(){
			$('#main_text').html('');
			ajiakesi(1,'');
		})
		$('#change2').click(function(){
			$('#main_text').html('');
			ajiakesi(1,41);
		})
		$('#change3').click(function(){
			$('#main_text').html('');
			ajiakesi(1,10);
		})
		$('#change4').click(function(){
			$('#main_text').html('');
			ajiakesi(1,29);
		})
		$('#change5').click(function(){
			$('#main_text').html('');
			ajiakesi(1,31);
		})
	
	
})