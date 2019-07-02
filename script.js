
TweenLite.set('body',{perspective:700});
var slides=document.querySelectorAll('.slide'),tl=new TimelineLite({paused:true});
for(var i=0;i<slides.length;i++){
    var D=document.createElement('div'); D.className='Dot'; D.id='Dot'+i;
    D.addEventListener('click',function(){ tl.seek(this.id).pause() });
    document.getElementById('Dots').appendChild(D);
    if(i!=0){tl.addPause('Dot'+i)};
    if(i!=slides.length-1){
      tl.to(slides[i],0.5,{scale:.8,ease:Back.easeOut})
        .to(slides[i],0.7,{xPercent:-100,rotationY:80},'L'+i) 
        .from(slides[i+1],0.7,{xPercent:100,rotationY:-80},'L'+i)
        .to('#Dot'+i,0.7,{backgroundColor:'rgba(255,255,255,0.2)'},'L'+i)
        .from(slides[i+1],0.5,{scale:.8,ease:Back.easeIn})
    };
};
function GO(e){
  var SD=isNaN(e)?e.wheelDelta||-e.detail:e;
  if(SD<0){tl.play()}else{tl.reverse()};
};

document.addEventListener("mousewheel",GO);
document.addEventListener("DOMMouseScroll",GO);
/*document.getElementById('nextBtn').addEventListener("click",function(){GO(-1)});
document.getElementById('prevtBtn').addEventListener("click",function(){GO(1)});
*/
