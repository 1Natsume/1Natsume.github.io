"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[483],{483:(t,e,r)=>{r.r(e),r.d(e,{default:()=>u});var n=r(641),o={id:"article_pre_pos"};r(950);var s=r(664);const i={props:{articleId:{default:-1}},data:function(){return{prePos:{}}},name:"ArticlePrePos",methods:{initPrePos:function(){var t=this;s.A.loadPrevnext(this.articleId).then((function(e){t.prePos=e}))}},created:function(){this.initPrePos()},watch:{articleId:function(){this.initPrePos()}}};const u=(0,r(6262).A)(i,[["render",function(t,e,r,s,i,u){var c=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("div",o,[t.prePos.preId?((0,n.uX)(),(0,n.Wv)(c,{key:0,class:"post-turning-pre",to:t.VUE_CTX+"/subject/p/"+t.prePos.preId+".html"},{default:(0,n.k6)((function(){return e[0]||(e[0]=[(0,n.eW)("上一篇")])})),_:1},8,["to"])):(0,n.Q3)("",!0),t.prePos.posId?((0,n.uX)(),(0,n.Wv)(c,{key:1,class:"post-turning-pos",to:t.VUE_CTX+"/subject/p/"+t.prePos.posId+".html"},{default:(0,n.k6)((function(){return e[1]||(e[1]=[(0,n.eW)("下一篇")])})),_:1},8,["to"])):(0,n.Q3)("",!0)])}]])}}]);
//# sourceMappingURL=483.js.map