var yesSmil=Modernizr.smil,noSmil=!Modernizr.smil;$(window).load(function(){function e(e){if(e.hasAttribute("type")){var t=e.getAttribute("type");if("image/svg+xml"===t){var n=e.contentDocument;if(null==n);else{var o=n.querySelector("svg");o.setAttribute("visibility","hidden")}e.removeAttribute("type")}}e.hasAttribute("data")&&e.removeAttribute("data"),"svg"===e.className&&(e.className="svgfallback")}function t(){if(noSmil)if(Modernizr.svg)e(m);else{var t=[m,y,f],n=t.length,o;for(o=0;n>o;o++)e(t[o])}}function n(e){return e||(e=window.event),e.target||e.srcElement}function o(e){if(e){if(!e.stopPropagation)return!1;e.stopPropagation()}else e.cancelBubble=!0}function i(e){if(e){if(!e.preventDefault)return!1;e.preventDefault()}else e.returnValue=!1}function l(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):(e["e"+t+n]=n,e[t+n]=function(){e["e"+t+n](window.event)},e.attachEvent("on"+t,e[t+n]))}function r(){$.Velocity(y,{translateY:[-x,"0px"]}),$.Velocity(f,{translateY:[x,"0px"]}),$.Velocity.RunSequence(S)}function a(){r(),$(I).velocity({translateX:[.8,0],translateY:[4.8,0],scale:[.8,1]},{duration:1e3,loop:!0})}function s(){yesSmil?a():r()}function u(){$(b).velocity("fadeOut",{duration:500,display:"none"}),yesSmil?($(I).velocity("stop"),$(I).velocity({translateX:[4,0],translateY:[24,0],scale:[0,1]},1e3,function(){$(w).velocity({strokeDashoffset:["0","110"]},1500).velocity({strokeDashoffset:["-110","0"]},1500)}),$.Velocity.RunSequence(h)):($(m).velocity("spriteSmotherNSmoke"),$.Velocity.RunSequence(h))}function c(e){var t=n(e);"continue"===t.id?(s(),i(e)):o(e)}function d(e){var t=n(e);"blow_out"===t.id?(u(),i(e)):"replay"===t.id?window.location.reload():"github"===t.id?o(e):i(e)}var p=document.getElementById("overlay"),m=document.getElementById("cake_obj"),y=document.getElementById("banner_obj"),f=document.getElementById("balloons_obj"),v=document.getElementById("underlay"),b=document.getElementById("blow_out"),g=document.getElementById("replay"),k=document.getElementById("github"),x=function(){var e=document.body,t=$(e).height();return t}(),S=[{elements:p,properties:{opacity:[0,1]},options:{duration:1500,delay:100,display:"none"}},{elements:m,properties:{scale:[.5,1]},options:{duration:1500}},{elements:y,properties:{translateY:["0px",-x]},options:{duration:4e3,display:"block",sequenceQueue:!1}},{elements:m,properties:"reverse",options:{duration:1500,sequenceQueue:!1}},{elements:b,properties:"fadeIn",options:{duration:500,display:"block"}},{elements:b,properties:"callout.shake"}],h=[{elements:f,properties:{translateY:["0px",x]},options:{duration:5e3,display:"block"}},{elements:g,properties:"fadeIn",options:{duration:500,display:"inline-block"}},{elements:k,properties:"fadeIn",options:{duration:500,display:"inline-block",sequenceQueue:!1}}],E=m.contentDocument;if(null==E);else var I=E.querySelectorAll(".flame_group"),w=E.querySelectorAll(".smoke");$.Velocity.RegisterUI("spriteSmotherNSmoke",{defaultDuration:1e3,calls:[[{backgroundPositionX:["-500px","-500px"]},.15],[{backgroundPositionX:["-1000px","-1000px"]},.15],[{backgroundPositionX:["-1500px","-1500px"]},.15],[{backgroundPositionX:["-2000px","-2000px"]},.15],[{backgroundPositionX:["-2500px","-2500px"]},.15],[{backgroundPositionX:["-3000px","-3000px"]},.25]],reset:{backgroundPositionX:"-3000px"}}),t(),l(p,"click",c),l(v,"click",d)});