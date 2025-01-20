"use strict";
(self["webpackChunkblog"] = self["webpackChunkblog"] || []).push([[522],{

/***/ 664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ BlogApi)
});

// EXTERNAL MODULE: ./src/context/BlogContext.js + 5 modules
var BlogContext = __webpack_require__(7118);
// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(4692);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(1083);
;// ./src/utils/request.js

var access_token = 'AEB65EDA8CA9D962C1379033EF864662A06E3E7E5504CFB7C685B8EFD76FBEB2';
// 创建一个 axios 实例

var service = axios/* default */.A.create({
  //baseURL: apibaseurl, // 基础 URL，可以通过环境变量设置

  timeout: 5000 // 请求超时时间
});

// 请求拦截器

service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么

  // 比如在请求头中添加 token

  config.headers["Authorization"] = "Bearer " + access_token;
  return config;
}, function (error) {
  // 对请求错误做些什么

  return Promise.reject(error);
});

// 响应拦截器

service.interceptors.response.use(function (response) {
  // 对响应数据做些什么
  return response.data;
}, function (error) {
  // 对响应错误做些什么

  return Promise.reject(error);
});
/* harmony default export */ const request = (service);
;// ./src/utils/BlogApi.js



var blogApi = {
  /*音乐播放器API*/
  loadMusicSong: function loadMusicSong(id) {
    return BlogContext/* default */.A.apiLoadMusicSong((jquery_default()), {
      id: id
    }, BlogContext/* default */.A.musicApiUrl.replace(":type", "song").replace(":id", id).replace(":r", Math.random()));
  },
  loadMusicSonglrc: function loadMusicSonglrc(url) {
    return request.get(url).then(function (res) {
      return res;
    });
  },
  loadMusicPlayList: function loadMusicPlayList(id) {
    return BlogContext/* default */.A.apiLoadMusicPlayList((jquery_default()), {
      id: id
    }, BlogContext/* default */.A.musicApiUrl.replace(":type", "playlist").replace(":id", id).replace(":r", Math.random()));
  },
  loadMusicSongExt: function loadMusicSongExt() {
    return new Promise(function (oubresolve, oubreject) {
      var proArr = [];
      BlogContext/* default */.A.musicIds.forEach(function (item) {
        proArr.push(new Promise(function (resolve, reject) {
          blogApi.loadMusicSong(item).then(function (data) {
            resolve(data);
          });
        }));
      });
      Promise.all(proArr).then(function (list) {
        oubresolve(list);
      });
    });
  },
  loadMusicPlayListExt: function loadMusicPlayListExt() {
    return new Promise(function (oubresolve, oubreject) {
      blogApi.loadMusicPlayList(BlogContext/* default */.A.musicIds).then(function (list) {
        oubresolve(list);
      });
    });
  },
  parseMusicInterface: function parseMusicInterface(list) {
    var reData = [];
    list.forEach(function (item, index) {
      item = item[0] || item;
      reData.push({
        index: index,
        pic: item.pic,
        author: item.author,
        title: item.title,
        url: item.url,
        lrc: item.lrc
      });
    });
    return reData;
  },
  loadMusicList: function loadMusicList() {
    var promis;
    if (Array.isArray(BlogContext/* default */.A.musicIds)) {
      promis = blogApi.loadMusicPlayListExt();
    } else {
      promis = blogApi.loadMusicSongExt();
    }
    return new Promise(function (resolve, reject) {
      promis.then(function (list) {
        resolve(blogApi.parseMusicInterface(list));
      });
    });
  },
  loadArticleNum: function loadArticleNum() {
    return BlogContext/* default */.A.apiLoadArticleNum((jquery_default()), {
      blogAcc: BlogContext/* default */.A.blogAcc
    }, "/" + BlogContext/* default */.A.blogAcc + "/ajax/blogStats/");
  },
  loadBlogPostInfo: function loadBlogPostInfo(pageId) {
    return BlogContext/* default */.A.apiLoadBlogPostInfo((jquery_default()), {
      blogAcc: BlogContext/* default */.A.blogAcc,
      blogId: BlogContext/* default */.A.blogId,
      pageId: pageId,
      blogUserGuid: BlogContext/* default */.A.blogUserGuid
    }, "/" + BlogContext/* default */.A.blogAcc + "/ajax/BlogPostInfo.aspx?blogId=" + BlogContext/* default */.A.blogId + "&postId=" + pageId + "&blogUserGuid=" + BlogContext/* default */.A.blogUserGuid);
  },
  loadAuthorHeadImg: function loadAuthorHeadImg() {
    return BlogContext/* default */.A.apiLoadAuthorHeadImg((jquery_default()), {
      blogAcc: BlogContext/* default */.A.blogAcc,
      blogId: BlogContext/* default */.A.blogId,
      postId: BlogContext/* default */.A.blogPostId,
      blogUserGuid: BlogContext/* default */.A.blogUserGuid
    }, "/" + BlogContext/* default */.A.blogAcc + "/ajax/BlogPostInfo.aspx?blogId=" + BlogContext/* default */.A.blogId + "&postId=" + BlogContext/* default */.A.blogPostId + "&blogUserGuid=" + BlogContext/* default */.A.blogUserGuid);

    // return request.get("/api/users").then((res) => {
    //   return {
    //     face: res["Face"],
    //     avatar: res["Avatar"],
    //   };
    // });
  },
  loadCloudLabel: function loadCloudLabel() {
    return BlogContext/* default */.A.apiLoadCloudLabel((jquery_default()), {
      blogAcc: BlogContext/* default */.A.blogAcc
    }, "/" + BlogContext/* default */.A.blogAcc + "/tag/");
  },
  loadAuthorBlogInfo: function loadAuthorBlogInfo() {
    return BlogContext/* default */.A.apiLoadAuthorBlogInfo((jquery_default()), {
      blogAcc: BlogContext/* default */.A.blogAcc
    }, "/" + BlogContext/* default */.A.blogAcc + "/ajax/news");
    return request.get("/api/users").then(function (res) {
      return {
        username: res["DisplayName"],
        age: res["Seniority"],
        follow: res["FollowerCount"],
        focus: res["FollowingCount"]
      };
    });
  },
  blogFollow: function blogFollow() {
    return BlogContext/* default */.A.apiBlogFollow((jquery_default()), {
      blogAcc: BlogContext/* default */.A.blogAcc,
      blogUserGuid: BlogContext/* default */.A.blogUserGuid
    }, "/" + BlogContext/* default */.A.blogAcc + "/ajax/Follow/FollowBlogger.aspx");
  },
  getCommentBody: function getCommentBody(commentId) {
    return BlogContext/* default */.A.apiGetCommentBody((jquery_default()), {
      blogAcc: BlogContext/* default */.A.blogAcc,
      blogUserGuid: BlogContext/* default */.A.blogUserGuid,
      commentId: commentId
    }, "/" + BlogContext/* default */.A.blogAcc + "/ajax/comment/GetCommentBody.aspx");
  },
  addComment: function addComment(postId, body, parentCommentId) {
    postId = parseInt(postId);
    parentCommentId = parentCommentId ? parseInt(parentCommentId) : 0;
    return BlogContext/* default */.A.apiAddComment((jquery_default()), {
      blogAcc: BlogContext/* default */.A.blogAcc,
      postId: postId,
      body: body,
      parentCommentId: parentCommentId
    }, "/" + BlogContext/* default */.A.blogAcc + "/ajax/PostComment/Add.aspx");
    var data = {
      body: body
    };
    return request.post("/api/blogs/newjersey/posts/" + postId + "/comments", data);
  },
  /*更新评论*/
  updateComment: function updateComment(commentId, body) {
    return BlogContext/* default */.A.apiUpdateComment((jquery_default()), {
      blogAcc: BlogContext/* default */.A.blogAcc,
      commentId: commentId,
      body: body
    }, "/" + BlogContext/* default */.A.blogAcc + "/ajax/PostComment/Update.aspx");
  },
  deleteComment: function deleteComment(commentId, pageIndex, parentId) {
    return BlogContext/* default */.A.apiDeleteComment((jquery_default()), {
      blogAcc: BlogContext/* default */.A.blogAcc,
      commentId: parseInt(commentId),
      pageIndex: pageIndex,
      parentId: parentId
    }, "/" + BlogContext/* default */.A.blogAcc + "/ajax/comment/DeleteComment.aspx");
  },
  diggComment: function diggComment(postId, commentId, isAbandoned) {
    return BlogContext/* default */.A.apiDiggComment((jquery_default()), {
      blogAcc: BlogContext/* default */.A.blogAcc,
      commentId: parseInt(commentId),
      isAbandoned: isAbandoned,
      postId: parseInt(postId),
      voteType: "Digg"
    }, "/" + BlogContext/* default */.A.blogAcc + "/ajax/vote/comment");
  },
  buryComment: function buryComment(postId, commentId, isAbandoned) {
    return BlogContext/* default */.A.apiBuryComment((jquery_default()), {
      blogAcc: BlogContext/* default */.A.blogAcc,
      commentId: parseInt(commentId),
      isAbandoned: isAbandoned,
      postId: parseInt(postId),
      voteType: "Bury"
    }, "/" + BlogContext/* default */.A.blogAcc + "/ajax/vote/comment");
  },
  voteBlogPost: function voteBlogPost(postId, isAbandoned) {
    return BlogContext/* default */.A.apiVoteBlogPost((jquery_default()), {
      blogAcc: BlogContext/* default */.A.blogAcc,
      isAbandoned: isAbandoned,
      postId: parseInt(postId),
      voteType: "Digg"
    }, "/" + BlogContext/* default */.A.blogAcc + "/ajax/vote/blogpost");
  },
  buryBlogPost: function buryBlogPost(postId, isAbandoned) {
    return BlogContext/* default */.A.apiBuryBlogPost((jquery_default()), {
      blogAcc: BlogContext/* default */.A.blogAcc,
      isAbandoned: isAbandoned,
      postId: postId,
      voteType: "Bury"
    }, "/" + BlogContext/* default */.A.blogAcc + "/ajax/vote/blogpost");
  },
  loadCommentList: function loadCommentList(articleId, page) {
    return new Promise(function (resolve, reject) {
      BlogContext/* default */.A.apiLoadCommentList((jquery_default()), {
        blogAcc: BlogContext/* default */.A.blogAcc,
        postId: articleId,
        pageIndex: page
      }, "/" + BlogContext/* default */.A.blogAcc + "/ajax/comments-block?postId=" + articleId + "&pageIndex=" + page).then(function (obj) {
        if (!obj.avatarUrl && !obj.avatarHdUrl) {
          obj.avatarUrl = BlogContext/* default */.A.defHeadImg;
          obj.avatarHdUrl = BlogContext/* default */.A.defHeadImg;
        }
        resolve(obj);
      });
    });
  },
  loadCategoriesTags: function loadCategoriesTags(articleId) {
    return BlogContext/* default */.A.apiLoadCategoriesTags((jquery_default()), {
      blogAcc: BlogContext/* default */.A.blogAcc,
      blogId: BlogContext/* default */.A.blogId,
      postId: articleId
    }, "/" + BlogContext/* default */.A.blogAcc + "/ajax/CategoriesTags.aspx?blogId=" + BlogContext/* default */.A.blogId + "&postId=" + articleId);
  },
  loadCommentCount: function loadCommentCount(articleId) {
    return BlogContext/* default */.A.apiLoadCommentCount((jquery_default()), {
      blogAcc: BlogContext/* default */.A.blogAcc,
      postId: articleId
    }, "/" + BlogContext/* default */.A.blogAcc + "/ajax/GetCommentCount.aspx?postId=" + articleId);
  },
  loadViewCount: function loadViewCount(articleId) {
    return BlogContext/* default */.A.apiLoadViewCount((jquery_default()), {
      blogAcc: BlogContext/* default */.A.blogAcc,
      postId: articleId
    }, "/" + BlogContext/* default */.A.blogAcc + "/ajax/GetViewCount.aspx?postId=" + articleId);
  },
  loadArticle: function loadArticle(articleId) {
    return BlogContext/* default */.A.apiLoadArticle((jquery_default()), {
      blogAcc: BlogContext/* default */.A.blogAcc,
      articleId: articleId
    }, "/" + BlogContext/* default */.A.blogAcc + "/p/" + articleId);
    return request.get("/api/blogposts/" + articleId + "/body").then(function (res) {
      return {
        body: res
      };
    });
  },
  loadTagList: function loadTagList(tagId, pageNum) {
    return BlogContext/* default */.A.apiLoadTagList((jquery_default()), {
      blogAcc: BlogContext/* default */.A.blogAcc,
      tagId: tagId,
      page: pageNum
    }, "/" + BlogContext/* default */.A.blogAcc + "/tag/" + tagId + "/?page=" + pageNum);
  },
  loadArchiveList: function loadArchiveList(archiveId, pageNum) {
    return BlogContext/* default */.A.apiLoadArchiveList((jquery_default()), {
      blogAcc: BlogContext/* default */.A.blogAcc,
      archiveId: archiveId,
      pageNum: pageNum
    }, "/" + BlogContext/* default */.A.blogAcc + "/archive/" + archiveId + ".html?page=" + pageNum);
  },
  loadCategoryList: function loadCategoryList(categoryId, pageNum) {
    return BlogContext/* default */.A.apiLoadCategoryList((jquery_default()), {
      blogAcc: BlogContext/* default */.A.blogAcc,
      categoryId: categoryId,
      pageNum: pageNum
    }, "/" + BlogContext/* default */.A.blogAcc + "/category/" + categoryId + ".html?page=" + pageNum);
  },
  loadPrevnext: function loadPrevnext(pageId) {
    return BlogContext/* default */.A.apiLoadPrevnext((jquery_default()), {
      blogAcc: BlogContext/* default */.A.blogAcc,
      postId: pageId
    }, "/" + BlogContext/* default */.A.blogAcc + "/ajax/post/prevnext?postId=" + pageId);
  },
  loadDefaultCategoryList: function loadDefaultCategoryList(pageNum) {
    return BlogContext/* default */.A.apiLoadDefaultCategoryList((jquery_default()), {
      blogAcc: BlogContext/* default */.A.blogAcc,
      page: pageNum
    }, "/" + BlogContext/* default */.A.blogAcc + "/default.html?page=" + pageNum);
    var list = [];
    return request.get("/api/blogs/newjersey/posts?pageIndex=" + pageNum).then(function (res) {
      res.forEach(function (item) {
        var obj = {};
        obj.pageId = item["Id"];
        obj.title = item["Title"];
        obj.url = item["Url"];
        obj.desc = item["Description"];
        obj.time = item["PostDate"];
        obj.readNum = item["ViewCount"];
        obj.commentNum = item["CommentCount"];
        obj.recommendNum = item["DiggCount"];
        obj.editUrl = item["Url"];
        list.push(obj);
      });
      return {
        list: list
      };
    });
  },
  loadSideColumn: function loadSideColumn() {
    return BlogContext/* default */.A.apiLoadSideColumn((jquery_default()), {
      blogAcc: BlogContext/* default */.A.blogAcc
    }, "/" + BlogContext/* default */.A.blogAcc + "/ajax/sidecolumn.aspx");
  },
  loadTopLists: function loadTopLists() {
    return BlogContext/* default */.A.apiLoadTopLists((jquery_default()), {
      blogAcc: BlogContext/* default */.A.blogAcc
    }, "/" + BlogContext/* default */.A.blogAcc + "/ajax/TopLists.aspx");
  },
  loadCommitterFaceUrl: function loadCommitterFaceUrl(committerUrl, committerName) {
    var pidSplTmp = committerUrl.split("/");
    var pid = pidSplTmp[pidSplTmp.length - 1].replace(".html", "");
    return BlogContext/* default */.A.apiLoadCommitterFaceUrl((jquery_default()), {
      blogAcc: BlogContext/* default */.A.blogAcc,
      postId: pid
    }, "/" + BlogContext/* default */.A.blogAcc + "/ajax/GetComments.aspx?postId=" + pid + "&pageIndex=0");
  },
  loadBlogTalkShort: function loadBlogTalkShort() {
    return new Promise(function (resolve, reject) {
      blogApi.loadBlogTalk(-1).then(function (res) {
        if (res.cnList.length <= 5) {
          resolve(res.cnList);
          return;
        }
        resolve(res.cnList.slice(5, res.cnList.length));
      });
    });
  },
  loadBlogTalk: function loadBlogTalk(page) {
    return new Promise(function (resolve, reject) {
      blogApi.loadMyCommentList(BlogContext/* default */.A.feelingBlogId, page).then(function (l) {
        resolve({
          cnList: l.list,
          count: l.size,
          pageNum: l.count,
          current: page
        });
      });
    });
  },
  loadMyCommentList: function loadMyCommentList(articleId, page) {
    var list = [];
    return new Promise(function (resolve, reject) {
      var mySize = BlogContext/* default */.A.myCommentSize;
      var blogSize = BlogContext/* default */.A.blogCommentSize;
      var list = [];
      request.get("/newjersey/ajax/comments-block?postId=" + articleId + "&pageIndex=" + page + "&anchorCommentId=0&isDesc=true&order=0&loadCommentBox=false").then(function (res) {
        var maxPage = Math.ceil(res["commentCount"] / mySize);
        page = page == -1 ? maxPage : page;
        var myScale = blogSize / mySize;
        var blogPage = Math.ceil(page / myScale);
        var blogSideLeft = parseInt((page - 1) % myScale) * 10;
        var blogSideRight = parseInt(page % myScale) * 10;
        if (blogSideLeft > blogSideRight) {
          blogSideRight = blogSideLeft + 10;
        }
        var parser = new DOMParser();
        var dom = parser.parseFromString(res["comments"], "text/html").body;
        //console.log(dom.querySelectorAll(".feedbackItem"))
        dom.querySelectorAll(".feedbackItem").forEach(function (v) {
          var obj = {};
          obj.commentId = parseInt(jquery_default()(v).find("[class='layer']").attr("href").replace("#", ""));
          obj.level = jquery_default()(v).find(".layer").html();
          obj.label = jquery_default()(v).find(".louzhu").html() || "";
          obj.date = jquery_default()(v).find(".comment_date").html();
          obj.author = jquery_default()(v).find("[id^='a_comment_author_']").text();
          obj.authorUrl = jquery_default()(v).find("[id^='a_comment_author_']").attr("href");
          obj.desc = jquery_default()(v).find("[id^='comment_body_']").html().replace(new RegExp("_src", "g"), "src").trim();
          obj.digg = jquery_default()(v).find(".comment_digg").length >= 1 ? jquery_default()(v).find(".comment_digg").html().trim().replace("支持(", "").replace(")", "") : undefined;
          obj.burry = jquery_default()(v).find(".comment_burry").length >= 1 ? jquery_default()(v).find(".comment_burry").html().trim().replace("反对(", "").replace(")", "") : undefined;
          obj.avatarUrl = (jquery_default()(v).find("[id^='comment_'][id$='_avatar']").html() || "").trim();
          obj.avatarHdUrl = (jquery_default()(v).find("[id^='comment_'][id$='_avatar']").html() || "").trim().replace("face", "avatar");
          obj.replayBtn = jquery_default()(v).find("[onclick^='return ReplyComment']").length > 0;
          obj.quoteBtn = jquery_default()(v).find("[onclick^='return QuoteComment']").length > 0;
          obj.delBtn = jquery_default()(v).find("[onclick^='return DelComment']").length > 0;
          obj.updateBtn = jquery_default()(v).find("[onclick^='return GetCommentBody']").length > 0;
          list.push(obj);
        });
        resolve({
          list: list.slice(blogSideLeft, blogSideRight),
          count: blogPage,
          size: blogSize,
          current: page
        });
      });
    });
    return request.get("/api/blogs/newjersey/posts/" + articleId + "/comments?pageIndex=" + page + "&pageSize=10").then(function (res) {
      list = [];
      if (res.length == 0) {
        return {
          list: list
        };
      }
      res.forEach(function (item) {
        var obj = {};
        obj.commentId = item["Id"];
        // obj.level = $(v).find(".layer").html();
        // obj.label = $(v).find(".louzhu").html() || "";
        obj.date = item["DateAdded"];
        obj.author = item["Author"];
        obj.authorUrl = item["AuthorUrl"];
        obj.desc = item["Body"];
        obj.digg = undefined;
        obj.burry = undefined;
        obj.avatarUrl = item["FaceUrl"];
        obj.avatarHdUrl = item["FaceUrl"];
        // obj.replayBtn=$(v).find("[onclick^='return ReplyComment']").length>0;
        // obj.quoteBtn=$(v).find("[onclick^='return QuoteComment']").length>0;
        // obj.delBtn=$(v).find("[onclick^='return DelComment']").length>0;
        // obj.updateBtn=$(v).find("[onclick^='return GetCommentBody']").length>0;
        list.push(obj);
      });
      return {
        list: list
      };
    });
  },
  loadBlogs: function loadBlogs() {
    return request.get("/api/blogs/newjersey").then(function (res) {
      console.log(res);
    });
  },
  loadkeywordList: function loadkeywordList(keyword) {
    var list = [];
    request.get("/api/ZzkDocuments/Blog?keyWords=" + keyword + "&pageIndex=1&viewTimesAtLeast=10").then(function (res) {
      res.forEach(function (item) {
        var obj = {};
        obj.Title = item["Title"];
        list.push(obj);
      });
    })["catch"](function (e) {
      list.push(e);
    });
    return {
      list: list
    };
  }

  /*博客园API*/
};
/* harmony default export */ const BlogApi = (blogApi);

