/* 图片组对象*/
(function($, window){
	'use strict';
   /* 图片类 */
	var Images = function(){
	    /* 图片名称数组*/
		this.images = ['Alien1.bmp',
                'Alien2.bmp',
                'Balloon.bmp',
                'Bear.bmp',
                'Beaver.bmp',
                'BirthdayCake.bmp',
                'ChocolateCake.bmp',
                'DaVinci.bmp',
                'Dragon.bmp',
                'Earth.bmp',
                'Fireworks1.bmp',
                'Fireworks2.bmp',
                'Fish.bmp',
                'Frog1.bmp',
                'Frog2.bmp',
                'Hand.bmp',
                'Hitchcock.bmp',
                'Leaf.bmp',
                'Monkey1.bmp',
                'Monkey2.bmp',
                'Moon.bmp',
                'Owl.bmp',
                'PartyHat.bmp',
                'Penguin.bmp',
                'Rabbit.bmp',
                'Rose.bmp',
                'Sun.bmp',
                'Women.bmp',
                'get.gif',
                'panda.gif',
                'elephant.gif',
                'haitun.gif'
            ];
     /*图片路径数组*/    
        this.imagesSrc = [];  
        /*图片对象数组*/
        this.imgs = [];
	};
	/* Images构造函数的原型对象*/
	Images.prototype = {
	    /* 初始化*/
		init:function(){
		      this.initImagesSrc();//初始化路径
		      this.loadImages(this.getImagesSrc());
		},
		/*初始化图象的路径 */
		initImagesSrc:function(){
			var
				imgSrc = [],
				i = 0,
				images = this.images,
				len = images.length;
				
			for(i; i < len; i = i + 1){
				imgSrc[i] = './images/' + images[i];
			}
			
			$.extend(true, this.imagesSrc, imgSrc);//扩展自身属性
			return imgSrc;
		},
		/*获取图片路径数组*/
		getImagesSrc:function(){
		  return $.extend(true, [], this.imagesSrc);
		},
		/* 载入图片对象*/
		loadImages:function(imgSrcs){
			var 
				imgs = [],
				i = 0,
				len = imgSrcs.length;
				
			for(i; i < len; i = i + 1){
				imgs[i] = new Image();
				imgs[i].src = imgSrcs[i];
			}
			$.extend(true, this.imgs, imgs);//扩展自身属性
			return imgs;
		},
		/* 获取图片对象数组 */
		getImageObjs:function(){
		      return $.extend(true, [], this.imgs); 
		},
		/* 创建图片dom节点*/
		createImagesDom:function(images){
			var
				imgsDom = [],
				i = 0,
				len = images.length,
				_$ = $;		
			for(i; i < len; i = i + 1){
				imgsDom[i] = _$('<img src="./images/Shamrock.bmp" rel="' + images[i].src + '">');
			}		
			return imgsDom;
		},	
		/* 随即生成函数 */
		randomImages:function(num, imagesDom){
			var i = 0,
			randomNext = function(){},
			random = Math.random,
			results = [],
			imgSrcs = [],
			imageObjs = [],
			imageDoms = [],
			temps = [],
			len = imagesDom.length;
			//深拷贝
			for(i=0; i<len; i++){
				temps[i] = imagesDom[i];
			}	
			//生成下一个随机数
			randomNext = function(){
				var len=temps.length,
				index = 0;
				while(temps[index] === null){
					index=Math.floor(Math.random()*len);
				}	
				temps[index] = null;
				return index;//返回index的值
			};
			//判断是否有imageDom参数没有自己创建
			if(imagesDom === undefined){
				imgSrcs = this.initImagesSrc();
				imageObjs = this.loadImages(imgSrcs);
				imageDoms = this.createImagesDom(imageObjs);				
				imagesDom = imageDoms;
			}			
			for(i = 0; i < num; i = i + 1){
				results[i] = imagesDom[randomNext()];
			}
			return results;
		},	
		/* 扩展images数组*/
		expendImages:function(images, grad){
			var i = 0,
			results = [],
			len = images.length,
			j = 0,
			temp = [],
			_$ = $;
			for(i; i < len; i = i + 1){
				for(j = 0; j < grad; j = j + 1){
					temp[i*grad + j] = _$('<img src="' + images[i].attr('src') + '" rel="' + images[i].attr('rel')+ '">');
					results.push(temp[i*grad + j]);
				}
			}			
			return results;
		},	
		/* 初始化数组dom对象*/
		initImages:function(count, grad){
			var results = [],
				imgSrcs = [],
				imageObjs = [],
				imageDoms = [],
				num = count / grad,
				expendDoms = [],
				randomDoms = [];
			//初始化src对象	
			imgSrcs = this.initImagesSrc();
			//载入image对象
			imageObjs = this.loadImages(imgSrcs);
			//创建doms对象
			imageDoms = this.createImagesDom(imageObjs);		
			//随机取图象
			randomDoms = this.randomImages(num, imageDoms);
			//扩展图象	
			expendDoms = this.expendImages(randomDoms, grad);	
			//随机排列图象
			expendDoms = this.randomImages(expendDoms.length, expendDoms);	
			return expendDoms;
		},
		/* 获取随机获取的图像dom对象数组*/
		getImages:function(count, grad){
		    var 
		          results = [],
                  imageObjs = [],
                  imageDoms = [],
                  num = count / grad,
                  expendDoms = [],
                  randomDoms = [];
            //载入image对象
            imageObjs = this.getImageObjs();
            //创建doms对象
            imageDoms = this.createImagesDom(imageObjs);
            //随机取图象
            randomDoms = this.randomImages(num, imageDoms);
            //扩展图象            
            expendDoms = this.expendImages(randomDoms, grad);          
            //随机排列图象
            expendDoms = this.randomImages(expendDoms.length, expendDoms);           
            return expendDoms;
		}
	};	
	window.fan1xia = window.fan1xia || {};
	window.fan1xia.model = window.fan1xia.model || {};	
	window.fan1xia.model.Images = Images;
}(jQuery, window));
