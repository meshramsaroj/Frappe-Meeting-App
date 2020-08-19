(function () {
  'use strict';

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

  var instances = [];

  function onDocumentClick(e, el, fn) {
    var target = e.target;
    if (el !== target && !el.contains(target)) {
      fn(e);
    }
  }

  var script = {
    name: "Popover",
    props: {
      align: {
        default: "left"
      },
      fullwidth: {
        default: false
      }
    },
    data: function data() {
      return {
        isOpen: false
      };
    },
    directives: {
      outside: {
        bind: function bind(el, binding) {
          el.dataset.outsideClickIndex = instances.length;

          var fn = binding.value;
          var click = function(e) {
            onDocumentClick(e, el, fn);
          };

          document.addEventListener("click", click);
          instances.push(click);
        },
        unbind: function unbind(el) {
          var index = el.dataset.outsideClickIndex;
          var handler = instances[index];
          document.addEventListener("click", handler);
          instances.splice(index, 1);
        }
      }
    },
    computed: {
      popoverClasses: function popoverClasses() {
        return {
          "pin-r": this.align === "right",
          "pin-l": this.align === "left",
          "w-full": this.fullwidth === true
        };
      }
    },
    methods: {
      togglePopover: function togglePopover() {
        this.isOpen = !this.isOpen;
      },
      closePopover: function closePopover() {
        this.isOpen = false;
      }
    }
  };

  /* script */
              var __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        directives: [
          {
            name: "outside",
            rawName: "v-outside",
            value: _vm.closePopover,
            expression: "closePopover"
          }
        ],
        staticClass: "inline-block relative",
        class: { "w-full": this.fullwidth }
      },
      [
        _c(
          "div",
          { on: { click: _vm.togglePopover } },
          [
            _vm._t("default", null, {
              togglePopover: _vm.togglePopover,
              closePopover: _vm.closePopover
            })
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.isOpen,
                expression: "isOpen"
              }
            ],
            staticClass: "absolute mt-default z-20",
            class: _vm.popoverClasses
          },
          [_vm._t("popover-content")],
          2
        )
      ]
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    var __vue_inject_styles__ = function (inject) {
      if (!inject) { return }
      inject("data-v-1270527b_0", { source: "\n.relative[data-v-1270527b] {\n  position: relative;\n}\n.inline-block[data-v-1270527b] {\n  display: inline-block;\n}\n.w-full[data-v-1270527b] {\n  width: 100%;\n}\n.pin-r[data-v-1270527b] {\n  right: 0;\n}\n.pin-l[data-v-1270527b] {\n  left: 0;\n}\n.absolute[data-v-1270527b] {\n  position: absolute;\n}\n.mt-default[data-v-1270527b] {\n  margin-top: 25px;\n}\n.z-20[data-v-1270527b] {\n  z-index: 20;\n}\n", map: {"version":3,"sources":["/home/saroj/frappe-bench/apps/bloomstack_core/bloomstack_core/public/js/components/Popover.vue"],"names":[],"mappings":";AA4EA;EACA,kBAAA;AACA;AACA;EACA,qBAAA;AACA;AACA;EACA,WAAA;AACA;AACA;EACA,QAAA;AACA;AACA;EACA,OAAA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,gBAAA;AACA;AACA;EACA,WAAA;AACA","file":"Popover.vue","sourcesContent":["<template>\n  <div class=\"inline-block relative\" :class=\"{ 'w-full': this.fullwidth }\" v-outside=\"closePopover\">\n    <div @click=\"togglePopover\">\n      <slot :togglePopover=\"togglePopover\" :closePopover=\"closePopover\"></slot>\n    </div>\n    <div v-show=\"isOpen\" class=\"absolute mt-default z-20\" :class=\"popoverClasses\">\n      <slot name=\"popover-content\"></slot>\n    </div>\n  </div>\n</template>\n<script>\nlet instances = [];\n\nfunction onDocumentClick(e, el, fn) {\n  let target = e.target;\n  if (el !== target && !el.contains(target)) {\n    fn(e);\n  }\n}\n\nexport default {\n  name: \"Popover\",\n  props: {\n    align: {\n      default: \"left\"\n    },\n    fullwidth: {\n      default: false\n    }\n  },\n  data() {\n    return {\n      isOpen: false\n    };\n  },\n  directives: {\n    outside: {\n      bind(el, binding) {\n        el.dataset.outsideClickIndex = instances.length;\n\n        const fn = binding.value;\n        const click = function(e) {\n          onDocumentClick(e, el, fn);\n        };\n\n        document.addEventListener(\"click\", click);\n        instances.push(click);\n      },\n      unbind(el) {\n        const index = el.dataset.outsideClickIndex;\n        const handler = instances[index];\n        document.addEventListener(\"click\", handler);\n        instances.splice(index, 1);\n      }\n    }\n  },\n  computed: {\n    popoverClasses() {\n      return {\n        \"pin-r\": this.align === \"right\",\n        \"pin-l\": this.align === \"left\",\n        \"w-full\": this.fullwidth === true\n      };\n    }\n  },\n  methods: {\n    togglePopover() {\n      this.isOpen = !this.isOpen;\n    },\n    closePopover() {\n      this.isOpen = false;\n    }\n  }\n};\n</script>\n<style scoped>\n.relative {\n  position: relative;\n}\n.inline-block {\n  display: inline-block;\n}\n.w-full {\n  width: 100%;\n}\n.pin-r {\n  right: 0;\n}\n.pin-l {\n  left: 0;\n}\n.absolute {\n  position: absolute;\n}\n.mt-default {\n  margin-top: 25px;\n}\n.z-20 {\n  z-index: 20;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__ = "data-v-1270527b";
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* component normalizer */
    function __vue_normalize__(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/home/saroj/frappe-bench/apps/bloomstack_core/bloomstack_core/public/js/components/Popover.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            var originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__() {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
      var isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          var code = css.source;
          var index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            var el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) { el.setAttribute('media', css.media); }
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index]) { style.element.removeChild(nodes[index]); }
            if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
            else { style.element.appendChild(textNode); }
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var Popover = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      __vue_create_injector__,
      undefined
    );

  //

  var script$1 = {
    name: "Dropdown",
    components: {
      Popover: Popover
    },
    props: {
      items: {
        type: Array,
        default: function () { return []; }
      },
      label: {
        type: String,
        default: "Dropdown"
      },
      align: {
        type: String,
        default: "right"
      }
    },
    data: function data() {
      return {
        isOpen: false
      };
    },
    computed: {
      dropdownItems: function dropdownItems() {
        var this$1 = this;

        return (this.items || []).map(function (item) {
          if (typeof item === "string") {
            return {
              label: item,
              action: console.log
            };
          }
          if (!item.action && item.route) {
            item.action = this$1.setRoute.bind(this$1, item.route);
          }
          return item;
        });
      }
    },
    methods: {
      setRoute: function setRoute(route) {
        this.$router.push(route);
      }
    }
  };

  /* script */
              var __vue_script__$1 = script$1;
              
  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "Popover",
      { attrs: { align: _vm.align } },
      [
        _vm._t("default"),
        _vm._v(" "),
        _c(
          "ul",
          {
            staticClass: "list-reset border",
            attrs: { slot: "popover-content" },
            slot: "popover-content"
          },
          _vm._l(_vm.dropdownItems, function(item) {
            return _c("li", { key: item.label, class: item.class || null }, [
              item.route
                ? _c(
                    "a",
                    { staticClass: "list-item", attrs: { href: item.route } },
                    [_vm._v(_vm._s(item.label))]
                  )
                : _c(
                    "div",
                    { staticClass: "list-item", on: { click: item.action } },
                    [_vm._v(_vm._s(item.label))]
                  )
            ])
          }),
          0
        )
      ],
      2
    )
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    var __vue_inject_styles__$1 = function (inject) {
      if (!inject) { return }
      inject("data-v-8a94dfb6_0", { source: "\n.list-reset[data-v-8a94dfb6] {\n  list-style: none;\n  padding: 0;\n  cursor: pointer;\n  background-color: #fff;\n  width: 16rem;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.list-item[data-v-8a94dfb6]:hover {\n  background-color: #f0f4f7;\n}\n.list-item[data-v-8a94dfb6] {\n  padding: 14px;\n  transition: all 0.1s ease-in;\n}\na[data-v-8a94dfb6] {\n  font-size: 12px;\n  text-decoration: none;\n}\n", map: {"version":3,"sources":["/home/saroj/frappe-bench/apps/bloomstack_core/bloomstack_core/public/js/components/Dropdown.vue"],"names":[],"mappings":";AA8DA;EACA,gBAAA;EACA,UAAA;EACA,eAAA;EACA,sBAAA;EACA,YAAA;EACA,4EAAA;EACA,mCAAA;EACA,kCAAA;AACA;AACA;EACA,yBAAA;AACA;AACA;EACA,aAAA;EACA,4BAAA;AACA;AACA;EACA,eAAA;EACA,qBAAA;AACA","file":"Dropdown.vue","sourcesContent":["<template>\n  <Popover :align=\"align\">\n    <slot></slot>\n    <ul slot=\"popover-content\" class=\"list-reset border\">\n      <li v-for=\"item of dropdownItems\" :key=\"item.label\" :class=\"item.class || null\">\n        <a v-if=\"item.route\" class=\"list-item\" :href=\"item.route\">{{ item.label }}</a>\n        <div v-else class=\"list-item\" @click=\"item.action\">{{ item.label }}</div>\n      </li>\n    </ul>\n  </Popover>\n</template>\n<script>\nimport Popover from \"./Popover.vue\";\n\nexport default {\n  name: \"Dropdown\",\n  components: {\n    Popover\n  },\n  props: {\n    items: {\n      type: Array,\n      default: () => []\n    },\n    label: {\n      type: String,\n      default: \"Dropdown\"\n    },\n    align: {\n      type: String,\n      default: \"right\"\n    }\n  },\n  data() {\n    return {\n      isOpen: false\n    };\n  },\n  computed: {\n    dropdownItems() {\n      return (this.items || []).map(item => {\n        if (typeof item === \"string\") {\n          return {\n            label: item,\n            action: console.log\n          };\n        }\n        if (!item.action && item.route) {\n          item.action = this.setRoute.bind(this, item.route);\n        }\n        return item;\n      });\n    }\n  },\n  methods: {\n    setRoute(route) {\n      this.$router.push(route);\n    }\n  }\n};\n</script>\n<style scoped>\n.list-reset {\n  list-style: none;\n  padding: 0;\n  cursor: pointer;\n  background-color: #fff;\n  width: 16rem;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n.list-item:hover {\n  background-color: #f0f4f7;\n}\n.list-item {\n  padding: 14px;\n  transition: all 0.1s ease-in;\n}\na {\n  font-size: 12px;\n  text-decoration: none;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$1 = "data-v-8a94dfb6";
    /* module identifier */
    var __vue_module_identifier__$1 = undefined;
    /* functional template */
    var __vue_is_functional_template__$1 = false;
    /* component normalizer */
    function __vue_normalize__$1(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/home/saroj/frappe-bench/apps/bloomstack_core/bloomstack_core/public/js/components/Dropdown.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            var originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__$1() {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
      var isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          var code = css.source;
          var index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            var el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) { el.setAttribute('media', css.media); }
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index]) { style.element.removeChild(nodes[index]); }
            if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
            else { style.element.appendChild(textNode); }
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var Dropdown = __vue_normalize__$1(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      __vue_create_injector__$1,
      undefined
    );

  //

  var script$2 = {
    props: [
      "index",
      "name",
      "label",
      "category",
      "type",
      "module_name",
      "link",
      "count",
      "onboard_present",
      "links",
      "description",
      "hidden",
      "icon"
    ],
    components: {
      Dropdown: Dropdown
    },
    data: function data() {
      return {
        hovered: 0
      };
    },
    computed: {
      icon_class: function icon_class() {
        if (this.icon) {
          return this.icon;
        } else {
          return "octicon octicon-file-text";
        }
  	},
  	dropdown_links: function dropdown_links() {
  		var this$1 = this;

  		return this.type === 'module' ? this.links
  			.filter(function (link) { return !link.hidden; })
  			.concat([
  				{ label: __('Customize'), action: function () { return this$1.$emit('customize'); }, class: 'border-top' }
  			]) : [];
  	}
    },
  };

  /* script */
              var __vue_script__$2 = script$2;
              
  /* template */
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return !_vm.hidden
      ? _c(
          "div",
          {
            staticClass: "border module-box",
            class: { "hovered-box": _vm.hovered },
            attrs: { "data-module-name": _vm.module_name }
          },
          [
            _c("div", { staticClass: "flush-top" }, [
              _c("div", { staticClass: "module-box-content" }, [
                _c(
                  "div",
                  { staticClass: "level" },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "module-box-link",
                        attrs: {
                          href:
                            _vm.type === "module"
                              ? "#modules/" + _vm.module_name
                              : _vm.link
                        }
                      },
                      [
                        _c("h4", { staticClass: "h4" }, [
                          _c("div", [
                            _c("i", {
                              class: _vm.icon_class,
                              staticStyle: {
                                color: "#8d99a6",
                                "font-size": "18px",
                                "margin-right": "6px"
                              }
                            }),
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.label) +
                                "\n              "
                            )
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _vm.dropdown_links && _vm.dropdown_links.length
                      ? _c("dropdown", { attrs: { items: _vm.dropdown_links } }, [
                          _c("span", { staticClass: "pull-right" }, [
                            _c("i", {
                              staticClass:
                                "octicon octicon-chevron-down text-muted"
                            })
                          ])
                        ])
                      : _vm._e()
                  ],
                  1
                )
              ])
            ])
          ]
        )
      : _vm._e()
  };
  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;

    /* style */
    var __vue_inject_styles__$2 = function (inject) {
      if (!inject) { return }
      inject("data-v-d2ea02dc_0", { source: "/* palette colors*/\n.module-box[data-v-d2ea02dc] {\n  border-radius: 4px;\n  padding: 5px 15px;\n  display: block;\n  background-color: #ffffff;\n}\n.module-box.sortable-chosen[data-v-d2ea02dc] {\n  background-color: #f2f5f7;\n  border-color: #f2f5f7;\n}\n.modules-container:not(.dragging) .module-box[data-v-d2ea02dc]:hover {\n  border-color: #8d99a6;\n}\n.hovered-box[data-v-d2ea02dc] {\n  background-color: #fafbfc;\n}\n.octicon-chevron-down[data-v-d2ea02dc] {\n  font-size: 14px;\n  padding: 4px 6px 2px 6px;\n  border-radius: 4px;\n}\n.octicon-chevron-down[data-v-d2ea02dc]:hover {\n  background: #f0f4f7;\n}\n.octicon-chevron-down[data-v-d2ea02dc]:hover {\n  cursor: pointer;\n}\n.module-box-content[data-v-d2ea02dc] {\n  width: 100%;\n}\n.module-box-content p[data-v-d2ea02dc] {\n  margin-top: 5px;\n  font-size: 80%;\n  display: flex;\n  overflow: hidden;\n}\n.module-box-link[data-v-d2ea02dc] {\n  flex: 1;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  text-decoration: none;\n  --moz-text-decoration-line: none;\n}\n.icon-box[data-v-d2ea02dc] {\n  padding: 15px;\n  width: 54px;\n  display: flex;\n  justify-content: center;\n}\n.icon[data-v-d2ea02dc] {\n  font-size: 24px;\n}\n.open-notification[data-v-d2ea02dc] {\n  top: -2px;\n}\n.shortcut-tag[data-v-d2ea02dc] {\n  margin-right: 5px;\n}\n.drag-handle[data-v-d2ea02dc] {\n  font-size: 12px;\n}\n", map: {"version":3,"sources":["DeskModuleBox.vue"],"names":[],"mappings":"AAAA,kBAAkB;AAClB;EACE,kBAAkB;EAClB,iBAAiB;EACjB,cAAc;EACd,yBAAyB;AAC3B;AACA;EACE,yBAAyB;EACzB,qBAAqB;AACvB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,eAAe;EACf,wBAAwB;EACxB,kBAAkB;AACpB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,eAAe;AACjB;AACA;EACE,WAAW;AACb;AACA;EACE,eAAe;EACf,cAAc;EACd,aAAa;EACb,gBAAgB;AAClB;AACA;EACE,OAAO;EACP,gBAAgB;EAChB,mBAAmB;EACnB,qBAAqB;EACrB,gCAAgC;AAClC;AACA;EACE,aAAa;EACb,WAAW;EACX,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,eAAe;AACjB;AACA;EACE,SAAS;AACX;AACA;EACE,iBAAiB;AACnB;AACA;EACE,eAAe;AACjB","file":"DeskModuleBox.vue","sourcesContent":["/* palette colors*/\n.module-box {\n  border-radius: 4px;\n  padding: 5px 15px;\n  display: block;\n  background-color: #ffffff;\n}\n.module-box.sortable-chosen {\n  background-color: #f2f5f7;\n  border-color: #f2f5f7;\n}\n.modules-container:not(.dragging) .module-box:hover {\n  border-color: #8d99a6;\n}\n.hovered-box {\n  background-color: #fafbfc;\n}\n.octicon-chevron-down {\n  font-size: 14px;\n  padding: 4px 6px 2px 6px;\n  border-radius: 4px;\n}\n.octicon-chevron-down:hover {\n  background: #f0f4f7;\n}\n.octicon-chevron-down:hover {\n  cursor: pointer;\n}\n.module-box-content {\n  width: 100%;\n}\n.module-box-content p {\n  margin-top: 5px;\n  font-size: 80%;\n  display: flex;\n  overflow: hidden;\n}\n.module-box-link {\n  flex: 1;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  text-decoration: none;\n  --moz-text-decoration-line: none;\n}\n.icon-box {\n  padding: 15px;\n  width: 54px;\n  display: flex;\n  justify-content: center;\n}\n.icon {\n  font-size: 24px;\n}\n.open-notification {\n  top: -2px;\n}\n.shortcut-tag {\n  margin-right: 5px;\n}\n.drag-handle {\n  font-size: 12px;\n}\n"]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$2 = "data-v-d2ea02dc";
    /* module identifier */
    var __vue_module_identifier__$2 = undefined;
    /* functional template */
    var __vue_is_functional_template__$2 = false;
    /* component normalizer */
    function __vue_normalize__$2(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/home/saroj/frappe-bench/apps/bloomstack_core/bloomstack_core/public/js/components/DeskModuleBox.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            var originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__$2() {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styles = __vue_create_injector__$2.styles || (__vue_create_injector__$2.styles = {});
      var isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          var code = css.source;
          var index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            var el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) { el.setAttribute('media', css.media); }
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index]) { style.element.removeChild(nodes[index]); }
            if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
            else { style.element.appendChild(textNode); }
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var DeskModuleBox = __vue_normalize__$2(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      __vue_create_injector__$2,
      undefined
    );

  //

  var script$3 = {
  	props: ['category', 'modules'],
  	components: {
  		DeskModuleBox: DeskModuleBox
  	},
  	data: function data() {
  		return {
  			dragging: false,
  			fetched_module_links: {}
  		}
  	},
  	mounted: function mounted() {
  		if (!frappe.utils.is_mobile()) {
  			this.setup_sortable();
  		}
  	},
  	methods: {
  		setup_sortable: function setup_sortable() {
  			var this$1 = this;

  			var modules_container =this.$refs['modules-container'];
  			this.sortable = new Sortable(modules_container, {
  				animation: 150,
  				onStart: function () { return this$1.dragging = true; },
  				onEnd: function () {
  					this$1.dragging = false;
  					var modules = Array.from(modules_container.querySelectorAll('.module-box'))
  						.map(function (node) { return node.dataset.moduleName; });

  					this$1.$emit('module-order-change', {
  						module_category: this$1.category,
  						modules: modules
  					});
  				}
  			});
  		},
  		show_module_card_customize_dialog: function show_module_card_customize_dialog(module) {
  			var this$1 = this;

  			var me = this;
  			var d = new frappe.ui.Dialog({
  				title: __('Customize Shortcuts'),
  				fields: [
  					{
  						label: __('Shortcuts'),
  						fieldname: 'links',
  						fieldtype: 'MultiSelectPills',
  						get_data: function () {
  							var module_links = me.fetched_module_links[module.module_name];
  							if (!module_links) {
  								return frappe.xcall('frappe.desk.moduleview.get_links_for_module', {
  									app: module.app,
  									module: module.module_name,
  								}).then(function (links) {
  									me.fetched_module_links[module.module_name] = links;
  									return links;
  								});
  							} else {
  								return module_links;
  							}
  						},
  						default: module.links.filter(function (l) { return !l.hidden; }).map(function (l) { return l.name; })
  					}
  				],
  				primary_action_label: __('Save'),
  				primary_action: function (ref) {
  					var links = ref.links;

  					frappe.call('frappe.desk.moduleview.update_links_for_module', {
  						module_name: module.module_name,
  						links: links || []
  					}).then(function (r) {
  						this$1.$emit('update-desktop-settings', r.message);
  					});
  					d.hide();
  				}
  			});

  			d.show();
  		},
  	}
  };

  /* script */
              var __vue_script__$3 = script$3;
              
  /* template */
  var __vue_render__$3 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("div", { staticClass: "section-header level text-muted" }, [
        _c("div", { staticClass: "module-category h6 uppercase" }, [
          _vm._v(_vm._s(_vm.__(this.category)))
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "modules-container",
          staticClass: "modules-container",
          class: { dragging: _vm.dragging }
        },
        _vm._l(_vm.modules, function(module, index) {
          return _c(
            "desk-module-box",
            _vm._b(
              {
                key: module.module_name,
                attrs: { index: index },
                on: {
                  customize: function($event) {
                    return _vm.show_module_card_customize_dialog(module)
                  }
                }
              },
              "desk-module-box",
              module,
              false
            )
          )
        }),
        1
      )
    ])
  };
  var __vue_staticRenderFns__$3 = [];
  __vue_render__$3._withStripped = true;

    /* style */
    var __vue_inject_styles__$3 = function (inject) {
      if (!inject) { return }
      inject("data-v-1bf1cdcd_0", { source: ".modules-container[data-v-1bf1cdcd] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-auto-rows: minmax(62px, 1fr);\n  column-gap: 15px;\n  row-gap: 15px;\n  align-items: center;\n}\n", map: {"version":3,"sources":["DeskSection.vue"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,4DAA4D;EAC5D,iCAAiC;EACjC,gBAAgB;EAChB,aAAa;EACb,mBAAmB;AACrB","file":"DeskSection.vue","sourcesContent":[".modules-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-auto-rows: minmax(62px, 1fr);\n  column-gap: 15px;\n  row-gap: 15px;\n  align-items: center;\n}\n"]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$3 = "data-v-1bf1cdcd";
    /* module identifier */
    var __vue_module_identifier__$3 = undefined;
    /* functional template */
    var __vue_is_functional_template__$3 = false;
    /* component normalizer */
    function __vue_normalize__$3(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/home/saroj/frappe-bench/apps/bloomstack_core/bloomstack_core/public/js/components/DeskSection.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            var originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__$3() {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styles = __vue_create_injector__$3.styles || (__vue_create_injector__$3.styles = {});
      var isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          var code = css.source;
          var index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            var el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) { el.setAttribute('media', css.media); }
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index]) { style.element.removeChild(nodes[index]); }
            if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
            else { style.element.appendChild(textNode); }
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var DeskSection = __vue_normalize__$3(
      { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
      __vue_inject_styles__$3,
      __vue_script__$3,
      __vue_scope_id__$3,
      __vue_is_functional_template__$3,
      __vue_module_identifier__$3,
      __vue_create_injector__$3,
      undefined
    );

  function generate_route(item) {
  	if(item.type==="doctype") {
  		item.doctype = item.name;
  	}
  	var route = '';
  	if(!item.route) {
  		if(item.link) {
  			route=strip(item.link, "#");
  		} else if(item.type==="doctype") {
  			if(frappe.model.is_single(item.doctype)) {
  				route = 'Form/' + item.doctype;
  			} else {
  				if (item.filters) {
  					frappe.route_options=item.filters;
  				}
  				route="List/" + item.doctype;
  			}
  		} else if(item.type==="report" && item.is_query_report) {
  			route="query-report/" + item.name;
  		} else if(item.type==="report") {
  			route="List/" + item.doctype + "/Report/" + item.name;
  		} else if(item.type==="page") {
  			route=item.name;
  		}

  		route = '#' + route;
  	} else {
  		route = item.route;
  	}

  	if(item.route_options) {
  		route += "?" + $.map(item.route_options, function(value, key) {
  			return encodeURIComponent(key) + "=" + encodeURIComponent(value); }).join('&');
  	}

  	// if(item.type==="page" || item.type==="help" || item.type==="report" ||
  	// (item.doctype && frappe.model.can_read(item.doctype))) {
  	//     item.shown = true;
  	// }
  	return route;
  }

  //

  var script$4 = {
  	name: 'Desktop',
  	components: {
  		DeskSection: DeskSection
  	},
  	data: function data() {
  		return {
  			module_categories: ['Modules', 'Domains', 'Places', 'Administration'],
  			modules: [],
  			home_settings_fetched: false
  		};
  	},
  	created: function created() {
  		this.fetch_desktop_settings();
  	},
  	methods: {
  		fetch_desktop_settings: function fetch_desktop_settings() {
  			var this$1 = this;

  			frappe.call('frappe.desk.moduleview.get_desktop_settings')
  				.then(function (r) {
  					if (r.message) {
  						this$1.update_desktop_settings(r.message);
  						this$1.home_settings_fetched = true;
  					}
  				});
  		},
  		update_desktop_settings: function update_desktop_settings(desktop_settings) {
  			this.modules = this.add_routes_for_module_links(desktop_settings);
  		},
  		add_routes_for_module_links: function add_routes_for_module_links(user_settings) {
  			for (var category in user_settings) {
  				user_settings[category] = user_settings[category].map(function (m) {
  					m.links = (m.links || []).map(function (link) {
  						link.route = generate_route(link);
  						return link;
  					});
  					return m;
  				});
  			}
  			return user_settings;
  		},
  		update_module_order: function update_module_order(ref) {
  			var module_category = ref.module_category;
  			var modules = ref.modules;

  			frappe.call('frappe.desk.moduleview.update_modules_order', { module_category: module_category, modules: modules });
  		},
  		get_modules_for_category: function get_modules_for_category(category) {
  			return this.modules[category] || [];
  		},
  		show_hide_cards_dialog: function show_hide_cards_dialog() {
  			var this$1 = this;

  			frappe.call('frappe.desk.moduleview.get_options_for_show_hide_cards')
  				.then(function (r) {
  					var ref = r.message;
  					var user_options = ref.user_options;
  					var global_options = ref.global_options;

  					var user_value = "User (" + (frappe.session.user) + ")";
  					var fields = [
  						{
  							label: __('Setup For'),
  							fieldname: 'setup_for',
  							fieldtype: 'Select',
  							options: [
  								{
  									label: __('User ({0})', [frappe.session.user]),
  									value: user_value
  								},
  								{
  									label: __('Everyone'),
  									value: 'Everyone'
  								}
  							],
  							default: user_value,
  							depends_on: function (doc) { return frappe.user_roles.includes('System Manager'); },
  							onchange: function onchange() {
  								var value = d.get_value('setup_for');
  								var field = d.get_field('setup_for');
  								var description = value === 'Everyone' ? __('Hide cards for all users') : '';
  								field.set_description(description);
  							}
  						}
  					];

  					var user_section = this$1.module_categories.map(function (category) {
  						var options = user_options.filter(function (m) { return m.category === category; });
  						return {
  							label: category,
  							fieldname: ("user:" + category),
  							fieldtype: 'MultiCheck',
  							options: options,
  							columns: 2
  						}
  					}).filter(function (f) { return f.options.length > 0; });

  					user_section = [
  						{
  							fieldname: 'user_section',
  							fieldtype: 'Section Break',
  							depends_on: function (doc) { return doc.setup_for === user_value; }
  						}
  					].concat(user_section);

  					var global_section = this$1.module_categories.map(function (category) {
  						var options = global_options.filter(function (m) { return m.category === category; });
  						return {
  							label: category,
  							fieldname: ("global:" + category),
  							fieldtype: 'MultiCheck',
  							options: options,
  							columns: 2
  						}
  					}).filter(function (f) { return f.options.length > 0; });

  					global_section = [
  						{
  							fieldname: 'global_section',
  							fieldtype: 'Section Break',
  							depends_on: function (doc) { return doc.setup_for === 'Everyone'; }
  						}
  					].concat(global_section);

  					fields = fields.concat(user_section, global_section);

  					var old_values = null;
  					var d = new frappe.ui.Dialog({
  						title: __('Show / Hide Stacks'),
  						fields: fields,
  						primary_action_label: __('Save'),
  						primary_action: function (values) {
  							if (values.setup_for === 'Everyone') {
  								this$1.update_global_modules(d);
  							} else {
  								this$1.update_user_modules(d, old_values);
  							}
  						}
  					});

  					d.show();

  					// deepcopy
  					old_values = JSON.parse(JSON.stringify(d.get_values()));
  				});
  		},

  		update_user_modules: function update_user_modules(d, old_values) {
  			var this$1 = this;

  			var new_values = d.get_values();
  			var category_map = {};
  			var loop = function () {
  				var category = list[i];

  				var old_modules = old_values[("user:" + category)] || [];
  				var new_modules = new_values[("user:" + category)] || [];

  				var removed = old_modules.filter(function (module) { return !new_modules.includes(module); });
  				var added = new_modules.filter(function (module) { return !old_modules.includes(module); });

  				category_map[category] = { added: added, removed: removed };
  			};

  			for (var i = 0, list = this$1.module_categories; i < list.length; i += 1) loop();

  			frappe.call({
  				method: 'frappe.desk.moduleview.update_hidden_modules',
  				args: { category_map: category_map },
  				btn: d.get_primary_btn()
  			}).then(function (r) {
  				this$1.update_desktop_settings(r.message);
  				d.hide();
  			});
  		},

  		update_global_modules: function update_global_modules(d) {
  			var this$1 = this;

  			var blocked_modules = [];
  			for (var i = 0, list = this.module_categories; i < list.length; i += 1) {
  				var category = list[i];

  				var field = d.get_field(("global:" + category));
  				if (field) {
  					var unchecked_options = field.get_unchecked_options();
  					blocked_modules = blocked_modules.concat(unchecked_options);
  				}
  			}

  			frappe.call({
  				method: 'frappe.desk.moduleview.update_global_hidden_modules',
  				args: {
  					modules: blocked_modules
  				},
  				btn: d.get_primary_btn()
  			}).then(function (r) {
  				this$1.update_desktop_settings(r.message);
  				d.hide();
  			});
  		}
  	}
  };

  /* script */
              var __vue_script__$4 = script$4;
              
  /* template */
  var __vue_render__$4 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _vm.home_settings_fetched
      ? _c(
          "div",
          { staticClass: "modules-page-container" },
          [
            _c(
              "a",
              {
                staticClass: "btn-show-hide text-muted text-medium",
                on: { click: _vm.show_hide_cards_dialog }
              },
              [_vm._v("\n\t\t" + _vm._s(_vm.__("Show / Hide Stacks")) + "\n\t")]
            ),
            _vm._v(" "),
            _vm._l(_vm.module_categories, function(category, i) {
              return _c(
                "div",
                { key: category, staticClass: "modules-section" },
                [
                  _vm.get_modules_for_category(category).length
                    ? _c("desk-section", {
                        attrs: {
                          category: category,
                          modules: _vm.get_modules_for_category(category)
                        },
                        on: {
                          "update-desktop-settings": _vm.update_desktop_settings,
                          "module-order-change": _vm.update_module_order
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            })
          ],
          2
        )
      : _vm._e()
  };
  var __vue_staticRenderFns__$4 = [];
  __vue_render__$4._withStripped = true;

    /* style */
    var __vue_inject_styles__$4 = function (inject) {
      if (!inject) { return }
      inject("data-v-5d9e6a1e_0", { source: ".modules-page-container[data-v-5d9e6a1e] {\n  position: relative;\n  margin-top: 40px;\n  margin-bottom: 30px;\n  padding-top: 1px;\n}\n.modules-section[data-v-5d9e6a1e] {\n  position: relative;\n  margin-top: 30px;\n}\n.btn-show-hide[data-v-5d9e6a1e] {\n  position: absolute;\n  right: 0;\n  top: 39px;\n  z-index: 1;\n}\n.toolbar-underlay[data-v-5d9e6a1e] {\n  margin: 70px;\n}\n", map: {"version":3,"sources":["Desktop.vue"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,UAAU;AACZ;AACA;EACE,YAAY;AACd","file":"Desktop.vue","sourcesContent":[".modules-page-container {\n  position: relative;\n  margin-top: 40px;\n  margin-bottom: 30px;\n  padding-top: 1px;\n}\n.modules-section {\n  position: relative;\n  margin-top: 30px;\n}\n.btn-show-hide {\n  position: absolute;\n  right: 0;\n  top: 39px;\n  z-index: 1;\n}\n.toolbar-underlay {\n  margin: 70px;\n}\n"]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__$4 = "data-v-5d9e6a1e";
    /* module identifier */
    var __vue_module_identifier__$4 = undefined;
    /* functional template */
    var __vue_is_functional_template__$4 = false;
    /* component normalizer */
    function __vue_normalize__$4(
      template, style, script,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script === 'function' ? script.options : script) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "/home/saroj/frappe-bench/apps/bloomstack_core/bloomstack_core/public/js/components/Desktop.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      {
        var hook;
        if (style) {
          hook = function(context) {
            style.call(this, createInjector(context));
          };
        }

        if (hook !== undefined) {
          if (component.functional) {
            // register for functional component in vue file
            var originalRender = component.render;
            component.render = function renderWithStyleInjection(h, context) {
              hook.call(context);
              return originalRender(h, context)
            };
          } else {
            // inject component registration as beforeCreate hook
            var existing = component.beforeCreate;
            component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
        }
      }

      return component
    }
    /* style inject */
    function __vue_create_injector__$4() {
      var head = document.head || document.getElementsByTagName('head')[0];
      var styles = __vue_create_injector__$4.styles || (__vue_create_injector__$4.styles = {});
      var isOldIE =
        typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

      return function addStyle(id, css) {
        if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

        var group = isOldIE ? css.media || 'default' : id;
        var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

        if (!style.ids.includes(id)) {
          var code = css.source;
          var index = style.ids.length;

          style.ids.push(id);

          if (isOldIE) {
            style.element = style.element || document.querySelector('style[data-group=' + group + ']');
          }

          if (!style.element) {
            var el = style.element = document.createElement('style');
            el.type = 'text/css';

            if (css.media) { el.setAttribute('media', css.media); }
            if (isOldIE) {
              el.setAttribute('data-group', group);
              el.setAttribute('data-next-index', '0');
            }

            head.appendChild(el);
          }

          if (isOldIE) {
            index = parseInt(style.element.getAttribute('data-next-index'));
            style.element.setAttribute('data-next-index', index + 1);
          }

          if (style.element.styleSheet) {
            style.parts.push(code);
            style.element.styleSheet.cssText = style.parts
              .filter(Boolean)
              .join('\n');
          } else {
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index]) { style.element.removeChild(nodes[index]); }
            if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
            else { style.element.appendChild(textNode); }
          }
        }
      }
    }
    /* style inject SSR */
    

    
    var Desktop = __vue_normalize__$4(
      { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
      __vue_inject_styles__$4,
      __vue_script__$4,
      __vue_scope_id__$4,
      __vue_is_functional_template__$4,
      __vue_module_identifier__$4,
      __vue_create_injector__$4,
      undefined
    );

  frappe.provide('frappe.views.pageview');

  frappe.views.pageview = {
  	with_page: function(name, callback) {
  		if(in_list(Object.keys(frappe.standard_pages), name)) {
  			if(!frappe.pages[name]) {
  				frappe.standard_pages[name]();
  			}
  			callback();
  			return;
  		}

  		if((locals.Page && locals.Page[name] && locals.Page[name].script) || name==window.page_name) {
  			// already loaded
  			callback();
  		} else if(localStorage["_page:" + name] && frappe.boot.developer_mode!=1) {
  			// cached in local storage
  			frappe.model.sync(JSON.parse(localStorage["_page:" + name]));
  			callback();
  		} else {
  			// get fresh
  			return frappe.call({
  				method: 'frappe.desk.desk_page.getpage',
  				args: {'name':name },
  				callback: function(r) {
  					if(!r.docs._dynamic_page) {
  						localStorage["_page:" + name] = JSON.stringify(r.docs);
  					}
  					callback();
  				},
  				freeze: true,
  			});
  		}
  	},
  	show: function(name) {
  		if(!name) {
  			name = (frappe.boot ? frappe.boot.home_page : window.page_name);

  			if(name === "desktop") {
  				if(!frappe.pages.desktop) {
  					var page = frappe.container.add_page('desktop');
  					var container = $('<div class="container"></div>').appendTo(page);
  					container = $('<div></div>').appendTo(container);

  					new Vue({
  						el: container[0],
  						render: function (h) { return h(Desktop); }
  					});
  				}

  				frappe.container.change_to('desktop');
  				frappe.utils.set_title(__('Bloomstack'));
  				return;
  			}
  		}
  		frappe.model.with_doctype("Page", function() {
  			frappe.views.pageview.with_page(name, function(r) {
  				if(r && r.exc) {
  					if(!r['403'])
  						{ frappe.show_not_found(name); }
  				} else if(!frappe.pages[name]) {
  					new frappe.views.Page(name);
  				}
  				frappe.container.change_to(name);
  			});
  		});
  	}
  };

}());
//# sourceMappingURL=bloomstack_desk.js.map
