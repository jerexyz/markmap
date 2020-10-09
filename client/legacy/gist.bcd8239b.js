import { ak as _asyncToGenerator, R as _slicedToArray } from './web.url.d280cbc1.js';
import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, W as assign, X as exclude_internal_props, _ as _goto, f as element, c as space, t as text, k as claim_element, l as children, h as claim_space, m as claim_text, g as detach_dev, p as attr_dev, n as add_location, r as insert_dev, w as append_dev, P as svg_element, V as listen_dev, Y as is_function, F as noop$1, Z as run_all } from './client.a15f102c.js';

/* src/components/toolbar.svelte generated by Svelte v3.29.0 */
const file = "src/components/toolbar.svelte";

// (20:2) {#if showBrand}
function create_if_block_1(ctx) {
	let div;
	let img;
	let img_src_value;
	let t0;
	let a;
	let t1;

	const block = {
		c: function create() {
			div = element("div");
			img = element("img");
			t0 = space();
			a = element("a");
			t1 = text("markmap");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			img = claim_element(div_nodes, "IMG", { class: true, alt: true, src: true });
			t0 = claim_space(div_nodes);
			a = claim_element(div_nodes, "A", { class: true, href: true });
			var a_nodes = children(a);
			t1 = claim_text(a_nodes, "markmap");
			a_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "class", "w-4 h-4");
			attr_dev(img, "alt", "markmap");
			if (img.src !== (img_src_value = "/favicon.png")) attr_dev(img, "src", img_src_value);
			add_location(img, file, 21, 4, 387);
			attr_dev(a, "class", "inline-block text-xs no-underline pr-1");
			attr_dev(a, "href", "/");
			add_location(a, file, 22, 4, 446);
			add_location(div, file, 20, 2, 377);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, img);
			append_dev(div, t0);
			append_dev(div, a);
			append_dev(a, t1);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(20:2) {#if showBrand}",
		ctx
	});

	return block;
}

// (67:2) {:else}
function create_else_block(ctx) {
	let div;
	let svg;
	let path;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div = element("div");
			svg = svg_element("svg");
			path = svg_element("path");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { title: true });
			var div_nodes = children(div);
			svg = claim_element(div_nodes, "svg", { width: true, height: true, viewBox: true }, 1);
			var svg_nodes = children(svg);

			path = claim_element(
				svg_nodes,
				"path",
				{
					fill: true,
					"stroke-width": true,
					stroke: true,
					d: true
				},
				1
			);

			children(path).forEach(detach_dev);
			svg_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(path, "fill", "none");
			attr_dev(path, "stroke-width", "2");
			attr_dev(path, "stroke", "currentColor");
			attr_dev(path, "d", "M5 9 v-3 h3 M5 11 v3 h3 M15 9 v-3 h-3 M15 11 v3 h-3");
			add_location(path, file, 69, 6, 1705);
			attr_dev(svg, "width", "20");
			attr_dev(svg, "height", "20");
			attr_dev(svg, "viewBox", "0 0 20 20");
			add_location(svg, file, 68, 4, 1620);
			attr_dev(div, "title", "Full page view");
			add_location(div, file, 67, 2, 1587);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, svg);
			append_dev(svg, path);

			if (!mounted) {
				dispose = listen_dev(svg, "click", /*handleFullPageView*/ ctx[5], false, false, false);
				mounted = true;
			}
		},
		p: noop$1,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(67:2) {:else}",
		ctx
	});

	return block;
}

