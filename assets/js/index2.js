//天猫楼层
			$(function(){				
				//1.点击li 滚动到指定的位置
				$('.leftsidebar li').click(function(){
					//获取点击的当前的li
					var index=$(this).index();
					
					//当前floor 距离顶部的位置 offset().top
					console.log($('.floor').eq(index).offset().top);
				
					//设置点击滚动到指定的位置
					//$(document).scrollTop($('.floor').eq(index).offset().top)
					var top=$('.floor').eq(index).offset().top;
					//加动画
					$('html').animate({
					scrollTop:top},200);
				
				})
								
				//需要获取楼层高度的数组
				var heights=[];
				//向空数组添加高度值 floor 
				$('.floor').each(function(){
					//向一个数组的尾部添加数据 push()
					//获取每一个floor的高度
					heights.push($(this).offset().top)
				})
				//输出数组
				console.log(heights);
				

				//2.滚动条滚动某一个位置显示对应楼层
				//当前文档的滚动监听事件
				$(window).scroll(function(){
					//获取滚动的距离值
					var top=$(window).scrollTop();
					console.log(top);
					//声明变量
					var index;
					//遍历每一个楼层距离顶部的位置
					for(var i=0;i<heights.length;i++){
						//console.log(heights[i])
						//判断1F 滚动距离>100<700 
						if(top>=heights[i] && top<=heights[i+1]){
							index=i;//0 1
							//在1层 显示1F背景色
							$('.leftsidebar li').eq(index).css('background','red').siblings().css('background','aqua');
						
						//第七个 top>=自己的offset().top
						}else if(top>=heights[heights.length-1]){
							index=heights.length-1;
							$('.leftsidebar li').eq(index).css('background','red').siblings().css('background','aqua');
						}			
					}
				var leftsidebar=document.getElementsByClassName('leftsidebar')[0];
				//scrollTop值  文档滚动的值
				var x=document.documentElement.scrollTop||window.pageYOffset;
				//console.log(x);
				
				//判断滚动的距离 
				if(x>=1000){
					//wao fixed
					leftsidebar.style.display='block';
					leftsidebar.style.position='fixed';
					leftsidebar.style.top='50%';
					leftsidebar.style.left='0%';
					
				}else if(x<1000){
					//恢复到默认的静态定位
					leftsidebar.style.display='none';
					leftsidebar.style.position='static';					
				}		
				})	
			})