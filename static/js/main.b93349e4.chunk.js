(this.webpackJsonpnewone=this.webpackJsonpnewone||[]).push([[0],[,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(7),i=n.n(a),l=(n(14),n(2)),o=(n(15),n(8)),r=n(9),d=0,u=function(){function e(){Object(o.a)(this,e)}return Object(r.a)(e,[{key:"callHH",value:function(){return JSON.parse(localStorage.getItem("React-App-Script")).tasks}},{key:"printX",value:function(){console.log(d)}},{key:"modify",value:function(e){d=e}},{key:"getX",value:function(){return d}},{key:"encrypt",value:function(e,t){""==e&&(e="7121996");for(var n,s="",c=0,a=e.length,i=0,l=[" ","!","'","#","$","%","&",'"',"(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~"],o=0;o<t.length;o++){for(var r=parseInt(e.charAt(c)),d=0;d<l.length;d++)if(l[d]===t.charAt(o)){i=d;break}"\n"!=t.charAt(o)?(" "==(n=l[(i+r)%95])&&(n="\xa9"),s=s.concat(n),c=(c+1)%a):s=s.concat("\n")}return s}},{key:"decrypt",value:function(e,t){""==e&&(e="7121996");for(var n="",s=0,c=0,a=e.length,i=0,l=[" ","!","'","#","$","%","&",'"',"(",")","*","+",",","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","<","=",">","?","@","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","[","\\","]","^","_","`","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","{","|","}","~"],o=0;o<t.length;o++){s=parseInt(e.charAt(c));var r=t.charAt(o);"\xa9"==r&&(r=" ");for(var d=0;d<l.length;d++)if(l[d]===r){i=d;break}var u=void 0;"\n"!=t.charAt(o)?(u=i-s<0?l[i-s+95]:l[i-s],n=n.concat(u),c=(c+1)%a):n=n.concat("\n")}return n}},{key:"addItem",value:function(e,t,n){for(var s=JSON.parse(localStorage.getItem("React-App-Script")),c=1,a="";null!=s.tasks[c];)c++;console.log(t);var i=this.encrypt(t,n);if(""==t)a="Default key",s.tasks[c]={title:e,status:a,description:i,signature:"open"};else{var l=this.encrypt(t,"[&Vishvishvaraya;&");a="Unique Key",s.tasks[c]={title:e,status:a,description:i,signature:l}}localStorage.setItem("React-App-Script",JSON.stringify(s))}},{key:"deleteItem",value:function(e){if(e>0){var t=JSON.parse(localStorage.getItem("React-App-Script")),n={tasks:{},items:{}};n.items=t.items;for(var s=1,c=1,a=e;null!=t.tasks[s];)a!=s&&(n.tasks[c++]=t.tasks[s]),s++;localStorage.setItem("React-App-Script",JSON.stringify(n))}else alert("No item selected!!")}},{key:"saveChanges",value:function(e,t,n){var s=JSON.parse(localStorage.getItem("React-App-Script")),c=1;for(console.log("Editing intialized");null!=s.tasks[c];)c===n&&("Default key"===s.tasks[c].status?(s.tasks[c].description=this.encrypt("",t),console.log(s)):(s.tasks[c].description=this.encrypt(e,t),console.log(s))),c++;localStorage.setItem("React-App-Script",JSON.stringify(s))}},{key:"download",value:function(e,t,n){var s,c,a=window,i="application/octet-stream",l=n||i,o=e,r=!t&&!n&&o,d=document.createElement("a"),u=function(e){return String(e)},p=a.Blob||a.MozBlob||a.WebKitBlob||u,j=t||"download";if(p=p.call?p.bind(a):Blob,"true"===String(this)&&(l=(o=[o,l])[0],o=o[1]),r&&r.length<2048&&(j=r.split("/").pop().split("?")[0],d.href=r,-1!==d.href.indexOf(r))){var m=new XMLHttpRequest;return m.open("GET",r,!0),m.responseType="blob",m.onload=function(e){this.download(e.target.response,j,i)},setTimeout((function(){m.send()}),0),m}if(/^data\:[\w+\-]+\/[\w+\-]+[,;]/.test(o)){if(!(o.length>2096103.424&&p!==u))return navigator.msSaveBlob?navigator.msSaveBlob(b(o),j):f(o);l=(o=b(o)).type||i}function b(e){for(var t=e.split(/[:;,]/),n=t[1],s=("base64"==t[2]?atob:decodeURIComponent)(t.pop()),c=s.length,a=0,i=new Uint8Array(c);a<c;++a)i[a]=s.charCodeAt(a);return new p([i],{type:n})}function f(e,t){if("download"in d)return d.href=e,d.setAttribute("download",j),d.className="download-js-link",d.innerHTML="downloading...",d.style.display="none",document.body.appendChild(d),setTimeout((function(){d.click(),document.body.removeChild(d),!0===t&&setTimeout((function(){a.URL.revokeObjectURL(d.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return e=e.replace(/^data:([\w\/\-\+]+)/,i),window.open(e),!0;var n=document.createElement("iframe");document.body.appendChild(n),t||(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,i)),n.src=e,setTimeout((function(){document.body.removeChild(n)}),333)}if(s=o instanceof p?o:new p([o],{type:l}),navigator.msSaveBlob)return navigator.msSaveBlob(s,j);if(a.URL)f(a.URL.createObjectURL(s),!0);else{if("string"===typeof s||s.constructor===u)try{return f("data:"+l+";base64,"+a.btoa(s))}catch(y){return f("data:"+l+","+encodeURIComponent(s))}(c=new FileReader).onload=function(e){f(this.result)},c.readAsDataURL(s)}return!0}}]),e}(),p=(n(4),n(0));function j(e){var t=Object(s.useState)(""),n=Object(l.a)(t,2),c=n[0],a=n[1],i=Object(s.useState)(!1),o=Object(l.a)(i,2),r=o[0],d=o[1],j=Object(s.useState)(!1),m=Object(l.a)(j,2),b=m[0],f=m[1],y=new u,h="";function v(){if(e.index>0){if("Default key"===e.allItems[e.index].status)return h=y.decrypt("",e.desc);var t=e.desc,n=document.getElementById("key").value;return t=y.decrypt(n,t)}return h}function x(){d(!0),a(v()),d(!1)}return Object(p.jsxs)("div",{className:"edit",children:[Object(p.jsx)("div",{className:"containsinputs",children:Object(p.jsxs)("div",{className:"inputKey",children:[e.index>0&&("Default key"!==e.allItems[e.index].status||(h=y.decrypt("",e.desc),0))?Object(p.jsx)("input",{type:"password",style:{opacity:"1"},id:"key",placeholder:" Enter key..",onKeyUp:x}):Object(p.jsx)("input",{type:"password",style:{opacity:"0",userSelect:"none"},id:"key",placeholder:" Enter key..",onKeyUp:x}),b?Object(p.jsx)("div",{className:"copyicon",onClick:function(){var t=document.getElementById("msgdecrypt").innerText,n=document.getElementById("key").value;console.log(t),y.saveChanges(n,t,e.index),f(!1)},children:Object(p.jsx)("i",{className:"fas fa-save",style:{color:"greenyellow"}})}):null,Object(p.jsxs)("div",{className:"tools",children:[Object(p.jsx)("div",{className:"copyicon",children:Object(p.jsx)("i",{className:"fas fa-clipboard"})}),Object(p.jsx)("div",{className:"edticon",onClick:function(){var t=y.callHH();if(t[e.index].hasOwnProperty("signature"))if("open"!==t[e.index].signature){var n=document.getElementById("key").value;"[&Vishvishvaraya;&"===y.decrypt(n,t[e.index].signature)?f(!0):alert("Please Enter Correct Password\n\nThis is protected file")}else f(!0);else f(!0)},children:Object(p.jsx)("i",{className:"fas fa-pen"})}),Object(p.jsx)("div",{className:"delicon",onClick:function(){var t=y.callHH();if(console.log(t[e.index].hasOwnProperty("signature")),t[e.index].hasOwnProperty("signature"))if("open"!==t[e.index].signature){var n=document.getElementById("key").value;"[&Vishvishvaraya;&"===y.decrypt(n,t[e.index].signature)?window.confirm("Are you sure to delete?")&&(y.deleteItem(e.index),e.deltePostOpertn()):alert("Please Enter Correct Password\n\nThis is protected file")}else window.confirm("Are you sure to delete?")&&(y.deleteItem(e.index),e.deltePostOpertn());else window.confirm("Are you sure to delete?")&&(y.deleteItem(e.index),e.deltePostOpertn())},children:Object(p.jsx)("i",{className:"far fa-trash-alt"})})]})]})}),Object(p.jsx)("div",{className:"decryptedMsg",children:Object(p.jsx)("pre",{id:"msgdecrypt",contentEditable:!!b,children:r?c:v()})})]})}function m(e){var t=Object(s.useState)(""),n=Object(l.a)(t,2),c=n[0],a=n[1],i=Object(s.useState)(!1),o=Object(l.a)(i,2),r=o[0],d=o[1],j=Object(s.useState)(!1),m=Object(l.a)(j,2),b=m[0],f=m[1],y=new u,h="";function v(){if(e.index>0){if("Default key"===e.allItems[e.index].status)return h=y.decrypt("",e.desc);var t=e.desc,n=document.getElementById("key").value;return t=y.decrypt(n,t)}return h}function x(){d(!0),a(v()),d(!1)}return Object(p.jsxs)("div",{className:"edit",children:[Object(p.jsxs)("div",{className:"closebutton",children:[Object(p.jsx)("p",{className:"filenameDisplay2",children:e.index>0?e.allItems[e.index].title:""}),Object(p.jsxs)("button",{onClick:function(){return window.history.back()},children:[" ","< "," Back"]})]}),Object(p.jsx)("div",{className:"decryptedMsg",children:Object(p.jsx)("pre",{id:"msgdecrypt",contentEditable:!!b,children:r?c:v()})}),Object(p.jsx)("div",{className:"containsinputs",children:Object(p.jsxs)("div",{className:"inputKey",children:[e.index>0&&("Default key"!==e.allItems[e.index].status||(h=y.decrypt("",e.desc),0))?Object(p.jsx)("div",{style:{opacity:"1"},children:Object(p.jsx)("input",{type:"number",id:"key",placeholder:" Enter key..",onKeyUp:x})}):Object(p.jsx)("div",{style:{opacity:"0",userSelect:"none"},children:Object(p.jsx)("input",{type:"number",id:"key",placeholder:" Enter key..",onKeyUp:x})}),b?Object(p.jsx)("div",{className:"copyicon",onClick:function(){var t=document.getElementById("msgdecrypt").innerText,n=document.getElementById("key").value;console.log(t),y.saveChanges(n,t,e.index),f(!1)},children:Object(p.jsx)("i",{className:"fas fa-save",style:{color:"greenyellow"}})}):null,Object(p.jsxs)("div",{className:"tools",children:[Object(p.jsx)("div",{className:"copyicon",children:Object(p.jsx)("i",{className:"fas fa-clipboard"})}),Object(p.jsx)("div",{className:"edticon",onClick:function(){var t=y.callHH();if(t[e.index].hasOwnProperty("signature"))if("open"!==t[e.index].signature){var n=document.getElementById("key").value;"[&Vishvishvaraya;&"===y.decrypt(n,t[e.index].signature)?f(!0):alert("Please Enter Correct Password\n\nThis is protected file")}else f(!0);else f(!0)},children:Object(p.jsx)("i",{className:"fas fa-pen"})}),Object(p.jsx)("div",{className:"delicon",onClick:function(){var t=y.callHH();if(console.log(t[e.index].hasOwnProperty("signature")),t[e.index].hasOwnProperty("signature"))if("open"!==t[e.index].signature){var n=document.getElementById("key").value;"[&Vishvishvaraya;&"===y.decrypt(n,t[e.index].signature)?window.confirm("Are you sure to delete?")&&(y.deleteItem(e.index),e.deltePostOpertn(),window.history.back()):alert("Please Enter Correct Password\n\nThis is protected file")}else window.confirm("Are you sure to delete?")&&(y.deleteItem(e.index),e.deltePostOpertn(),window.history.back());else window.confirm("Are you sure to delete?")&&(y.deleteItem(e.index),e.deltePostOpertn(),window.history.back())},children:Object(p.jsx)("i",{className:"far fa-trash-alt"})})]})]})})]})}n(17);function b(e){var t=new u;return Object(s.useEffect)((function(){document.querySelector(".inputFile").addEventListener("change",(function(t){var n=document.querySelector(".inputFile");console.log(n.files);var s=new FileReader;s.onload=function(){try{var n=JSON.parse(s.result);null!=n.tasks&&null!=n.items?(console.log(n),function(t){var n=JSON.parse(localStorage.getItem("React-App-Script")),s=1;for(;null!=n.tasks[s];)s++;var c=1;for(;null!=t.tasks[c];)n.tasks[s++]=t.tasks[c],c++;console.log(n),localStorage.setItem("React-App-Script",JSON.stringify(n)),e.useForceUpdate()}(n),alert("import successful")):alert("import Failed !\nPossible reasons:\n\u2022 Wrong name\n\u2022 extension is not .json")}catch(t){alert("import Failed !\nPossible reasons:\n\u2022 wrong name\n\u2022 extension is not .json\n\u2022 file corrupted(very rare)")}},s.readAsText(n.files[0])}))}),[]),Object(p.jsxs)("div",{className:"exportpage",children:[Object(p.jsx)("div",{className:"backbtnar",children:Object(p.jsxs)("div",{className:"backBtn",onClick:function(){return window.history.back()},children:[" ","<","  Back"]})}),Object(p.jsxs)("div",{className:"allboxes",children:[Object(p.jsxs)("div",{className:"box",children:[Object(p.jsxs)("p",{children:["Export all encryted text to your device which you can later revoke here by importing. File will be stored in downloads folder with name ",Object(p.jsx)("span",{style:{color:"rgb(255, 196, 0)"},children:"Back-Up-Data.json"})]}),Object(p.jsx)("div",{className:"butn",children:Object(p.jsxs)("button",{onClick:function(){var e={tasks:{},items:{}},n=JSON.parse(localStorage.getItem("React-App-Script"));null!=n&&(e=n),console.log(e),t.download(JSON.stringify(e),"React-Back-up.json","text/plain")},children:["export ",Object(p.jsx)("i",{className:"fas fa-upload",children:" "})]})})]}),Object(p.jsxs)("div",{className:"box",children:[Object(p.jsxs)("p",{children:["All imported items will be added on home page. You need to choose valid ",Object(p.jsx)("span",{style:{color:"rgb(255, 196, 0)"},children:"Back-Up-Data.json"}),"to import items successfully."]}),Object(p.jsxs)("div",{className:"butn",children:[Object(p.jsx)("input",{type:"file",className:"inputFile"}),Object(p.jsxs)("button",{style:{backgroundColor:"rgb(194, 0, 74)"},onClick:function(){document.querySelector(".inputFile").click()},children:["import ",Object(p.jsx)("i",{className:"fas fa-download"})]})]})]})]})]})}n(5),n(18);function f(e){var t=new u;return Object(p.jsxs)("div",{className:"sample",onClick:function(){window.innerWidth<=1110&&window.history.pushState(null,null,null),t.modify(e.index),console.log(t.getX()),e.useForceUpdate();var n=1;document.querySelectorAll(".sample").forEach((function(t){window.innerWidth>1109&&(e.index==n?t.style.background="#9e9e9e":t.style.background="#616161"),n++})),document.querySelector(".edit").classList.toggle("active"),"Unique Key"===e.status&&""===document.getElementById("key").value&&document.getElementById("key").focus()},children:[Object(p.jsx)("div",{className:"status",children:"Unique Key"===e.status?Object(p.jsx)("i",{style:{border:"2px solid rgb(59, 255, 124)"},id:"statusIcon",className:"fas fa-lock"}):Object(p.jsx)("i",{style:{border:"2px solid yellow"},id:"statusIcon",className:"fas fa-lock-open"})}),Object(p.jsx)("div",{className:"contentContainer",children:Object(p.jsx)("h2",{children:e.line})})]})}function y(e){var t=new u,n=t.callHH();t.modify();for(var s=[],c=1;null!=n[c];)s.push(Object(p.jsx)(f,{line:n[c].title,status:n[c].status,index:c,useForceUpdate:e.useForceUpdate})),c++;return Object(p.jsx)("div",{className:"item",children:s.map((function(e){return e}))})}function h(e){var t=new u,n=t.callHH();t.modify();for(var s=[],c=1;null!=n[c];)s.push(Object(p.jsx)(f,{line:n[c].title,status:n[c].status,index:c,useForceUpdate:e.useForceUpdate})),c++;return Object(p.jsx)("div",{className:"item",children:s.map((function(e){return e}))})}n(6);function v(e){return Object(p.jsxs)("header",{children:[Object(p.jsxs)("div",{className:"logo",children:[Object(p.jsx)("i",{className:"fas fa-mask"})," Script"]}),Object(p.jsxs)("div",{className:"menuitems",children:[Object(p.jsx)("div",{className:"icons",onClick:e.popupAddBtn,children:"Add"}),Object(p.jsx)("div",{className:"icons",children:"Backup"}),Object(p.jsx)("div",{className:"icons",onClick:function(){document.querySelector(".exportpage").classList.add("active"),window.history.pushState(null,null,null)},children:"Export"}),Object(p.jsx)("div",{className:"icons",children:"Other"})]})]})}function x(e){var t=Object(s.useState)(!1),n=Object(l.a)(t,2),c=n[0],a=n[1];function i(){document.querySelector(".menuItems").classList.toggle("active"),document.querySelector(".menubtn-bar").classList.toggle("active"),c?(document.querySelector("#changeclas").className="fas fa-ellipsis-v",a(!1)):(document.querySelector("#changeclas").className="fas fa-times",a(!0))}return console.log(),Object(p.jsxs)("header",{children:[Object(p.jsxs)("div",{className:"logo",children:[Object(p.jsx)("i",{className:"fas fa-mask"})," Script"]}),Object(p.jsxs)("div",{className:"bar",children:[Object(p.jsx)("div",{className:"addbtnbar",onClick:e.popupAddBtn,children:Object(p.jsx)("i",{style:{fontSize:"1.1rem"},className:"fas fa-plus"})}),Object(p.jsx)("button",{className:"menubtn-bar",onClick:i,children:Object(p.jsx)("i",{id:"changeclas",className:"fas fa-ellipsis-v",style:{fontSize:"1.3rem"}})})]}),Object(p.jsx)("div",{className:"menuItems",children:Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"Backup"}),Object(p.jsx)("li",{onClick:function(){i(),document.querySelector(".exportpage").classList.add("active"),window.history.pushState(null,null,null)},children:"Export"}),Object(p.jsx)("li",{children:"Other"})]})})]})}n(19);function g(e){console.log("Pop UP HEREE");var t=new u;return Object(p.jsx)("div",{className:"bigContainer",children:Object(p.jsxs)("div",{className:"popupTask",children:[Object(p.jsx)("div",{className:"closebutn",onClick:function(){return window.history.back()},children:Object(p.jsx)("i",{className:"fas fa-times"})}),Object(p.jsx)("div",{className:"taskTitle",children:Object(p.jsx)("input",{type:"text",id:"title",placeholder:" Write Title..."})}),Object(p.jsx)("div",{className:"taskTitle",children:Object(p.jsx)("input",{type:"number",id:"key2",autoComplete:"off",placeholder:" Enter key eg. 12345 if not entered then default key will be used"})}),Object(p.jsx)("div",{className:"description",children:Object(p.jsx)("textarea",{id:"description2",rows:"5",placeholder:" Task Description...."})}),Object(p.jsxs)("div",{className:"finalbtns",children:[Object(p.jsx)("button",{style:{backgroundColor:"rgb(15, 209, 151)"},onClick:function(){var e=document.getElementById("title").value,n=document.getElementById("key2").value;console.log(n);var s=document.getElementById("description2").value;t.addItem(e,n,s),window.history.back()},children:"Save"}),Object(p.jsx)("button",{style:{backgroundColor:"rgb(182, 59, 59)"},onClick:function(){return window.history.back()},children:"Cancel"})]})]})})}var O=function(){var e=Object(s.useState)(0),t=Object(l.a)(e,2),n=(t[0],t[1]),c=Object(s.useState)("Empty Data"),a=Object(l.a)(c,2),i=a[0],o=a[1],r=Object(s.useState)(window.innerWidth),d=Object(l.a)(r,2),f=d[0],O=d[1],k=new u;function w(){if(n((function(e){return e+1})),console.log("Reloaded App"),k.getX()>0){var e=k.callHH();console.log(k.getX()),o(e[k.getX()].description)}}function N(){document.querySelector(".bigContainer").classList.toggle("active"),window.history.pushState(null,null,null)}function S(){k.modify(0),n((function(e){return e+1}))}return window.addEventListener("resize",(function(){O(window.innerWidth)})),window.onpopstate=function(e){document.querySelector(".edit").classList.remove("active"),document.querySelector(".exportpage").classList.remove("active"),document.querySelector(".bigContainer").classList.remove("active"),n((function(e){return e+1}))},Object(p.jsxs)("div",{className:"parent",children:[f>1110?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(v,{popupAddBtn:N}),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(y,{useForceUpdate:w}),Object(p.jsx)(j,{desc:i,allItems:k.callHH(),index:k.getX(),useForceUpdate:w,deltePostOpertn:S})]})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(x,{popupAddBtn:N}),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(h,{useForceUpdate:w}),Object(p.jsx)(m,{desc:i,allItems:k.callHH(),index:k.getX(),useForceUpdate:w,deltePostOpertn:S})]})]}),Object(p.jsx)(b,{useForceUpdate:w}),Object(p.jsx)(g,{triggerPop:N})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};"serviceWorker"in navigator&&navigator.serviceWorker.register("./ServiceWorker.js").then((function(e){console.log("SW registered"),console.log(e)})).catch((function(e){console.log("SW failed")})),null!=localStorage.getItem("React-App-Script")||localStorage.setItem("React-App-Script",JSON.stringify({tasks:{},items:{}})),i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root")),k()}],[[20,1,2]]]);
//# sourceMappingURL=main.b93349e4.chunk.js.map