//Create Object.documentOffsetTop prototype to check element position from top
window.Object.defineProperty( Element.prototype, 'documentOffsetTop', {
    get: function () { 
        return this.offsetTop + ( this.offsetParent ? this.offsetParent.documentOffsetTop : 0 );
    }
} );

//function to use from html (onclick)
function goTo(id){	
	//getting element position from top
    var to = document.getElementById(id).documentOffsetTop;
    animatedScroll(to);
}

//function to animate scroll
function animatedScroll(to){
	//check scroll position of window
	function checkPos(){
		var pos= Math.round(document.body.scrollTop/10)*10;
		//scroll to rounded value of position (to not have troubles with 0.0000...)
		window.scrollTo(0, pos);
		return pos;
	}

	//set speed: 10=fast; 20=medium; 50=slow;
	var speed = 10;
	var from = checkPos();
	//sign is used for scrolling up or down
	if(from != to){
		var sign;
		if(from<to){
			sign = 1;
		}else{
			sign = -1;
		}
		var dif = (to-from)*sign;
		var step = dif/speed;
		var timer = setInterval(function(){
			from = (Math.round(from*100)/100) + (step*sign);
			window.scrollTo(0, from);
			if (Math.round(from) == to || (window.innerHeight + window.scrollY) >= document.body.offsetHeight){
				clearInterval(timer);
			}
		}, speed);
	}
}