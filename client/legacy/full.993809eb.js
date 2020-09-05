import 'core-js/modules/es.regexp.exec';
import 'core-js/modules/es.string.replace';
import 'core-js/modules/es.string.search';
import 'core-js/modules/es.symbol';
import 'core-js/modules/es.symbol.description';
import 'core-js/modules/es.symbol.iterator';
import 'core-js/modules/es.array.filter';
import 'core-js/modules/es.array.for-each';
import 'core-js/modules/es.array.iterator';
import 'core-js/modules/es.array.map';
import 'core-js/modules/es.array.reduce';
import 'core-js/modules/es.array.slice';
import 'core-js/modules/es.array.some';
import 'core-js/modules/es.date.to-string';
import 'core-js/modules/es.function.name';
import 'core-js/modules/es.object.create';
import 'core-js/modules/es.object.to-string';
import 'core-js/modules/es.promise';
import 'core-js/modules/es.regexp.to-string';
import 'core-js/modules/es.string.iterator';
import 'core-js/modules/es.string.match';
import 'core-js/modules/es.string.split';
import 'core-js/modules/es.string.starts-with';
import 'core-js/modules/web.dom-collections.for-each';
import 'core-js/modules/web.dom-collections.iterator';
import 'core-js/modules/web.timers';
import 'core-js/modules/web.url';
import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, J as onMount, K as onDestroy, v as validate_slots, M as binding_callbacks, T as bind, e as element, c as create_component, a as space, g as claim_element, h as children, k as claim_component, f as claim_space, b as detach_dev, m as attr_dev, l as add_location, n as insert_dev, p as mount_component, o as append_dev, U as add_flush_callback, u as transition_in, w as transition_out, x as destroy_component } from './client.77f152cb.js';
import 'core-js/modules/es.array.concat';
import 'core-js/modules/es.array.fill';
import 'core-js/modules/es.array.from';
import 'core-js/modules/es.array.index-of';
import 'core-js/modules/es.array.join';
import 'core-js/modules/es.array.splice';
import 'core-js/modules/es.date.now';
import 'core-js/modules/es.map';
import 'core-js/modules/es.object.assign';
import 'core-js/modules/es.object.get-own-property-descriptors';
import 'core-js/modules/es.object.keys';
import 'core-js/modules/es.parse-int';
import 'core-js/modules/es.set';
import 'core-js/modules/es.string.anchor';
import 'core-js/modules/es.array.is-array';
import 'core-js/modules/es.symbol.async-iterator';
import 'core-js/modules/es.object.define-property';
import 'core-js/modules/es.object.get-own-property-descriptor';
import 'core-js/modules/es.object.set-prototype-of';
import 'core-js/modules/es.array.reverse';
import 'core-js/modules/es.array-buffer.slice';
import 'core-js/modules/es.typed-array.copy-within';
import 'core-js/modules/es.typed-array.every';
import 'core-js/modules/es.typed-array.fill';
import 'core-js/modules/es.typed-array.filter';
import 'core-js/modules/es.typed-array.find';
import 'core-js/modules/es.typed-array.find-index';
import 'core-js/modules/es.typed-array.for-each';
import 'core-js/modules/es.typed-array.includes';
import 'core-js/modules/es.typed-array.index-of';
import 'core-js/modules/es.typed-array.iterator';
import 'core-js/modules/es.typed-array.join';
import 'core-js/modules/es.typed-array.last-index-of';
import 'core-js/modules/es.typed-array.map';
import 'core-js/modules/es.typed-array.reduce';
import 'core-js/modules/es.typed-array.reduce-right';
import 'core-js/modules/es.typed-array.reverse';
import 'core-js/modules/es.typed-array.set';
import 'core-js/modules/es.typed-array.slice';
import 'core-js/modules/es.typed-array.some';
import 'core-js/modules/es.typed-array.sort';
import 'core-js/modules/es.typed-array.subarray';
import 'core-js/modules/es.typed-array.to-locale-string';
import 'core-js/modules/es.typed-array.to-string';
import 'core-js/modules/es.array.sort';
import 'core-js/modules/es.function.bind';
import 'core-js/modules/es.date.to-iso-string';
import 'core-js/modules/es.array.find';
import 'core-js/modules/es.symbol.to-string-tag';
import 'core-js/modules/es.json.to-string-tag';
import 'core-js/modules/es.math.to-string-tag';
import 'core-js/modules/es.object.get-prototype-of';
import { M as Markmap_1 } from './markmap.df8749e4.js';
import 'core-js/modules/es.weak-map';
import 'core-js/modules/es.string.trim';
import 'core-js/modules/es.regexp.constructor';
import 'core-js/modules/es.array-buffer.constructor';
import 'core-js/modules/es.array-buffer.is-view';
import 'core-js/modules/es.data-view';
import 'core-js/modules/es.array.every';
import 'core-js/modules/es.typed-array.float32-array';
import 'core-js/modules/es.number.constructor';
import 'core-js/modules/es.number.to-fixed';
import 'core-js/modules/es.number.to-precision';
import 'core-js/modules/es.math.sign';
import 'core-js/modules/es.math.log10';
import 'core-js/modules/es.math.log2';
import 'core-js/modules/es.math.expm1';
import 'core-js/modules/es.math.log1p';
import 'core-js/modules/es.object.freeze';
import 'core-js/modules/es.array.flat-map';
import 'core-js/modules/es.array.unscopables.flat-map';
import 'core-js/modules/es.object.entries';
import 'core-js/modules/es.array.includes';
import 'core-js/modules/es.string.ends-with';
import { T as Toolbar, s as subscribeHash } from './gist.3a2e6c62.js';

