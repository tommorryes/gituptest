window.onload = function(){

    var vm = new Vue({
        el:"#demo",
        data:{
        	username : 'username',
        	none : 'nones',
        	del :-1,
        	ins :-1,//
        	msg : 'msg',
        	change : false,
        	activity: 'activity',
            lists:[],
            hello: [
					  {
					  	id :0,
					  	type : false,
					  	qqnumber : 1035336910,
					  	img : 'img/t1png.png',
					  	name : '果果'
					  },
					  {
					  	id :1,
					  	type : false,
					  	qqnumber : 1035336915,
					  	img : 'img/t1png.png',
					  	name : '果果'
					  },
					  {
					  	id :2,
					  	type : false,
					  	qqnumber : 1035336913,
					  	img : 'img/t1png.png',
					  	name : '果果'
					  },
					  {
					  	id :3,
					  	type : false,
					  	qqnumber : 1035336923,
					  	img : 'img/t1png.png',
					  	name : '果果'
					  },
					  {
					  	id :4,
					  	type : false,
					  	qqnumber : 1035336919,
					  	img : 'img/t1png.png',
					  	name : '果果'
					  },
					  {
					  	id :5,
					  	type : false,
					  	qqnumber : 1035336916,
					  	img : 'img/t1png.png',
					  	name : '果果'
					  },
{
					  	id :6,
					  	type : false,
					  	qqnumber : 1035336919,
					  	img : 'img/t1png.png',
					  	name : '果果'
					  },
					],
					hellos : [
					  
					]
           
        },
        methods:{
        	add : function(i){
        		console.log(i.id)
        		let id = i.id;//获取id
        		for (let i=0;i<vm.hellos.length;i++) {
        		    console.log(vm.hellos[i].id)
        		    console.log(id==vm.hellos[i].id)
        		    if(id == vm.hello[i].id){
        		    	alert("该用户已经是你的好友")
        		    	return false;
        		    }//判断是否已经是好友
        		}
        		vm.hellos.unshift({id:i.id++,qqnumber:i.qqnumber,img:i.img,name:i.name})//添加好友
        	},
        	color : function(i){
        		
        		vm.change=true;
        		vm.ins= index;
        	},
        	addcolor : function(index){
        		if(vm.lists.length<vm.hello.length){
        			vm.lists.push(index)
        		}//判断已添加好友总数是否在好友总数范围内
        	   /* for (let i=0;i<hello.length;i++) {
        	    	hello.type[i]=false;
        	    	console.log(hello.type[i])
        	    }
        	    hello.type[index]=true;*/
        		vm.change=false;
        		vm.ins=index;//改变样式
        	},
        	delcolor : function(index){
        		vm.ins = -1;//改变样式
        		vm.hellos.splice(index)//删除好友
        	},
        	de : function(index){
        		
        		vm.del=index;
        		
        	},
        	dl : function(index){
        	
        		vm.del=index;
        		
        	}
        	
        },
        
        mounted:function(){
          
        }
    })
}
    