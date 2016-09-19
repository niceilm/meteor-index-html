Package.describe({
  name: 'flynn:index-html',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: "Define static index.html page",
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:niceilm/meteor-index-html.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.1');
  api.use('isobuild:compiler-plugin@1.0.0');
  api.imply('meteor', 'client');
});

Package.registerBuildPlugin({
  name: "compileStaticHtmlBatch",
  use: [
    'ecmascript@0.5.8',
    'underscore@1.0.9',
    'caching-html-compiler@1.0.7',
    'templating-tools@1.0.5'
  ],
  sources: [
    'index-html.js'
  ]
});
