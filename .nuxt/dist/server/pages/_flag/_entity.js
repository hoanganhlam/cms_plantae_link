exports.ids = [1];
exports.modules = {

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Entity.vue?vue&type=template&id=036f2a4e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mb-1"},[_vm._ssrNode("<div class=\"flex mb-1 items-center\" data-v-036f2a4e>","</div>",[_vm._ssrNode("<div class=\"flex items-center flex-col leading-none w-5 h-5 cursor-pointer\" data-v-036f2a4e><span data-v-036f2a4e>"+_vm._ssrEscape(_vm._s(_vm.expanded || _vm.entity.taxonomy !== 'species' ? '-' : '+'))+"</span></div> <div class=\"w-5 mx-2\" data-v-036f2a4e>"+((_vm.entity.media)?("<img"+(_vm._ssrAttr("src",_vm.entity.media.sizes['thumb_24_24']))+" alt class=\"rounded\" data-v-036f2a4e>"):("<div class=\"border p-1\" data-v-036f2a4e><img src=\"/plant.svg\" alt data-v-036f2a4e></div>"))+"</div> "),_vm._ssrNode("<div class=\"flex-1\" data-v-036f2a4e>","</div>",[_vm._ssrNode("<h4 class=\"font-bold text-sm\" data-v-036f2a4e>","</h4>",[_c('n-link',{attrs:{"to":("/" + (_vm.entity.taxonomy) + "/" + (_vm.entity.term.slug))}},[_vm._v(_vm._s(_vm.entity.term.title))])],1)])],2),_vm._ssrNode(" "),_vm._l((_vm.children),function(e,i){return _c('entity',{key:e.id,staticClass:"ml-8",attrs:{"allow-expand":"","entity":e}})})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Entity.vue?vue&type=template&id=036f2a4e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Entity.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const SCHEMAS = ["phylum", "class", "order", "family", "genera", "species"];
/* harmony default export */ var Entityvue_type_script_lang_js_ = ({
  name: "Entity",
  props: {
    entity: Object,
    allowExpand: {
      default: false,
      type: Boolean
    }
  },

  data() {
    return {
      expanded: this.allowExpand || !this.$route.params.flag ? false : this.entity.taxonomy !== this.$route.params.flag,
      children: []
    };
  },

  methods: {
    async expand(tax) {
      if (!this.expanded) {
        let index = SCHEMAS.indexOf(tax ? tax : this.entity.taxonomy) + 1;

        if (index < SCHEMAS.length) {
          let data = await this.$axios.$post('/graph/', {
            query: [{
              q: 'term_list',
              p: {
                related: this.entity.id,
                page_size: 20,
                taxonomy: SCHEMAS[index],
                reverse: false
              },
              s: ["results"],
              o: 'term_list'
            }]
          }, {
            params: {
              force: this.$route.query.force,
              host: "9plant.com"
            }
          });
          this.children = data['term_list']['results'];

          if (this.children.length === 0) {
            await this.expand(SCHEMAS[index]);
          }

          this.expanded = true;
        }
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Entity.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Entityvue_type_script_lang_js_ = (Entityvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Entity.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Entityvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "036f2a4e",
  "0d47ea0c"
  
)

/* harmony default export */ var Entity = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Entity: __webpack_require__(24).default})


/***/ }),

/***/ 25:
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_entity_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_entity_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_entity_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_entity_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_entity_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_flag/_entity.vue?vue&type=template&id=ad2cae92&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<header class=\"py-2\">","</header>",[_vm._ssrNode("<div class=\"container px-4 md:w-2/5 mx-auto flex items-center\">","</div>",[_c('n-link',{staticClass:"flex",attrs:{"to":"/"}},[_c('img',{staticClass:"w-6 h-6 mr-2",attrs:{"src":"/logo.svg","alt":"Plant Genealogy"}}),_vm._v(" "),_c('span',{staticClass:"font-bold text-xl"},[_vm._v("Plantae.")]),_vm._v(" "),_c('small',{staticClass:"text-xs"},[_vm._v("link")])])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<main class=\"container md:w-2/5 mx-auto p-4\">","</main>",[_vm._ssrNode(((_vm.entity)?("<div class=\"mb-2 border p-4 flex items-center\"><div class=\"w-32 mr-4\">"+((_vm.entity.media)?("<img"+(_vm._ssrAttr("src",_vm.entity.media.sizes['thumb_247_247']))+" alt class=\"rounded\">"):("<img src=\"/plant.svg\" alt>"))+"</div> "+((_vm.entity.term)?("<div class=\"flex-1\"><h1 class=\"text-2xl font-bold\">"+_vm._ssrEscape(_vm._s(_vm.entity.term.title))+"</h1> <p class=\"text-gray-600 text-sm\">"+_vm._ssrEscape(_vm._s(_vm.entity.description))+"</p></div>"):"<!---->")+"</div>"):("<div class=\"mb-2\"><label><input type=\"text\" placeholder=\"Search species\""+(_vm._ssrAttr("value",(_vm.search)))+" class=\"border p-2 px-4 w-full\"></label></div>"))+" "),_vm._ssrNode("<div class=\"mb-2 border p-4 bg-yellow-100\">","</div>",[_vm._ssrNode("<h4 class=\"mb-2 text-sm font-bold text-green-700\">"+_vm._ssrEscape(_vm._s(_vm.entity ? 'Genealogy' : 'Genus'))+"</h4> "),_vm._l((_vm.flat_entities),function(e,i){return _c('entity',{key:e.id,class:_vm.entity ? ("ml-" + (8 * i)) : undefined,attrs:{"entity":e}})})],2),_vm._ssrNode(" "),_vm._l((_vm.schemas.slice(_vm.next_flag, 6)),function(schema){return _vm._ssrNode("<div class=\"mb-2 border p-4\">","</div>",[_vm._ssrNode("<h4 class=\"mb-2 text-sm font-bold text-green-700\">"+_vm._ssrEscape(_vm._s(schema))+"</h4> "),_vm._l((_vm.child.filter(function (x) { return x.taxonomy === schema; })),function(e,i){return _c('entity',{key:e.id,attrs:{"entity":e}})})],2)})],2),_vm._ssrNode(" <footer class=\"container md:w-2/5 p-4 mx-auto\"><div class=\"items-center flex\"><div class=\"text-sm uppercase\"><p>plantae.link © 2021</p></div> <div class=\"flex ml-auto\"><a target=\"_blank\" href=\"https://plantae.link/sitemap_index.xml\" class=\"cursor-pointer p-2\"><span class=\"stroke-current\"><svg viewBox=\"0 0 24 24\" fill=\"true\" class=\"w-4 h-4\"><path d=\"M3,3H9V7H3V3M15,10H21V14H15V10M15,17H21V21H15V17M13,13H7V18H13V20H7L5,20V9H7V11H13V13Z\" stroke-width=\"0\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></span></a></div></div></footer>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_flag/_entity.vue?vue&type=template&id=ad2cae92&

// EXTERNAL MODULE: ./components/Entity.vue + 4 modules
var Entity = __webpack_require__(24);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_flag/_entity.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var _entityvue_type_script_lang_js_ = ({
  name: "EntityDetail",
  components: {
    Entity: Entity["default"]
  },

  data() {
    return {
      schemas: ["phylum", "class", "order", "family", "genera", "species"],
      entity: null,
      related: [],
      child: [],
      next_flag: 6,
      search: null,
      loading: false
    };
  },

  head() {
    let description = "Plantae.Link";

    if (this.entity && this.entity.term) {
      description = this.entity.description ? this.entity.description : `${this.entity.term.title} Genealogy`;
    }

    return {
      title: this.entity && this.entity.term ? this.entity.term.title : "Plantae.Link",
      meta: [{
        hid: 'og:title',
        name: 'og:title',
        content: this.entity && this.entity.term ? this.entity.term.title : "Plantae.Link"
      }, {
        hid: 'description',
        name: 'description',
        content: description
      }, {
        hid: 'og:description',
        name: 'og:description',
        content: description
      }, {
        hid: 'og:url',
        name: 'og:url',
        content: `https://plantae.link/${this.$route.path}`
      }, {
        hid: 'og:type',
        name: 'og:type',
        content: `article`
      }, ...(this.entity && this.entity.term && this.entity.media ? [{
        hid: 'og:image',
        name: 'og:image',
        content: this.entity.media.sizes['full_size']
      }] : [])]
    };
  },

  computed: {
    flat_entities() {
      let entities = [...this.related.filter(x => x.taxonomy !== 'origin'), ...(this.entity ? [this.entity] : [])];
      entities.forEach(e => e.order = this.schemas.indexOf(e.taxonomy));
      entities.sort(function (a, b) {
        return a['order'] === b['order'] ? 0 : +(a['order'] > b['order']) || -1;
      });
      return entities;
    }

  },

  async fetch() {
    this.loading = true;
    let {
      flag,
      entity
    } = this.$route.params;

    if (flag) {
      let index = this.schemas.indexOf(flag);

      if (index >= 0 && index < this.schemas.length - 1) {
        this.next_flag = index + 1;
      }
    }

    if (!flag) {
      flag = "genera";
    }

    let flags = [{
      q: 'term_list',
      p: {
        related_taxonomy: entity ? flag : undefined,
        related_term: entity,
        page_size: 20,
        taxonomy: entity ? undefined : flag,
        reverse: true,
        search: this.search
      },
      s: ["results"],
      o: 'term_list'
    }, {
      q: 'term_detail',
      p: {
        taxonomy: flag,
        term: entity
      },
      s: ["id", "term", "description", "media", "taxonomy"],
      o: 'term_detail'
    }, ...(entity ? [{
      q: 'term_list',
      p: {
        related_taxonomy: flag,
        related_term: entity,
        page_size: 500,
        reverse: false
      },
      s: ["results"],
      o: 'term_child'
    }] : [])];
    let data = await this.$axios.$post('/graph/', {
      query: flags
    }, {
      params: {
        force: this.$route.query.force,
        host: "9plant.com"
      }
    });
    this.entity = data['term_detail'];
    this.related = data['term_list']['results'];
    this.child = data['term_child'] ? data['term_child']['results'] : [];
    this.loading = false;
  },

  methods: {
    except(description) {
      if (description) {
        return description.replace(/\n/g, " ").replace(/^(.{120}[^\s]*).*/, "$1");
      } else {
        return null;
      }
    },

    handleSearch: Object(external_lodash_["debounce"])(function () {
      if (false) {}
    }, 800)
  }
});
// CONCATENATED MODULE: ./pages/_flag/_entity.vue?vue&type=script&lang=js&
 /* harmony default export */ var _flag_entityvue_type_script_lang_js_ = (_entityvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/_flag/_entity.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(26)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _flag_entityvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0bd3a5de"
  
)

/* harmony default export */ var _entity = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Entity: __webpack_require__(24).default})


/***/ })

};;
//# sourceMappingURL=_entity.js.map