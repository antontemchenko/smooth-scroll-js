window.Object.defineProperty( Element.prototype, 'documentOffsetTop', {
    get: function () { 
        return this.offsetTop + ( this.offsetParent ? this.offsetParent.documentOffsetTop : 0 );
    }
} );

window.speed = 10;

function goTo(id){	
    var to = document.getElementById(id).documentOffsetTop;
    animatedScroll(to);
    selectThisOne(event.target);
}

function animatedScroll(to){
	function checkPos(){
		var pos= Math.round(document.body.scrollTop/10)*10;
		window.scrollTo(0, pos);
		return pos;
	}
	var from = checkPos();
	if(from != to){
		var sign;
		if(from<to){
			sign = 1;
		}else{
			sign = -1;
		}
		var dif = (to-from)*sign;
		var step = dif/window.speed;
		var timer = setInterval(function(){
			from = (Math.round(from*100)/100) + (step*sign);
			window.scrollTo(0, from);
			if (Math.round(from) == to || (window.innerHeight + window.scrollY) >= document.body.offsetHeight){
				clearInterval(timer);
			}
		}, window.speed);

	}
}

function selectThisOne(element){
	var oldElement = document.getElementsByClassName("active")
	if(oldElement.length>0){	
		oldElement[0].className = "";
	}
	element.className = "active";
}

function setSpeed(speed) {
	window.speed = speed;
	var oldElement = document.getElementsByClassName("selected")
	if(oldElement.length>0){	
		oldElement[0].className = "";
	}
	event.target.className = "selected";
}