/* src/routes/full.svelte generated by Svelte v3.24.1 */
const file = "src/routes/full.svelte";

function create_fragment(ctx) {
	let div;
	let markmap;
	let updating_el;
	let updating_onReset;
	let updating_onZoomIn;
	let updating_onZoomOut;
	let t;
	let toolbar;
	let current;

	function markmap_el_binding(value) {
		/*markmap_el_binding*/ ctx[5].call(null, value);
	}

	function markmap_onReset_binding(value) {
		/*markmap_onReset_binding*/ ctx[6].call(null, value);
	}

	function markmap_onZoomIn_binding(value) {
		/*markmap_onZoomIn_binding*/ ctx[7].call(null, value);
	}

	function markmap_onZoomOut_binding(value) {
		/*markmap_onZoomOut_binding*/ ctx[8].call(null, value);
	}

	let markmap_props = { content: /*content*/ ctx[1] };

	if (/*svgEl*/ ctx[0] !== void 0) {
		markmap_props.el = /*svgEl*/ ctx[0];
	}

	if (/*onReset*/ ctx[2] !== void 0) {
		markmap_props.onReset = /*onReset*/ ctx[2];
	}

	if (/*onZoomIn*/ ctx[3] !== void 0) {
		markmap_props.onZoomIn = /*onZoomIn*/ ctx[3];
	}

	if (/*onZoomOut*/ ctx[4] !== void 0) {
		markmap_props.onZoomOut = /*onZoomOut*/ ctx[4];
	}

	markmap = new Markmap_1({ props: markmap_props, $$inline: true });
	binding_callbacks.push(() => bind(markmap, "el", markmap_el_binding));
	binding_callbacks.push(() => bind(markmap, "onReset", markmap_onReset_binding));
	binding_callbacks.push(() => bind(markmap, "onZoomIn", markmap_onZoomIn_binding));
	binding_callbacks.push(() => bind(markmap, "onZoomOut", markmap_onZoomOut_binding));

	toolbar = new Toolbar({
			props: {
				class: "absolute right-0 bottom-0 mr-2 mb-2",
				isFull: true,
				showBrand: true,
				onReset: /*onReset*/ ctx[2],
				onZoomIn: /*onZoomIn*/ ctx[3],
				onZoomOut: /*onZoomOut*/ ctx[4]
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div = element("div");
			create_component(markmap.$$.fragment);
			t = space();
			create_component(toolbar.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(markmap.$$.fragment, div_nodes);
			t = claim_space(div_nodes);
			claim_component(toolbar.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "markmap-wrapper h-screen");
			add_location(div, file, 26, 0, 468);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(markmap, div, null);
			append_dev(div, t);
			mount_component(toolbar, div, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const markmap_changes = {};
			if (dirty & /*content*/ 2) markmap_changes.content = /*content*/ ctx[1];

			if (!updating_el && dirty & /*svgEl*/ 1) {
				updating_el = true;
				markmap_changes.el = /*svgEl*/ ctx[0];
				add_flush_callback(() => updating_el = false);
			}

			if (!updating_onReset && dirty & /*onReset*/ 4) {
				updating_onReset = true;
				markmap_changes.onReset = /*onReset*/ ctx[2];
				add_flush_callback(() => updating_onReset = false);
			}

			if (!updating_onZoomIn && dirty & /*onZoomIn*/ 8) {
				updating_onZoomIn = true;
				markmap_changes.onZoomIn = /*onZoomIn*/ ctx[3];
				add_flush_callback(() => updating_onZoomIn = false);
			}

			if (!updating_onZoomOut && dirty & /*onZoomOut*/ 16) {
				updating_onZoomOut = true;
				markmap_changes.onZoomOut = /*onZoomOut*/ ctx[4];
				add_flush_callback(() => updating_onZoomOut = false);
			}

			markmap.$set(markmap_changes);
			const toolbar_changes = {};
			if (dirty & /*onReset*/ 4) toolbar_changes.onReset = /*onReset*/ ctx[2];
			if (dirty & /*onZoomIn*/ 8) toolbar_changes.onZoomIn = /*onZoomIn*/ ctx[3];
			if (dirty & /*onZoomOut*/ 16) toolbar_changes.onZoomOut = /*onZoomOut*/ ctx[4];
			toolbar.$set(toolbar_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(markmap.$$.fragment, local);
			transition_in(toolbar.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(markmap.$$.fragment, local);
			transition_out(toolbar.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(markmap);
			destroy_component(toolbar);
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
	let svgEl;
	let content = "";
	let onReset;
	let onZoomIn;
	let onZoomOut;
	let revoke;

	onMount(async () => {
		revoke = subscribeHash(text => {
			$$invalidate(1, content = text);
		});
	});

	onDestroy(() => {
		if (revoke) {
			revoke();
			revoke = null;
		}
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Full> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Full", $$slots, []);

	function markmap_el_binding(value) {
		svgEl = value;
		$$invalidate(0, svgEl);
	}

	function markmap_onReset_binding(value) {
		onReset = value;
		$$invalidate(2, onReset);
	}

	function markmap_onZoomIn_binding(value) {
		onZoomIn = value;
		$$invalidate(3, onZoomIn);
	}

	function markmap_onZoomOut_binding(value) {
		onZoomOut = value;
		$$invalidate(4, onZoomOut);
	}

	$$self.$capture_state = () => ({
		onMount,
		onDestroy,
		Markmap: Markmap_1,
		Toolbar,
		subscribeHash,
		svgEl,
		content,
		onReset,
		onZoomIn,
		onZoomOut,
		revoke
	});

	$$self.$inject_state = $$props => {
		if ("svgEl" in $$props) $$invalidate(0, svgEl = $$props.svgEl);
		if ("content" in $$props) $$invalidate(1, content = $$props.content);
		if ("onReset" in $$props) $$invalidate(2, onReset = $$props.onReset);
		if ("onZoomIn" in $$props) $$invalidate(3, onZoomIn = $$props.onZoomIn);
		if ("onZoomOut" in $$props) $$invalidate(4, onZoomOut = $$props.onZoomOut);
		if ("revoke" in $$props) revoke = $$props.revoke;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		svgEl,
		content,
		onReset,
		onZoomIn,
		onZoomOut,
		markmap_el_binding,
		markmap_onReset_binding,
		markmap_onZoomIn_binding,
		markmap_onZoomOut_binding
	];
}

class Full extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Full",
			options,
			id: create_fragment.name
		});
	}
}

export default Full;
