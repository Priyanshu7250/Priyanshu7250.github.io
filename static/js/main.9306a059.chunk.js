(this["webpackJsonpi-am-priyanka"]=this["webpackJsonpi-am-priyanka"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={intro:"Home_intro__1qbgg",experience:"Home_experience__xfMKp",extraIntro:"Home_extraIntro__VNCZd",name:"Home_name__nI3mH",profile:"Home_profile__Y2fsQ",profileImage:"Home_profileImage__1QOKa",techStacks:"Home_techStacks__2lKCK",projects:"Home_projects__2VE5r",heading:"Home_heading__2mnWU",borderBottom:"Home_borderBottom__I9MtV",line:"Home_line__1tVWq",resumeBtn:"Home_resumeBtn__1Yliy",fromLeft:"Home_fromLeft__3a8zO",fromRight:"Home_fromRight__OZrlU"}},,function(e,t,a){e.exports={container:"TechStacks_container__1rnYA",logoWrapper:"TechStacks_logoWrapper__2iRq0",shake:"TechStacks_shake__26kA6",techStacks:"TechStacks_techStacks__Kt65f",heading:"TechStacks_heading__1gEoH",borderBottom:"TechStacks_borderBottom__yqqlC"}},,function(e,t,a){e.exports={card:"Card_card__1TgbE",card__Container:"Card_card__Container__15Gko",image:"Card_image__3eKQu",colorDiv:"Card_colorDiv__3K1lF",description:"Card_description__3w7Eq",titleContainer:"Card_titleContainer__36NG4",popupTech:"Card_popupTech__1p87D",actionBtns:"Card_actionBtns__1veOJ",description_container:"Card_description_container__3tPlj",dialogElements:"Card_dialogElements__Y8XjO"}},function(e,t,a){e.exports={navContainer:"Navbar_navContainer__3BoiQ",logo:"Navbar_logo__P9-x9",navbar:"Navbar_navbar__Y4vcL",links:"Navbar_links__hp-XB",modeButton:"Navbar_modeButton__2fNHK",bars:"Navbar_bars__20M6b",circle:"Navbar_circle__2p7ze",crescent:"Navbar_crescent__3VguF"}},,function(e,t,a){e.exports={container:"About_container__3QLRb",first:"About_first__1zcoX",second:"About_second__2VDqr",heading:"About_heading__2shT8",borderBottom:"About_borderBottom__1HxWh",aboutMe:"About_aboutMe__2w44Z"}},function(e,t,a){e.exports={footer:"Contact_footer__14G2k",container:"Contact_container__1P5rG",paragraph:"Contact_paragraph__2zYCd",contactOptions:"Contact_contactOptions__3v3Gh",shake:"Contact_shake__1DV2C",line:"Contact_line__3-Aed",copyright:"Contact_copyright__2IfxN"}},,,,function(e,t,a){e.exports={container:"SideIcons_container__scKIr",icons:"SideIcons_icons__2ywlJ",iconsRihgt:"SideIcons_iconsRihgt__18lLL",rightEmail:"SideIcons_rightEmail__2rcQz",line:"SideIcons_line__YsDVf"}},,,,,,,function(e,t,a){e.exports={buttonComponent:"Button_buttonComponent__3Nt5P"}},,,,,,,,,,function(e,t,a){},function(e,t,a){},,,,function(e,t,a){e.exports={experiences:"Experiences_experiences__uEjLL",heading:"Experiences_heading__20VnM",borderBottom:"Experiences_borderBottom__3DHj4",container:"Experiences_container__BDHL1",position:"Experiences_position__1EqN5",date:"Experiences_date__1fS0z",responsibilites:"Experiences_responsibilites__2WUCk"}},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(4),i=a.n(r),o=(a(35),a(2)),s=(a(36),a(24)),l=a(6),d=a.n(l),h={dark:{background:"#111825",title:"#CCD6F6",para:"#8993b1",heading:"#CCD6F6",line:"#24243a",imgBackground:"#0C141B",highlightBackground:"#0f1622",sideIcons:"#8892b0",menuBackground:"#093047",card:"#112240",linkHover:"linear-gradient(120deg, #182744, #132c26"},light:{background:"#FFFFFF",title:"#233742",para:"#233742",heading:"#233742",line:"lightgray",imgBackground:"#e9f3e8",highlightBackground:"#f0f8ef",sideIcons:"#766161",menuBackground:"#aaeff8",card:"#8BD8CE",linkHover:"linear-gradient(135deg, #ccc0f5, #6fd8c1)"}},j=a(0),b=JSON.parse(localStorage.getItem("theme"))||"dark",u=Object(c.createContext)(),p=function(e){var t=e.children,a=n.a.useState(b),r=Object(o.a)(a,2),i=r[0],s=r[1],l=n.a.useState(!0),d=Object(o.a)(l,2),p=d[0],m=d[1];Object(c.useEffect)((function(){localStorage.setItem("theme",JSON.stringify(i))}),[i]);var g={mode:i,newTheme:h[i],handleMode:function(){s("dark"===i?"light":"dark")},open:p,handleMenu:function(){m(!p)}};return Object(j.jsx)(u.Provider,{value:g,children:t})};var m=function(){var e=Object(c.useState)([0,0]),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(c.useLayoutEffect)((function(){function e(){n([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a},g=a(25),x=a.n(g),f=function(e){var t=e.text,a=e.handleButton,c=e.padding,r=n.a.useContext(u).newTheme;return Object(j.jsx)("button",{style:{color:"".concat(r.title),background:"".concat(r.linkHover),padding:"".concat(c)},className:x.a.buttonComponent,onClick:function(){return a()},children:Object(j.jsx)("span",{children:t})})},O=a(10),_=a.n(O),v=a(60),k=function(e){var t=Object(c.useState)(!1),a=Object(o.a)(t,2),r=a[0],i=a[1],s=n.a.useContext(u).newTheme,l=e.img,d=e.des,h=e.title,b=e.live,p=e.gitHub,g=e.technologies,x=m(),O=Object(o.a)(x,1)[0],k=function(e){i(!1)};return Object(j.jsxs)("div",{"data-aos":"fade-right","data-aos-offset":"300","data-aos-easing":"ease-in-sine","data-aos-duration":"700",className:_.a.card,style:{boxShadow:"3px 3px 5px ".concat(s.line),backgroundColor:"".concat(s.highlightBackground)},children:[Object(j.jsxs)("div",{className:_.a.image,children:[Object(j.jsx)("img",{src:l,alt:"project"}),Object(j.jsx)("div",{className:_.a.colorDiv})]}),Object(j.jsxs)("div",{className:_.a.card__Container,children:[Object(j.jsxs)("div",{className:_.a.titleContainer,style:O<=1e3?{background:"".concat(s.card)}:{background:"none"},children:[Object(j.jsx)("h2",{style:{color:"".concat(s.title)},children:h}),O<=840&&Object(j.jsx)(f,{text:"Read More",handleButton:function(){i(!r)},padding:"10px 20px"}),Object(j.jsx)("p",{style:{color:"".concat(s.para)},children:d}),Object(j.jsx)("div",{children:g.map((function(e,t){return Object(j.jsx)("span",{style:{marginLeft:"20px",color:"".concat(s.title)},children:e},t)}))})]}),Object(j.jsx)(v.a,{"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",open:r,onClose:k,children:Object(j.jsxs)("div",{style:{backgroundColor:"".concat(s.highlightBackground),padding:"20px"},children:[Object(j.jsx)("div",{className:_.a.image,children:Object(j.jsx)("img",{src:l,alt:"project"})}),Object(j.jsx)("h2",{style:{color:"".concat(s.title)},children:h}),Object(j.jsx)("p",{style:{color:"".concat(s.para)},children:d}),Object(j.jsx)("div",{className:_.a.popupTech,children:g.map((function(e,t){return Object(j.jsxs)("div",{style:{marginRight:"20px",color:"".concat(s.title)},children:[e,t!==g.length-1?",":"."]},t)}))}),Object(j.jsx)("div",{style:{backgroundColor:"".concat(s.line),height:"1px"}}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:_.a.dialogElements,children:[Object(j.jsxs)("div",{style:{color:"".concat(s.title)},className:_.a.actionBtns,children:[Object(j.jsx)("a",{href:p,rel:"noopener noreferrer",target:"_blank",children:Object(j.jsx)("i",{className:"fab fa-github"})}),Object(j.jsx)("a",{href:b,rel:"noopener noreferrer",target:"_blank",children:Object(j.jsx)("i",{className:"fas fa-external-link-alt"})})]}),Object(j.jsx)(f,{text:"close",handleButton:k,padding:"10px 20px"})]})]})}),Object(j.jsxs)("div",{style:{color:"".concat(s.para),background:"".concat(s.linkHover)},className:_.a.description,children:[Object(j.jsx)("a",{href:p,rel:"noopener noreferrer",target:"_blank",children:Object(j.jsx)("i",{className:"fab fa-github"})}),Object(j.jsx)("a",{href:b,rel:"noopener noreferrer",target:"_blank",children:Object(j.jsx)("i",{className:"fas fa-external-link-alt"})})]})]})]})},y=a(18),w=a.n(y),N=function(){var e=n.a.useContext(u).newTheme;return Object(j.jsx)("div",{className:w.a.container,children:Object(j.jsx)("div",{className:w.a.icons,style:{right:0,color:"".concat(e.sideIcons)},children:Object(j.jsxs)("div",{className:w.a.rightEmail,children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://www.linkedin.com/in/priyanka-ingle-05b623231/","aria-label":"Linkedin",target:"_blank",rel:"noreferrer",children:Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",className:"feather feather-linkedin",children:[Object(j.jsx)("title",{children:"LinkedIn"}),Object(j.jsx)("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),Object(j.jsx)("rect",{x:"2",y:"9",width:"4",height:"12"}),Object(j.jsx)("circle",{cx:"4",cy:"4",r:"2"})]})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://github.com/priyanka1565","aria-label":"GitHub",rel:"noreferrer",target:"_blank",children:Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",className:"feather feather-github",children:[Object(j.jsx)("title",{children:"GitHub"}),Object(j.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})]})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://www.instagram.com/mr_artist_hrd/","aria-label":"Instagram",target:"_blank",rel:"noreferrer",children:Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",className:"feather feather-instagram",children:[Object(j.jsx)("title",{children:"Instagram"}),Object(j.jsx)("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),Object(j.jsx)("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),Object(j.jsx)("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://twitter.com/himansh03285202","aria-label":"Twitter",target:"_blank",rel:"noreferrer",children:Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",role:"img",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",className:"feather feather-twitter",children:[Object(j.jsx)("title",{children:"Twitter"}),Object(j.jsx)("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})]})})})]})})})},C=a(8),B=a.n(C),H=function(){var e=Object(c.useContext)(u).newTheme;return Object(j.jsxs)("div",{"data-aos":"fade-right","data-aos-offset":"200","data-aos-easing":"ease-in-sine","data-aos-duration":"800",children:[Object(j.jsx)("h1",{style:{color:"".concat(e.title)},className:B.a.heading,children:"Proficiencies"}),Object(j.jsx)("div",{className:B.a.borderBottom}),Object(j.jsxs)("div",{className:B.a.container,children:[Object(j.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:B.a.logoWrapper,children:[Object(j.jsx)("i",{className:"devicon-html5-plain colored"}),Object(j.jsx)("span",{children:"HTML"})]}),Object(j.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:B.a.logoWrapper,children:[Object(j.jsx)("i",{className:"devicon-css3-plain colored"}),Object(j.jsx)("span",{children:"CSS"})]}),Object(j.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:B.a.logoWrapper,children:[Object(j.jsx)("i",{className:"devicon-javascript-plain colored"}),Object(j.jsx)("span",{children:"Javascript"})]}),Object(j.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:B.a.logoWrapper,children:[Object(j.jsx)("i",{className:"devicon-react-original colored"}),Object(j.jsx)("span",{children:"React"})]}),Object(j.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:B.a.logoWrapper,children:[Object(j.jsx)("i",{style:{color:"#7248B6"},className:"devicon-redux-original"}),Object(j.jsx)("span",{children:"Redux"})]}),Object(j.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:B.a.logoWrapper,children:[Object(j.jsx)("i",{style:{color:"#509941"},className:"devicon-nodejs-plain"}),Object(j.jsx)("span",{children:"Node"})]}),Object(j.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:B.a.logoWrapper,children:[Object(j.jsx)("i",{className:"devicon-express-original"}),Object(j.jsx)("span",{children:"Express"})]}),Object(j.jsxs)("div",{style:{color:"".concat(e.title),background:"".concat(e.linkHover)},className:B.a.logoWrapper,children:[Object(j.jsx)("i",{className:"devicon-mongodb-plain colored"}),Object(j.jsx)("span",{children:"MongoDB"})]})]})]})},S=a(27),I=a.n(S),T=(a(23),a(13)),E=a.n(T),L=function(){var e=n.a.useContext(u).newTheme,t=m();Object(o.a)(t,1)[0];return Object(j.jsxs)("div",{className:E.a.container,style:{boxShadow:"3px 3px 5px ".concat(e.line)},children:[Object(j.jsx)("div",{className:E.a.first,children:Object(j.jsx)("img",{src:"https://github.com/himrd95/portfolio/blob/main/public/developer.gif?raw=true",alt:""})}),Object(j.jsxs)("div",{className:E.a.second,children:[Object(j.jsx)("h1",{style:{color:"".concat(e.title)},className:E.a.heading,children:"About Me"}),Object(j.jsx)("div",{className:E.a.borderBottom}),Object(j.jsxs)("p",{style:{color:"".concat(e.para)},className:E.a.aboutMe,children:["Hello! My name is Priyanshu Kumar and I enjoy creating things that live on the internet. My interest in web development started back last year when I was trying to edit things on the web \u2014 taught me a lot about HTML & CSS!. ",Object(j.jsx)("br",{}),Object(j.jsx)("br",{})," Fast Forwarding to today, I built a number of web applications and 4 major projects. Learned a great deal about teamwork, leadership, and communication. After months of rigorous training, here I am",Object(j.jsxs)("span",{style:{color:"#00a0a0"},children:[" ","looking for an opportunity as a full stack web developer"]}),"."]})]})]})},M=[{img:"https://res.cloudinary.com/dicjyi6ic/image/upload/v1681194228/localease_xid0ot.png",title:"NearBuy-Clone",des:"It is a clone website of NearBuy, which deals in finding things to eat and buy, book a table at restaurants, spas, gift cards near your location",demo:"",live:"https://localease.netlify.app/ ",gitHub:"https://github.com/shreshthkr/poetic-minute-6695",technologies:["JavaScript","React","Redux","Node","Express","MongoDB"]},{img:"https://res.cloudinary.com/dicjyi6ic/image/upload/v1681194154/indeanexpress_hgpgid.png",title:"IndianExpress-Clone",des:"This project is clone of well known website known as Indian Express builded by us. The purpose of building this project is only and only for educational purposes. All copyrights are reserved by Indian Express. We hereby declare that we will not use this for any bad purposes. Thank You!",demo:"",live:"https://astounding-froyo-9f44a4.netlify.app/",gitHub:"https://github.com/ankit2341/Indian-Express-clone",technologies:["JavaScript","React","Html","CSS"]},{img:"https://res.cloudinary.com/dicjyi6ic/image/upload/v1681194132/buffer_qybadq.png",title:"Buffer Clone",des:"Website provides Manage your social meadia platforms like Instagram, Facebook,etc. It also provide update post or remove post from different social media platforms and analytics",demo:"",live:"https://calm-elf-73b415.netlify.app/",gitHub:"https://github.com/VinayRinait/Buffer_Website_Clone",technologies:["React","redux","HTML","CSS","javaScript"]},{img:"https://res.cloudinary.com/dicjyi6ic/image/upload/v1681194100/himalaya_qlrim3.png",title:"Himalayausa-Clone",des:"Himalaya Wellness Company (formerly Himalaya Drug Company) is an Indian multinational pharmaceutical company based in Bengaluru, Karnataka, India. It was originally established by Mohammad Manal in Dehradun in 1930.It produces health care products under the name Himalaya Herbal Healthcare whose products include ayurvedic ingredients.",demo:"",live:"https://himalayausa1.netlify.app/",gitHub:"https://github.com/saurabhKJ7/HIMALAYAUSA-CLONE",technologies:["HTML","javaScript","CSS"]}],A=a(14),W=a.n(A),D=function(){var e=n.a.useContext(u).newTheme;return Object(j.jsxs)("footer",{className:W.a.footer,id:"contact",children:[Object(j.jsxs)("div",{className:W.a.container,children:[Object(j.jsx)("h1",{style:{color:"".concat(e.title)},children:"Get in Touch"}),Object(j.jsx)("p",{style:{color:"".concat(e.para)},className:W.a.paragraph,children:"I'm actively looking for any new opportunities, in full-stack web development."}),Object(j.jsxs)("div",{style:{color:"".concat(e.title)},className:W.a.contactOptions,children:[Object(j.jsx)("a",{href:"tel:7250563544","aria-label":"GitHub",rel:"noreferrer",target:"_blank",children:Object(j.jsx)("i",{className:"fas fa-phone-alt"})}),Object(j.jsx)("a",{href:"mailto: kpriyanshu06@gmail.com","aria-label":"email",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("i",{className:"far fa-envelope"})}),Object(j.jsx)("a",{href:"https://twitter.com/Priyans25941223","aria-label":"Twitter",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("i",{className:"fab fa-twitter"})}),Object(j.jsx)("a",{href:"https://github.com/Priyanshu7250","aria-label":"GitHub",rel:"noreferrer",target:"_blank",children:Object(j.jsx)("i",{className:"fab fa-github"})}),Object(j.jsx)("a",{href:"https://www.linkedin.com/in/priyanshu-k-425117156/","aria-label":"Linkedin",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("i",{className:"fab fa-linkedin-in"})})]})]}),Object(j.jsx)("div",{style:{background:"".concat(e.line)},className:W.a.line}),Object(j.jsx)("div",{style:{color:"".concat(e.para)},className:W.a.copyright,children:"Designed and build by Priyanshu Kumar, \xa92022 All rights reserved."})]})},P=(a(40),"https://res.cloudinary.com/dfjdtufsq/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1667578168/samples/animals/my-logo_ckihba.jpg"),R="https://res.cloudinary.com/dicjyi6ic/image/upload/v1681192980/DSC_2079_1_ez7jfe.jpg",F=(a(41),function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Github Status"}),Object(j.jsx)("img",{style:{justifyContent:"center",paddingBottom:"10px",margin:"auto",marginBottom:"20px"},align:"left",src:"https://github-readme-streak-stats.herokuapp.com/?user=Priyanshu7250&theme=radical",alt:"priyanshu",height:"200px",width:"45%",marginBottom:"20px"}),Object(j.jsx)("img",{style:{justifyContent:"center",paddingBottom:"10px",margin:"auto",marginBottom:"20px"},align:"center",src:"https://github-readme-stats.vercel.app/api?username=Priyanshu7250&show_icons=true&theme=radical",height:"200px",width:"45%"})]}),Object(j.jsxs)("div",{className:"cont_2",height:"400px",width:"100%",border:"1px solid red",children:[Object(j.jsx)("h1",{children:" GitHub Contribution Calendar"}),Object(j.jsx)("img",{style:{justifyContent:"center",paddingBottom:"10px",margin:"auto",marginBottom:"20px"},align:"center",src:"https://ghchart.rshah.org/Priyanshu7250",alt:"Priyanshu7250",height:"300px",width:"90%"})]})]})}),K=function(e){var t=e.scrollRef,a=Object(c.useState)(M.slice(0,4)),r=Object(o.a)(a,2),i=r[0],l=r[1],h=n.a.useContext(u).newTheme,b=Object(c.useState)(0),p=Object(o.a)(b,2),m=p[0],g=p[1],x=Object(c.useState)(0),O=Object(o.a)(x,2),_=O[0],v=O[1];Object(c.useEffect)((function(){I.a.init()}));var y=function(){g(window.pageYOffset)};Object(c.useEffect)((function(){return window.addEventListener("scroll",y),function(){return window.removeEventListener("scroll",y)}}),[]),Object(c.useEffect)((function(){document.body.style.backgroundColor=h.background}),[h]);var w={color:"".concat(h.para),transform:"scale(".concat(1-m/1e3,")"),opacity:"".concat(m>200?"0":m>160?".5":"1")};return Object(j.jsxs)("div",{ref:t,children:[Object(j.jsx)(N,{}),Object(j.jsxs)("div",{id:"home",className:d.a.profile,style:{backgroundColor:"".concat(h.imgBackground),transition:".3s",opacity:"".concat(m>300?"0":m>160?".5":"1")},children:[Object(j.jsxs)("div",{"data-aos":"fade-zoom-out",className:d.a.intro,style:w,children:[Object(j.jsxs)("h1",{children:[Object(j.jsx)("span",{children:"Hi, My name is"}),Object(j.jsx)("div",{className:d.a.name,style:{color:"".concat(h.title)},children:"Priyanshu Kumar."})]}),Object(j.jsx)("h1",{children:"I am a Full Stack Developer based in Dhanbad Jharkhand. I build things for web."}),Object(j.jsx)("div",{className:d.a.btn,children:Object(j.jsx)("a",{href:"https://drive.google.com/file/d/1Z3Lx3iwvCk23KzAw3wyanRXneL3IWVKO/view?usp=sharing",target:"_blank",rel:"noreferrer",children:Object(j.jsx)(f,{text:Object(j.jsxs)("span",{className:d.a.resumeBtn,children:[Object(j.jsx)("span",{children:"Resume"}),Object(j.jsx)("i",{className:"fas fa-file-download"})]}),handleButton:function(){}})})})]}),Object(j.jsx)("div",{style:{transform:"scale(".concat(1-m/1e3,")"),opacity:"".concat(m>300?"0":m>160?".5":"1")},className:d.a.profileImage,children:Object(j.jsx)("img",{src:R,alt:"Profile pic"})})]}),Object(j.jsx)("div",{id:"about",style:{background:"".concat(h.highlightBackground)},className:d.a.experience,children:Object(j.jsx)(L,{})}),Object(j.jsx)("div",{id:"skills",className:d.a.techStacks,children:Object(j.jsx)(H,{})}),Object(j.jsx)("div",{id:"skills",className:d.a.experience,style:{background:"".concat(h.highlightBackground)},children:Object(j.jsx)("div",{"data-aos":"fade-right","data-aos-offset":"150","data-aos-easing":"ease-in-sine","data-aos-duration":"700",style:{color:"".concat(h.para)},children:Object(j.jsx)(F,{})})}),Object(j.jsxs)("div",{id:"projects",className:d.a.projects,children:[Object(j.jsx)("h1",{style:{color:"".concat(h.title)},className:d.a.heading,children:"Few Things I've Build"}),Object(j.jsx)("div",{className:d.a.borderBottom}),Object(j.jsx)("div",{children:i.map((function(e,t){return Object(j.jsx)(k,Object(s.a)({},e),t)}))}),Object(j.jsx)(f,{text:M.length!==i.length?"Show More":"Show Less",handleButton:function(){M.length===i.length?(l(M.slice(0,4)),window.scrollTo(0,_)):(l(M),v(m))}})]}),Object(j.jsx)("div",{style:{background:"".concat(h.highlightBackground)}}),Object(j.jsx)("div",{children:Object(j.jsx)(D,{})})]})},z=a(11),q=a.n(z),G={bar1:{position:"absolute",width:"15px",transform:"rotate(45deg)"},bar2:{position:"absolute",left:"-2px"},bar3:{position:"absolute",width:"15px",transform:"rotate(-45deg)"}},V={background:"linear-gradient(40deg, #8983F7, #1c2931 70%)"},Y={transform:"scale(1)"},J=function(){var e=Object(c.useState)(window.pageYOffset),t=Object(o.a)(e,2),a=(t[0],t[1]),n=Object(c.useRef)(),r=Object(c.useContext)(u),i=r.newTheme,s=r.mode,l=r.handleMode,d=r.open,h=r.handleMenu;return window.onscroll=function(){var e=window.pageYOffset;n.current.style.top="0",a(e)},Object(j.jsx)("nav",{ref:n,className:q.a.navContainer,style:{background:"".concat(i.background),boxShadow:"3px 3px 10px ".concat(i.line)},children:Object(j.jsxs)("div",{className:q.a.navbar,children:[Object(j.jsx)("a",{href:"https://priyanka-ingle1565-portfolio.netlify.app/",children:Object(j.jsx)("div",{className:q.a.logo,children:Object(j.jsx)("img",{src:P,alt:"Logo"})})}),Object(j.jsxs)("div",{style:{color:"".concat(i.title)},className:q.a.links,children:[Object(j.jsx)("a",{href:"#home",children:"Home"}),Object(j.jsx)("a",{href:"#about",children:"About"}),Object(j.jsx)("a",{href:"#skills",children:"Skills"}),Object(j.jsx)("a",{href:"#projects",children:"Projects"}),Object(j.jsx)("a",{href:"#contact",children:"Contact"})]}),Object(j.jsx)("button",{"aria-label":"dark"===s?"Light Mode":"Dark Mode",title:"dark"===s?"Toggle Light Mode":"Toggle Dark Mode",style:{color:"".concat(i.title)},className:q.a.modeButton,onClick:l,children:Object(j.jsx)("div",{className:q.a.circle,style:"light"===s?V:{},children:Object(j.jsx)("div",{style:"light"===s?Y:{},className:q.a.crescent})})}),Object(j.jsxs)("div",{onClick:h,className:q.a.bars,children:[Object(j.jsx)("div",{style:d?{background:"".concat(i.title)}:G.bar1}),Object(j.jsx)("div",{style:d?{background:"".concat(i.title)}:G.bar2}),Object(j.jsx)("div",{style:d?{background:"".concat(i.title)}:G.bar3})]})]})})},Q=a(20),U=a(28),X=a(12);var Z=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],i=n.a.useContext(u),s=i.newTheme,l=i.open,d=i.handleMenu,h=Object(c.useRef)(),b=Object(c.useCallback)((function(e){var t=!1;setTimeout((function(){t=!0}),2200),Promise.all(function(){var e=[],t=[].concat(Object(X.a)(M),[{img:R}]);return null===t||void 0===t||t.forEach(function(){var t=Object(U.a)(Object(Q.a)().mark((function t(a){return Object(Q.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.push(new Promise((function(e,t){fetch(a.img).then((function(e){return e})).then((function(t){return e(t)})).catch((function(e){return t(e)}))})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e}()).then((function(e){t?r(!0):setTimeout((function(){r(!0)}),1e3)})).catch((function(){return r(!1)}))}),[]);return Object(c.useEffect)((function(){b(),setTimeout((function(){r(!0)}),2200)}),[b]),Object(j.jsx)(n.a.Fragment,{children:a?Object(j.jsxs)("div",{className:"components",children:[Object(j.jsxs)("div",{style:{background:"".concat(s.menuBackground),color:"".concat(s.title),left:"".concat(l?"-100vw":"0"),position:"fixed",top:0},className:"links",children:[Object(j.jsx)("a",{onClick:d,href:"#home",children:"Home"}),Object(j.jsx)("a",{onClick:d,href:"#about",children:"About"}),Object(j.jsx)("a",{onClick:d,href:"#experience",children:"Experience"}),Object(j.jsx)("a",{onClick:d,href:"#projects",children:"Projects"}),Object(j.jsx)("a",{onClick:d,href:"#techStacks",children:"Profeciencies"}),Object(j.jsx)("a",{onClick:d,href:"#contact",children:"Contact"}),Object(j.jsx)("a",{onClick:d,href:"#contact",children:"Resume"})]}),Object(j.jsx)(J,{}),Object(j.jsx)(K,{scrollRef:h})]}):Object(j.jsx)("div",{style:{background:"".concat(s.background),position:"fixed",top:0},className:"logoStart",children:Object(j.jsx)("img",{src:P,alt:"logo"})})})},$=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,61)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(p,{children:Object(j.jsx)(Z,{})})}),document.getElementById("root")),$()}],[[42,1,2]]]);
//# sourceMappingURL=main.9306a059.chunk.js.map