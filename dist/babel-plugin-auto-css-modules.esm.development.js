import { extname } from 'path';

var CSS_EXTNAMES = ['.css', '.less', '.sass', '.scss', '.stylus', '.styl'];
function index () {
  return {
    visitor: {
      ImportDeclaration: function ImportDeclaration(path, _ref) {
        var opts = _ref.opts;
        var _path$node = path.node,
            specifiers = _path$node.specifiers,
            source = _path$node.source,
            value = _path$node.source.value;

        if (specifiers.length && CSS_EXTNAMES.includes(extname(value))) {
          source.value = "".concat(value, "?").concat(opts.flag || 'modules');
        }
      }
    }
  };
}

export default index;
