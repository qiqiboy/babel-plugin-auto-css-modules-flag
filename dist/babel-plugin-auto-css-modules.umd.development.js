(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('path')) :
    typeof define === 'function' && define.amd ? define(['exports', 'path'], factory) :
    (global = global || self, factory(global['babel-plugin-auto-css-modules'] = {}, global.path));
}(this, (function (exports, path) { 'use strict';

    var CSS_EXTNAMES = ['.css', '.less', '.sass', '.scss', '.stylus', '.styl'];
    function index () {
      return {
        visitor: {
          ImportDeclaration: function ImportDeclaration(path$1, _ref) {
            var opts = _ref.opts;
            var _path$node = path$1.node,
                specifiers = _path$node.specifiers,
                source = _path$node.source,
                value = _path$node.source.value;

            if (specifiers.length && CSS_EXTNAMES.includes(path.extname(value))) {
              source.value = "".concat(value, "?").concat(opts.flag || 'modules');
            }
          }
        }
      };
    }

    exports.default = index;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
