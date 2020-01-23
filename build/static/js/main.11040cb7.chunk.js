(this["webpackJsonpfe-nc-news"]=this["webpackJsonpfe-nc-news"]||[]).push([[0],{25:function(e,t,a){e.exports=a(59)},30:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),o=(a(30),a(1)),i=a(2),s=a(4),u=a(3),m=a(5),h=a(7),p=function(e){var t=e.username;return r.a.createElement("div",null,r.a.createElement("h1",null,"NC News"),r.a.createElement("h5",null,"Logged In As: ",t))},d=a(8),v=a.n(d),b=function(e){return v.a.get("https://nc-news2020.herokuapp.com/api/".concat(e)).then((function(e){return e.data}))},g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={allTopics:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;b("topics/").then((function(t){var a=t.topics.map((function(e){return e}));e.setState({allTopics:a})}))}},{key:"render",value:function(){return r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar navbar-dark bg-dark"},r.a.createElement("a",{class:"navbar-brand",href:"/"},"NC News"),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{class:"navbar-nav"},this.state.allTopics.map((function(e,t){return r.a.createElement(h.a,{className:"nav-item nav-link active",to:"topics/".concat(e.slug)},e.slug.toUpperCase())})),")")))}}]),t}(n.Component),f=(a(57),a(10)),E=function(e,t,a){return v.a.patch("https://nc-news2020.herokuapp.com/api/".concat(a,"/").concat(e),{inc_votes:t}).then((function(e){return e.data}))},y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={currentVote:0,voteValue:0},a.handleVote=function(e){a.setState((function(t){return{currentVote:t.currentVote+e,voteValue:t.voteValue+e}}));var t=a.props,n=t.path,r=t.id;E(r,e,n)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.currentVote;this.setState({currentVote:e})}},{key:"render",value:function(){var e,t=this;return r.a.createElement("div",null,r.a.createElement("h4",null,"Votes: ",this.state.currentVote),this.state.voteValue<=0&&r.a.createElement("button",(e={onClick:function(e){return t.handleVote(1)},type:"button",class:"btn btn-light"},Object(f.a)(e,"type","button"),Object(f.a)(e,"class","btn btn-outline-info"),e),"Up Vote \ud83d\udc4d"),this.state.voteValue>=0&&r.a.createElement("button",{onClick:function(e){return t.handleVote(-1)},type:"button",class:"btn btn-outline-danger"},"Down Vote \ud83d\udc4e"),r.a.createElement("br",null))}}]),t}(n.Component),j=function(e){var t=e.allArticles;if(t)return t.map((function(e){return r.a.createElement("main",{key:e.article_id},r.a.createElement("hr",null),r.a.createElement("h3",null,r.a.createElement(h.a,{to:"/articles/".concat(e.article_id)},e.title)),r.a.createElement("h4",null,r.a.createElement(h.a,{to:"/topics/".concat(e.topic)},"Topic ",e.topic)),r.a.createElement("h4",null,r.a.createElement(h.a,{to:"/articles/".concat(e.article_id,"/comments")},"Comments ",e.comment_count)),r.a.createElement(y,{id:e.article_id,currentVote:e.votes,path:"articles"}),r.a.createElement("hr",null))}))},O=function(e){var t=e.msg;return r.a.createElement("div",{class:"alert alert-info"},r.a.createElement("strong",null,"Loading!")," ",t&&r.a.createElement("h4",null,t))},C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={allArticles:[],loading:!0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.topic?b("articles/?topic=".concat(this.props.topic)).then((function(t){var a=t.articles.map((function(e){return e}));e.setState({allArticles:a})})).then((function(){e.setState({loading:!1})})):b("articles/").then((function(t){var a=t.articles.map((function(e){return e}));e.setState({allArticles:a})})).then((function(){e.setState({loading:!1})}))}},{key:"render",value:function(){return r.a.createElement("articles",null,this.state.loading&&r.a.createElement(O,{msg:"One tick just getting you the articles"}),r.a.createElement(j,{allArticles:this.state.allArticles}))}}]),t}(n.Component),_=function(e,t){return console.log(e,"<<<<<<<<<id"),console.log(t,"<<<<<<<<< Body"),v.a.post("https://nc-news2020.herokuapp.com/api/articles/".concat(e,"/comments"),{username:"cooljmessy",body:t}).then((function(e){return e.data}))},k=function(e){var t=e.msg;return r.a.createElement("div",{class:"alert alert-success",role:"alert"},r.a.createElement("h3",null,t))},w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={bodyInput:"",postedComment:null,posting:null},a.handleChange=function(e){a.setState({bodyInput:e.target.value})},a.handleSubmit=function(e){console.log("123"),e.preventDefault(),a.setState({posting:!0,bodyInput:""});var t=a.state.bodyInput,n=a.props.article_id;_(n,t).then((function(e){a.setState({postedComment:e,posting:null})}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e;return r.a.createElement("ul",null,this.state.postedComment&&r.a.createElement(k,{msg:'"'.concat(this.state.postedComment.comment.body,'" has been posted!')}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{class:"form-group"},r.a.createElement("textarea",(e={placeholder:"Write a comment \ud83d\udd25",type:"text",onChange:this.handleChange,value:this.state.bodyInput,id:"comment",className:"form-control"},Object(f.a)(e,"id","exampleFormControlTextarea1"),Object(f.a)(e,"rows","3"),e))),!this.state.posting&&r.a.createElement("button",{className:"btn btn-outline-secondary"},"Add Comment \u25b6\ufe0e")))}}]),t}(n.Component),S=function(e){var t=e.err_msg;return r.a.createElement("div",{class:"alert alert-danger",role:"alert"},t?r.a.createElement("h3",null,t):r.a.createElement("h3",null,"Page not found... \ud83d\udca9"))},A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={article:"",loading:!0,err:null,err_msg:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.article_id;b("articles/".concat(t)).then((function(t){e.setState({article:t,loading:!1})})).catch((function(){e.setState({err:!0,err_msg:"Ops this article dose not exist \ud83d\udca9 404"})}))}},{key:"render",value:function(){var e=this.state.article.article;return e?r.a.createElement("div",null,r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.body),r.a.createElement(h.a,{to:"/topics/".concat(e.topic)},e.topic),r.a.createElement("p",null,"Author ",e.author),r.a.createElement("p",null,"Created at ",e.created_at),r.a.createElement(h.a,{to:"comments"},r.a.createElement("button",null," Show ",e.comment_count," comments \ud83d\udc40")),r.a.createElement(y,{id:e.article_id,currentVote:e.votes,path:"articles"}),r.a.createElement(w,{article_id:e.article_id})):this.state.err?r.a.createElement(S,{err_msg:this.state.err_msg}):r.a.createElement(O,{err_msg:"Just getting you that amazing article"})}}]),t}(n.Component),V=function(e){return v.a.delete("https://nc-news2020.herokuapp.com/api/".concat(e)).then((function(e){return e.data}))},D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={comments:[],sortBy:"created_at",loggedInUser:"butter_bridge",loading:!0,err:!1,err_msg:"",deletingComment:!1,commentDeleted:!1},a.handleSortByByChange=function(e){var t=e.target.value;a.setState({sortBy:t})},a.handleDeleteComment=function(e){a.setState({commentDeleted:!1,deletingComment:!0}),V("comments/".concat(e)).then((function(){a.setState({commentDeleted:!0,deletingComment:!1})})).catch((function(){a.setState({loading:!1,err:!0,err_msg:"The comment you trying to delete is no longer exist \ud83d\ude45\u200d\u2640\ufe0f"})}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.article_id;b("articles/".concat(t,"/comments")).then((function(t){e.setState({comments:t,loading:!1})}))}},{key:"componentDidUpdate",value:function(){var e=this,t=this.props.article_id;b("articles/".concat(t,"/comments?sort_by=").concat(this.state.sortBy)).then((function(t){e.setState({comments:t})}))}},{key:"render",value:function(){var e=this,t=this.state.comments.comments;return t?this.state.err?r.a.createElement(S,{err_msg:this.state.err_msg}):r.a.createElement(r.a.Fragment,null,this.state.commentDeleted&&r.a.createElement(k,{msg:"The comment has been deleted!"}),r.a.createElement("form",null,r.a.createElement("label",null,"Sort comments by:",r.a.createElement("select",{value:this.state.value,onChange:this.handleSortByByChange},r.a.createElement("option",{value:"created_at"},"Date Created"),r.a.createElement("option",{value:"username"},"Author"),r.a.createElement("option",{value:"votes"}," Comment Votes")))),t.map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement("p",null,"Body: ",t.body),!e.state.deletingComment&&e.state.loggedInUser===t.username&&r.a.createElement("button",{onClick:function(a){return e.handleDeleteComment(t.comment_id)}}," ","Delete Comment"," "),r.a.createElement("p",null,"Username: ",t.username),r.a.createElement("p",null,"Created at: ",t.created_at),r.a.createElement("br",null),r.a.createElement(y,{id:t.comment_id,currentVote:t.votes,path:"comments"}))}))):r.a.createElement(O,{msg:"Cool comments are on their way!"})}}]),t}(n.Component),B=(a(58),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"butter_bridge"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{username:this.state.username}),r.a.createElement(g,null),r.a.createElement(h.b,null,r.a.createElement(C,{path:"/"}),r.a.createElement(C,{path:"/topics/:topic"}),r.a.createElement(C,{path:"/articles/"}),r.a.createElement(A,{path:"/articles/:article_id/"}),r.a.createElement(D,{path:"/articles/:article_id/comments"}),r.a.createElement(S,{default:!0})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.11040cb7.chunk.js.map