/***/ }),

/***/ 6577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ EmojiUtils)
});

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(4692);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);
;// ./src/assets/lib/emoji/jquery.emoji.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }


(function ($, window, document) {
  if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (elt) {
      var len = this.length >>> 0;
      var from = Number(arguments[1]) || 0;
      from = from < 0 ? Math.ceil(from) : Math.floor(from);
      if (from < 0) from += len;
      for (; from < len; from++) {
        if (from in this && this[from] === elt) return from;
      }
      return -1;
    };
  }
  var PLUGIN_NAME = 'emoji',
    VERSION = '1.3.0',
    DEFAULTS = {
      showTab: true,
      animation: 'fade',
      icons: []
    };
  window.emoji_index = 0;
  function Plugin(element, options) {
    this.$content = $(element);
    this.options = options;
    this.index = emoji_index;
    switch (options.animation) {
      case 'none':
        this.showFunc = 'show';
        this.hideFunc = 'hide';
        this.toggleFunc = 'toggle';
        break;
      case 'slide':
        this.showFunc = 'slideDown';
        this.hideFunc = 'slideUp';
        this.toggleFunc = 'slideToggle';
        break;
      case 'fade':
        this.showFunc = 'fadeIn';
        this.hideFunc = 'fadeOut';
        this.toggleFunc = 'fadeToggle';
        break;
      default:
        this.showFunc = 'fadeIn';
        this.hideFunc = 'fadeOut';
        this.toggleFunc = 'fadeToggle';
        break;
    }
    this._init();
  }
  Plugin.prototype = {
    _init: function _init() {
      var that = this;
      var btn = this.options.button;
      var inpCall = this.options.inpCall;
      var newBtn, contentTop, contentLeft, panelTop, panelLeft;
      var ix = that.index;
      if (!btn) {
        newBtn = '<input type="image" class="emoji_btn" id="emoji_btn_' + ix + '" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZBAMAAAA2x5hQAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAkUExURUxpcfTGAPTGAPTGAPTGAPTGAPTGAPTGAPTGAPTGAPTGAPTGAOfx6yUAAAALdFJOUwAzbVQOoYrzwdwkAoU+0gAAAM1JREFUGNN9kK0PQWEUxl8fM24iCYopwi0muuVuzGyKwATFZpJIU01RUG/RBMnHxfz+Oef9uNM84d1+23nO+zxHKVG2WWupRJkdcAwtpCK0lpbqWE01pB0QayonREMoIp7AawQrWSgGGb4pn6dSeSh68FAVXqHqy3wKrkJiDGDTg3dnp//w+WnwlwIOJauF+C7sXRVfdha4O4oIJfTbtdSxs2uqhs585A0ko8iLTMEcDE1n65A+29pYAlr72nz9dKu7GuNTcsL2fDQzB/wCPVJ69nZGb3gAAAAASUVORK5CYII="/>';
        contentTop = this.$content.offset().top + this.$content.outerHeight() + 10;
        contentLeft = this.$content.offset().left + 2;
        $(newBtn).appendTo($('body'));
        $('#emoji_btn_' + ix).css({
          'top': contentTop + 'px',
          'left': contentLeft + 'px'
        });
        btn = '#emoji_btn_' + ix;
      }
      var showTab = this.options.showTab;
      var iconsGroup = this.options.icons;
      var groupLength = iconsGroup.length;
      if (groupLength === 0) {
        alert('Missing icons config!');
        return false;
      }
      var emoji_container = '<div class="emoji_container " id="emoji_container_' + ix + '">';
      var emoji_content = '<div class="emoji_content none-base-scroll">';
      var emoji_tab = '<div class="emoji_tab" style="' + (groupLength === 1 && !showTab ? 'display:none;' : '') + '"><div class="emoji_tab_prev"></div><div class="emoji_tab_list"><ul>';
      var panel, name, path, maxNum, excludeNums, file, placeholder, alias, title, index, notation;
      for (var i = 0; i < groupLength; i++) {
        name = iconsGroup[i].name || 'group' + (i + 1);
        path = iconsGroup[i].path;
        maxNum = iconsGroup[i].maxNum;
        excludeNums = iconsGroup[i].excludeNums;
        file = iconsGroup[i].file || '.jpg';
        placeholder = iconsGroup[i].placeholder || '#em' + (i + 1) + '_{alias}#';
        alias = iconsGroup[i].alias;
        title = iconsGroup[i].title;
        index = 0;
        if (!path || !maxNum) {
          alert('The ' + i + ' index of icon groups has error config!');
          continue;
        }
        panel = '<div id="emoji' + i + '" class="emoji_icons" style="' + (i === 0 ? '' : 'display:none;') + '"><ul>';
        for (var j = 1; j <= maxNum; j++) {
          if (excludeNums && excludeNums.indexOf(j) >= 0) {
            continue;
          }
          if (alias) {
            if (_typeof(alias) !== 'object') {
              alert('Error config about alias!');
              break;
            }
            notation = placeholder.replace(new RegExp('{alias}', 'gi'), alias[j].toString());
          } else {
            notation = placeholder.replace(new RegExp('{alias}', 'gi'), j.toString());
          }
          panel += '<li><a data-emoji_code="' + notation + '" data-index="' + index + '" title="' + (title && title[j] ? title[j] : '') + '"><img src="' + path + j + file + '"/></a></li>';
          index++;
        }
        panel += '</ul></div>';
        emoji_content += panel;
        emoji_tab += '<li data-emoji_tab="emoji' + i + '" class="' + (i === 0 ? 'selected' : '') + '" title="' + name + '">' + name + '</li>';
      }
      emoji_content += '</div>';
      emoji_tab += '</ul></div><div class="emoji_tab_next"></div></div>';
      var emoji_preview = '<div class="emoji_preview"><img/></div>';
      emoji_container += emoji_content;
      emoji_container += emoji_tab;
      emoji_container += emoji_preview;
      $(emoji_container).appendTo(btn);

      // calc panel width
      var panelWidth = '544px';
      var winWidth = $(window).width();
      if (winWidth < 544) {
        switch (this.options.position) {
          case 'topLeft':
          case 'bottomLeft':
            panelWidth = winWidth - $(btn).offset().right * 2 + 'px';
            break;
          default:
            panelWidth = winWidth - $(btn).offset().left * 2 + 'px';
        }
      }
      $('#emoji_container_' + ix).css('width', panelWidth);
      $('#emoji_container_' + ix + ' .emoji_tab_list').css('width', parseInt(panelWidth) - 44 + 'px');

      // calc panel position
      switch (this.options.position) {
        case 'topLeft':
          panelTop = $(btn).offset().top - $('#emoji_container_' + ix).outerHeight() - 5;
          panelLeft = $(btn).offset().left - $('#emoji_container_' + ix).outerWidth() + $(btn).outerHeight();
          break;
        case 'topRight':
          panelTop = $(btn).offset().top - $('#emoji_container_' + ix).outerHeight() - 5;
          panelLeft = $(btn).offset().left;
          break;
        case 'bottomLeft':
          panelTop = $(btn).offset().top + $(btn).outerHeight() + 5;
          panelLeft = $(btn).offset().left - $('#emoji_container_' + ix).outerWidth() + $(btn).outerHeight();
          break;
        default:
          panelTop = $(btn).offset().top + $(btn).outerHeight() + 5;
          panelLeft = $(btn).offset().left;
      }
      //$('#emoji_container_' + ix).css({'top': panelTop + 'px', 'left': panelLeft + 'px'});

      var pageCount = groupLength % 8 === 0 ? parseInt(groupLength / 8) : parseInt(groupLength / 8) + 1;
      var pageIndex = 1;
      $(document).on({
        'click': function click(e) {
          var target = e.target;
          var field = that.$content[0];
          var code, tab, imgSrc, insertHtml;
          if (target === $(btn)[0]) {
            $('#emoji_container_' + ix)[that.toggleFunc]();
            that.$content.focus();
          } else if ($(target).parents('#emoji_container_' + ix).length > 0) {
            code = $(target).data('emoji_code') || $(target).parent().data('emoji_code');
            tab = $(target).data('emoji_tab');
            if (code) {
              if (field.nodeName === 'DIV') {
                imgSrc = $('#emoji_container_' + ix + ' a[data-emoji_code="' + code + '"] img').attr('src');
                insertHtml = '<img class="emoji_icon" src="' + imgSrc + '"/>';
                that._insertAtCursor(inpCall, field, insertHtml, false);
              } else {
                that._insertAtCursor(inpCall, field, code);
              }
              that.hide();
            } else if (tab) {
              if (!$(target).hasClass('selected')) {
                $('#emoji_container_' + ix + ' .emoji_icons').hide();
                $('#emoji_container_' + ix + ' #' + tab).show();
                $(target).addClass('selected').siblings().removeClass('selected');
              }
            } else if ($(target).hasClass('emoji_tab_prev')) {
              if (pageIndex > 1) {
                $('#emoji_container_' + ix + ' .emoji_tab_list ul').css('margin-left', '-503' * (pageIndex - 2) + 'px');
                pageIndex--;
              }
            } else if ($(target).hasClass('emoji_tab_next')) {
              if (pageIndex < pageCount) {
                $('#emoji_container_' + ix + ' .emoji_tab_list ul').css('margin-left', '-503' * pageIndex + 'px');
                pageIndex++;
              }
            }
            that.$content.focus();
          } else if ($('#emoji_container_' + ix + ':visible').length > 0) {
            that.hide();
            that.$content.focus();
          }
        }
      });
      $('#emoji_container_' + ix + ' .emoji_icons a').mouseenter(function () {
        var index = $(this).data('index');
        if (parseInt(index / 5) % 2 === 0) {
          $('#emoji_container_' + ix + ' .emoji_preview').css({
            'left': 'auto',
            'right': 0
          });
        } else {
          $('#emoji_container_' + ix + ' .emoji_preview').css({
            'left': 0,
            'right': 'auto'
          });
        }
        var src = $(this).find('img').attr('src');
        $('#emoji_container_' + ix + ' .emoji_preview img').attr('src', src).parent().show();
      });
      $('#emoji_container_' + ix + ' .emoji_icons a').mouseleave(function () {
        $('#emoji_container_' + ix + ' .emoji_preview img').removeAttr('src').parent().hide();
      });
    },
    _insertAtCursor: function _insertAtCursor(inpCall, field, value, selectPastedContent) {
      var sel, range;
      if (field.nodeName === 'DIV') {
        field.focus();
        if (window.getSelection) {
          sel = window.getSelection();
          if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            var el = document.createElement('div');
            el.innerHTML = value;
            var frag = document.createDocumentFragment(),
              node,
              lastNode;
            while (node = el.firstChild) {
              lastNode = frag.appendChild(node);
            }
            var firstNode = frag.firstChild;
            range.insertNode(frag);
            if (lastNode) {
              range = range.cloneRange();
              range.setStartAfter(lastNode);
              if (selectPastedContent) {
                range.setStartBefore(firstNode);
              } else {
                range.collapse(true);
              }
              sel.removeAllRanges();
              sel.addRange(range);
            }
          }
        } else if ((sel = document.selection) && sel.type !== 'Control') {
          var originalRange = sel.createRange();
          originalRange.collapse(true);
          sel.createRange().pasteHTML(value);
          if (selectPastedContent) {
            range = sel.createRange();
            range.setEndPoint('StartToStart', originalRange);
            range.select();
          }
        }
      } else {
        if (document.selection) {
          field.focus();
          sel = document.selection.createRange();
          sel.text = value;
          sel.select();
        } else if (field.selectionStart || field.selectionStart === 0) {
          var startPos = field.selectionStart;
          var endPos = field.selectionEnd;
          var restoreTop = field.scrollTop;
          field.value = field.value.substring(0, startPos) + value + field.value.substring(endPos, field.value.length);
          if (restoreTop > 0) {
            field.scrollTop = restoreTop;
          }
          field.focus();
          field.selectionStart = startPos + value.length;
          field.selectionEnd = startPos + value.length;
        } else {
          field.value += value;
          field.focus();
        }
      }
      inpCall ? inpCall(field.value) : '';
    },
    show: function show() {
      $('#emoji_container_' + this.index)[this.showFunc]();
    },
    hide: function hide() {
      $('#emoji_container_' + this.index)[this.hideFunc]();
    },
    toggle: function toggle() {
      $('#emoji_container_' + this.index)[this.toggleFunc]();
    }
  };
  function fn(option) {
    emoji_index++;
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('plugin_' + PLUGIN_NAME + emoji_index);
      var options = $.extend({}, DEFAULTS, $this.data(), _typeof(option) === 'object' && option);
      if (!data) $this.data('plugin_' + PLUGIN_NAME + emoji_index, data = new Plugin(this, options));
      if (typeof option === 'string') data[option]();
    });
  }
  $.fn[PLUGIN_NAME] = fn;
  $.fn[PLUGIN_NAME].Constructor = Plugin;
})((jquery_default()), window, document);
(function ($, window, document) {
  var PLUGIN_NAME = 'emojiParse',
    VERSION = '1.3.0',
    DEFAULTS = {
      icons: []
    };
  function Plugin(element, options) {
    this.$content = $(element);
    this.options = options;
    this._init();
  }
  Plugin.prototype = {
    _init: function _init() {
      var that = this;
      var iconsGroup = this.options.icons;
      var groupLength = iconsGroup.length;
      var path,
        file,
        placeholder,
        alias,
        pattern,
        regexp,
        revertAlias = {};
      if (groupLength > 0) {
        for (var i = 0; i < groupLength; i++) {
          path = iconsGroup[i].path;
          file = iconsGroup[i].file || '.jpg';
          placeholder = iconsGroup[i].placeholder;
          alias = iconsGroup[i].alias;
          if (!path) {
            alert('Path not config!');
            continue;
          }
          if (alias) {
            for (var attr in alias) {
              if (alias.hasOwnProperty(attr)) {
                revertAlias[alias[attr]] = attr;
              }
            }
            pattern = placeholder.replace(new RegExp('{alias}', 'gi'), '([\\s\\S]+?)');
            try {
              regexp = new RegExp(pattern, 'gm');
            } catch (e) {
              return that.$content.html();
            }
            that.$content.html(that.$content.html().replace(regexp, function ($0, $1) {
              var n = revertAlias[$1];
              if (n) {
                return '<img class="emoji_icon" src="' + path + n + file + '"/>';
              } else {
                return $0;
              }
            }));
          } else {
            pattern = placeholder.replace(new RegExp('{alias}', 'gi'), '(\\d+?)');
            that.$content.html(that.$content.html().replace(new RegExp(pattern, 'gm'), '<img class="emoji_icon" src="' + path + '$1' + file + '"/>'));
          }
        }
      }
    }
  };
  function fn(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('plugin_' + PLUGIN_NAME);
      var options = $.extend({}, DEFAULTS, $this.data(), _typeof(option) === 'object' && option);
      if (!data) $this.data('plugin_' + PLUGIN_NAME, data = new Plugin(this, options));
      if (typeof option === 'string') data[option]();
    });
  }
  $.fn[PLUGIN_NAME] = fn;
  $.fn[PLUGIN_NAME].Constructor = Plugin;
})((jquery_default()), window, document);
/* harmony default export */ const jquery_emoji = ((jquery_default()));
// EXTERNAL MODULE: ./src/context/BlogContext.js + 5 modules
var BlogContext = __webpack_require__(7118);
;// ./src/utils/EmojiUtils.js


var emojiOption = function emojiOption(btnDom, inpCall) {
  return {
    showTab: true,
    animation: 'fade',
    button: btnDom,
    inpCall: inpCall,
    icons: BlogContext/* default */.A.faceIcon
  };
};
/* harmony default export */ const EmojiUtils = ({
  initTextArea: function initTextArea(textAreaId, btnDom, inpCall) {
    jquery_emoji("#" + textAreaId).emoji(emojiOption(btnDom, inpCall));
  },
  parseText: function parseText(sourceText) {
    var dom = jquery_emoji("<span>" + sourceText + "</span>");
    dom.emojiParse(emojiOption());
    var reStr = dom.html();
    dom.remove();
    return reStr;
  }
});

/***/ })

}]);
//# sourceMappingURL=522.js.map