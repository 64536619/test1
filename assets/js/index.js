//搜索框点击特效
var btn=document.getElementById('btn');
var inpu=document.getElementById('inpu')
btn.onmousedown=function(){
	inpu.style.backgroundColor='orange';
}
btn.onmouseup=function(){
	inpu.style.backgroundColor='#fff';
}


          //轮播图
          $(function(){
					//全部变量
					var m=0;
					//封装函数 方便调用
					function run(){
						timer=setInterval(function(){
							//下标自增
							m++;
							//判断下标
							if(m>4){
								m=0;
							}
							//显示图片
							$('.img li').eq(m).addClass('show').siblings('li').removeClass('show');
							//显示数字
							$('.num li').eq(m).addClass('show').siblings('li').removeClass('show');
						},1000)
					
					}
					//首次调用函数 轮播
					run();
					
					//设置数字显示对应的图片
					//容器鼠标移入移出
					$('#box').mouseenter(function(){
						//清除定时器
						clearInterval(timer);
						//鼠标移入数字 显示对应的图片
						$('.num li').mouseenter(function(){
							//获取当前li的下标
							m=$(this).index();
							//显示图片
							$('.img li').eq(m).addClass('show').siblings('li').removeClass('show');
							//显示数字
							$('.num li').eq(m).addClass('show').siblings('li').removeClass('show');		
						})
						
					}).mouseleave(function(){
						//继续轮播
						run();
					})
					
					//点击 下一张图片
					$('#lr .right').click(function(){
						//下标自增
						m++;
						//判断下标
						if(m>4){
							m=0;
						}
						//显示图片
						$('.img li').eq(m).addClass('show').siblings('li').removeClass('show');
						//显示数字
						$('.num li').eq(m).addClass('show').siblings('li').removeClass('show');
							
					})	
				})


          //选项卡
          //li标签的鼠标移入事件
		   $('#tab ul li').mouseover(function(){
			//显示当前li的背景色其余li的背景去掉
			$(this).addClass('selected').siblings().removeClass('selected');
			//对应的内容 需要当前li的下标
			var index=$(this).index();
			console.log(index);
							
			//显示对应的内容
			$('#cont div').eq(index).show().siblings().hide();
		 })


		   //切换定位
		   /*
				需求：
				1.通过判断滚动距离scrollTop >=200
				2.改变wao的定位方式 固定定位
				3.滚动高度小于200 改变wao的定位方式 静态定位
			*/
			
			//获取节点
			var scroll=document.getElementById('scroll');
			
			//滚动监听事件
			window.onscroll=function(){
				//scrollTop值  文档滚动的值
				var y=document.documentElement.scrollTop||window.pageYOffset;
				//console.log(y);
				
				//判断滚动的距离 
				if(y>=1000){
					//wao fixed
					scroll.style.position='fixed';
					scroll.style.top='0px';
					scroll.style.left='0px';
					scroll.style.display='block';
					
				}else if(y<1000){
					//恢复到默认的静态定位
					scroll.style.position='static';
					scroll.style.display='none';
					
				}
			}
