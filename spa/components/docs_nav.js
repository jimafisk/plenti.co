/* generated by Svelte v3.32.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	destroy_block,
	detach,
	element,
	empty,
	init,
	insert,
	listen,
	noop,
	safe_not_equal,
	set_data,
	space,
	text,
	toggle_class,
	update_keyed_each
} from '../web_modules/svelte/internal/index.mjs';

import { onMount } from '../web_modules/svelte/internal/index.mjs';

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

// (37:8) {#if content.type == "docs" && !content.fields.deprecated}
function create_if_block(ctx) {
	let show_if = !/*group*/ ctx[2].includes(/*content*/ ctx[7].fields.group);
	let t0;
	let a;
	let t1_value = /*content*/ ctx[7].fields.title + "";
	let t1;
	let a_href_value;
	let mounted;
	let dispose;
	let if_block = show_if && create_if_block_1(ctx);

	function click_handler() {
		return /*click_handler*/ ctx[6](/*content*/ ctx[7]);
	}

	return {
		c() {
			if (if_block) if_block.c();
			t0 = space();
			a = element("a");
			t1 = text(t1_value);
			this.h();
		},
		l(nodes) {
			if (if_block) if_block.l(nodes);
			t0 = claim_space(nodes);
			a = claim_element(nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t1 = claim_text(a_nodes, t1_value);
			a_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a, "href", a_href_value = "/" + /*content*/ ctx[7].path);
			attr(a, "class", "nav-link svelte-1g9l032");
			toggle_class(a, "active", /*active*/ ctx[1]["/" + /*content*/ ctx[7].path]);
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, t0, anchor);
			insert(target, a, anchor);
			append(a, t1);

			if (!mounted) {
				dispose = listen(a, "click", click_handler);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*allContent*/ 1) show_if = !/*group*/ ctx[2].includes(/*content*/ ctx[7].fields.group);

			if (show_if) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					if_block.m(t0.parentNode, t0);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*allContent*/ 1 && t1_value !== (t1_value = /*content*/ ctx[7].fields.title + "")) set_data(t1, t1_value);

			if (dirty & /*allContent*/ 1 && a_href_value !== (a_href_value = "/" + /*content*/ ctx[7].path)) {
				attr(a, "href", a_href_value);
			}

			if (dirty & /*active, allContent, sortNav*/ 19) {
				toggle_class(a, "active", /*active*/ ctx[1]["/" + /*content*/ ctx[7].path]);
			}
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach(t0);
			if (detaching) detach(a);
			mounted = false;
			dispose();
		}
	};
}

// (38:12) {#if !group.includes(content.fields.group)}
function create_if_block_1(ctx) {
	let strong;
	let t_value = /*addGroup*/ ctx[3](/*content*/ ctx[7].fields.group) + "";
	let t;

	return {
		c() {
			strong = element("strong");
			t = text(t_value);
			this.h();
		},
		l(nodes) {
			strong = claim_element(nodes, "STRONG", { class: true });
			var strong_nodes = children(strong);
			t = claim_text(strong_nodes, t_value);
			strong_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(strong, "class", "svelte-1g9l032");
		},
		m(target, anchor) {
			insert(target, strong, anchor);
			append(strong, t);
		},
		p(ctx, dirty) {
			if (dirty & /*allContent*/ 1 && t_value !== (t_value = /*addGroup*/ ctx[3](/*content*/ ctx[7].fields.group) + "")) set_data(t, t_value);
		},
		d(detaching) {
			if (detaching) detach(strong);
		}
	};
}

// (36:4) {#each allContent.sort(sortNav) as content (content.path)}
function create_each_block(key_1, ctx) {
	let first;
	let if_block_anchor;
	let if_block = /*content*/ ctx[7].type == "docs" && !/*content*/ ctx[7].fields.deprecated && create_if_block(ctx);

	return {
		key: key_1,
		first: null,
		c() {
			first = empty();
			if (if_block) if_block.c();
			if_block_anchor = empty();
			this.h();
		},
		l(nodes) {
			first = empty();
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},
		h() {
			this.first = first;
		},
		m(target, anchor) {
			insert(target, first, anchor);
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (/*content*/ ctx[7].type == "docs" && !/*content*/ ctx[7].fields.deprecated) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d(detaching) {
			if (detaching) detach(first);
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let each_value = /*allContent*/ ctx[0].sort(/*sortNav*/ ctx[4]);
	const get_key = ctx => /*content*/ ctx[7].path;

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	return {
		c() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div, "class", "sidebar svelte-1g9l032");
		},
		m(target, anchor) {
			insert(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*allContent, sortNav, active, setActive, addGroup, group*/ 63) {
				each_value = /*allContent*/ ctx[0].sort(/*sortNav*/ ctx[4]);
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div, destroy_block, create_each_block, null, get_each_context);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { allContent } = $$props;
	let group = [];

	const addGroup = newGroup => {
		group.push(newGroup);
		return newGroup;
	};

	const sortNav = (a, b) => {
		if (typeof a.fields.order !== "undefined" && typeof b.fields.order !== "undefined") {
			return a.fields.order - b.fields.order;
		}

		return -1;
	};

	let active = [];

	const setActive = path => {
		$$invalidate(1, active = []);

		setTimeout(
			function () {
				if (path === window.location.pathname) {
					$$invalidate(1, active[path] = true, active);
				}
			},
			100
		);
	};

	onMount(async () => {
		let initialPath = await window.location.pathname;

		if (initialPath.length > 1 && initialPath.slice(-1) === "/") {
			initialPath = initialPath.slice(0, -1); // remove trailing slash.
		}

		$$invalidate(1, active[initialPath] = true, active);
	});

	const click_handler = content => setActive("/" + content.path);

	$$self.$$set = $$props => {
		if ("allContent" in $$props) $$invalidate(0, allContent = $$props.allContent);
	};

	return [allContent, active, group, addGroup, sortNav, setActive, click_handler];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { allContent: 0 });
	}
}

export default Component;