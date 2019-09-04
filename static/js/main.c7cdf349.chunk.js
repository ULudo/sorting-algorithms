(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(t,e,a){t.exports=a(96)},88:function(t,e,a){},95:function(t,e,a){},96:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),s=a(23),r=a.n(s),o=a(7),c=a(8),l=a(10),h=a(9),u=a(5),d=a(11),p=a(20),m=a.n(p),g=a(18),v=a.n(g),b=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(c.a)(e,[{key:"scrollToSection",value:function(t){var e=document.getElementById(t).getBoundingClientRect().top+window.pageYOffset,a=document.getElementById("menu");window.scrollTo({top:e-a.clientHeight,behavior:"smooth"})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{id:"menu",className:"fixed-top"},i.a.createElement(m.a,{bg:"dark",variant:"dark",expand:"lg"},i.a.createElement(m.a.Brand,{href:"#home"},"Sorting Algorithms"),i.a.createElement(m.a.Toggle,{"aria-controls":"basic-navbar-nav"}),i.a.createElement(m.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(v.a,{className:"mr-auto"},i.a.createElement(v.a.Link,{onClick:function(){return t.scrollToSection("header")}},"Home"),i.a.createElement(v.a.Link,{onClick:function(){return t.scrollToSection("data-input")}},"Data"),i.a.createElement(v.a.Link,{onClick:function(){return t.scrollToSection("sorting-pick-list")}},"Algorithms"),i.a.createElement(v.a.Link,{onClick:function(){return t.scrollToSection("sortings")}},"Animation")))))}}]),e}(i.a.Component),f=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=document.getElementById("menu");document.getElementById("header").style.marginTop=t.clientHeight+"px"}},{key:"render",value:function(){return i.a.createElement("section",{id:"header"},i.a.createElement("div",{className:"overlay"},i.a.createElement("div",{className:"head"},i.a.createElement("h1",null,"Sorting Algorithms Animation"),i.a.createElement("h3",null,"by Ulrich Ludolfinger"))))}}]),e}(i.a.Component),k=a(29),O=a.n(k),j=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(h.a)(e).call(this,t))).handleChange=a.handleChange.bind(Object(u.a)(a)),a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"handleChange",value:function(t){this.props.toggleSorterActive(t.target.name)}},{key:"render",value:function(){var t=this;return i.a.createElement("section",{id:"sorting-pick-list"},i.a.createElement("h4",{className:"heading"},"Algorithms:"),i.a.createElement(O.a,{className:"pick-list-group"},i.a.createElement("div",null,this.props.sortings.map(function(e){return i.a.createElement(O.a.Check,{inline:!0,label:e,name:e,key:"checkbox-".concat(e),type:"checkbox",onChange:t.handleChange})}))))}}]),e}(i.a.Component),y=a(30),S=a.n(y),E=a(28),D=a.n(E),A=a(17),C=a.n(A),w=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(h.a)(e).call(this,t))).randomClick=a.randomClick.bind(Object(u.a)(a)),a.handleChange=a.handleChange.bind(Object(u.a)(a)),a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"randomClick",value:function(t){t.preventDefault(),this.props.generateData()}},{key:"handleChange",value:function(t){this.props.setSortingData(t.target.value)}},{key:"render",value:function(){return i.a.createElement("section",{id:"data-input"},i.a.createElement("h4",{className:"heading"},"Sorting values:"),i.a.createElement(S.a,{className:"sorting-data-input"},i.a.createElement(D.a,{placeholder:"Comma separated data","aria-label":"Comma separated data","aria-describedby":"Sorting data",value:this.props.sortingData,onChange:this.handleChange}),i.a.createElement(S.a.Append,null,i.a.createElement(C.a,{variant:"outline-secondary",onClick:this.randomClick},"Random"))))}}]),e}(i.a.Component),N=(a(88),a(14)),I=a(45),B=a.n(I),T=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(h.a)(e).call(this,t))).chartRef=i.a.createRef(),a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){this.props.setAction("created")}},{key:"CreateChart",value:function(){var t=this.chartRef.current.getContext("2d");this.chart=new B.a(t,{type:"bar",data:{labels:this.props.data,datasets:[{labels:"Values",data:this.props.data}]},options:{animation:{duration:0},legend:{display:!1},title:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})}},{key:"componentDidUpdate",value:function(){var t=this;"created"===this.props.action?("undefined"!==typeof this.chart&&this.chart.destroy(),this.CreateChart()):"run"===this.props.action?(this.interval&&clearInterval(this.interval),this.interval=setInterval(function(){return t.SortData()},10),this.props.setAction("running")):"pause"===this.props.action?clearInterval(this.interval):"step"===this.props.action?(clearInterval(this.interval),this.SortData(),this.props.setAction("running")):"running"===this.props.action?(this.chart.data.labels=this.props.data,this.chart.data.datasets[0].data=this.props.data,this.chart.update()):"update"===this.props.action&&(this.interval&&clearInterval(this.interval),this.chart.data.labels=this.props.data,this.chart.data.datasets[0].data=this.props.data,this.chart.update())}},{key:"SortData",value:function(){this.props.ended?clearInterval(this.interval):this.props.sort()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval),this.props.setAction("created")}},{key:"render",value:function(){return i.a.createElement("canvas",{id:"myChart",ref:this.chartRef})}}]),e}(i.a.Component),x=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(h.a)(e).call(this,t))).state={data:Object(N.a)(a.props.sortingData),sortingState:[0,0],ended:!1},a.sort=a.sort.bind(Object(u.a)(a)),a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"sort",value:function(){var t=this.state.data,e=this.state.sortingState,a=!1;if(e[0]<t.length-1)if(e[1]<t.length-e[0]-1){if(t[e[1]]>t[e[1]+1]){var n=t[e[1]];t[e[1]]=t[e[1]+1],t[e[1]+1]=n}e[1]++}else e[1]=0,e[0]++;else a=!0;this.setState({data:t,sortingState:e,ended:a})}},{key:"componentDidUpdate",value:function(t){this.props.sortingData!==t.sortingData&&(this.setState({data:Object(N.a)(this.props.sortingData),sortingState:[0,0],ended:!1}),this.props.setAction("update"))}},{key:"render",value:function(){return i.a.createElement(T,{data:this.state.data,ended:this.state.ended,sort:this.sort,action:this.props.action,setAction:this.props.setAction})}}]),e}(i.a.Component),R=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(h.a)(e).call(this,t))).state={data:Object(N.a)(a.props.sortingData),sortingState:[1,1,0],ended:!1},a.sort=a.sort.bind(Object(u.a)(a)),a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"sort",value:function(){var t=this.state.data,e=this.state.sortingState,a=!1;e[0]<t.length?(e[0]===e[1]&&(e[2]=t[e[0]]),e[1]>0&&t[e[1]-1]>e[2]?(t[e[1]]=t[e[1]-1],e[1]--):(t[e[1]]=e[2],e[0]++,e[1]=e[0])):a=!0,this.setState({data:t,sortingState:e,ended:a})}},{key:"componentDidUpdate",value:function(t){this.props.sortingData!==t.sortingData&&(this.setState({data:Object(N.a)(this.props.sortingData),sortingState:[1,1,0],ended:!1}),this.props.setAction("update"))}},{key:"render",value:function(){return i.a.createElement(T,{data:this.state.data,ended:this.state.ended,sort:this.sort,action:this.props.action,setAction:this.props.setAction})}}]),e}(i.a.Component),U=a(24),W=a(25),L=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(h.a)(e).call(this,t))).state={data:Object(N.a)(a.props.sortingData),sortingState:[0,-1,-1,0,0],stack:[[0,a.props.sortingData.length-1]],ended:!1},a.sort=a.sort.bind(Object(u.a)(a)),a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"swap",value:function(t,e,a){var n=t[e];return t[e]=t[a],t[a]=n,t}},{key:"sort",value:function(){var t=this.state.data,e=this.state.stack,a=this.state.sortingState,n=this.state.ended;if(!n)if(a[0]<a[2])t[a[0]]<=a[3]&&(t=this.swap(t,a[0],a[4]),a[4]++),a[0]++;else if(a[0]===a[2])t=this.swap(t,a[4],a[2]),a[4]-1>a[1]&&e.push([a[1],a[4]-1]),a[4]+1<a[2]&&e.push([a[4]+1,a[2]]),a[0]++;else{var i=e.pop();void 0===i?n=!0:(a[1]=i[0],a[2]=i[1],a[3]=t[a[2]],a[4]=a[1],a[0]=a[1])}this.setState({data:t,sortingState:a,stack:e,ended:n})}},{key:"componentDidUpdate",value:function(t){this.props.sortingData!==t.sortingData&&(this.setState({data:Object(N.a)(this.props.sortingData),sortingState:[0,-1,-1,0,0],stack:[[0,this.props.sortingData.length-1]],ended:!1}),this.props.setAction("update"))}},{key:"render",value:function(){return i.a.createElement(T,{data:this.state.data,ended:this.state.ended,sort:this.sort,action:this.props.action,setAction:this.props.setAction})}}]),e}(i.a.Component),H=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(h.a)(e).call(this,t))).state={action:""},a.setAction=a.setAction.bind(Object(u.a)(a)),a.play=a.play.bind(Object(u.a)(a)),a.pause=a.pause.bind(Object(u.a)(a)),a.step=a.step.bind(Object(u.a)(a)),a.calcAnimationWidth=a.calcAnimationWidth.bind(Object(u.a)(a)),a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"setAction",value:function(t){this.setState({action:t})}},{key:"scrollToSection",value:function(){var t=document.getElementById("sortings").getBoundingClientRect().top+window.pageYOffset,e=document.getElementById("menu");window.scrollTo({top:t-e.clientHeight,behavior:"smooth"})}},{key:"play",value:function(t){t.preventDefault(),this.scrollToSection(),this.setAction("run")}},{key:"pause",value:function(t){t.preventDefault(),this.scrollToSection(),this.setAction("pause")}},{key:"step",value:function(t){t.preventDefault(),this.scrollToSection(),this.setAction("step")}},{key:"calcAnimationWidth",value:function(t){var e=0;if(t>0){t>3&&(t=3);var a=20*t+20;e=(window.innerWidth-a)/t}return e}},{key:"render",value:function(){for(var t=[],e=0,a=0;a<this.props.sorter.length;a++)if(this.props.sorter[a].active){switch(this.props.sorter[a].name){case"Bubble Sort":t.push(i.a.createElement(x,{key:"BubbleSort",sortingData:this.props.sortingData,action:this.state.action,setAction:this.setAction}));break;case"Insertion Sort":t.push(i.a.createElement(R,{key:"InsertionSort",sortingData:this.props.sortingData,action:this.state.action,setAction:this.setAction}));break;case"Quick Sort":t.push(i.a.createElement(L,{key:"QuickSort",sortingData:this.props.sortingData,action:this.state.action,setAction:this.setAction}))}e++}var n={width:this.calcAnimationWidth(e)};return i.a.createElement("section",{id:"sortings"},i.a.createElement("div",{className:"controls","aria-label":"Animation controls"},i.a.createElement(C.a,{className:"mr-2",variant:"success",onClick:this.play},i.a.createElement(U.a,{className:"mr-1",icon:W.b})," Go"),i.a.createElement(C.a,{className:"mr-2",variant:"warning",onClick:this.pause},i.a.createElement(U.a,{className:"mr-1",icon:W.a}),"Pause"),i.a.createElement(C.a,{variant:"info",onClick:this.step},i.a.createElement(U.a,{className:"mr-1",icon:W.c}),"Next")),i.a.createElement("div",{className:"animations"},t.map(function(t){return i.a.createElement("div",{className:"animation",style:n,key:"div-".concat(t.key)},t)})))}}]),e}(i.a.Component),M=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(h.a)(e).call(this,t))).state={sortingData:[],sorter:[{name:"Bubble Sort",active:!1},{name:"Insertion Sort",active:!1},{name:"Quick Sort",active:!1}]},a.toggleSorterActive=a.toggleSorterActive.bind(Object(u.a)(a)),a.setSortingData=a.setSortingData.bind(Object(u.a)(a)),a.generateData=a.generateData.bind(Object(u.a)(a)),a}return Object(d.a)(e,t),Object(c.a)(e,[{key:"toggleSorterActive",value:function(t){this.setState({sorter:this.state.sorter.map(function(e){return e.name===t&&(e.active=!e.active),e})})}},{key:"setSortingData",value:function(t){var e=t.replace(/[^0-9,]/g,"");this.setState({sortingData:e.split(/[,]+/)})}},{key:"generateData",value:function(){for(var t=[],e=0;e<50;e++)t.push(Math.floor(100*Math.random()));this.setState({sortingData:t})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(b,null),i.a.createElement(f,null),i.a.createElement(w,{sortingData:this.state.sortingData,generateData:this.generateData,setSortingData:this.setSortingData}),i.a.createElement(j,{toggleSorterActive:this.toggleSorterActive,sortings:this.state.sorter.map(function(t){return t.name})}),i.a.createElement(H,{sorter:this.state.sorter,sortingData:this.state.sortingData}))}}]),e}(i.a.Component);a(94),a(95);r.a.render(i.a.createElement(M,null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.c7cdf349.chunk.js.map