// (56:2) {#if isFull}
function create_if_block(ctx) {
	let div;
	let svg;
	let path;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div = element("div");
			svg = svg_element("svg");
			path = svg_element("path");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { title: true });
			var div_nodes = children(div);
			svg = claim_element(div_nodes, "svg", { width: true, height: true, viewBox: true }, 1);
			var svg_nodes = children(svg);

			path = claim_element(
				svg_nodes,
				"path",
				{
					fill: true,
					"stroke-width": true,
					stroke: true,
					d: true
				},
				1
			);

			children(path).forEach(detach_dev);
			svg_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(path, "fill", "none");
			attr_dev(path, "stroke-width", "2");
			attr_dev(path, "stroke", "currentColor");
			attr_dev(path, "d", "M5 6 v8 h10 v-8 h-10 z m5 0 v8");
			add_location(path, file, 58, 6, 1422);
			attr_dev(svg, "width", "20");
			attr_dev(svg, "height", "20");
			attr_dev(svg, "viewBox", "0 0 20 20");
			add_location(svg, file, 57, 4, 1345);
			attr_dev(div, "title", "Open in REPL");
			add_location(div, file, 56, 2, 1314);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, svg);
			append_dev(svg, path);

			if (!mounted) {
				dispose = listen_dev(svg, "click", /*handleREPL*/ ctx[6], false, false, false);
				mounted = true;
			}
		},
		p: noop$1,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(56:2) {#if isFull}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div3;
	let t0;
	let div0;
	let svg0;
	let path0;
	let t1;
	let div1;
	let svg1;
	let path1;
	let t2;
	let div2;
	let svg2;
	let path2;
	let t3;
	let div3_class_value;
	let mounted;
	let dispose;
	let if_block0 = /*showBrand*/ ctx[0] && create_if_block_1(ctx);

	function select_block_type(ctx, dirty) {
		if (/*isFull*/ ctx[1]) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block1 = current_block_type(ctx);

	const block = {
		c: function create() {
			div3 = element("div");
			if (if_block0) if_block0.c();
			t0 = space();
			div0 = element("div");
			svg0 = svg_element("svg");
			path0 = svg_element("path");
			t1 = space();
			div1 = element("div");
			svg1 = svg_element("svg");
			path1 = svg_element("path");
			t2 = space();
			div2 = element("div");
			svg2 = svg_element("svg");
			path2 = svg_element("path");
			t3 = space();
			if_block1.c();
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			if (if_block0) if_block0.l(div3_nodes);
			t0 = claim_space(div3_nodes);
			div0 = claim_element(div3_nodes, "DIV", { title: true });
			var div0_nodes = children(div0);
			svg0 = claim_element(div0_nodes, "svg", { width: true, height: true, viewBox: true }, 1);
			var svg0_nodes = children(svg0);

			path0 = claim_element(
				svg0_nodes,
				"path",
				{
					fill: true,
					"stroke-width": true,
					stroke: true,
					d: true
				},
				1
			);

			children(path0).forEach(detach_dev);
			svg0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", { title: true });
			var div1_nodes = children(div1);
			svg1 = claim_element(div1_nodes, "svg", { width: true, height: true, viewBox: true }, 1);
			var svg1_nodes = children(svg1);

			path1 = claim_element(
				svg1_nodes,
				"path",
				{
					fill: true,
					"stroke-width": true,
					stroke: true,
					d: true
				},
				1
			);

			children(path1).forEach(detach_dev);
			svg1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t2 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { title: true });
			var div2_nodes = children(div2);
			svg2 = claim_element(div2_nodes, "svg", { width: true, height: true, viewBox: true }, 1);
			var svg2_nodes = children(svg2);

			path2 = claim_element(
				svg2_nodes,
				"path",
				{
					fill: true,
					"stroke-width": true,
					stroke: true,
					d: true
				},
				1
			);

			children(path2).forEach(detach_dev);
			svg2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t3 = claim_space(div3_nodes);
			if_block1.l(div3_nodes);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(path0, "fill", "none");
			attr_dev(path0, "stroke-width", "2");
			attr_dev(path0, "stroke", "currentColor");
			attr_dev(path0, "d", "M10 6 v8 M6 10 h8");
			add_location(path0, file, 27, 6, 637);
			attr_dev(svg0, "width", "20");
			attr_dev(svg0, "height", "20");
			attr_dev(svg0, "viewBox", "0 0 20 20");
			add_location(svg0, file, 26, 4, 562);
			attr_dev(div0, "title", "Zoom in");
			add_location(div0, file, 25, 2, 536);
			attr_dev(path1, "fill", "none");
			attr_dev(path1, "stroke-width", "2");
			attr_dev(path1, "stroke", "currentColor");
			attr_dev(path1, "d", "M6 10 h8");
			add_location(path1, file, 37, 6, 882);
			attr_dev(svg1, "width", "20");
			attr_dev(svg1, "height", "20");
			attr_dev(svg1, "viewBox", "0 0 20 20");
			add_location(svg1, file, 36, 4, 806);
			attr_dev(div1, "title", "Zoom out");
			add_location(div1, file, 35, 2, 779);
			attr_dev(path2, "fill", "none");
			attr_dev(path2, "stroke-width", "2");
			attr_dev(path2, "stroke", "currentColor");
			attr_dev(path2, "d", "M4 8 h3 v-3 M4 12 h3 v3 M16 8 h-3 v-3 M16 12 h-3 v3");
			add_location(path2, file, 47, 6, 1123);
			attr_dev(svg2, "width", "20");
			attr_dev(svg2, "height", "20");
			attr_dev(svg2, "viewBox", "0 0 20 20");
			add_location(svg2, file, 46, 4, 1049);
			attr_dev(div2, "title", "Fit window size");
			add_location(div2, file, 45, 2, 1015);
			attr_dev(div3, "class", div3_class_value = "toolbar " + /*$$props*/ ctx[7].class);
			add_location(div3, file, 18, 0, 319);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			if (if_block0) if_block0.m(div3, null);
			append_dev(div3, t0);
			append_dev(div3, div0);
			append_dev(div0, svg0);
			append_dev(svg0, path0);
			append_dev(div3, t1);
			append_dev(div3, div1);
			append_dev(div1, svg1);
			append_dev(svg1, path1);
			append_dev(div3, t2);
			append_dev(div3, div2);
			append_dev(div2, svg2);
			append_dev(svg2, path2);
			append_dev(div3, t3);
			if_block1.m(div3, null);

			if (!mounted) {
				dispose = [
					listen_dev(
						svg0,
						"click",
						function () {
							if (is_function(/*onZoomIn*/ ctx[2])) /*onZoomIn*/ ctx[2].apply(this, arguments);
						},
						false,
						false,
						false
					),
					listen_dev(
						svg1,
						"click",
						function () {
							if (is_function(/*onZoomOut*/ ctx[3])) /*onZoomOut*/ ctx[3].apply(this, arguments);
						},
						false,
						false,
						false
					),
					listen_dev(
						svg2,
						"click",
						function () {
							if (is_function(/*onReset*/ ctx[4])) /*onReset*/ ctx[4].apply(this, arguments);
						},
						false,
						false,
						false
					)
				];

				mounted = true;
			}
		},
		p: function update(new_ctx, [dirty]) {
			ctx = new_ctx;

			if (/*showBrand*/ ctx[0]) {
				if (if_block0) ; else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					if_block0.m(div3, t0);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block1) {
				if_block1.p(ctx, dirty);
			} else {
				if_block1.d(1);
				if_block1 = current_block_type(ctx);

				if (if_block1) {
					if_block1.c();
					if_block1.m(div3, null);
				}
			}

			if (dirty & /*$$props*/ 128 && div3_class_value !== (div3_class_value = "toolbar " + /*$$props*/ ctx[7].class)) {
				attr_dev(div3, "class", div3_class_value);
			}
		},
		i: noop$1,
		o: noop$1,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
			if (if_block0) if_block0.d();
			if_block1.d();
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Toolbar", slots, []);
	let { showBrand = false } = $$props;
	let { isFull = false } = $$props;
	let { onZoomIn } = $$props;
	let { onZoomOut } = $$props;
	let { onReset } = $$props;

	function handleFullPageView() {
		_goto("/full" + window.location.hash);
	}

	function handleREPL() {
		_goto("/repl" + window.location.hash);
	}

	$$self.$$set = $$new_props => {
		$$invalidate(7, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("showBrand" in $$new_props) $$invalidate(0, showBrand = $$new_props.showBrand);
		if ("isFull" in $$new_props) $$invalidate(1, isFull = $$new_props.isFull);
		if ("onZoomIn" in $$new_props) $$invalidate(2, onZoomIn = $$new_props.onZoomIn);
		if ("onZoomOut" in $$new_props) $$invalidate(3, onZoomOut = $$new_props.onZoomOut);
		if ("onReset" in $$new_props) $$invalidate(4, onReset = $$new_props.onReset);
	};

	$$self.$capture_state = () => ({
		goto: _goto,
		showBrand,
		isFull,
		onZoomIn,
		onZoomOut,
		onReset,
		handleFullPageView,
		handleREPL
	});

	$$self.$inject_state = $$new_props => {
		$$invalidate(7, $$props = assign(assign({}, $$props), $$new_props));
		if ("showBrand" in $$props) $$invalidate(0, showBrand = $$new_props.showBrand);
		if ("isFull" in $$props) $$invalidate(1, isFull = $$new_props.isFull);
		if ("onZoomIn" in $$props) $$invalidate(2, onZoomIn = $$new_props.onZoomIn);
		if ("onZoomOut" in $$props) $$invalidate(3, onZoomOut = $$new_props.onZoomOut);
		if ("onReset" in $$props) $$invalidate(4, onReset = $$new_props.onReset);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$props = exclude_internal_props($$props);

	return [
		showBrand,
		isFull,
		onZoomIn,
		onZoomOut,
		onReset,
		handleFullPageView,
		handleREPL,
		$$props
	];
}

class Toolbar extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			showBrand: 0,
			isFull: 1,
			onZoomIn: 2,
			onZoomOut: 3,
			onReset: 4
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Toolbar",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*onZoomIn*/ ctx[2] === undefined && !("onZoomIn" in props)) {
			console.warn("<Toolbar> was created without expected prop 'onZoomIn'");
		}

		if (/*onZoomOut*/ ctx[3] === undefined && !("onZoomOut" in props)) {
			console.warn("<Toolbar> was created without expected prop 'onZoomOut'");
		}

		if (/*onReset*/ ctx[4] === undefined && !("onReset" in props)) {
			console.warn("<Toolbar> was created without expected prop 'onReset'");
		}
	}

	get showBrand() {
		throw new Error("<Toolbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set showBrand(value) {
		throw new Error("<Toolbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isFull() {
		throw new Error("<Toolbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set isFull(value) {
		throw new Error("<Toolbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get onZoomIn() {
		throw new Error("<Toolbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set onZoomIn(value) {
		throw new Error("<Toolbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get onZoomOut() {
		throw new Error("<Toolbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set onZoomOut(value) {
		throw new Error("<Toolbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get onReset() {
		throw new Error("<Toolbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set onReset(value) {
		throw new Error("<Toolbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

var DEFAULT_FILENAME = 'markmap.md';
var DEFAULT_GIST = ['af76a4c245b302206b16aec503dbe07b', 'gitee:a73wgucr28dhlxp91kytm57'];

function noop() {}

if (!Promise.any) {
  Promise.any = function (promises) {
    return new Promise(function (resolve, reject) {
      Promise.all(promises.map(function (item) {
        return Promise.resolve(item).then(resolve, noop);
      })).then(reject);
    });
  };
}

function loadFromGitHubGist(_x, _x2) {
  return _loadFromGitHubGist.apply(this, arguments);
}

function _loadFromGitHubGist() {
  _loadFromGitHubGist = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(key, filename) {
    var res, data, file, content, _res;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("https://api.github.com/gists/".concat(key), {
              headers: {
                Accept: 'application/vnd.github.v3+json'
              }
            });

          case 2:
            res = _context2.sent;
            _context2.next = 5;
            return res.json();

          case 5:
            data = _context2.sent;
            file = data.files[filename];

            if (file) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return");

          case 9:
            content = file.content;

            if (!file.truncated) {
              _context2.next = 17;
              break;
            }

            _context2.next = 13;
            return fetch(file.raw_url);

          case 13:
            _res = _context2.sent;
            _context2.next = 16;
            return _res.text();

          case 16:
            content = _context2.sent;

          case 17:
            return _context2.abrupt("return", content);

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _loadFromGitHubGist.apply(this, arguments);
}

function loadFromGiteeGist(_x3, _x4) {
  return _loadFromGiteeGist.apply(this, arguments);
}

function _loadFromGiteeGist() {
  _loadFromGiteeGist = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(key, filename) {
    var res, data, file, content, _res2;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch("https://gitee.com/api/v5/gists/".concat(key));

          case 2:
            res = _context3.sent;
            _context3.next = 5;
            return res.json();

          case 5:
            data = _context3.sent;
            file = data.files[filename];

            if (file) {
              _context3.next = 9;
              break;
            }

            return _context3.abrupt("return");

          case 9:
            content = file.content;

            if (!file.truncated) {
              _context3.next = 17;
              break;
            }

            _context3.next = 13;
            return fetch(file.raw_url);

          case 13:
            _res2 = _context3.sent;
            _context3.next = 16;
            return _res2.text();

          case 16:
            content = _context3.sent;

          case 17:
            return _context3.abrupt("return", content);

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _loadFromGiteeGist.apply(this, arguments);
}

function loadFromGist(_x5) {
  return _loadFromGist.apply(this, arguments);
}

function _loadFromGist() {
  _loadFromGist = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(gist) {
    var _gist$match, _gist$match2, source, key, pathname, filename;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _gist$match = gist.match(/^(?:(\w+):)?(\w+)(?:\/(.*))?$|/), _gist$match2 = _slicedToArray(_gist$match, 4), source = _gist$match2[1], key = _gist$match2[2], pathname = _gist$match2[3];

            if (key) {
              _context4.next = 3;
              break;
            }

            return _context4.abrupt("return");

          case 3:
            filename = pathname || DEFAULT_FILENAME;

            if (!(source === 'gitee')) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return", loadFromGiteeGist(key, filename));

          case 6:
            return _context4.abrupt("return", loadFromGitHubGist(key, filename));

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _loadFromGist.apply(this, arguments);
}

function loadFromFastestGist(_x6) {
  return _loadFromFastestGist.apply(this, arguments);
}

function _loadFromFastestGist() {
  _loadFromFastestGist = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(gistList) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", Promise.any(gistList.map(loadFromGist)));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _loadFromFastestGist.apply(this, arguments);
}

function getHashHandler(update) {
  var lastSession;

  function handleHashChange() {
    return _handleHashChange.apply(this, arguments);
  }

  function _handleHashChange() {
    _handleHashChange = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var session, hq, gist, text;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              session = {};
              lastSession = session;
              hq = new URLSearchParams(window.location.hash.slice(1));
              gist = hq.get('gist');
              gist = gist && gist.split(',');
              _context.next = 7;
              return loadFromFastestGist(gist || DEFAULT_GIST);

            case 7:
              text = _context.sent;

              if (text != null && session === lastSession) {
                update(text);
              }

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleHashChange.apply(this, arguments);
  }

  return handleHashChange;
}

function subscribeHash(update) {
  var handler = getHashHandler(update);
  window.addEventListener('hashchange', handler);
  handler(update);
  return function () {
    return window.removeEventListener('hashchange', handler);
  };
}

export { Toolbar as T, subscribeHash as s };