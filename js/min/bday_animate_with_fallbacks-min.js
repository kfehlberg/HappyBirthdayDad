$(window).load(function(){function e(e){if(e.hasAttribute("type")){var t=e.getAttribute("type");if("image/svg+xml"===t){var n=e.contentDocument;if(null!=n){var o=n.querySelector("svg");o.setAttribute("visibility","hidden")}e.removeAttribute("type")}}e.hasAttribute("data")&&e.removeAttribute("data"),"obSvg"===e.className&&(e.className="svgfallback")}function t(){if(!1)if(m)e(f);else{var t=[f,b,v],n=t.length,o;for(o=0;n>o;o++)e(t[o])}}function n(e){return e||(e=window.event),e.target||e.srcElement}function o(e){if(e){if(!e.stopPropagation)return!1;e.stopPropagation()}else e.cancelBubble=!0}function i(e){if(e){if(!e.preventDefault)return!1;e.preventDefault()}else e.returnValue=!1}function l(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):(e["e"+t+n]=n,e[t+n]=function(){e["e"+t+n](window.event)},e.attachEvent("on"+t,e[t+n]))}function r(){$.Velocity(b,{translateY:[-E,"0px"]}),$.Velocity(v,{translateY:[E,"0px"]}),$.Velocity.RunSequence(I)}function a(){r(),$(q).velocity({translateX:[.8,0],translateY:[4.8,0],scale:[.8,1]},{duration:1e3,loop:!0})}function u(){p?a():r()}function s(){$(k).velocity("fadeOut",{duration:500,display:"none"}),p?($(q).velocity("stop"),$(q).velocity({translateX:[4,0],translateY:[24,0],scale:[0,1]},1e3,function(){$(B).velocity({strokeDashoffset:["0","110"]},1500).velocity({strokeDashoffset:["-110","0"]},1500)}),$.Velocity.RunSequence(S)):($(f).velocity("spriteSmotherNSmoke"),$.Velocity.RunSequence(S))}function c(e){var t=n(e);"continue"===t.id?(u(),i(e)):o(e)}function d(e){var t=n(e);"blow_out"===t.id?(s(),i(e)):"replay"===t.id?window.location.reload():"github"===t.id?o(e):i(e)}var p=Modernizr.smil,m=Modernizr.svg,y=document.getElementById("overlay"),f=document.getElementById("cake_obj"),b=document.getElementById("banner_obj"),v=document.getElementById("balloons_obj"),g=document.getElementById("underlay"),k=document.getElementById("blow_out"),x=document.getElementById("replay"),h=document.getElementById("github"),E=function(){var e=document.body,t=$(e).height();return t}(),I=[{elements:y,properties:{opacity:[0,1]},options:{duration:1500,delay:100,display:"none"}},{elements:f,properties:{scale:[.5,1]},options:{duration:1500}},{elements:b,properties:{translateY:["0px",-E]},options:{duration:4e3,display:"block",sequenceQueue:!1}},{elements:f,properties:"reverse",options:{duration:1500,sequenceQueue:!1}},{elements:k,properties:"fadeIn",options:{duration:500,display:"block"}},{elements:k,properties:"callout.shake"}],S=[{elements:v,properties:{translateY:["0px",E]},options:{duration:5e3,display:"block"}},{elements:x,properties:"fadeIn",options:{duration:500,display:"inline-block"}},{elements:h,properties:"fadeIn",options:{duration:500,display:"inline-block",sequenceQueue:!1}}],w=m?f.contentDocument:null,q=p?w.querySelectorAll(".flame_group"):null,B=p?w.querySelectorAll(".smoke"):null;$.Velocity.RegisterUI("spriteSmotherNSmoke",{defaultDuration:1e3,calls:[[{backgroundPositionX:["-500px","-500px"]},.15],[{backgroundPositionX:["-1000px","-1000px"]},.15],[{backgroundPositionX:["-1500px","-1500px"]},.15],[{backgroundPositionX:["-2000px","-2000px"]},.15],[{backgroundPositionX:["-2500px","-2500px"]},.15],[{backgroundPositionX:["-3000px","-3000px"]},.25]],reset:{backgroundPositionX:"-3000px"}}),t(),l(y,"click",c),l(g,"click",d)});