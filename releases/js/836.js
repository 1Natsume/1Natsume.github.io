"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[836],{2256:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var s=n(641),i=n(33),a={id:"article_message"},o={class:"article-message-wrap"},c={key:0,class:"message-body-nocomment"},m={key:1,class:"message-body-warp"},l={class:"body-item"},u={class:"avatar-img"},r=["src","onClick"],d={class:"message-desc"},g=["onClick"],C={class:"desc-level"},p={class:"desc-author"},k={class:"desc-date"},h=["innerHTML"],L={class:"message-btn-wrap"},v={class:"message-btn btn1"},f=["onClick"],y=["onClick"],b=["onClick"],I=["onClick"],E={class:"message-btn btn2"},M=["onClick"],X=["onClick"];var w=n(6577),A=n(664),Q=n(6801),$=n(950);const _={name:"ArticleMessage",components:{Pagination:Q.A},props:{articleId:{default:-1}},data:function(){return{pageNum:1,messageList:[],messageCount:0,messageCurrent:1}},watch:{articleId:function(){this.initMyCommentList(this.articleId,1)}},created:function(){var e=this;this.initMyCommentList(this.articleId,1),this.$bus.on("commentCommitEvent",(function(){e.initMyCommentList(e.articleId,1)})),this.$bus.on("commentUpdateEvent",(function(){e.initMyCommentList(e.articleId,1)}))},methods:{openCommenter:function(e){window.open(e)},commentOpeEvent:function(e){$.A.showInfoMsg(e.message),this.initMyCommentList(this.articleId,this.pageNum)},diggComment:function(e){A.A.diggComment(this.articleId,e,!1).then(this.commentOpeEvent)},burryComment:function(e){A.A.buryComment(this.articleId,e,!1).then(this.commentOpeEvent)},delComment:function(e){A.A.deleteComment(e,0,this.articleId).then(this.commentOpeEvent)},updateComment:function(e){this.$emit("noticeUpdateEvent",e)},replayComment:function(e,t){this.$emit("noticeReplayEvent",e,t)},quoteComment:function(e,t){this.$emit("noticeQuoteEvent",e,t)},clickPage:function(e){this.initMyCommentList(this.articleId,e)},initMyCommentList:function(e,t){var n=this;this.pageNum=t,this.$bus.emit("barLoadingOpen"),A.A.loadMyCommentList(e,t).then((function(e){n.messageList.splice(0,n.messageList.length),e.list.forEach((function(e){e.desc=w.A.parseText(e.desc),n.messageList.push(e)})),n.messageCount=parseInt(e.count),n.messageCurrent=parseInt(e.current),n.$bus.emit("barLoadingClose")}))}}};const z=(0,n(6262).A)(_,[["render",function(e,t,n,w,A,Q){var $=(0,s.g2)("pagination");return(0,s.uX)(),(0,s.CE)("div",a,[(0,s.Lk)("div",o,[t[2]||(t[2]=(0,s.Lk)("div",{class:"message-title"}," 评论列表 ",-1)),e.messageList&&0!=e.messageList.length?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("div",c,"暂无评论")),e.messageList&&e.messageList.length>0?((0,s.uX)(),(0,s.CE)("div",m,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.messageList,(function(e){return(0,s.uX)(),(0,s.CE)("div",l,[(0,s.Lk)("div",u,[(0,s.Lk)("img",{src:e.avatarHdUrl,onClick:function(t){return Q.openCommenter(e.authorUrl)}},null,8,r)]),(0,s.Lk)("div",d,[(0,s.Lk)("div",{class:"message-desc-bar",onClick:function(t){return Q.openCommenter(e.authorUrl)}},[(0,s.Lk)("span",C,(0,i.v_)(e.level),1),(0,s.Lk)("span",p,(0,i.v_)(e.author),1)],8,g),(0,s.Lk)("div",null,[(0,s.Lk)("span",k,(0,i.v_)(e.date),1)]),(0,s.Lk)("div",null,[(0,s.Lk)("div",{class:"desc-content",innerHTML:e.desc},null,8,h)])]),(0,s.Lk)("div",L,[(0,s.Lk)("div",v,[e.delBtn?((0,s.uX)(),(0,s.CE)("span",{key:0,onClick:function(t){return Q.delComment(e.commentId)}},"删除",8,f)):(0,s.Q3)("",!0),e.updateBtn?((0,s.uX)(),(0,s.CE)("span",{key:1,onClick:function(t){return Q.updateComment(e.commentId)}},"修改",8,y)):(0,s.Q3)("",!0),e.replayBtn?((0,s.uX)(),(0,s.CE)("span",{key:2,onClick:function(t){return Q.replayComment(e.commentId,e.author)}},"回复",8,b)):(0,s.Q3)("",!0),e.quoteBtn?((0,s.uX)(),(0,s.CE)("span",{key:3,onClick:function(t){return Q.quoteComment(e.commentId,e.author)}},"引用",8,I)):(0,s.Q3)("",!0)]),(0,s.Lk)("div",E,[(0,s.Lk)("span",{onClick:function(t){return Q.burryComment(e.commentId)}},[t[0]||(t[0]=(0,s.Lk)("span",{class:"icon iconfont zan nozan"},null,-1)),(0,s.eW)((0,i.v_)(e.burry),1)],8,M),(0,s.Lk)("span",{onClick:function(t){return Q.diggComment(e.commentId)}},[t[1]||(t[1]=(0,s.Lk)("span",{class:"icon iconfont zan"},null,-1)),(0,s.eW)((0,i.v_)(e.digg),1)],8,X)])])])})),256))])):(0,s.Q3)("",!0),e.messageList&&e.messageList.length>0?((0,s.uX)(),(0,s.Wv)($,{key:2,"page-size":e.messageCount,"page-cur":e.messageCurrent,"max-page":"10",onClickPage:Q.clickPage},null,8,["page-size","page-cur","onClickPage"])):(0,s.Q3)("",!0)])])}]])}}]);
//# sourceMappingURL=836.js.map