(()=>{"use strict";var e,t,n,r,o,i,a={134:(e,t,n)=>{var r=n(260),o=Object.create(null),i="undefined"==typeof document,a=Array.prototype.forEach;function c(){}function s(e,t){if(!t){if(!e.href)return;t=e.href.split("?")[0]}if(u(t)&&!1!==e.isLoaded&&t&&t.indexOf(".css")>-1){e.visited=!0;var n=e.cloneNode();n.isLoaded=!1,n.addEventListener("load",(function(){n.isLoaded||(n.isLoaded=!0,e.parentNode.removeChild(e))})),n.addEventListener("error",(function(){n.isLoaded||(n.isLoaded=!0,e.parentNode.removeChild(e))})),n.href="".concat(t,"?").concat(Date.now()),e.nextSibling?e.parentNode.insertBefore(n,e.nextSibling):e.parentNode.appendChild(n)}}function l(){var e=document.querySelectorAll("link");a.call(e,(function(e){!0!==e.visited&&s(e)}))}function u(e){return!!/^https?:/i.test(e)}e.exports=function(e,t){if(i)return console.log("no window.document found, will not HMR CSS"),c;var n,d,p=function(e){var t=o[e];if(!t){if(document.currentScript)t=document.currentScript.src;else{var n=document.getElementsByTagName("script"),i=n[n.length-1];i&&(t=i.src)}o[e]=t}return function(e){if(!t)return null;var n=t.split(/([^\\/]+)\.js$/),o=n&&n[1];return o&&e?e.split(",").map((function(e){var n=new RegExp("".concat(o,"\\.js$"),"g");return r(t.replace(n,"".concat(e.replace(/{fileName}/g,o),".css")))})):[t.replace(".js",".css")]}}(e);return n=function(){var e=p(t.filename),n=function(e){if(!e)return!1;var t=document.querySelectorAll("link"),n=!1;return a.call(t,(function(t){if(t.href){var o=function(e,t){var n;return e=r(e,{stripWWW:!1}),t.some((function(r){e.indexOf(t)>-1&&(n=r)})),n}(t.href,e);u(o)&&!0!==t.visited&&o&&(s(t,o),n=!0)}})),n}(e);if(t.locals)return console.log("[HMR] Detected local css modules. Reload all css"),void l();n?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),l())},50,d=0,function(){var e=this,t=arguments,r=function(){return n.apply(e,t)};clearTimeout(d),d=setTimeout(r,50)}}},260:e=>{e.exports=function(e){if(e=e.trim(),/^data:/i.test(e))return e;var t=-1!==e.indexOf("//")?e.split("//")[0]+"//":"",n=e.replace(new RegExp(t,"i"),"").split("/"),r=n[0].toLowerCase().replace(/\.$/,"");return n[0]="",t+r+n.reduce((function(e,t){switch(t){case"..":e.pop();break;case".":break;default:e.push(t)}return e}),[]).join("/")}},990:(e,t,n)=>{n.r(t);var r=n(134)(e.id,{locals:!1});e.hot.dispose(r),e.hot.accept(void 0,r)},895:(e,t,n)=>{n.r(t);var r=n(134)(e.id,{locals:!1});e.hot.dispose(r),e.hot.accept(void 0,r)},186:(e,t,n)=>{n.r(t);var r=n(134)(e.id,{locals:!1});e.hot.dispose(r),e.hot.accept(void 0,r)},424:(e,t,n)=>{n.r(t);var r=n(134)(e.id,{locals:!1});e.hot.dispose(r),e.hot.accept(void 0,r)},374:(e,t,n)=>{n.r(t);var r=n(134)(e.id,{locals:!1});e.hot.dispose(r),e.hot.accept(void 0,r)},293:(e,t,n)=>{n.r(t);var r=n(134)(e.id,{locals:!1});e.hot.dispose(r),e.hot.accept(void 0,r)},182:(e,t,n)=>{n.r(t);var r=n(134)(e.id,{locals:!1});e.hot.dispose(r),e.hot.accept(void 0,r)},27:(e,t,n)=>{n.r(t);var r=n(134)(e.id,{locals:!1});e.hot.dispose(r),e.hot.accept(void 0,r)},257:(e,t,n)=>{n.r(t);var r=n(134)(e.id,{locals:!1});e.hot.dispose(r),e.hot.accept(void 0,r)},477:(e,t,n)=>{n.r(t);var r=n(134)(e.id,{locals:!1});e.hot.dispose(r),e.hot.accept(void 0,r)},297:(e,t,n)=>{n.r(t);var r=n(134)(e.id,{locals:!1});e.hot.dispose(r),e.hot.accept(void 0,r)},174:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};t.__esModule=!0;var i=n(857),a=n(811),c=n(922),s=n(899),l=n(938),u=function(){function e(e,t){this.rootElement=e,this.location=t,this.header=new c.default("Start Game"),this.rootElement.appendChild(this.header.render()),this.main=new s.default,this.settings=new l.default("Game Cards","Select game cards type:"),this.settings2=new l.default("Difficulty","Select game type:"),this.dropdown=new i.default("Animals","Fruits"),this.dropdown2=new i.default("4x4","6x6"),this.route=this.route.bind(this),this.initApp()}return e.prototype.initApp=function(){return r(this,void 0,void 0,(function(){var e=this;return o(this,(function(t){return window.history.replaceState({pageName:""+this.location},this.location+" page",this.location),this.render(this.location),this.header.element.addEventListener("click",this.route),window.addEventListener("popstate",(function(t){e.render(t.state.pageName)})),[2]}))}))},e.prototype.render=function(e){if(this.location=e,this.main.element.innerHTML="","about"===this.location)(t=document.createElement("div")).textContent="All cards are mixed up. Cards lay down in rows, face down. You should turn over any two cards. If the two cards match, they will stay face up. If they don’t match, they will turn back over. The game is over when all the cards have been matched.",t.classList.add("settings_container"),t.classList.add("about_container"),this.main.element.appendChild(t);else if("best_score"===this.location)(t=document.createElement("div")).textContent="Best Scores",t.classList.add("settings_container"),t.classList.add("about_container"),this.main.element.appendChild(t);else if("game"===this.location)this.game=new a.default,this.indexCardsType=this.dropdown.checkSelected()||0,this.indexGameType=this.dropdown2.checkSelected()||0,this.game.getCardsPics(this.indexCardsType,this.indexGameType),this.main.element.appendChild(this.game.element),this.header.text="Pause Game";else if("settings"===this.location){var t;(t=document.createElement("div")).classList.add("settings_container"),this.settings.element.appendChild(this.dropdown.element),this.settings2.element.appendChild(this.dropdown2.element),t.appendChild(this.settings.element),t.appendChild(this.settings2.element),this.main.element.appendChild(t)}this.rootElement.appendChild(this.main.element)},e.prototype.route=function(e){if(e.preventDefault(),"A"===e.target.tagName){var t=e.target.href.split("\\").pop().split("/").pop();t!==this.location&&("game"!==t&&(this.header.text="Start Game",this.header.element.innerHTML="",this.header.render()),this.render(t),window.history.pushState({pageName:""+t},t+" page",t),localStorage.setItem("pageName",JSON.stringify(t)))}},e}();t.default=u},266:(e,t)=>{t.__esModule=!0;t.default=function(e,t){var n;void 0===e&&(e="div"),void 0===t&&(t=[]),this.element=document.createElement(e),(n=this.element.classList).add.apply(n,t)}},564:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0,n(990);var i=n(266),a=n(240),c=function(e){function t(t,n){var r=e.call(this,"a",["button"])||this;return r.text=t,r.href=n,r}return o(t,e),t.prototype.render=function(){var e=this;return this.element.textContent=this.text,this.element.setAttribute("href",""+this.href),this.element.addEventListener("click",(function(){if(e.timer=new a.default,"Pause Game"===e.element.textContent)e.element.textContent="Resume Game",e.timer.pauseTimer();else{e.element.textContent="Pause Game";var t=document.querySelector(".timer").innerText.split(" : ");e.timer.resumeTimer(parseInt(t[0],2),parseInt(t[0],2))}})),this.element},t}(i.default);t.default=c},453:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0;var i=n(266);n(895);var a=function(e){function t(t){var n=e.call(this,"div",["card-container"])||this;return n.image=t,n.isFlipped=!1,n.element.innerHTML='\n        <div class="card">\n          <div class="card__front" style="background-image: url(\'./images/'+t+'\')"></div>\n          <div class="card__back"></div>\n        </div>\n        ',n}return o(t,e),t.prototype.flipToBack=function(){return this.isFlipped=!0,this.flip(!0)},t.prototype.flipToFront=function(){return this.isFlipped=!1,this.flip()},t.prototype.flip=function(e){var t=this;return void 0===e&&(e=!1),new Promise((function(n){t.element.classList.toggle("active",e),t.element.addEventListener("transitionend",(function(){return n()}),{once:!0})}))},t}(i.default);t.default=a},726:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0,n(186);var i=function(e){function t(){var t=e.call(this,"div",["cards-field"])||this;return t.cards=[],t}return o(t,e),t.prototype.clear=function(){this.cards=[],this.element.innerHTML=""},t.prototype.addCards=function(e,t){var n=this;this.cards=e,this.cards.forEach((function(e){1===t&&(e.element.style.flexBasis="13%",e.element.style.margin="0",e.element.style.marginBottom="1.5%",e.element.style.marginLeft="1.5%",e.element.style.height="4.2rem",e.element.style.width="3.2rem"),n.element.appendChild(e.element)})),setTimeout((function(){n.cards.forEach((function(e){return e.flipToBack()}))}),5e3)},t}(n(266).default);t.default=i},7:(e,t)=>{t.__esModule=!0,t.default=function(e){return new Promise((function(t){setTimeout(t,e)}))}},857:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0,n(424);var i=function(e){function t(t,n){var r=e.call(this,"select",["dropdown"])||this;return r.element.innerHTML='\n           <option value="'+t+'">'+t+'</option>\n           <option value="'+n+'">'+n+"</option>",r}return o(t,e),t.prototype.checkSelected=function(){var e=this;return this.element.addEventListener("change",(function(){e.index=e.element.selectedIndex})),this.index},t}(n(266).default);t.default=i},880:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0,n(374);var i=function(e){function t(t){var n=e.call(this,"div",["popup"])||this;return n.duration=t,n.element.innerHTML='\n        <div class="popup__body"></div>\n          <div class="popup__content">Congratulations! You successfully found all matches on '+n.duration+' minutes.\n          <button class="close_popup">Ok</button>\n        </div>\n        ',n}return o(t,e),t}(n(266).default);t.default=i},811:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};t.__esModule=!0,n(293);var c,s=n(266),l=n(453),u=n(726),d=n(7),p=n(240),f=n(880),h=[],v=function(e){function t(){var t=e.call(this,"div",["game-container"])||this;return t.isActive=!1,t.cardsField=new u.default,t.timer=new p.default,setTimeout((function(){t.element.appendChild(t.timer.element),t.element.appendChild(t.cardsField.element)}),500),t}return o(t,e),t.prototype.startGame=function(e,t){var n=this;this.cardsField.clear();var r=e.concat(e).map((function(e){return new l.default(e)})).sort((function(){return Math.random()-.5}));c=r.length,r.forEach((function(e){e.element.addEventListener("click",(function(){return n.clickHandler(e)}))})),1===t&&(this.cardsField.element.style.width="40%"),this.cardsField.addCards(r,t),setTimeout((function(){n.timer.startTimer()}),5e3)},t.prototype.clickHandler=function(e){return i(this,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return this.isActive?[2]:e.isFlipped?(this.isActive=!0,[4,e.flipToFront()]):[2];case 1:return t.sent(),this.activeCard?this.activeCard.image===e.image?[3,4]:[4,d.default(2e3)]:(this.activeCard=e,this.isActive=!1,[2]);case 2:return t.sent(),[4,Promise.all([this.activeCard.flipToBack(),e.flipToBack()])];case 3:return t.sent(),[3,5];case 4:h.push(this.activeCard),h.push(e),this.checkSet(),t.label=5;case 5:return this.activeCard=void 0,this.isActive=!1,[2]}}))}))},t.prototype.checkSet=function(){var e=this;if(h.length===c){var t=this.timer.stopTimer();this.popup=new f.default(t),this.element.appendChild(this.popup.element),this.popup.element.lastElementChild.addEventListener("click",(function(){e.element.style.display="none",window.history.pushState({pageName:"about"},"about page","about"),localStorage.setItem("pageName",JSON.stringify("about")),window.history.go()}))}},t.prototype.getCardsPics=function(e,t){return i(this,void 0,void 0,(function(){var n,r;return a(this,(function(o){switch(o.label){case 0:return n=[],[4,fetch("./images.json")];case 1:return[4,o.sent().json()];case 2:return r=o.sent(),n=1===t?r[e].images6.map((function(t){return r[e].category+"/"+t})):r[e].images.map((function(t){return r[e].category+"/"+t})),this.startGame(n,t),[2]}}))}))},t}(s.default);t.default=v},922:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0,n(182);var i=n(266),a=n(686),c=n(564),s=function(e){function t(t){var n=e.call(this,"header",["header"])||this;return n.text=t,n}return o(t,e),t.prototype.render=function(){var e=document.createElement("div");return e.classList.add("logo"),e.innerHTML='<div class="upper">Match</div>\n                          <div class="bottom">Match</div>',this.element.appendChild(e),this.nav=new a.default,this.nav.renderButtons(),this.element.appendChild(this.nav.element),this.button=new c.default(""+this.text,"game"),this.element.appendChild(this.button.render()),this.element},t}(i.default);t.default=s},899:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0;var i=function(e){function t(){return e.call(this,"main",["main_container"])||this}return o(t,e),t}(n(266).default);t.default=i},686:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};t.__esModule=!0,n(27);var c=n(266),s=n(873),l=function(e){function t(){return e.call(this,"nav",["nav"])||this}return o(t,e),t.prototype.renderButtons=function(){return i(this,void 0,void 0,(function(){var e,t=this;return a(this,(function(n){switch(n.label){case 0:return e=document.createElement("ul"),[4,fetch("./buttons.json").then((function(e){return e.json()}))];case 1:return n.sent().forEach((function(n){t.button=new s.default(n.path,n.text,n.background),e.appendChild(t.button.element)})),this.element.appendChild(e),[2]}}))}))},t}(c.default);t.default=l},873:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0,n(27);var i=function(e){function t(t,n,r){var o=e.call(this,"li",["nav_button"])||this;return o.element.innerHTML="\n        <span style=\"background-image: url('./"+r+'\')"></span><a href="'+t+'">'+n+"</a>",o}return o(t,e),t}(n(266).default);t.default=i},938:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0,n(257);var i=function(e){function t(t,n){var r=e.call(this,"div",["settings_box"])||this;return r.element.innerHTML='\n        <h3 class="setting_name">'+t+'</h3>\n        <label for="cards">'+n+"</label>",r}return o(t,e),t}(n(266).default);t.default=i},240:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});t.__esModule=!0,n(477);var i,a=function(e){function t(){var t=e.call(this,"div",["timer"])||this;return t.seconds=0,t.minutes=0,t.element.innerText="0"+t.minutes+" : 0"+t.seconds,t}return o(t,e),t.prototype.startTimer=function(){var e,t,n=this;i=setInterval((function(){59===n.seconds?(n.minutes+=1,n.seconds=0):n.seconds+=1,e=n.seconds<=9?"0"+n.seconds:""+n.seconds,t=n.minutes<=9?"0"+n.minutes:""+n.minutes,n.element.innerText=t+" : "+e}),1150)},t.prototype.stopTimer=function(){return clearInterval(i),this.seconds=0,this.minutes=0,this.element.innerText},t.prototype.pauseTimer=function(){clearInterval(i)},t.prototype.resumeTimer=function(e,t){var n,r,o=this;this.seconds=t,this.minutes=e,i=setInterval((function(){59===o.seconds?(o.minutes+=1,o.seconds=0):o.seconds+=1,n=o.seconds<=9?"0"+o.seconds:""+o.seconds,r=o.minutes<=9?"0"+o.minutes:""+o.minutes,o.element.innerText=r+" : "+n}),1150)},t}(n(266).default);t.default=a},303:(e,t,n)=>{var r=n(174);n(297),window.addEventListener("load",(function(){var e=document.getElementById("root");if(!e)throw Error("Not found");var t=JSON.parse(localStorage.getItem("pageName"))||"about";new r.default(e,t)})),window.addEventListener("scroll",(function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.querySelector(".header").style.top="-75px":document.querySelector(".header").style.top="0px"}))}},c={};function s(e){var t=c[e];if(void 0!==t){if(void 0!==t.error)throw t.error;return t.exports}var n=c[e]={id:e,exports:{}};try{var r={id:e,module:n,factory:a[e],require:s};s.i.forEach((function(e){e(r)})),n=r.module,r.factory.call(n.exports,n,n.exports,r.require)}catch(e){throw n.error=e,e}return n.exports}s.m=a,s.c=c,s.i=[],s.hu=e=>e+"."+s.h()+".hot-update.js",s.miniCssF=e=>{},s.hmrF=()=>"main."+s.h()+".hot-update.json",s.h=()=>"e708c5884d3b7bdfccdf",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},s.l=(t,n,r,o)=>{if(e[t])e[t].push(n);else{var i,a;if(void 0!==r)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var u=c[l];if(u.getAttribute("src")==t){i=u;break}}i||(a=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=t),e[t]=[n];var d=(n,r)=>{i.onerror=i.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(r))),n)return n(r)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),a&&document.head.appendChild(i)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e,t,n,r,o={},i=s.c,a=[],c=[],l="idle";function u(e){l=e;for(var t=0;t<c.length;t++)c[t].call(null,e)}function d(e){if(0===t.length)return e();var n=t;return t=[],Promise.all(n).then((function(){return d(e)}))}function p(e){if("idle"!==l)throw new Error("check() is only allowed in idle status");return u("check"),s.hmrM().then((function(r){if(!r)return u(v()?"ready":"idle"),null;u("prepare");var o=[];return t=[],n=[],Promise.all(Object.keys(s.hmrC).reduce((function(e,t){return s.hmrC[t](r.c,r.r,r.m,e,n,o),e}),[])).then((function(){return d((function(){return e?h(e):(u("ready"),o)}))}))}))}function f(e){return"ready"!==l?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},v();var t=n.map((function(t){return t(e)}));n=void 0;var o,i=t.map((function(e){return e.error})).filter(Boolean);if(i.length>0)return u("abort"),Promise.resolve().then((function(){throw i[0]}));u("dispose"),t.forEach((function(e){e.dispose&&e.dispose()})),u("apply");var a=function(e){o||(o=e)},c=[];return t.forEach((function(e){if(e.apply){var t=e.apply(a);if(t)for(var n=0;n<t.length;n++)c.push(t[n])}})),o?(u("fail"),Promise.resolve().then((function(){throw o}))):r?h(e).then((function(e){return c.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e})):(u("idle"),Promise.resolve(c))}function v(){if(r)return n||(n=[]),Object.keys(s.hmrI).forEach((function(e){r.forEach((function(t){s.hmrI[e](t,n)}))})),r=void 0,!0}s.hmrD=o,s.i.push((function(h){var v,m,y,_,w=h.module,g=function(n,r){var o=i[r];if(!o)return n;var c=function(t){if(o.hot.active){if(i[t]){var c=i[t].parents;-1===c.indexOf(r)&&c.push(r)}else a=[r],e=t;-1===o.children.indexOf(t)&&o.children.push(t)}else console.warn("[HMR] unexpected require("+t+") from disposed module "+r),a=[];return n(t)},s=function(e){return{configurable:!0,enumerable:!0,get:function(){return n[e]},set:function(t){n[e]=t}}};for(var p in n)Object.prototype.hasOwnProperty.call(n,p)&&"e"!==p&&Object.defineProperty(c,p,s(p));return c.e=function(e){return function(e){switch(l){case"ready":return u("prepare"),t.push(e),d((function(){u("ready")})),e;case"prepare":return t.push(e),e;default:return e}}(n.e(e))},c}(h.require,h.id);w.hot=(v=h.id,m=w,_={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==v,_requireSelf:function(){a=m.parents.slice(),e=y?void 0:v,s(v)},active:!0,accept:function(e,t,n){if(void 0===e)_._selfAccepted=!0;else if("function"==typeof e)_._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)_._acceptedDependencies[e[r]]=t||function(){},_._acceptedErrorHandlers[e[r]]=n;else _._acceptedDependencies[e]=t||function(){},_._acceptedErrorHandlers[e]=n},decline:function(e){if(void 0===e)_._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)_._declinedDependencies[e[t]]=!0;else _._declinedDependencies[e]=!0},dispose:function(e){_._disposeHandlers.push(e)},addDisposeHandler:function(e){_._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=_._disposeHandlers.indexOf(e);t>=0&&_._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,l){case"idle":n=[],Object.keys(s.hmrI).forEach((function(e){s.hmrI[e](v,n)})),u("ready");break;case"ready":Object.keys(s.hmrI).forEach((function(e){s.hmrI[e](v,n)}));break;case"prepare":case"check":case"dispose":case"apply":(r=r||[]).push(v)}},check:p,apply:f,status:function(e){if(!e)return l;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var t=c.indexOf(e);t>=0&&c.splice(t,1)},data:o[v]},e=void 0,_),w.parents=a,w.children=[],a=[],h.require=g})),s.hmrC={},s.hmrI={}})(),(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),t=(e,t,n,r)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=c,o.parentNode.removeChild(o),r(s)}},o.href=t,document.head.appendChild(o),o},n=(e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(a=n[r]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var a;if((o=(a=i[r]).getAttribute("data-href"))===e||o===t)return a}},r=[],o=[],i=e=>({dispose:()=>{for(var e=0;e<r.length;e++){var t=r[e];t.parentNode&&t.parentNode.removeChild(t)}r.length=0},apply:()=>{for(var e=0;e<o.length;e++)o[e].rel="stylesheet";o.length=0}}),s.hmrC.miniCss=(e,a,c,l,u,d)=>{u.push(i),e.forEach((e=>{var i=s.miniCssF(e),a=s.p+i,c=n(i,a);c&&l.push(new Promise(((n,i)=>{var s=t(e,a,(()=>{s.as="style",s.rel="preload",n()}),i);r.push(c),o.push(s)})))}))},(()=>{var e,t,n,r,o={179:0},i={};function a(e){return new Promise(((t,n)=>{i[e]=t;var r=s.p+s.hu(e),o=new Error;s.l(r,(t=>{if(i[e]){i[e]=void 0;var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;o.message="Loading hot update chunk "+e+" failed.\n("+r+": "+a+")",o.name="ChunkLoadError",o.type=r,o.request=a,n(o)}}))}))}function c(i){function a(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),i=o.id,a=o.chain,l=s.c[i];if(l&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(l.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var u=0;u<l.parents.length;u++){var d=l.parents[u],p=s.c[d];if(p){if(p.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([d]),moduleId:i,parentId:d};-1===t.indexOf(d)&&(p.hot._acceptedDependencies[i]?(n[d]||(n[d]=[]),c(n[d],[i])):(delete n[d],t.push(d),r.push({chain:a.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}s.f&&delete s.f.jsonpHmr,e=void 0;var l={},u=[],d={},p=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var f in t)if(s.o(t,f)){var h,v=t[f],m=!1,y=!1,_=!1,w="";switch((h=v?a(f):{type:"disposed",moduleId:f}).chain&&(w="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":i.onDeclined&&i.onDeclined(h),i.ignoreDeclined||(m=new Error("Aborted because of self decline: "+h.moduleId+w));break;case"declined":i.onDeclined&&i.onDeclined(h),i.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+w));break;case"unaccepted":i.onUnaccepted&&i.onUnaccepted(h),i.ignoreUnaccepted||(m=new Error("Aborted because "+f+" is not accepted"+w));break;case"accepted":i.onAccepted&&i.onAccepted(h),y=!0;break;case"disposed":i.onDisposed&&i.onDisposed(h),_=!0;break;default:throw new Error("Unexception type "+h.type)}if(m)return{error:m};if(y)for(f in d[f]=v,c(u,h.outdatedModules),h.outdatedDependencies)s.o(h.outdatedDependencies,f)&&(l[f]||(l[f]=[]),c(l[f],h.outdatedDependencies[f]));_&&(c(u,[h.moduleId]),d[f]=p)}t=void 0;for(var g,b=[],x=0;x<u.length;x++){var E=u[x],O=s.c[E];O&&(O.hot._selfAccepted||O.hot._main)&&d[E]!==p&&!O.hot._selfInvalidated&&b.push({module:E,require:O.hot._requireSelf,errorHandler:O.hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete o[e]})),n=void 0;for(var t,r=u.slice();r.length>0;){var i=r.pop(),a=s.c[i];if(a){var c={},d=a.hot._disposeHandlers;for(x=0;x<d.length;x++)d[x].call(null,c);for(s.hmrD[i]=c,a.hot.active=!1,delete s.c[i],delete l[i],x=0;x<a.children.length;x++){var p=s.c[a.children[x]];p&&(e=p.parents.indexOf(i))>=0&&p.parents.splice(e,1)}}}for(var f in l)if(s.o(l,f)&&(a=s.c[f]))for(g=l[f],x=0;x<g.length;x++)t=g[x],(e=a.children.indexOf(t))>=0&&a.children.splice(e,1)},apply:function(e){for(var t in d)s.o(d,t)&&(s.m[t]=d[t]);for(var n=0;n<r.length;n++)r[n](s);for(var o in l)if(s.o(l,o)){var a=s.c[o];if(a){g=l[o];for(var c=[],p=[],f=[],h=0;h<g.length;h++){var v=g[h],m=a.hot._acceptedDependencies[v],y=a.hot._acceptedErrorHandlers[v];if(m){if(-1!==c.indexOf(m))continue;c.push(m),p.push(y),f.push(v)}}for(var _=0;_<c.length;_++)try{c[_].call(null,g)}catch(t){if("function"==typeof p[_])try{p[_](t,{moduleId:o,dependencyId:f[_]})}catch(n){i.onErrored&&i.onErrored({type:"accept-error-handler-errored",moduleId:o,dependencyId:f[_],error:n,originalError:t}),i.ignoreErrored||(e(n),e(t))}else i.onErrored&&i.onErrored({type:"accept-errored",moduleId:o,dependencyId:f[_],error:t}),i.ignoreErrored||e(t)}}}for(var w=0;w<b.length;w++){var x=b[w],E=x.module;try{x.require(E)}catch(t){if("function"==typeof x.errorHandler)try{x.errorHandler(t,{moduleId:E,module:s.c[E]})}catch(n){i.onErrored&&i.onErrored({type:"self-accept-error-handler-errored",moduleId:E,error:n,originalError:t}),i.ignoreErrored||(e(n),e(t))}else i.onErrored&&i.onErrored({type:"self-accept-errored",moduleId:E,error:t}),i.ignoreErrored||e(t)}}return u}}}self.webpackHotUpdate=(e,n,o)=>{for(var a in n)s.o(n,a)&&(t[a]=n[a]);o&&r.push(o),i[e]&&(i[e](),i[e]=void 0)},s.hmrI.jsonp=function(e,o){t||(t={},r=[],n=[],o.push(c)),s.o(t,e)||(t[e]=s.m[e])},s.hmrC.jsonp=function(i,l,u,d,p,f){p.push(c),e={},n=l,t=u.reduce((function(e,t){return e[t]=!1,e}),{}),r=[],i.forEach((function(t){s.o(o,t)&&void 0!==o[t]&&(d.push(a(t)),e[t]=!0)})),s.f&&(s.f.jsonpHmr=function(t,n){e&&!s.o(e,t)&&s.o(o,t)&&void 0!==o[t]&&(n.push(a(t)),e[t]=!0)})},s.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(s.p+s.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),s(303)})();