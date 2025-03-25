"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[65],{65:(i,t,s)=>{s.r(t),s.d(t,{default:()=>b});var n=s(641),a=s(33),l=s(3751),e={id:"music_player"},c={class:"music-player-out-wrap"},o={class:"music-player-wrap"},u={class:"music-right-wrap"},r={class:"music-ope-wrap"},h=["title"],d={class:"music-ope-bar"};var p,y,m,f=s(7688),g=s(950),P=s(664),k=s(4692),L=s.n(k);function v(i){var t=i.split(":");return 60*t[0]+ +t[1]}var w={rondom:function(i,t){!function(i){if(!p){var t=(p=new AudioContext).createMediaElementSource(i);y=p.createAnalyser(),t.connect(y),y.connect(p.destination),y.fftSize=2048;var s=y.frequencyBinCount;m=new Uint8Array(s)}!function i(){if(requestAnimationFrame(i),p){y.getByteFrequencyData(m);for(var t=0;t<s;t++){m[t];var n=m[16*t],a=255-Math.random()*n,l=Math.random()*n,e="rgb(".concat(a,", ").concat(l,", ").concat(120,")");L()(".panel-small").css("background-color",e)}}}()}(i)},loadLrl:function(i){for(var t=i.split("\n"),s=[],n=0;n<t.length;n++){var a=t[n].split("]"),l={time:v(a[0].substring(1)),word:a[1]};s.push(l)}return s},setText:function(i,t){if(0!=i.length&&null!=i)(function(i,t){for(var s=t.currentTime,n=0;n<i.length;n++)if(i[n].time>s)return i[n-1].word})(i,t)}};const x=w;var S=s(7118);const T={name:"MusicPlayer",components:{PopList:f.A.PopList},created:function(){var i=this;this.audio.ontimeupdate=this.musicUpdate,this.audio.onerror=this.musicError,this.audio.oncanplay=this.musicCanplay,this.audio.onended=this.musicEnded,P.A.loadMusicList(S.A.musicIds).then((function(t){i.playList=t})),g.A.registerUnClick("#music_player",(function(){i.showPlay=!1}))},data:function(){return{delayTime:0,audio:new Audio,isPlay:!1,playing:{index:0,title:"音乐播放器",name:"",url:"",pic:""},playList:[],showPlay:!1,lrc:[],cssStyle:{maxTitleWidth:130,titleWidth:130,barMaxWidth:140,barWidth:0,fontSize:"9"}}},computed:{getPicImgStyle:function(){return{background:"url('"+(this.playing.pic?this.playing.pic:"")+"') 0% 0% / 100% no-repeat"}},musicList:function(){return this.playList.map((function(i,t){return{key:i.title,key2:i.author,value:i,index:t}}))}},methods:{musicEnded:function(i){g.A.showInfoMsg("播放结束,自动切换下一首"),this.musicPlayPos()},musicUpdate:function(i){this.cssStyle.barWidth=(this.audio.currentTime/this.audio.duration*this.cssStyle.barMaxWidth).toFixed(0),this.audio.currentTime/this.audio.duration>0&&(document.getElementById("music_player_lrc").textContent=x.getIndex(this.lrc,this.audio),x.setText(this.lrc,this.audio))},musicError:function(i){var t=this;g.A.showInfoMsg("播放失败,5秒后自动切换下一首"),this.delayTime=setTimeout((function(){t.musicPlayPos()}),5e3)},musicCanplay:function(i){},musicState:function(){this.playing.url?(this.isPlay=!this.isPlay,this.isPlay?(this.audio.crossOrigin="anonymous",x.rondom(this.audio),this.audio.play()):this.audio.pause()):this.musicPlayPos()},musicPlayPre:function(){0==this.playing.index?this.musicPlay(this.playList[this.playList.length-1]):this.musicPlay(this.playList[this.playing.index-1])},musicPlayPos:function(){this.playing.index==this.playList.length-1?this.musicPlay(this.playList[0]):this.musicPlay(this.playList[this.playing.index+1])},musicSetInfo:function(i){var t=this;this.playing.url=i.url,this.playing.index=i.index,this.playing.pic=i.pic,this.playing.title=i.title+"["+i.author+"]";var s=g.A.getTextWidth(this.playing.name,this.cssStyle.fontSize);s>this.cssStyle.maxTitleWidth?this.cssStyle.titleWidth=s:this.cssStyle.titleWidth=this.cssStyle.maxTitleWidth,this.$refs.popList.setFlag(i.index),P.A.loadMusicSonglrc(i.lrc).then((function(i){t.lrc=x.loadLrl(i)}))},musicPlay:function(i){try{this.audio.crossOrigin="anonymous",this.audio.src=i.url,x.rondom(this.audio),this.audio.play(),this.musicSetInfo(i),this.isPlay=!0,this.delayTime>0&&(clearTimeout(this.delayTime),this.delayTime=0)}catch(i){this.musicError()}},clickItem:function(i){this.musicPlay(i)}}};const b=(0,s(6262).A)(T,[["render",function(i,t,s,p,y,m){var f=(0,n.g2)("pop-list");return(0,n.uX)(),(0,n.CE)("div",e,[(0,n.Lk)("div",c,[(0,n.Lk)("div",o,[(0,n.Lk)("div",{class:(0,a.C4)(["music-img-wrap",{Rotation:i.isPlay}])},[(0,n.Lk)("div",{class:"div-img head-music-pic",style:(0,a.Tr)(m.getPicImgStyle)},null,4)],2),(0,n.Lk)("div",u,[(0,n.Lk)("div",r,[(0,n.Lk)("div",{class:"music-title",style:(0,a.Tr)({width:i.cssStyle.titleWidth+"px"}),title:i.playing.title},[(0,n.Lk)("div",{class:(0,a.C4)(["music-display-info sing-ellipsis",{marquee:i.isPlay}]),style:(0,a.Tr)({width:i.cssStyle.titleWidth-5+"px"})},(0,a.v_)(i.playing.title),7),(0,n.bo)((0,n.Lk)("div",{class:(0,a.C4)(["music-display-info sing-ellipsis",{marqueeT:i.isPlay}]),style:(0,a.Tr)({width:i.cssStyle.titleWidth-5+"px"})},(0,a.v_)(i.playing.title),7),[[l.aG,i.isPlay]])],12,h),(0,n.Lk)("div",d,[(0,n.Lk)("span",{class:"pre",onClick:t[0]||(t[0]=function(){return m.musicPlayPre&&m.musicPlayPre.apply(m,arguments)})},t[4]||(t[4]=[(0,n.Lk)("span",{class:"icon iconfont angle-double-left"},null,-1)])),(0,n.Lk)("span",{class:"play",onClick:t[1]||(t[1]=function(){return m.musicState&&m.musicState.apply(m,arguments)})},[(0,n.Lk)("span",{class:(0,a.C4)(["icon iconfont",{timeout:!i.isPlay,play1:i.isPlay}])},null,2)]),(0,n.Lk)("span",{class:"pos",onClick:t[2]||(t[2]=function(){return m.musicPlayPos&&m.musicPlayPos.apply(m,arguments)})},t[5]||(t[5]=[(0,n.Lk)("span",{class:"icon iconfont angle-double-right"},null,-1)]))])]),t[6]||(t[6]=(0,n.Lk)("div",{class:"music-volume-wrap"},[(0,n.Lk)("span",{class:"icon iconfont volume-"})],-1)),(0,n.Lk)("div",{class:"music-progress",style:(0,a.Tr)({width:i.cssStyle.barWidth+"px"})},null,4)]),(0,n.Lk)("div",{class:"music-list-wrap",onClick:t[3]||(t[3]=function(t){return i.showPlay=!i.showPlay})},t[7]||(t[7]=[(0,n.Lk)("span",{class:"icon iconfont headphones"},null,-1)]))]),t[8]||(t[8]=(0,n.Lk)("div",{class:"music-player-shade"},null,-1)),(0,n.bF)(l.eB,{name:"trans"},{default:(0,n.k6)((function(){return[(0,n.bo)((0,n.bF)(f,{class:"pop-list",ref:"popList","pop-list":m.musicList,"pop-title":"音乐列表",flag:!0,onClickItem:m.clickItem},null,8,["pop-list","onClickItem"]),[[l.aG,i.showPlay]])]})),_:1})]),t[9]||(t[9]=(0,n.Lk)("div",{id:"music_player_lrc"},null,-1))])}]])}}]);
//# sourceMappingURL=65.js.map