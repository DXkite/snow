/*! dxui by dxkite 2016-12-13 */
!function(a){function b(a){return"'"+a.replace(/('|\\)/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n")+"'"}function c(a){return"[object Array]"===Object.prototype.toString.call(a)}var d={},e={cache:!0,tags:["{","}"],compress:!0,use_strict:!0},f="if,else,each,include,while,for",g="^\\s*((?:/)?(?:"+f.split(",").join("|")+"))(.*)",h=e.tags[0],i=e.tags[1],j=e.cache,k=e.compress,l=e.use_strict;d.config=function(a){j=void 0!==typeof a.cache?a.cache:e.cache,k=void 0!==typeof a.compress?a.compress:e.compress,a.tags&&2===a.tags.length&&(h=a.tags[0],i=a.tags[1])};var m="".trim,n=m?["$_tpl_=''","$_tpl_+=",";","$_tpl_"]:["$_tpl_=[]","$_tpl_.push(",");","$_tpl_.join('')"],o={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},p=function(a,c){try{new Function(a)}catch(a){return"throw "+a.name+"("+b(a.message)+");{"}return c},q={html:function(a){var c="";return a.match(/(?!^)\n/)?u(a.split("\n"),function(a){a&&(k&&(a=a.replace(/\s+/g," ").replace(/<!--.*?-->/g,"")),a&&(c+=n[1]+b(a)+n[2],c+="\n"))}):a&&(c+=n[1]+b(a)+n[2]),c},code:function(a){var b;if(!(b=a.match(new RegExp(g))))return(b=a.match(/^!.*$/))?n[1]+"$_unit._echo("+b[1]+")"+n[2]:n[1]+"$_unit._escape("+a+")"+n[2];var c=b[1],d=b[2];switch(c){case"include":return d=d.trim().split(" "),1===d.length&&d.push("$_unit.value"),d=d.join(","),n[1]+"$_unit._include("+d+")"+n[2];case"if":return p("if("+d+"){}","if ("+d+") {");case"else":return(b=d.match(/^\s*if\s+(.*)/))?"} else if ("+b[1]+"){":"}else{";case"/if":case"/while":case"/for":return"}";case"while":return p("while("+d+"){}","while ("+d+") {");case"for":return p("for("+d+"){}","for ("+d+") {");case"each":var b=d.match(/(\w+)\s+(?:(?:as(?:\s+(\w+)))?(?:(?:\s+=>)?\s+(\w+))?)?/);if(b){var e,f=b[1];return e=b[2]?b[3]?b[3]+","+b[2]:b[2]:"value,index","$_unit._each("+f+",function("+e+"){"}return'throw SyntaxError("Null Each Value");$_unit._each(null,function(){';case"/each":return"});"}}},r=function(a){return o[a]},s=function(a){return new String(a)},t=function(a){return s(a).replace(/&(?![\w#]+;)|[<>"']/g,r)},u=function(a,b){if(c(a))v(a,b);else for(var d in a)b.call(a[d],a[d],d)},v=function(a,b){for(var c=0;c<a.length;++c)b.call(a[c],a[c],c)},w=function(a){for(var b={},c=0;c<arguments.length;c++)for(var d in arguments[c])b[d]=arguments[c][d];return b},x=function(a,b){if(!document.getElementById(a))throw Error("No Template "+a);try{var c=new E(a,b);return c instanceof String?c:"[Error Template "+a+"]"}catch(a){throw a}},y=function(a,b,c,d){var a=a||"anonymous",e="DxTPL Error:";if(console.group(e),b){var f=b.replace(/^\n/,"").split("\n"),g=c-5>0?c-5:1,h=c+5>f.length?f.length:c+5;console.error(d);for(var i=g;i<h;i++)i==c?console.log(i+"|%c"+f[c-1]+"\t\t%c->\t\t%c"+d.name+":"+d.message,"color:red;","color:green;","color:red;"):console.log(i+"|"+f[i-1])}else console.log(b),console.log("%c"+e+d.message+"\t\t@"+a+":"+c,"color:red;");console.groupEnd(e)},z=function(a,b){var c="";return a=a.replace(/^\n/,""),u(a.split(h),function(a,d){var e=a.split(i);1===e.length?c+=b.html(e[0]):(c+=b.code(e[0]),c+=b.html(e[1]))}),c},A=function(a,b){var c=[];c.push("var $_unit=this,"+n[0]);for(var d in b)c.push(d+"=this.value."+d);var e="";return l&&(e='"use strict";'),e+=c.join(","),e+=";",e+=a+"return new String("+n[3]+");"},B=function(a,b,c,d){var e,f=A(c,d),g={_each:u,_echo:s,_escape:t,_include:x,value:d};try{var h=new Function(f);e=h.call(g)}catch(c){var i=new String(c.stack).match(/<anonymous>:(\d+):\d+/);if(i){var j=i[1]-1;y(a,b,j,c)}else{var a=a||"anonymous",i=new String(c.stack).match(/Function code:(\d+):\d+/);i?console.error("DxTPL:Compile Error@"+a+" Line "+i[1]):console.error("DxTPL:Compile Error@"+a)}}return e},C=function(a){var b=document.getElementById("template_caches");b||(b=document.createElement("div"),b.id="template_caches",b.style.display="none",document.body.appendChild(b));var c="template_cache_"+a,d=document.getElementById("template_cache_"+a);return d||(d=document.createElement("div"),d.id=c,d.innerText=z(document.getElementById(a).innerHTML,q),b.appendChild(d)),d.innerText},D=function(a,b){var c=document.querySelectorAll(a);v(c,function(c,d){var e,f=c.innerHTML;if(c.dataset.tplInit)try{var g=new Function("return "+c.dataset.tplInit+";");e=g()}catch(b){y(a+"["+d+"]",null,0,new Error("Unsupport json"))}e=w(e,b);var h=z(f,q);c.innerHTML=B(a,f,h,e)})},E=function(a,b){if("string"!=typeof a)throw Error("Unsupport Template ID");var c,e=document.getElementById(a),f=e.innerHTML;return c=j?C(a):z(f,q),b?B(a,f,c,b):{config:d.config,display:function(b){return B(a,f,c,b)}}};d.compile=function(a){return{display:function(b){return B(null,a,z(a,q),b)}}},d.template=E,d.selftpl=D,a.dxtpl=d}(window);