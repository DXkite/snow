/*! dxui by dxkite 2016-12-13 */
!function(a){var b="Toast-Parent",c="Toast-Show",d="toast",e=1e4,f=function(a,b,c){return new f.create(a,b,c)};f.Queue=new Array,f.create=function(a,c,e){f.Parent=document.getElementById(b),f.Parent||(f.Parent=document.createElement("div"),f.Parent.id=b,document.body.appendChild(f.Parent)),f.Queue.push({message:a,timeout:c,style:e?d+"-"+e:d}),f.show()},f.show=function(){if(!document.getElementById(c)){var b=f.Queue.shift(),d=a.dom.element("div",{id:c,class:b.style});console.log(b,b.style),d.innerHTML=b.message,f.Parent.appendChild(d);var g=window.innerWidth/2-d.scrollWidth/2,h=window.innerHeight-2*d.scrollHeight;d.style.marginLeft=g+"px",d.style.top=h+"px";var i=b.timeout||2e3,j=function(){a.dom(d).css({transition:"opacity 0.3s ease-out",opacity:0}),setTimeout(function(){f.Parent.removeChild(d),f.Queue.length&&f.show()},300)};a.dom(d).css({position:"fixed",opacity:1,"z-index":e,transition:"opacity 0.1s ease-in"}),setTimeout(j,i)}},a.Toast=f}(dxui);