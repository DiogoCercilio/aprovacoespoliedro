// Fancybox - A.k.a.. Modal Window
(function(c,k,p,a){var q=p("html"),o=p(c),e=p(k),d=p.fancybox=function(){d.open.apply(this,arguments)},j=navigator.userAgent.match(/msie/i),n=null,h=k.createTouch!==a,b=function(r){return r&&r.hasOwnProperty&&r instanceof p},m=function(r){return r&&p.type(r)==="string"},i=function(r){return m(r)&&r.indexOf("%")>0},g=function(r){return(r&&!(r.style.overflow&&r.style.overflow==="hidden")&&((r.clientWidth&&r.scrollWidth>r.clientWidth)||(r.clientHeight&&r.scrollHeight>r.clientHeight)))},l=function(r,s){var t=parseInt(r,10)||0;if(s&&i(r)){t=d.getViewport()[s]/100*t}return Math.ceil(t)},f=function(r,s){return l(r,s)+"px"};p.extend(d,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:true,autoHeight:false,autoWidth:false,autoResize:true,autoCenter:!h,fitToView:true,aspectRatio:false,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:true,closeBtn:true,closeClick:false,nextClick:false,mouseWheel:true,autoPlay:false,playSpeed:3000,preload:3,modal:false,loop:true,ajax:{dataType:"html",headers:{"X-fancyBox":true}},iframe:{scrolling:"auto",preload:true},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:true,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(j?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:true,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:true,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:true,title:true},onCancel:p.noop,beforeLoad:p.noop,afterLoad:p.noop,beforeShow:p.noop,afterShow:p.noop,beforeChange:p.noop,beforeClose:p.noop,afterClose:p.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:false,isOpen:false,isOpened:false,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:false},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(r,s){if(!r){return}if(!p.isPlainObject(s)){s={}}if(false===d.close(true)){return}if(!p.isArray(r)){r=b(r)?p(r).get():[r]}p.each(r,function(B,w){var C={},u,A,z,y,v,t,x;if(p.type(w)==="object"){if(w.nodeType){w=p(w)}if(b(w)){C={href:w.data("fancybox-href")||w.attr("href"),title:w.data("fancybox-title")||w.attr("title"),isDom:true,element:w};if(p.metadata){p.extend(true,C,w.metadata())}}else{C=w}}u=s.href||C.href||(m(w)?w:null);A=s.title!==a?s.title:C.title||"";z=s.content||C.content;y=z?"html":(s.type||C.type);if(!y&&C.isDom){y=w.data("fancybox-type");if(!y){v=w.prop("class").match(/fancybox\.(\w+)/);y=v?v[1]:null}}if(m(u)){if(!y){if(d.isImage(u)){y="image"}else{if(d.isSWF(u)){y="swf"}else{if(u.charAt(0)==="#"){y="inline"}else{if(m(w)){y="html";z=w}}}}}if(y==="ajax"){t=u.split(/\s+/,2);u=t.shift();x=t.shift()}}if(!z){if(y==="inline"){if(u){z=p(m(u)?u.replace(/.*(?=#[^\s]+$)/,""):u)}else{if(C.isDom){z=w}}}else{if(y==="html"){z=u}else{if(!y&&!u&&C.isDom){y="inline";z=w}}}}p.extend(C,{href:u,type:y,content:z,title:A,selector:x});r[B]=C});d.opts=p.extend(true,{},d.defaults,s);if(s.keys!==a){d.opts.keys=s.keys?p.extend({},d.defaults.keys,s.keys):false}d.group=r;return d._start(d.opts.index)},cancel:function(){var r=d.coming;if(!r||false===d.trigger("onCancel")){return}d.hideLoading();if(d.ajaxLoad){d.ajaxLoad.abort()}d.ajaxLoad=null;if(d.imgPreload){d.imgPreload.onload=d.imgPreload.onerror=null}if(r.wrap){r.wrap.stop(true,true).trigger("onReset").remove()}d.coming=null;if(!d.current){d._afterZoomOut(r)}},close:function(r){d.cancel();if(false===d.trigger("beforeClose")){return}d.unbindEvents();if(!d.isActive){return}if(!d.isOpen||r===true){p(".fancybox-wrap").stop(true).trigger("onReset").remove();d._afterZoomOut()}else{d.isOpen=d.isOpened=false;d.isClosing=true;p(".fancybox-item, .fancybox-nav").remove();d.wrap.stop(true,true).removeClass("fancybox-opened");d.transitions[d.current.closeMethod]()}},play:function(r){var u=function(){clearTimeout(d.player.timer)},t=function(){u();if(d.current&&d.player.isActive){d.player.timer=setTimeout(d.next,d.current.playSpeed)}},v=function(){u();e.unbind(".player");d.player.isActive=false;d.trigger("onPlayEnd")},s=function(){if(d.current&&(d.current.loop||d.current.index<d.group.length-1)){d.player.isActive=true;e.bind({"onCancel.player beforeClose.player":v,"onUpdate.player":t,"beforeLoad.player":u});t();d.trigger("onPlayStart")}};if(r===true||(!d.player.isActive&&r!==false)){s()}else{v()}},next:function(r){var s=d.current;if(s){if(!m(r)){r=s.direction.next}d.jumpto(s.index+1,r,"next")}},prev:function(r){var s=d.current;if(s){if(!m(r)){r=s.direction.prev}d.jumpto(s.index-1,r,"prev")}},jumpto:function(s,t,u){var r=d.current;if(!r){return}s=l(s);d.direction=t||r.direction[(s>=r.index?"next":"prev")];d.router=u||"jumpto";if(r.loop){if(s<0){s=r.group.length+(s%r.group.length)}s=s%r.group.length}if(r.group[s]!==a){d.cancel();d._start(s)}},reposition:function(s,u){var r=d.current,v=r?r.wrap:null,t;if(v){t=d._getPosition(u);if(s&&s.type==="scroll"){delete t.position;v.stop(true,true).animate(t,200)}else{v.css(t);r.pos=p.extend({},r.dim,t)}}},update:function(r){var s=(r&&r.type),t=!s||s==="orientationchange";if(t){clearTimeout(n);n=null}if(!d.isOpen||n){return}n=setTimeout(function(){var u=d.current;if(!u||d.isClosing){return}d.wrap.removeClass("fancybox-tmp");if(t||s==="load"||(s==="resize"&&u.autoResize)){d._setDimension()}if(!(s==="scroll"&&u.canShrink)){d.reposition(r)}d.trigger("onUpdate");n=null},(t&&!h?0:300))},toggle:function(r){if(d.isOpen){d.current.fitToView=p.type(r)==="boolean"?r:!d.current.fitToView;if(h){d.wrap.removeAttr("style").addClass("fancybox-tmp");d.trigger("onUpdate")}d.update()}},hideLoading:function(){e.unbind(".loading");p("#fancybox-loading").remove()},showLoading:function(){var s,r;d.hideLoading();s=p('<div id="fancybox-loading"><div></div></div>').click(d.cancel).appendTo("body");e.bind("keydown.loading",function(t){if((t.which||t.keyCode)===27){t.preventDefault();d.cancel()}});if(!d.defaults.fixed){r=d.getViewport();s.css({position:"absolute",top:(r.h*0.5)+r.y,left:(r.w*0.5)+r.x})}},getViewport:function(){var s=(d.current&&d.current.locked)||false,r={x:o.scrollLeft(),y:o.scrollTop()};if(s){r.w=s[0].clientWidth;r.h=s[0].clientHeight}else{r.w=h&&c.innerWidth?c.innerWidth:o.width();r.h=h&&c.innerHeight?c.innerHeight:o.height()}return r},unbindEvents:function(){if(d.wrap&&b(d.wrap)){d.wrap.unbind(".fb")}e.unbind(".fb");o.unbind(".fb")},bindEvents:function(){var s=d.current,r;if(!s){return}o.bind("orientationchange.fb"+(h?"":" resize.fb")+(s.autoCenter&&!s.locked?" scroll.fb":""),d.update);r=s.keys;if(r){e.bind("keydown.fb",function(t){var v=t.which||t.keyCode,u=t.target||t.srcElement;if(v===27&&d.coming){return false}if(!t.ctrlKey&&!t.altKey&&!t.shiftKey&&!t.metaKey&&!(u&&(u.type||p(u).is("[contenteditable]")))){p.each(r,function(w,x){if(s.group.length>1&&x[v]!==a){d[w](x[v]);t.preventDefault();return false}if(p.inArray(v,x)>-1){d[w]();t.preventDefault();return false}})}})}if(p.fn.mousewheel&&s.mouseWheel){d.wrap.bind("mousewheel.fb",function(v,u,y,x){var z=v.target||null,w=p(z),t=false;while(w.length){if(t||w.is(".fancybox-skin")||w.is(".fancybox-wrap")){break}t=g(w[0]);w=p(w).parent()}if(u!==0&&!t){if(d.group.length>1&&!s.canShrink){if(x>0||y>0){d.prev(x>0?"down":"left")}else{if(x<0||y<0){d.next(x<0?"up":"right")}}v.preventDefault()}}})}},trigger:function(s,u){var t,r=u||d.coming||d.current;if(!r){return}if(p.isFunction(r[s])){t=r[s].apply(r,Array.prototype.slice.call(arguments,1))}if(t===false){return false}if(r.helpers){p.each(r.helpers,function(v,w){if(w&&d.helpers[v]&&p.isFunction(d.helpers[v][s])){d.helpers[v][s](p.extend(true,{},d.helpers[v].defaults,w),r)}})}e.trigger(s)},isImage:function(r){return m(r)&&r.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(r){return m(r)&&r.match(/\.(swf)((\?|#).*)?$/i)},_start:function(w){var s={},x,r,v,u,t;w=l(w);x=d.group[w]||null;if(!x){return false}s=p.extend(true,{},d.opts,x);u=s.margin;t=s.padding;if(p.type(u)==="number"){s.margin=[u,u,u,u]}if(p.type(t)==="number"){s.padding=[t,t,t,t]}if(s.modal){p.extend(true,s,{closeBtn:false,closeClick:false,nextClick:false,arrows:false,mouseWheel:false,keys:null,helpers:{overlay:{closeClick:false}}})}if(s.autoSize){s.autoWidth=s.autoHeight=true}if(s.width==="auto"){s.autoWidth=true}if(s.height==="auto"){s.autoHeight=true}s.group=d.group;s.index=w;d.coming=s;if(false===d.trigger("beforeLoad")){d.coming=null;return}v=s.type;r=s.href;if(!v){d.coming=null;if(d.current&&d.router&&d.router!=="jumpto"){d.current.index=w;return d[d.router](d.direction)}return false}d.isActive=true;if(v==="image"||v==="swf"){s.autoHeight=s.autoWidth=false;s.scrolling="visible"}if(v==="image"){s.aspectRatio=true}if(v==="iframe"&&h){s.scrolling="scroll"}s.wrap=p(s.tpl.wrap).addClass("fancybox-"+(h?"mobile":"desktop")+" fancybox-type-"+v+" fancybox-tmp "+s.wrapCSS).appendTo(s.parent||"body");p.extend(s,{skin:p(".fancybox-skin",s.wrap),outer:p(".fancybox-outer",s.wrap),inner:p(".fancybox-inner",s.wrap)});p.each(["Top","Right","Bottom","Left"],function(y,z){s.skin.css("padding"+z,f(s.padding[y]))});d.trigger("onReady");if(v==="inline"||v==="html"){if(!s.content||!s.content.length){return d._error("content")}}else{if(!r){return d._error("href")}}if(v==="image"){d._loadImage()}else{if(v==="ajax"){d._loadAjax()}else{if(v==="iframe"){d._loadIframe()}else{d._afterLoad()}}}},_error:function(r){p.extend(d.coming,{type:"html",autoWidth:true,autoHeight:true,minWidth:0,minHeight:0,scrolling:"no",hasError:r,content:d.coming.tpl.error});d._afterLoad()},_loadImage:function(){var r=d.imgPreload=new Image();r.onload=function(){this.onload=this.onerror=null;d.coming.width=this.width/d.opts.pixelRatio;d.coming.height=this.height/d.opts.pixelRatio;d._afterLoad()};r.onerror=function(){this.onload=this.onerror=null;d._error("image")};r.src=d.coming.href;if(r.complete!==true){d.showLoading()}},_loadAjax:function(){var r=d.coming;d.showLoading();d.ajaxLoad=p.ajax(p.extend({},r.ajax,{url:r.href,error:function(t,s){if(d.coming&&s!=="abort"){d._error("ajax",t)}else{d.hideLoading()}},success:function(t,s){if(s==="success"){r.content=t;d._afterLoad()}}}))},_loadIframe:function(){var r=d.coming,s=p(r.tpl.iframe.replace(/\{rnd\}/g,new Date().getTime())).attr("scrolling",h?"auto":r.iframe.scrolling).attr("src",r.href);p(r.wrap).bind("onReset",function(){try{p(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(t){}});if(r.iframe.preload){d.showLoading();s.one("load",function(){p(this).data("ready",1);if(!h){p(this).bind("load.fb",d.update)}p(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();d._afterLoad()})}r.content=s.appendTo(r.inner);if(!r.iframe.preload){d._afterLoad()}},_preloadImages:function(){var t=d.group,u=d.current,s=t.length,w=u.preload?Math.min(u.preload,s-1):0,r,v;for(v=1;v<=w;v+=1){r=t[(u.index+v)%s];if(r.type==="image"&&r.href){new Image().src=r.href}}},_afterLoad:function(){var s=d.coming,z=d.current,w="fancybox-placeholder",y,v,u,t,r,x;d.hideLoading();if(!s||d.isActive===false){return}if(false===d.trigger("afterLoad",s,z)){s.wrap.stop(true).trigger("onReset").remove();d.coming=null;return}if(z){d.trigger("beforeChange",z);z.wrap.stop(true).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()}d.unbindEvents();y=s;v=s.content;u=s.type;t=s.scrolling;p.extend(d,{wrap:y.wrap,skin:y.skin,outer:y.outer,inner:y.inner,current:y,previous:z});r=y.href;switch(u){case"inline":case"ajax":case"html":if(y.selector){v=p("<div>").html(v).find(y.selector)}else{if(b(v)){if(!v.data(w)){v.data(w,p('<div class="'+w+'"></div>').insertAfter(v).hide())}v=v.show().detach();y.wrap.bind("onReset",function(){if(p(this).find(v).length){v.hide().replaceAll(v.data(w)).data(w,false)}})}}break;case"image":v=y.tpl.image.replace("{href}",r);break;case"swf":v='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+r+'"></param>';x="";p.each(y.swf,function(B,A){v+='<param name="'+B+'" value="'+A+'"></param>';x+=" "+B+'="'+A+'"'});v+='<embed src="'+r+'" type="application/x-shockwave-flash" width="100%" height="100%"'+x+"></embed></object>";break}if(!(b(v)&&v.parent().is(y.inner))){y.inner.append(v)}d.trigger("beforeShow");y.inner.css("overflow",t==="yes"?"scroll":(t==="no"?"hidden":t));d._setDimension();d.reposition();d.isOpen=false;d.coming=null;d.bindEvents();if(!d.isOpened){p(".fancybox-wrap").not(y.wrap).stop(true).trigger("onReset").remove()}else{if(z.prevMethod){d.transitions[z.prevMethod]()}}d.transitions[d.isOpened?y.nextMethod:y.openMethod]();d._preloadImages()},_setDimension:function(){var X=d.getViewport(),F=0,r=false,J=false,v=d.wrap,w=d.skin,W=d.inner,R=d.current,G=R.width,N=R.height,B=R.minWidth,U=R.minHeight,V=R.maxWidth,C=R.maxHeight,Y=R.scrolling,P=R.scrollOutside?R.scrollbarWidth:0,T=R.margin,I=l(T[1]+T[3]),E=l(T[0]+T[2]),z,Q,x,M,L,S,s,H,t,O,Z,u,y,K,A;v.add(w).add(W).width("auto").height("auto").removeClass("fancybox-tmp");z=l(w.outerWidth(true)-w.width());Q=l(w.outerHeight(true)-w.height());x=I+z;M=E+Q;L=i(G)?(X.w-x)*l(G)/100:G;S=i(N)?(X.h-M)*l(N)/100:N;if(R.type==="iframe"){K=R.content;if(R.autoHeight&&K.data("ready")===1){try{if(K[0].contentWindow.document.location){W.width(L).height(9999);A=K.contents().find("body");if(P){A.css("overflow-x","hidden")}S=A.outerHeight(true)}}catch(D){}}}else{if(R.autoWidth||R.autoHeight){W.addClass("fancybox-tmp");if(!R.autoWidth){W.width(L)}if(!R.autoHeight){W.height(S)}if(R.autoWidth){L=W.width()}if(R.autoHeight){S=W.height()}W.removeClass("fancybox-tmp")}}G=l(L);N=l(S);t=L/S;B=l(i(B)?l(B,"w")-x:B);V=l(i(V)?l(V,"w")-x:V);U=l(i(U)?l(U,"h")-M:U);C=l(i(C)?l(C,"h")-M:C);s=V;H=C;if(R.fitToView){V=Math.min(X.w-x,V);C=Math.min(X.h-M,C)}u=X.w-I;y=X.h-E;if(R.aspectRatio){if(G>V){G=V;N=l(G/t)}if(N>C){N=C;G=l(N*t)}if(G<B){G=B;N=l(G/t)}if(N<U){N=U;G=l(N*t)}}else{G=Math.max(B,Math.min(G,V));if(R.autoHeight&&R.type!=="iframe"){W.width(G);N=W.height()}N=Math.max(U,Math.min(N,C))}if(R.fitToView){W.width(G).height(N);v.width(G+z);O=v.width();Z=v.height();if(R.aspectRatio){while((O>u||Z>y)&&G>B&&N>U){if(F++>19){break}N=Math.max(U,Math.min(C,N-10));G=l(N*t);if(G<B){G=B;N=l(G/t)}if(G>V){G=V;N=l(G/t)}W.width(G).height(N);v.width(G+z);O=v.width();Z=v.height()}}else{G=Math.max(B,Math.min(G,G-(O-u)));N=Math.max(U,Math.min(N,N-(Z-y)))}}if(P&&Y==="auto"&&N<S&&(G+z+P)<u){G+=P}W.width(G).height(N);v.width(G+z);O=v.width();Z=v.height();r=(O>u||Z>y)&&G>B&&N>U;J=R.aspectRatio?(G<s&&N<H&&G<L&&N<S):((G<s||N<H)&&(G<L||N<S));p.extend(R,{dim:{width:f(O),height:f(Z)},origWidth:L,origHeight:S,canShrink:r,canExpand:J,wPadding:z,hPadding:Q,wrapSpace:Z-w.outerHeight(true),skinSpace:w.height()-N});if(!K&&R.autoHeight&&N>U&&N<C&&!J){W.height("auto")}},_getPosition:function(t){var x=d.current,u=d.getViewport(),v=x.margin,w=d.wrap.width()+v[1]+v[3],s=d.wrap.height()+v[0]+v[2],r={position:"absolute",top:v[0],left:v[3]};if(x.autoCenter&&x.fixed&&!t&&s<=u.h&&w<=u.w){r.position="fixed"}else{if(!x.locked){r.top+=u.y;r.left+=u.x}}r.top=f(Math.max(r.top,r.top+((u.h-s)*x.topRatio)));r.left=f(Math.max(r.left,r.left+((u.w-w)*x.leftRatio)));return r},_afterZoomIn:function(){var r=d.current;if(!r){return}d.isOpen=d.isOpened=true;d.wrap.css("overflow","visible").addClass("fancybox-opened");d.update();if(r.closeClick||(r.nextClick&&d.group.length>1)){d.inner.css("cursor","pointer").bind("click.fb",function(s){if(!p(s.target).is("a")&&!p(s.target).parent().is("a")){s.preventDefault();d[r.closeClick?"close":"next"]()}})}if(r.closeBtn){p(r.tpl.closeBtn).appendTo(d.skin).bind("click.fb",function(s){s.preventDefault();d.close()})}if(r.arrows&&d.group.length>1){if(r.loop||r.index>0){p(r.tpl.prev).appendTo(d.outer).bind("click.fb",d.prev)}if(r.loop||r.index<d.group.length-1){p(r.tpl.next).appendTo(d.outer).bind("click.fb",d.next)}}d.trigger("afterShow");if(!r.loop&&r.index===r.group.length-1){d.play(false)}else{if(d.opts.autoPlay&&!d.player.isActive){d.opts.autoPlay=false;d.play()}}},_afterZoomOut:function(r){r=r||d.current;p(".fancybox-wrap").trigger("onReset").remove();p.extend(d,{group:{},opts:{},router:false,current:null,isActive:false,isOpened:false,isOpen:false,isClosing:false,wrap:null,skin:null,outer:null,inner:null});d.trigger("afterClose",r)}});d.transitions={getOrigPosition:function(){var v=d.current,r=v.element,s=v.orig,y={},w=50,x=50,z=v.hPadding,u=v.wPadding,t=d.getViewport();if(!s&&v.isDom&&r.is(":visible")){s=r.find("img:first");if(!s.length){s=r}}if(b(s)){y=s.offset();if(s.is("img")){w=s.outerWidth();x=s.outerHeight()}}else{y.top=t.y+(t.h-x)*v.topRatio;y.left=t.x+(t.w-w)*v.leftRatio}if(d.wrap.css("position")==="fixed"||v.locked){y.top-=t.y;y.left-=t.x}y={top:f(y.top-z*v.topRatio),left:f(y.left-u*v.leftRatio),width:f(w+u),height:f(x+z)};return y},step:function(z,x){var t,w,v,s=x.prop,y=d.current,u=y.wrapSpace,r=y.skinSpace;if(s==="width"||s==="height"){t=x.end===x.start?1:(z-x.start)/(x.end-x.start);if(d.isClosing){t=1-t}w=s==="width"?y.wPadding:y.hPadding;v=z-w;d.skin[s](l(s==="width"?v:v-(u*t)));d.inner[s](l(s==="width"?v:v-(u*t)-(r*t)))}},zoomIn:function(){var r=d.current,v=r.pos,u=r.openEffect,s=u==="elastic",t=p.extend({opacity:1},v);delete t.position;if(s){v=this.getOrigPosition();if(r.openOpacity){v.opacity=0.1}}else{if(u==="fade"){v.opacity=0.1}}d.wrap.css(v).animate(t,{duration:u==="none"?0:r.openSpeed,easing:r.openEasing,step:s?this.step:null,complete:d._afterZoomIn})},zoomOut:function(){var r=d.current,u=r.closeEffect,s=u==="elastic",t={opacity:0.1};if(s){t=this.getOrigPosition();if(r.closeOpacity){t.opacity=0.1}}d.wrap.animate(t,{duration:u==="none"?0:r.closeSpeed,easing:r.closeEasing,step:s?this.step:null,complete:d._afterZoomOut})},changeIn:function(){var v=d.current,u=v.nextEffect,t=v.pos,s={opacity:1},w=d.direction,x=200,r;t.opacity=0.1;if(u==="elastic"){r=w==="down"||w==="up"?"top":"left";if(w==="down"||w==="right"){t[r]=f(l(t[r])-x);s[r]="+="+x+"px"}else{t[r]=f(l(t[r])+x);s[r]="-="+x+"px"}}if(u==="none"){d._afterZoomIn()}else{d.wrap.css(t).animate(s,{duration:v.nextSpeed,easing:v.nextEasing,complete:d._afterZoomIn})}},changeOut:function(){var r=d.previous,u=r.prevEffect,s={opacity:0.1},t=d.direction,v=200;if(u==="elastic"){s[t==="down"||t==="up"?"top":"left"]=(t==="up"||t==="left"?"-":"+")+"="+v+"px"}r.wrap.animate(s,{duration:u==="none"?0:r.prevSpeed,easing:r.prevEasing,complete:function(){p(this).trigger("onReset").remove()}})}};d.helpers.overlay={defaults:{closeClick:true,speedOut:200,showEarly:true,css:{},locked:!h,fixed:true},overlay:null,fixed:false,el:p("html"),create:function(r){r=p.extend({},this.defaults,r);if(this.overlay){this.close()}this.overlay=p('<div class="fancybox-overlay"></div>').appendTo(d.coming?d.coming.parent:r.parent);this.fixed=false;if(r.fixed&&d.defaults.fixed){this.overlay.addClass("fancybox-overlay-fixed");this.fixed=true}},open:function(s){var r=this;s=p.extend({},this.defaults,s);if(this.overlay){this.overlay.unbind(".overlay").width("auto").height("auto")}else{this.create(s)}if(!this.fixed){o.bind("resize.overlay",p.proxy(this.update,this));this.update()}if(s.closeClick){this.overlay.bind("click.overlay",function(t){if(p(t.target).hasClass("fancybox-overlay")){if(d.isActive){d.close()}else{r.close()}return false}})}this.overlay.css(s.css).show()},close:function(){var r,s;o.unbind("resize.overlay");if(this.el.hasClass("fancybox-lock")){p(".fancybox-margin").removeClass("fancybox-margin");r=o.scrollTop();s=o.scrollLeft();this.el.removeClass("fancybox-lock");o.scrollTop(r).scrollLeft(s)}p(".fancybox-overlay").remove().hide();p.extend(this,{overlay:null,fixed:false})},update:function(){var s="100%",r;this.overlay.width(s).height("100%");if(j){r=Math.max(k.documentElement.offsetWidth,k.body.offsetWidth);if(e.width()>r){s=e.width()}}else{if(e.width()>o.width()){s=e.width()}}this.overlay.width(s).height(e.height())},onReady:function(s,t){var r=this.overlay;p(".fancybox-overlay").stop(true,true);if(!r){this.create(s)}if(s.locked&&this.fixed&&t.fixed){if(!r){this.margin=e.height()>o.height()?p("html").css("margin-right").replace("px",""):false}t.locked=this.overlay.append(t.wrap);t.fixed=false}if(s.showEarly===true){this.beforeShow.apply(this,arguments)}},beforeShow:function(t,u){var s,r;if(u.locked){if(this.margin!==false){p("*").filter(function(){return(p(this).css("position")==="fixed"&&!p(this).hasClass("fancybox-overlay")&&!p(this).hasClass("fancybox-wrap"))}).addClass("fancybox-margin");this.el.addClass("fancybox-margin")}s=o.scrollTop();r=o.scrollLeft();this.el.addClass("fancybox-lock");o.scrollTop(s).scrollLeft(r)}this.open(t)},onUpdate:function(){if(!this.fixed){this.update()}},afterClose:function(r){if(this.overlay&&!d.coming){this.overlay.fadeOut(r.speedOut,p.proxy(this.close,this))}}};d.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(r){var v=d.current,s=v.title,u=r.type,t,w;if(p.isFunction(s)){s=s.call(v.element,v)}if(!m(s)||p.trim(s)===""){return}t=p('<div class="fancybox-title fancybox-title-'+u+'-wrap">'+s+"</div>");switch(u){case"inside":w=d.skin;break;case"outside":w=d.wrap;break;case"over":w=d.inner;break;default:w=d.skin;t.appendTo("body");if(j){t.width(t.width())}t.wrapInner('<span class="child"></span>');d.current.margin[2]+=Math.abs(l(t.css("margin-bottom")));break}t[(r.position==="top"?"prependTo":"appendTo")](w)}};p.fn.fancybox=function(v){var r,s=p(this),t=this.selector||"",u=function(x){var A=p(this).blur(),y=r,w,z;if(!(x.ctrlKey||x.altKey||x.shiftKey||x.metaKey)&&!A.is(".fancybox-wrap")){w=v.groupAttr||"data-fancybox-group";z=A.attr(w);if(!z){w="rel";z=A.get(0)[w]}if(z&&z!==""&&z!=="nofollow"){A=t.length?p(t):s;A=A.filter("["+w+'="'+z+'"]');y=A.index(this)}v.index=y;if(d.open(A,v)!==false){x.preventDefault()}}};v=v||{};r=v.index||0;if(!t||v.live===false){s.unbind("click.fb-start").bind("click.fb-start",u)}else{e.undelegate(t,"click.fb-start").delegate(t+":not('.fancybox-item, .fancybox-nav')","click.fb-start",u)}this.filter("[data-fancybox-start=1]").trigger("click");return this};e.ready(function(){var s,r;if(p.scrollbarWidth===a){p.scrollbarWidth=function(){var t=p('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),v=t.children(),u=v.innerWidth()-v.height(99).innerWidth();t.remove();return u}}if(p.support.fixedPosition===a){p.support.fixedPosition=(function(){var t=p('<div style="position:fixed;top:20px;"></div>').appendTo("body"),u=(t[0].offsetTop===20||t[0].offsetTop===15);t.remove();return u}())}p.extend(d.defaults,{scrollbarWidth:p.scrollbarWidth(),fixed:p.support.fixedPosition,parent:p("body")});s=p(c).width();q.addClass("fancybox-lock-test");r=p(c).width();q.removeClass("fancybox-lock-test");p("<style type='text/css'>.fancybox-margin{margin-right:"+(r-s)+"px;}</style>").appendTo("head")})}(window,document,jQuery));

/*
 jQuery animateNumber plugin v0.0.10
 (c) 2013, Alexandr Borisov.
 https://github.com/aishek/jquery-animateNumber
*/
(function(f,p){function q(a,b,c){var d=u[b.type]||{};if(null==a)return c||!b.def?null:b.def;a=d.floor?~~a:parseFloat(a);return isNaN(a)?b.def:d.mod?(a+d.mod)%d.mod:0>a?0:d.max<a?d.max:a}function v(a){var b=h(),c=b._rgba=[];a=a.toLowerCase();l(y,function(d,g){var e,k=g.re.exec(a);e=k&&g.parse(k);k=g.space||"rgba";if(e)return e=b[k](e),b[m[k].cache]=e[m[k].cache],c=b._rgba=e._rgba,!1});return c.length?("0,0,0,0"===c.join()&&f.extend(c,r.transparent),b):r[a]}function s(a,b,c){c=(c+1)%1;return 1>6*c?
a+(b-a)*c*6:1>2*c?b:2>3*c?a+(b-a)*(2/3-c)*6:a}var z=/^([\-+])=\s*(\d+\.?\d*)/,y=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],a[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),
parseInt(a[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]}}],h=f.Color=function(a,b,c,d){return new f.Color.fn.parse(a,b,c,d)},m={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,
type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},w=h.support={},x=f("<p>")[0],r,l=f.each;x.style.cssText="background-color:rgba(1,1,1,.5)";w.rgba=-1<x.style.backgroundColor.indexOf("rgba");l(m,function(a,b){b.cache="_"+a;b.props.alpha={idx:3,type:"percent",def:1}});h.fn=f.extend(h.prototype,{parse:function(a,b,c,d){if(a===p)return this._rgba=[null,null,null,null],this;if(a.jquery||a.nodeType)a=
f(a).css(b),b=p;var g=this,e=f.type(a),k=this._rgba=[];b!==p&&(a=[a,b,c,d],e="array");if("string"===e)return this.parse(v(a)||r._default);if("array"===e)return l(m.rgba.props,function(d,c){k[c.idx]=q(a[c.idx],c)}),this;if("object"===e)return a instanceof h?l(m,function(c,d){a[d.cache]&&(g[d.cache]=a[d.cache].slice())}):l(m,function(d,c){var b=c.cache;l(c.props,function(d,e){if(!g[b]&&c.to){if("alpha"===d||null==a[d])return;g[b]=c.to(g._rgba)}g[b][e.idx]=q(a[d],e,!0)});g[b]&&0>f.inArray(null,g[b].slice(0,
3))&&(g[b][3]=1,c.from&&(g._rgba=c.from(g[b])))}),this},is:function(a){var b=h(a),c=!0,d=this;l(m,function(a,e){var k,f=b[e.cache];f&&(k=d[e.cache]||e.to&&e.to(d._rgba)||[],l(e.props,function(a,d){if(null!=f[d.idx])return c=f[d.idx]===k[d.idx]}));return c});return c},_space:function(){var a=[],b=this;l(m,function(c,d){b[d.cache]&&a.push(c)});return a.pop()},transition:function(a,b){var c=h(a),d=c._space(),g=m[d],e=0===this.alpha()?h("transparent"):this,k=e[g.cache]||g.to(e._rgba),f=k.slice(),c=c[g.cache];
l(g.props,function(a,d){var g=d.idx,e=k[g],h=c[g],l=u[d.type]||{};null!==h&&(null===e?f[g]=h:(l.mod&&(h-e>l.mod/2?e+=l.mod:e-h>l.mod/2&&(e-=l.mod)),f[g]=q((h-e)*b+e,d)))});return this[d](f)},blend:function(a){if(1===this._rgba[3])return this;var b=this._rgba.slice(),c=b.pop(),d=h(a)._rgba;return h(f.map(b,function(a,b){return(1-c)*d[b]+c*a}))},toRgbaString:function(){var a="rgba(",b=f.map(this._rgba,function(a,d){return null==a?2<d?1:0:a});1===b[3]&&(b.pop(),a="rgb(");return a+b.join()+")"},toHslaString:function(){var a=
"hsla(",b=f.map(this.hsla(),function(a,d){null==a&&(a=2<d?1:0);d&&3>d&&(a=Math.round(100*a)+"%");return a});1===b[3]&&(b.pop(),a="hsl(");return a+b.join()+")"},toHexString:function(a){var b=this._rgba.slice(),c=b.pop();a&&b.push(~~(255*c));return"#"+f.map(b,function(a){a=(a||0).toString(16);return 1===a.length?"0"+a:a}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}});h.fn.parse.prototype=h.fn;m.hsla.to=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,
null,null,a[3]];var b=a[0]/255,c=a[1]/255,d=a[2]/255;a=a[3];var g=Math.max(b,c,d),e=Math.min(b,c,d),k=g-e,f=g+e,h=0.5*f,f=0===k?0:0.5>=h?k/f:k/(2-f);return[Math.round(e===g?0:b===g?60*(c-d)/k+360:c===g?60*(d-b)/k+120:60*(b-c)/k+240)%360,f,h,null==a?1:a]};m.hsla.from=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var b=a[0]/360,c=a[1],d=a[2];a=a[3];c=0.5>=d?d*(1+c):d+c-d*c;d=2*d-c;return[Math.round(255*s(d,c,b+1/3)),Math.round(255*s(d,c,b)),Math.round(255*s(d,c,b-1/3)),
a]};l(m,function(a,b){var c=b.props,d=b.cache,g=b.to,e=b.from;h.fn[a]=function(a){g&&!this[d]&&(this[d]=g(this._rgba));if(a===p)return this[d].slice();var b,t=f.type(a),m="array"===t||"object"===t?a:arguments,n=this[d].slice();l(c,function(a,d){var b=m["object"===t?a:d.idx];null==b&&(b=n[d.idx]);n[d.idx]=q(b,d)});return e?(b=h(e(n)),b[d]=n,b):h(n)};l(c,function(d,b){h.fn[d]||(h.fn[d]=function(c){var e=f.type(c),g="alpha"===d?this._hsla?"hsla":"rgba":a,h=this[g](),l=h[b.idx];if("undefined"===e)return l;
"function"===e&&(c=c.call(this,l),e=f.type(c));if(null==c&&b.empty)return this;"string"===e&&(e=z.exec(c))&&(c=l+parseFloat(e[2])*("+"===e[1]?1:-1));h[b.idx]=c;return this[g](h)})})});h.hook=function(a){a=a.split(" ");l(a,function(a,c){f.cssHooks[c]={set:function(a,b){var e,k="";if("transparent"!==b&&("string"!==f.type(b)||(e=v(b)))){b=h(e||b);if(!w.rgba&&1!==b._rgba[3]){for(e="backgroundColor"===c?a.parentNode:a;(""===k||"transparent"===k)&&e&&e.style;)try{k=f.css(e,"backgroundColor"),e=e.parentNode}catch(l){}b=
b.blend(k&&"transparent"!==k?k:"_default")}b=b.toRgbaString()}try{a.style[c]=b}catch(m){}}};f.fx.step[c]=function(a){a.colorInit||(a.start=h(a.elem,c),a.end=h(a.end),a.colorInit=!0);f.cssHooks[c].set(a.elem,a.start.transition(a.end,a.pos))}})};h.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor");f.cssHooks.borderColor={expand:function(a){var b={};l(["Top","Right","Bottom","Left"],function(c,
d){b["border"+d+"Color"]=a});return b}};r=f.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery);

(function(d){var p=function(b){return b.split("").reverse().join("")},l={numberStep:function(b,a){var e=Math.floor(b);d(a.elem).text(e)}},h=function(b){var a=b.elem;a.nodeType&&a.parentNode&&(a=a._animateNumberSetter,a||(a=l.numberStep),a(b.now,b))};d.Tween&&d.Tween.propHooks?d.Tween.propHooks.number={set:h}:d.fx.step.number=h;d.animateNumber={numberStepFactories:{append:function(b){return function(a,e){var k=Math.floor(a);d(e.elem).prop("number",a).text(k+b)}},separator:function(b,a){b=b||" ";a=
a||3;return function(e,k){var c=Math.floor(e).toString(),s=d(k.elem);if(c.length>a){for(var f=c,g=a,l=f.split("").reverse(),c=[],m,q,n,r=0,h=Math.ceil(f.length/g);r<h;r++){m="";for(n=0;n<g;n++){q=r*g+n;if(q===f.length)break;m+=l[q]}c.push(m)}f=c.length-1;g=p(c[f]);c[f]=p(parseInt(g,10).toString());c=c.join(b);c=p(c)}s.prop("number",e).text(c)}}}};d.fn.animateNumber=function(){for(var b=arguments[0],a=d.extend({},l,b),e=d(this),k=[a],c=1,h=arguments.length;c<h;c++)k.push(arguments[c]);if(b.numberStep){var f=
this.each(function(){this._animateNumberSetter=b.numberStep}),g=a.complete;a.complete=function(){f.each(function(){delete this._animateNumberSetter});g&&g.apply(this,arguments)}}return e.animate.apply(e,k)}})(jQuery);


// General Scripts
function createParallax() {
	$("section.bgParallax").each(function () {
		var a = $(this);
		$(window).scroll(function () {
			var b = -($(window).scrollTop() / a.data("speed"));
			var c = "50% " + b + "px";
			a.css("background-position", c)
		})
	});
	setDimensionsForSomeElements();
}
var setDimensionsForSomeElements = function () {
	var b;
	$("nav").css("opacity", 1);
	$(".no-scroll").height($(window).height() - 100);

	if( $(".nav-mobile").css('display') === 'block' ){
		b = 0;
	}else{
		b = $(window).height() - $("nav").height();	
	}

	$("nav").css("top", b);

	var a;
	$(window).scroll(function () {
		var c = $("#home").offset();
		var g = $("#depoimentos").offset();
		var d = $("#ita").offset();
		var f = $("#medicina").offset();
		var e = $("#engenharia").offset();
		var h = $("#humanas").offset();
		var j = $("#biologicas").offset();

		var i = $(window).scrollTop();
		if (i >= (d.top - 300)) {
			// animateTablet()
		}
		if (i >= (g.top - 300)) {
			// animatePalestrantes()
		}
		if (i >= c.top & i < g.top) {
			$(".nav-top a").removeClass("active");
			$(".nav-top a").eq(0).addClass("active")

		} else if (i >= g.top & i < d.top) {
			$(".nav-top a").removeClass("active");
			$(".nav-top a").eq(1).addClass("active")

		} else if (i >= d.top & i < f.top) {
			$(".nav-top a").removeClass("active");
			$(".nav-top a").eq(2).addClass("active")

		} else if (i >= f.top & i < e.top) {
			$(".nav-top a").removeClass("active");
			$(".nav-top a").eq(3).addClass("active")

		} else if (i >= e.top & i < h.top) {
			$(".nav-top a").removeClass("active");
			$(".nav-top a").eq(4).addClass("active")

		} else if (i >= h.top & i < j.top) {
			$(".nav-top a").removeClass("active");
			$(".nav-top a").eq(5).addClass("active")

		} else if(i >= j.top){
			$(".nav-top a").removeClass("active");
			$(".nav-top a").eq(6).addClass("active")	
		}

		if (i >= b) {
			$("nav.wrapper-nav-top").addClass("navbar-fixed")
		} else {
			$("nav.wrapper-nav-top").removeClass("navbar-fixed")
		}
	})
	goToLocals();
};
var goToLocals = function () {
	$(".nav-top a").click(function (a) {
		a.preventDefault();
		$(".nav-top a,select.nav-mobile option").removeClass("active");
		$(this).addClass("active");
		var b = $(this).attr("data-goto");
		$("html, body").animate({
			scrollTop: $("#" + b).offset().top
		}, 700)
	})
	
	startSlider();
};

var navMobile = function(item){
	switch(item){
		case("home"):
			$('.nav-top a').eq(0).trigger('click');	break;
		case("depoimentos"):
			$('.nav-top a').eq(1).trigger('click');	break;
		case("ita"):
			$('.nav-top a').eq(2).trigger('click');	break;
		case("medicina"):
			$('.nav-top a').eq(3).trigger('click');	break;
		case("engenharia"):
			$('.nav-top a').eq(4).trigger('click');	break;	
		case("humanas"):
			$('.nav-top a').eq(5).trigger('click');	break;	
		case("biologicas"):
			$('.nav-top a').eq(6).trigger('click');	break;												
			default:console.log('Erro: Dados inconsistentes em "index.html" (Classes "nav-top" e "mobile-nav devem estar com os mesmos dados").');
		break;	
	}
}

var initCounter = function(){

	$('.home-buttons').animate({
		opacity:1
	},500, function(){

		$('#teacher').animateNumber({ number: 35 },2000);
		$('#class-room').animateNumber({ number: 10 },1000);
		$('#hours').animateNumber({ number: 450 },2400);
		$('#cicles').animateNumber({ number: 5 },500);
		$('#approved').animateNumber({ number: 3065 },1500);
	});
}

var startSlider =  function(){
	$('#da-slider').cslider({
		bgincrement	: 0,
		autoplay    : true, 	    
	    interval    : 4000 
	});
	settingsFancyBox();	
}

var settingsFancyBox = function(){
		$('a[rel="modal"]').click(function() {
		$.fancybox({
				'padding'		: 0,
				  helpers: {
				    overlay: {
				      locked: false
				    }
				  },				
				'autoScale'		: false,
				'transitionIn'	: 'none',
				'transitionOut'	: 'none',
				'title'			: this.title,
				'width'			: 680,
				'height'		: 495,
				'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
				'type'			: 'swf',
				'swf'			: {
				   	 'wmode'		: 'transparent',
					'allowfullscreen'	: 'true'
				}
			});
		return false;
	});
	correctElementsOnResize();
}

var correctElementsOnResize = function(){ 
	$(window).resize(function () {
		setDimensionsForSomeElements()
	});	
}
$(function() {
	var Photo	= (function() {					
		var $list		= $('#pe-thumbs'),
			listW		= $list.width(),
			listL		= $list.offset().left,
			$elems		= $list.find('img'),
			$descrp		= $list.find('div.pe-description'),
			settings	= {
				maxScale	: 1.04,
				maxOpacity	: 0.9,
				minOpacity	: Number( $elems.css('opacity') )
			},
			init		= function() {
				settings.minScale = _getScaleVal() || 1;
				_loadimages( function() {
					_calcDescrp();
					_initEvents();
				});
			},
			_getScaleVal= function() {
				var st = window.getComputedStyle($elems.get(0), null),
					tr = st.getPropertyValue("-webkit-transform") ||
						 st.getPropertyValue("-moz-transform") ||
						 st.getPropertyValue("-ms-transform") ||
						 st.getPropertyValue("-o-transform") ||
						 st.getPropertyValue("transform") ||
						 "fail...";
				if( tr !== 'none' ) {	 
					var values = tr.split('(')[1].split(')')[0].split(','),
						a = values[0],
						b = values[1],
						c = values[2],
						d = values[3];
					return Math.sqrt( a * a + b * b );
				}
			},
			_calcDescrp	= function() {
				$descrp.each( function(i) {
					var $el		= $(this),
						$img	= $el.prev(),
						img_w	= $img.width(),
						img_h	= $img.height(),
						img_n_w	= settings.maxScale * img_w,
						img_n_h	= settings.maxScale * img_h,
						space_t = ( img_n_h - img_h ) / 2,
						space_l = ( img_n_w - img_w ) / 2;
					
					$el.data( 'space_l', space_l ).css({
						height	: settings.maxScale * $el.height(),
						top		: -space_t,
						left	: img_n_w - space_l
					});
				});
			},
			_initEvents	= function() {
				$elems.on('proximity.Photo', { max: 50, throttle: 10, fireOutOfBounds : true }, function(event, proximity, distance) {
					var $el			= $(this),
						$li			= $el.closest('li'),
						$desc		= $el.next(),
						scaleVal	= proximity * ( settings.maxScale - settings.minScale ) + settings.minScale,
						scaleExp	= 'scale(' + scaleVal + ')';
					if( scaleVal === settings.maxScale ) {
						$li.css( 'z-index', 1000 );
						if( $desc.offset().left + $desc.width() > listL + listW ) {
							$desc.css( 'left', -$desc.width() - $desc.data( 'space_l' ) );
						}
						$desc.fadeIn( 800 );
					}	
					else {
						$li.css( 'z-index', 1 );
						$desc.stop(true,true).hide();
					}	
					$el.css({
						'-webkit-transform'	: scaleExp,
						'-moz-transform'	: scaleExp,
						'-o-transform'		: scaleExp,
						'-ms-transform'		: scaleExp,
						'transform'			: scaleExp,
						'opacity'			: ( proximity * ( settings.maxOpacity - settings.minOpacity ) + settings.minOpacity )
					});
				});
			},
			_loadimages	= function( callback ) {
				var loaded 	= 0,
					total	= $elems.length;
				$elems.each( function(i) {
					var $el = $(this);
					$('<img/>').load( function() {
						++loaded;
						if( loaded === total )
							callback.call();
					}).attr( 'src', $el.attr('src') );
				});
			};
		return {
			init	: init
		};
	})();
	Photo.init();

	carrousel('#first-carrousel');
	carrousel('#second-carrousel');
	carrousel('#third-carrousel');
	carrousel('#fourth-carrousel');
	carrousel('#fifth-carrousel');

});

var carrousel = function(el){
    $(el + ' .carousel_ul li:first').before($(el + ' .carousel_ul li:last')); 
		$(el + ' .right_scroll').click(function(){
                var item_width = $(el + ' .carousel_ul li').outerWidth() + 10;
        
        var left_indent = parseInt($(el + ' .carousel_ul').css('left')) - item_width;            
        $(el + ' .carousel_ul:not(:animated)').animate({'left' : left_indent},500,function(){                    
            $(el + ' .carousel_ul li:last').after($(el + ' .carousel_ul li:first')); 
            $(el + ' .carousel_ul').css({'left' : '-160px'});
        }); 
    });
    
    $(el + ' .left_scroll').click(function(){
        
        var item_width = $(el + ' .carousel_ul li').outerWidth() + 10;
                    var left_indent = parseInt($(el + ' .carousel_ul').css('left')) + item_width;
        
        $(el + ' .carousel_ul:not(:animated)').animate({'left' : left_indent},500,function(){    
            $(el + ' .carousel_ul li:first').before($(el + ' .carousel_ul li:last')); 
            $(el + ' .carousel_ul').css({'left' : '-160px'});
        });
    });	

    triggerCarouselModal();
}

var triggerCarouselModal = function(){
    $('.close-box').click(function(){
      $('.box-carrousel').fadeOut(200);
    })

    $('#ita .carousel_inner li').click(function(){
      $('.box-carrousel').hide();
      $('#box-one').fadeIn(200);
    })  

    $('#medicina .carousel_inner li').click(function(){
      $('.box-carrousel').hide();
      $('#box-two').fadeIn(200);
    })  

    $('#engenharia .carousel_inner li').click(function(){
      $('.box-carrousel').hide();
      $('#box-three').fadeIn(200);
    })  

    $('#humanas .carousel_inner li').click(function(){
      $('.box-carrousel').hide();
      $('#box-four').fadeIn(200);
    })  

    $('#biologicas .carousel_inner li').click(function(){
      $('.box-carrousel').hide();
      $('#box-five').fadeIn(200);
    })                   
}

window.onload = function () {
	createParallax();
	initCounter();
};