/*! dxui by dxkite 2016-12-13 */
!function(a){var b="Toast-Parent",c="Toast-Show",d="toast",e=1e4,f=function(a,b,c){return new f.create(a,b,c)};f.Queue=new Array,f.create=function(a,c,e){f.Parent=document.getElementById(b),f.Parent||(f.Parent=document.createElement("div"),f.Parent.id=b,document.body.appendChild(f.Parent)),f.Queue.push({message:a,timeout:c,style:e?d+"-"+e:d})},f.create.prototype.show=function b(){if(!document.getElementById(c)){var d=f.Queue.shift(),g=a.dom.element("div",{id:c,class:d.style});console.log(d,d.style),g.innerHTML=d.message,f.Parent.appendChild(g);var h=window.innerWidth/2-g.scrollWidth/2,i=window.innerHeight-2*g.scrollHeight;g.style.marginLeft=h+"px",g.style.top=i+"px";var j=d.timeout||2e3,k=function(){a.dom(g).css({transition:"opacity 0.3s ease-out",opacity:0}),setTimeout(function(){f.Parent.removeChild(g),f.Queue.length&&b()},300)};a.dom(g).css({position:"fixed",opacity:1,"z-index":e,transition:"opacity 0.1s ease-in"}),setTimeout(k,j)}},f.show=f.create.prototype.show,a.Toast=f}(dxui);