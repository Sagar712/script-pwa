(this.webpackJsonpnewone=this.webpackJsonpnewone||[]).push([[0],[,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(7),i=n.n(a),l=(n(14),n(2)),o=(n(15),n(8)),r=n(9),d=0,u=function(){function e(){Object(o.a)(this,e)}return Object(r.a)(e,[{key:"callHH",value:function(){return JSON.parse(localStorage.getItem("React-App-Script")).tasks}},{key:"printX",value:function(){console.log(d)}},{key:"modify",value:function(e){d=e}},{key:"getX",value:function(){return d}},{key:"encrypt",value:function(e,t){""==e&&(e="7121996");for(var n,c="",s=0,a=e.length,i=0,l=[" ","!","'","#","$","%","&",'"',"(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~"],o=0;o<t.length;o++){for(var r=parseInt(e.charAt(s)),d=0;d<l.length;d++)if(l[d]===t.charAt(o)){i=d;break}"\n"!=t.charAt(o)?(" "==(n=l[(i+r)%95])&&(n="\xa9"),c=c.concat(n),s=(s+1)%a):c=c.concat("\n")}return c}},{key:"decrypt",value:function(e,t){""==e&&(e="7121996");for(var n="",c=0,s=0,a=e.length,i=0,l=[" ","!","'","#","$","%","&",'"',"(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~"],o=0;o<t.length;o++){c=parseInt(e.charAt(s));var r=t.charAt(o);"\xa9"==r&&(r=" ");for(var d=0;d<l.length;d++)if(l[d]===r){i=d;break}var u=void 0;"\n"!=t.charAt(o)?(u=i-c<0?l[i-c+95]:l[i-c],n=n.concat(u),s=(s+1)%a):n=n.concat("\n")}return n}},{key:"addItem",value:function(e,t,n){for(var c=JSON.parse(localStorage.getItem("React-App-Script")),s=1,a="";null!=c.tasks[s];)s++;console.log(t);var i=this.encrypt(t,n);a=""==t?"Default key":"Unique Key",c.tasks[s]={title:e,status:a,description:i},localStorage.setItem("React-App-Script",JSON.stringify(c))}},{key:"deleteItem",value:function(e){if(e>0){var t=JSON.parse(localStorage.getItem("React-App-Script")),n={tasks:{},items:{}};n.items=t.items;for(var c=1,s=1,a=e;null!=t.tasks[c];)a!=c&&(n.tasks[s++]=t.tasks[c]),c++;localStorage.setItem("React-App-Script",JSON.stringify(n))}else alert("No item selected!!")}},{key:"saveChanges",value:function(e,t,n){var c=JSON.parse(localStorage.getItem("React-App-Script")),s=1;for(console.log("Editing intialized");null!=c.tasks[s];)s===n&&("Default key"===c.tasks[s].status?(c.tasks[s].description=this.encrypt("",t),console.log(c)):(c.tasks[s].description=this.encrypt(e,t),console.log(c))),s++;localStorage.setItem("React-App-Script",JSON.stringify(c))}},{key:"download",value:function(e,t,n){var c,s,a=window,i="application/octet-stream",l=n||i,o=e,r=!t&&!n&&o,d=document.createElement("a"),u=function(e){return String(e)},j=a.Blob||a.MozBlob||a.WebKitBlob||u,p=t||"download";if(j=j.call?j.bind(a):Blob,"true"===String(this)&&(l=(o=[o,l])[0],o=o[1]),r&&r.length<2048&&(p=r.split("/").pop().split("?")[0],d.href=r,-1!==d.href.indexOf(r))){var b=new XMLHttpRequest;return b.open("GET",r,!0),b.responseType="blob",b.onload=function(e){this.download(e.target.response,p,i)},setTimeout((function(){b.send()}),0),b}if(/^data\:[\w+\-]+\/[\w+\-]+[,;]/.test(o)){if(!(o.length>2096103.424&&j!==u))return navigator.msSaveBlob?navigator.msSaveBlob(m(o),p):f(o);l=(o=m(o)).type||i}function m(e){for(var t=e.split(/[:;,]/),n=t[1],c=("base64"==t[2]?atob:decodeURIComponent)(t.pop()),s=c.length,a=0,i=new Uint8Array(s);a<s;++a)i[a]=c.charCodeAt(a);return new j([i],{type:n})}function f(e,t){if("download"in d)return d.href=e,d.setAttribute("download",p),d.className="download-js-link",d.innerHTML="downloading...",d.style.display="none",document.body.appendChild(d),setTimeout((function(){d.click(),document.body.removeChild(d),!0===t&&setTimeout((function(){a.URL.revokeObjectURL(d.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return e=e.replace(/^data:([\w\/\-\+]+)/,i),window.open(e),!0;var n=document.createElement("iframe");document.body.appendChild(n),t||(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,i)),n.src=e,setTimeout((function(){document.body.removeChild(n)}),333)}if(c=o instanceof j?o:new j([o],{type:l}),navigator.msSaveBlob)return navigator.msSaveBlob(c,p);if(a.URL)f(a.URL.createObjectURL(c),!0);else{if("string"===typeof c||c.constructor===u)try{return f("data:"+l+";base64,"+a.btoa(c))}catch(h){return f("data:"+l+","+encodeURIComponent(c))}(s=new FileReader).onload=function(e){f(this.result)},s.readAsDataURL(c)}return!0}}]),e}(),j=(n(4),n(0));function p(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),s=n[0],a=n[1],i=Object(c.useState)(!1),o=Object(l.a)(i,2),r=o[0],d=o[1],p=Object(c.useState)(!1),b=Object(l.a)(p,2),m=b[0],f=b[1],h=new u,v="";function O(){if(e.index>0){if("Default key"===e.allItems[e.index].status)return v=h.decrypt("",e.desc);var t=e.desc,n=document.getElementById("key").value;return t=h.decrypt(n,t)}return v}return Object(j.jsxs)("div",{className:"edit",children:[Object(j.jsx)("div",{className:"containsinputs",children:Object(j.jsxs)("div",{className:"inputKey",children:[Object(j.jsx)("input",{type:"password",id:"key",placeholder:" Enter key..",onKeyUp:function(){d(!0),a(O()),d(!1)}}),m?Object(j.jsx)("div",{className:"copyicon",onClick:function(){var t=document.getElementById("msgdecrypt").innerText,n=document.getElementById("key").value;console.log(t),h.saveChanges(n,t,e.index),f(!1)},children:Object(j.jsx)("i",{className:"fas fa-save",style:{color:"greenyellow"}})}):null,Object(j.jsxs)("div",{className:"tools",children:[Object(j.jsx)("div",{className:"copyicon",children:Object(j.jsx)("i",{className:"fas fa-clipboard"})}),Object(j.jsx)("div",{className:"edticon",onClick:function(){f(!0)},children:Object(j.jsx)("i",{className:"fas fa-pen"})}),Object(j.jsx)("div",{className:"delicon",onClick:function(){h.deleteItem(e.index),e.deltePostOpertn()},children:Object(j.jsx)("i",{className:"far fa-trash-alt"})})]})]})}),Object(j.jsx)("div",{className:"decryptedMsg",children:Object(j.jsx)("pre",{id:"msgdecrypt",contentEditable:!!m,children:r?s:O()})})]})}function b(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),s=n[0],a=n[1],i=Object(c.useState)(!1),o=Object(l.a)(i,2),r=o[0],d=o[1],p=Object(c.useState)(!1),b=Object(l.a)(p,2),m=b[0],f=b[1],h=new u,v="";function O(){if(e.index>0){if("Default key"===e.allItems[e.index].status)return v=h.decrypt("",e.desc);var t=e.desc,n=document.getElementById("key").value;return t=h.decrypt(n,t)}return v}return Object(j.jsxs)("div",{className:"edit",children:[Object(j.jsxs)("div",{className:"closebutton",children:[Object(j.jsx)("p",{className:"filenameDisplay2",children:e.index>0?e.allItems[e.index].title:""}),Object(j.jsxs)("button",{onClick:function(){return window.history.back()},children:[" ","< "," Back"]})]}),Object(j.jsx)("div",{className:"decryptedMsg",children:Object(j.jsx)("pre",{id:"msgdecrypt",contentEditable:!!m,children:r?s:O()})}),Object(j.jsx)("div",{className:"containsinputs",children:Object(j.jsxs)("div",{className:"inputKey",children:[Object(j.jsx)("input",{type:"password",id:"key",placeholder:" Enter key..",onKeyUp:function(){d(!0),a(O()),d(!1)}}),m?Object(j.jsx)("div",{className:"copyicon",onClick:function(){var t=document.getElementById("msgdecrypt").innerText,n=document.getElementById("key").value;console.log(t),h.saveChanges(n,t,e.index),f(!1)},children:Object(j.jsx)("i",{className:"fas fa-save",style:{color:"greenyellow"}})}):null,Object(j.jsxs)("div",{className:"tools",children:[Object(j.jsx)("div",{className:"copyicon",children:Object(j.jsx)("i",{className:"fas fa-clipboard"})}),Object(j.jsx)("div",{className:"edticon",onClick:function(){f(!0)},children:Object(j.jsx)("i",{className:"fas fa-pen"})}),Object(j.jsx)("div",{className:"delicon",onClick:function(){window.confirm("Are you sure to delete?")&&(h.deleteItem(e.index),e.deltePostOpertn(),window.history.back())},children:Object(j.jsx)("i",{className:"far fa-trash-alt"})})]})]})})]})}n(17);function m(e){var t=new u;return Object(c.useEffect)((function(){document.querySelector(".inputFile").addEventListener("change",(function(t){var n=document.querySelector(".inputFile");console.log(n.files);var c=new FileReader;c.onload=function(){try{var n=JSON.parse(c.result);null!=n.tasks&&null!=n.items?(console.log(n),function(t){var n=JSON.parse(localStorage.getItem("React-App-Script")),c=1;for(;null!=n.tasks[c];)c++;var s=1;for(;null!=t.tasks[s];)n.tasks[c++]=t.tasks[s],s++;console.log(n),localStorage.setItem("React-App-Script",JSON.stringify(n)),e.useForceUpdate()}(n),alert("import successful")):alert("import Failed !\nPossible reasons:\n\u2022 Wrong name\n\u2022 extension is not .json")}catch(t){alert("import Failed !\nPossible reasons:\n\u2022 wrong name\n\u2022 extension is not .json\n\u2022 file corrupted(very rare)")}},c.readAsText(n.files[0])}))}),[]),Object(j.jsxs)("div",{className:"exportpage",children:[Object(j.jsx)("div",{className:"backbtnar",children:Object(j.jsxs)("div",{className:"backBtn",onClick:function(){return window.history.back()},children:[" ","<","  Back"]})}),Object(j.jsxs)("div",{className:"allboxes",children:[Object(j.jsxs)("div",{className:"box",children:[Object(j.jsxs)("p",{children:["Export all encryted text to your device which you can later revoke here by importing. File will be stored in downloads folder with name ",Object(j.jsx)("span",{style:{color:"rgb(255, 196, 0)"},children:"Back-Up-Data.json"})]}),Object(j.jsx)("div",{className:"butn",children:Object(j.jsxs)("button",{onClick:function(){var e={tasks:{},items:{}},n=JSON.parse(localStorage.getItem("React-App-Script"));null!=n&&(e=n),console.log(e),t.download(JSON.stringify(e),"React-Back-up.json","text/plain")},children:["export ",Object(j.jsx)("i",{className:"fas fa-upload",children:" "})]})})]}),Object(j.jsxs)("div",{className:"box",children:[Object(j.jsxs)("p",{children:["All imported items will be added on home page. You need to choose valid ",Object(j.jsx)("span",{style:{color:"rgb(255, 196, 0)"},children:"Back-Up-Data.json"}),"to import items successfully."]}),Object(j.jsxs)("div",{className:"butn",children:[Object(j.jsx)("input",{type:"file",className:"inputFile"}),Object(j.jsxs)("button",{style:{backgroundColor:"rgb(194, 0, 74)"},onClick:function(){document.querySelector(".inputFile").click()},children:["import ",Object(j.jsx)("i",{className:"fas fa-download"})]})]})]})]})]})}n(5),n(18);function f(e){var t=new u;return Object(j.jsxs)("div",{className:"sample",onClick:function(){window.innerWidth<=1110&&window.history.pushState(null,null,null),t.modify(e.index),console.log(t.getX()),e.useForceUpdate();var n=1;document.querySelectorAll(".sample").forEach((function(t){window.innerWidth>1109&&(e.index==n?t.style.background="#9e9e9e":t.style.background="#616161"),n++})),document.querySelector(".edit").classList.toggle("active"),"Unique Key"===e.status&&""===document.getElementById("key").value&&document.getElementById("key").focus()},children:[Object(j.jsx)("div",{className:"status",children:"Unique Key"===e.status?Object(j.jsx)("i",{style:{border:"2px solid rgb(59, 255, 124)"},id:"statusIcon",className:"fas fa-lock"}):Object(j.jsx)("i",{style:{border:"2px solid yellow"},id:"statusIcon",className:"fas fa-lock-open"})}),Object(j.jsx)("div",{className:"contentContainer",children:Object(j.jsx)("h2",{children:e.line})})]})}function h(e){var t=new u,n=t.callHH();t.modify();for(var c=[],s=1;null!=n[s];)c.push(Object(j.jsx)(f,{line:n[s].title,status:n[s].status,index:s,useForceUpdate:e.useForceUpdate})),s++;return Object(j.jsx)("div",{className:"item",children:c.map((function(e){return e}))})}function v(e){var t=new u,n=t.callHH();t.modify();for(var c=[],s=1;null!=n[s];)c.push(Object(j.jsx)(f,{line:n[s].title,status:n[s].status,index:s,useForceUpdate:e.useForceUpdate})),s++;return Object(j.jsx)("div",{className:"item",children:c.map((function(e){return e}))})}n(6);function O(e){return Object(j.jsxs)("header",{children:[Object(j.jsxs)("div",{className:"logo",children:[Object(j.jsx)("i",{className:"fas fa-mask"})," Script"]}),Object(j.jsxs)("div",{className:"menuitems",children:[Object(j.jsx)("div",{className:"icons",onClick:e.popupAddBtn,children:"Add"}),Object(j.jsx)("div",{className:"icons",children:"Backup"}),Object(j.jsx)("div",{className:"icons",onClick:function(){document.querySelector(".exportpage").classList.add("active"),window.history.pushState(null,null,null)},children:"Export"}),Object(j.jsx)("div",{className:"icons",children:"Other"})]})]})}function x(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),s=n[0],a=n[1];function i(){document.querySelector(".menuItems").classList.toggle("active"),document.querySelector(".menubtn-bar").classList.toggle("active"),s?(document.querySelector("#changeclas").className="fas fa-ellipsis-v",a(!1)):(document.querySelector("#changeclas").className="fas fa-times",a(!0))}return console.log(),Object(j.jsxs)("header",{children:[Object(j.jsxs)("div",{className:"logo",children:[Object(j.jsx)("i",{className:"fas fa-mask"})," Script"]}),Object(j.jsxs)("div",{className:"bar",children:[Object(j.jsx)("div",{className:"addbtnbar",onClick:e.popupAddBtn,children:Object(j.jsx)("i",{style:{fontSize:"1.1rem"},className:"fas fa-plus"})}),Object(j.jsx)("button",{className:"menubtn-bar",onClick:i,children:Object(j.jsx)("i",{id:"changeclas",className:"fas fa-ellipsis-v",style:{fontSize:"1.3rem"}})})]}),Object(j.jsx)("div",{className:"menuItems",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Backup"}),Object(j.jsx)("li",{onClick:function(){i(),document.querySelector(".exportpage").classList.add("active"),window.history.pushState(null,null,null)},children:"Export"}),Object(j.jsx)("li",{children:"Other"})]})})]})}n(19);function g(e){console.log("Pop UP HEREE");var t=new u;return Object(j.jsx)("div",{className:"bigContainer",children:Object(j.jsxs)("div",{className:"popupTask",children:[Object(j.jsx)("div",{className:"closebutn",onClick:function(){return window.history.back()},children:Object(j.jsx)("i",{className:"fas fa-times"})}),Object(j.jsx)("div",{className:"taskTitle",children:Object(j.jsx)("input",{type:"text",id:"title",placeholder:" Write Title..."})}),Object(j.jsx)("div",{className:"taskTitle",children:Object(j.jsx)("input",{type:"number",id:"key2",autoComplete:"off",placeholder:" Enter key eg. 12345 if not entered then default key will be used"})}),Object(j.jsx)("div",{className:"description",children:Object(j.jsx)("textarea",{id:"description2",rows:"5",placeholder:" Task Description...."})}),Object(j.jsxs)("div",{className:"finalbtns",children:[Object(j.jsx)("button",{style:{backgroundColor:"rgb(15, 209, 151)"},onClick:function(){var e=document.getElementById("title").value,n=document.getElementById("key2").value;console.log(n);var c=document.getElementById("description2").value;t.addItem(e,n,c),window.history.back()},children:"Save"}),Object(j.jsx)("button",{style:{backgroundColor:"rgb(182, 59, 59)"},onClick:function(){return window.history.back()},children:"Cancel"})]})]})})}var y=function(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),n=(t[0],t[1]),s=Object(c.useState)("Empty Data"),a=Object(l.a)(s,2),i=a[0],o=a[1],r=Object(c.useState)(window.innerWidth),d=Object(l.a)(r,2),f=d[0],y=d[1],k=new u;function N(){if(n((function(e){return e+1})),console.log("Reloaded App"),k.getX()>0){var e=k.callHH();console.log(k.getX()),o(e[k.getX()].description)}}function S(){document.querySelector(".bigContainer").classList.toggle("active"),window.history.pushState(null,null,null)}function w(){k.modify(0),n((function(e){return e+1}))}return window.addEventListener("resize",(function(){y(window.innerWidth)})),window.onpopstate=function(e){document.querySelector(".edit").classList.remove("active"),document.querySelector(".exportpage").classList.remove("active"),document.querySelector(".bigContainer").classList.remove("active"),n((function(e){return e+1}))},Object(j.jsxs)("div",{className:"parent",children:[f>1110?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(O,{popupAddBtn:S}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(h,{useForceUpdate:N}),Object(j.jsx)(p,{desc:i,allItems:k.callHH(),index:k.getX(),useForceUpdate:N,deltePostOpertn:w})]})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(x,{popupAddBtn:S}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(v,{useForceUpdate:N}),Object(j.jsx)(b,{desc:i,allItems:k.callHH(),index:k.getX(),useForceUpdate:N,deltePostOpertn:w})]})]}),Object(j.jsx)(m,{useForceUpdate:N}),Object(j.jsx)(g,{triggerPop:S})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};"serviceWorker"in navigator&&navigator.serviceWorker.register("./ServiceWorker.js").then((function(e){console.log("SW registered"),console.log(e)})).catch((function(e){console.log("SW failed")})),null!=localStorage.getItem("React-App-Script")||localStorage.setItem("React-App-Script",JSON.stringify({tasks:{},items:{}})),i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),k()}],[[20,1,2]]]);
//# sourceMappingURL=main.78ecd72f.chunk.js.map