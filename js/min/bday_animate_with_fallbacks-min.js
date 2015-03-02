$(window).load(function(){function o(o){if(console.log(o.id+" is being changed to PNG fallback"),o.hasAttribute("type")){var e=o.getAttribute("type");if(console.log(o.id+" object type = "+e),"image/svg+xml"===e){var n=o.contentDocument;if(null!=n){console.log(o.id+" contentDocument is not null or undef");var t=n.querySelector("svg");console.log("svgElem of "+o.id+" is "+t),t.setAttribute("visibility","hidden"),console.log("set visibility of svg content in "+o.id+" to hidden")}else console.log("Changing SVG to PNG."+o.id+" contentDoc is null or undef, so we do not change the visibility of inner SVG");o.removeAttribute("type"),console.log("removed type attribute from "+o.id)}}if(o.hasAttribute("data")&&(console.log(o.id+" has data attribute"),o.removeAttribute("data"),console.log("removed data attribute from "+o.id)),"obsvg"===o.className){console.log(o.id+" : original class name = "+o.className),o.className="svgfallback";var i=o.className;console.log(o.id+" : new class name = "+i)}}function e(){if(u===!1)if(console.log("browser does NOT support SMIL. determining if SVG fallbacks will be needed..."),p===!0)console.log("browser DOES support SVG. Calling for ONLY cakeObj to be changed to PNG for animation fallback"),o(f);else{console.log("browser does NOT support SMIL or SVG. calling for PNG fallbacks for all objects with svg content");var e=[f,b,v],n=e.length,t;for(t=0;n>t;t++)console.log("calling objSvgToPng for "+e[t]),o(e[t])}else console.log("YAY! SMIL animation supported. No image fallbacks needed.")}function n(o){return o||(o=window.event,console.log("event target for IE5-8 = "+o.srcElement.id)),console.log("event target = "+o.target.id+" or for IE5-8 = "+o.srcElement.id),o.target||o.srcElement}function t(o){o?o.stopPropagation&&(console.log("stopPropagation"),o.stopPropagation()):(console.log("ie5-8 alternative for stopPropagation"),o.cancelBubble=!0)}function i(o){o?o.preventDefault&&(console.log("prevent default behavior"),o.preventDefault()):(console.log("calling ie5-8 alternative for preventDefault"),o.returnValue=!1)}function l(o,e,n){o.addEventListener?o.addEventListener(e,n,!1):(o["e"+e+n]=n,o[e+n]=function(){o["e"+e+n](window.event)},o.attachEvent("on"+e,o[e+n]))}function a(){console.log("starting scOpeningAnimation"),$.Velocity(b,{translateY:[-S,"0px"]}),$.Velocity(v,{translateY:[S,"0px"]}),$.Velocity.RunSequence(w)}function s(){console.log("starting smilOpeningAnimation"),console.log("calling scOpeningAnimation"),a(),console.log("continuing smilOpeningAnimation of flames flickering"),$(P).velocity({translateX:[.8,0],translateY:[4.8,0],scale:[.8,1]},{duration:1e3,loop:!0})}function c(){u===!0?(console.log("calling smilOpeningAnimation"),s()):(console.log("calling scOpeningAnimation"),a())}function r(){console.log("starting scFinishingAnimation"),$(k).velocity("fadeOut",{duration:500,display:"none"}),u===!0?(console.log("starting smil blow out animation"),$(P).velocity("stop"),$(P).velocity({translateX:[4,0],translateY:[24,0],scale:[0,1]},1e3,function(){$(I).velocity({strokeDashoffset:["0","110"]},1500).velocity({strokeDashoffset:["-110","0"]},1500)}),$.Velocity.RunSequence(x)):(console.log("starting spriteSmotherNSmoke animation"),$(f).velocity("spriteSmotherNSmoke"),$.Velocity.RunSequence(x))}function g(o){var e=n(o);console.log("targetObj for initialAnimation = "+e),"continue"===e.id?(i(o),console.log("(initialAnimation)called prevDef for "+e.id+" on "+o),console.log("calling determineOpeningAnimation"),c()):(console.log("(initialAnimation)calling stopProp for "+e.id+" on "+o),t(o))}function d(o){var e=n(o);console.log("targetObj for continuedAnimation = "+e),"blow_out"===e.id?(i(o),console.log("(contiunedAnimation)called prevDef for "+e.id+" on "+o),console.log("calling scFinishingAnimation"),r()):"replay"===e.id?(console.log("window reload called"),window.location.reload()):"github"===e.id?(console.log("(contiunedAnimation)calling stopProp for "+e.id+" on "+o),t(o)):(console.log("(contiunedAnimation)4th case scenario...calling prevDef for "+e.id+" on "+o),i(o))}console.log("window loaded");var u=Modernizr.smil,p=Modernizr.svg,m=document.getElementById("overlay"),f=document.getElementById("cake_obj"),b=document.getElementById("banner_obj"),v=document.getElementById("balloons_obj"),y=document.getElementById("underlay"),k=document.getElementById("blow_out"),h=document.getElementById("replay"),A=document.getElementById("github"),S=function(){var o=document.body,e=$(o).height();return e}(),w=[{elements:m,properties:{opacity:[0,1]},options:{duration:1500,delay:100,display:"none"}},{elements:f,properties:{scale:[.5,1]},options:{duration:1500}},{elements:b,properties:{translateY:["0px",-S]},options:{duration:4e3,display:"block",sequenceQueue:!1}},{elements:f,properties:"reverse",options:{duration:1500,sequenceQueue:!1}},{elements:k,properties:"fadeIn",options:{duration:500,display:"block"}},{elements:k,properties:"callout.shake"}],x=[{elements:v,properties:{translateY:["0px",S]},options:{duration:5e3,display:"block"}},{elements:h,properties:"fadeIn",options:{duration:500,display:"inline-block"}},{elements:A,properties:"fadeIn",options:{duration:500,display:"inline-block",sequenceQueue:!1}}],E=p?f.contentDocument:null,P=u?E.querySelectorAll(".flame_group"):null,I=u?E.querySelectorAll(".smoke"):null;console.log("smilSupport = "+u),console.log("svgSupport = "+p),console.log("svgCakeDoc defined as "+E),console.log("flames defined as "+P),console.log("smokesdefined as "+I),$.Velocity.RegisterUI("spriteSmotherNSmoke",{defaultDuration:1e3,calls:[[{backgroundPositionX:["-500px","-500px"]},.15],[{backgroundPositionX:["-1000px","-1000px"]},.15],[{backgroundPositionX:["-1500px","-1500px"]},.15],[{backgroundPositionX:["-2000px","-2000px"]},.15],[{backgroundPositionX:["-2500px","-2500px"]},.15],[{backgroundPositionX:["-3000px","-3000px"]},.25]],reset:{backgroundPositionX:"-3000px"}}),e(),l(m,"click",g),l(y,"click",d)});