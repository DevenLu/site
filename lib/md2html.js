var debug = require('debug')('lib:md2html');
var path = require('path');
var relative = path.relative;
var nunjucks = require('nunjucks');
var renderString = nunjucks.renderString;
var _ = require('lodash');
var has = _.has;
var assignDeep = require('./assign-deep');
var resolveData = require('./resolve-data');
var renderMd = require('./render-md');
var tocify = require('./tocify');
var compileInlineScripts = require('./compile-inline-scripts');

module.exports = function (mdPath, root, config, templateMap, overrideConfig, isDev) {
    debug(mdPath);

    var _renderMd = renderMd(mdPath);
    var doc = _renderMd.doc;
    var meta = _renderMd.meta;
    var userScripts = _renderMd.userScripts;

    var data = resolveData(mdPath, root, config, meta, isDev);
    var relativePath = relative(data.src, mdPath);
    if (!has(data, 'isDev')) {
        data.isDev = isDev;
    }

    data.__relativePath = relativePath;
    var href = data.__href = '/' + relativePath.replace(/\.md$/, '.html');
    if (data.isDev) {
        data.__self = JSON.stringify(data);
    }
    data.__userScripts = userScripts;
    data.__meta = JSON.stringify({
        currentProduct: data.currentProduct,
        assets: data.assets,
        dist: data.dist,
        href: href,
        locale: data.locale,
        version: data.pkg.version
    });

    // step1: render doc
    data.content = renderString(doc, data);
    if (data.template && data.template.indexOf('-demo') > -1) {
        // debug(data.content);
        data.content = compileInlineScripts(data.content, true);
        // debug(compileInlineScripts(data.content, true));
        // debug(data.template);
    }

    // step2: merge overrideConfig
    assignDeep(data, overrideConfig);

    // step3: render template with doc content
    var templateKey = data.template;
    debug('render with template ' + templateKey);
    var template = templateMap[templateKey];
    var result = void 0;
    if (template) {
        result = template.render(data);
    } else {
        result = data.content;
    }
    // post processing
    // toc
    result = tocify(result, data.tocifyWithAnchor, data.withInnerPageToc);
    result = compileInlineScripts(result);
    return {
        data: data,
        content: result,
    };
};
