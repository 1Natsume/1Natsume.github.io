"use strict";
(self["webpackChunkblog"] = self["webpackChunkblog"] || []).push([[349],{

/***/ 8349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Pagination)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(641);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(33);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/components/common/Pagination.vue?vue&type=template&id=1cfad41e

var _hoisted_1 = {
  id: "pagination"
};
var _hoisted_2 = {
  "class": "post-comment-num"
};
var _hoisted_3 = {
  "class": "pagination"
};
var _hoisted_4 = ["onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("ul", _hoisted_3, [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)(_ctx.pageList, function (item) {
    return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("li", {
      onClick: function onClick($event) {
        return !isNaN(item) && item != $props.pageCur ? _ctx.$emit('clickPage', item) : '';
      }
    }, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("a", {
      "class": (0,shared_esm_bundler/* normalizeClass */.C4)(item == $props.pageCur ? 'active' : '')
    }, (0,shared_esm_bundler/* toDisplayString */.v_)(item), 3)], 8, _hoisted_4);
  }), 256))])])]);
}
;// ./src/components/common/Pagination.vue?vue&type=template&id=1cfad41e

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!./node_modules/vue-loader/dist/index.js??ruleSet[0]!./src/components/common/Pagination.vue?vue&type=script&lang=js
/* harmony default export */ const Paginationvue_type_script_lang_js = ({
  name: "PaginaTion",
  props: {
    pageSize: {
      "default": 0
    },
    pageCur: {
      "default": 0
    },
    maxPage: {
      "default": 0
    }
  },
  data: function data() {
    return {
      pageList: []
    };
  },
  watch: {
    pageSize: function pageSize() {
      this.initPageList();
    },
    pageCur: function pageCur() {
      this.initPageList();
    },
    maxPage: function maxPage() {
      this.initPageList();
    }
  },
  created: function created() {
    this.initPageList();
  },
  methods: {
    initPageList: function initPageList() {
      this.pageList = this.computePageList(parseInt(this.pageSize), parseInt(this.pageCur), parseInt(this.maxPage));
    },
    computePageList: function computePageList(pageSize, pageCur, maxPage) {
      if (pageSize <= maxPage) {
        /*页数少于等于10页*/
        return Array.from(Array(pageSize), function (v, k) {
          return k + 1;
        });
      } else if (pageCur <= maxPage / 2 + 1) {
        /*前10页*/
        var arr = Array.from(Array(maxPage), function (v, k) {
          return k + 1;
        });
        arr.push("...");
        arr.push(pageSize);
        return arr;
      } else if (pageSize - pageCur <= maxPage / 2 + 1) {
        /*后10页*/
        var _arr = Array.from(Array(maxPage), function (v, k) {
          return pageSize - maxPage + k + 1;
        });
        _arr.unshift("...");
        _arr.unshift(1);
        return _arr;
      } else {
        /*中间页*/
        var _arr2 = Array.from(Array(maxPage), function (v, k) {
          return pageCur - maxPage / 2 + k + 1;
        });
        _arr2.unshift("...");
        _arr2.unshift(1);
        _arr2.push("...");
        _arr2.push(pageSize);
        return _arr2;
      }
    }
  }
});
;// ./src/components/common/Pagination.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(6262);
;// ./src/components/common/Pagination.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(Paginationvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const Pagination = (__exports__);

/***/ })

}]);
//# sourceMappingURL=349.js.map