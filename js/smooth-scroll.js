window.Object.defineProperty( Element.prototype, 'documentOffsetTop', {
    get: function () { 
        return this.offsetTop + ( this.offsetParent ? this.offsetParent.documentOffsetTop : 0 );
    }
} );

function goTo(id){	
    var to = document.getElementById(id).documentOffsetTop;
    animatedScroll(to);
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
		var step = dif/10;
		var timer = setInterval(function(){
			from = (Math.round(from*100)/100) + (step*sign);
			window.scrollTo(0, from);
			if (Math.round(from) == to || (window.innerHeight + window.scrollY) >= document.body.offsetHeight){
				clearInterval(timer);
			}
		}, 10);

	}
}
