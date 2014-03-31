document.write("<div id=\"mocha\"></div>");

window.jQuery = window.$ = require("jquery");

require("!style!css!mocha/mocha.css");
require("!script!mocha/mocha.js");
require("!script!sinon/pkg/sinon.js");

window.chai = require("chai");
window.expect = chai.expect;

var sinonChai = require("sinon-chai");
chai.use(sinonChai);

require("!script!chai-jquery/chai-jquery.js");

mocha.setup("bdd");

require("./tests/test-entry");

if (window.mochaPhantomJS) {
  window.mochaPhantomJS.run();
} else {
  mocha.run();
}

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(function () {
    module.suite.suites.length = 0;
    var stats = document.getElementById("mocha-stats");
    stats.parentNode.removeChild(stats);
  });
}
