/* generated by Svelte v3.32.3 */
import {
	SvelteComponent,
	append,
	attr,
	check_outros,
	children,
	claim_component,
	claim_element,
	claim_space,
	claim_text,
	create_component,
	destroy_component,
	destroy_each,
	detach,
	element,
	group_outros,
	init,
	insert,
	listen,
	mount_component,
	noop,
	safe_not_equal,
	set_data,
	space,
	text,
	transition_in,
	transition_out
} from '/spa/web_modules/svelte/internal/index.mjs';

import Linux from '/spa/components/linux.js';
import Mac from '/spa/components/mac.js';
import Windows from '/spa/components/windows.js';
import { onMount } from '/spa/web_modules/svelte/internal/index.mjs';

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[10] = list[i];
	return child_ctx;
}

function get_each_context_2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[13] = list[i];
	return child_ctx;
}

// (48:2) {#if description}
function create_if_block_10(ctx) {
	let div;
	let each_value_2 = /*description*/ ctx[1];
	let each_blocks = [];

	for (let i = 0; i < each_value_2.length; i += 1) {
		each_blocks[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
	}

	return {
		c() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach);
		},
		m(target, anchor) {
			insert(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p(ctx, dirty) {
			if (dirty & /*description*/ 2) {
				each_value_2 = /*description*/ ctx[1];
				let i;

				for (i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2(ctx, each_value_2, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_2(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_2.length;
			}
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_each(each_blocks, detaching);
		}
	};
}

// (50:4) {#each description as paragraph}
function create_each_block_2(ctx) {
	let p;
	let raw_value = /*paragraph*/ ctx[13] + "";

	return {
		c() {
			p = element("p");
		},
		l(nodes) {
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			p_nodes.forEach(detach);
		},
		m(target, anchor) {
			insert(target, p, anchor);
			p.innerHTML = raw_value;
		},
		p(ctx, dirty) {
			if (dirty & /*description*/ 2 && raw_value !== (raw_value = /*paragraph*/ ctx[13] + "")) p.innerHTML = raw_value;;
		},
		d(detaching) {
			if (detaching) detach(p);
		}
	};
}

// (56:2) {#if themes}
function create_if_block_9(ctx) {
	let section;
	let each_value_1 = /*themes*/ ctx[2];
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	return {
		c() {
			section = element("section");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l(nodes) {
			section = claim_element(nodes, "SECTION", { id: true, class: true });
			var section_nodes = children(section);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(section_nodes);
			}

			section_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(section, "id", "themes");
			attr(section, "class", "svelte-1oxlflm");
		},
		m(target, anchor) {
			insert(target, section, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(section, null);
			}
		},
		p(ctx, dirty) {
			if (dirty & /*themes*/ 4) {
				each_value_1 = /*themes*/ ctx[2];
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(section, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
			}
		},
		d(detaching) {
			if (detaching) detach(section);
			destroy_each(each_blocks, detaching);
		}
	};
}

// (58:4) {#each themes as theme}
function create_each_block_1(ctx) {
	let img;
	let img_src_value;

	return {
		c() {
			img = element("img");
			this.h();
		},
		l(nodes) {
			img = claim_element(nodes, "IMG", { src: true, class: true });
			this.h();
		},
		h() {
			if (img.src !== (img_src_value = "/assets/themes/" + /*theme*/ ctx[10])) attr(img, "src", img_src_value);
			attr(img, "class", "svelte-1oxlflm");
		},
		m(target, anchor) {
			insert(target, img, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*themes*/ 4 && img.src !== (img_src_value = "/assets/themes/" + /*theme*/ ctx[10])) {
				attr(img, "src", img_src_value);
			}
		},
		d(detaching) {
			if (detaching) detach(img);
		}
	};
}

// (64:2) {#if os}
function create_if_block(ctx) {
	let section0;
	let t0;
	let section1;
	let t1;
	let section2;
	let current;
	let each_value = /*os*/ ctx[3];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	function select_block_type_1(ctx, dirty) {
		if (/*OSName*/ ctx[4] == "Linux" || /*OSName*/ ctx[4] == "Mac") return create_if_block_4;
		if (/*OSName*/ ctx[4] == "Windows") return create_if_block_5;
		return create_else_block_1;
	}

	let current_block_type = select_block_type_1(ctx, -1);
	let if_block0 = current_block_type(ctx);

	function select_block_type_2(ctx, dirty) {
		if (/*OSName*/ ctx[4] == "Linux") return create_if_block_1;
		if (/*OSName*/ ctx[4] == "Mac") return create_if_block_2;
		if (/*OSName*/ ctx[4] == "Windows") return create_if_block_3;
		return create_else_block;
	}

	let current_block_type_1 = select_block_type_2(ctx, -1);
	let if_block1 = current_block_type_1(ctx);

	return {
		c() {
			section0 = element("section");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t0 = space();
			section1 = element("section");
			if_block0.c();
			t1 = space();
			section2 = element("section");
			if_block1.c();
			this.h();
		},
		l(nodes) {
			section0 = claim_element(nodes, "SECTION", { id: true, class: true });
			var section0_nodes = children(section0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(section0_nodes);
			}

			section0_nodes.forEach(detach);
			t0 = claim_space(nodes);
			section1 = claim_element(nodes, "SECTION", { id: true, class: true });
			var section1_nodes = children(section1);
			if_block0.l(section1_nodes);
			section1_nodes.forEach(detach);
			t1 = claim_space(nodes);
			section2 = claim_element(nodes, "SECTION", { id: true });
			var section2_nodes = children(section2);
			if_block1.l(section2_nodes);
			section2_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(section0, "id", "download");
			attr(section0, "class", "svelte-1oxlflm");
			attr(section1, "id", "detection");
			attr(section1, "class", "svelte-1oxlflm");
			attr(section2, "id", "instructions");
		},
		m(target, anchor) {
			insert(target, section0, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(section0, null);
			}

			insert(target, t0, anchor);
			insert(target, section1, anchor);
			if_block0.m(section1, null);
			insert(target, t1, anchor);
			insert(target, section2, anchor);
			if_block1.m(section2, null);
			current = true;
		},
		p(ctx, dirty) {
			if (dirty & /*os, OSName*/ 24) {
				each_value = /*os*/ ctx[3];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(section0, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}

			if (current_block_type === (current_block_type = select_block_type_1(ctx, dirty)) && if_block0) {
				if_block0.p(ctx, dirty);
			} else {
				if_block0.d(1);
				if_block0 = current_block_type(ctx);

				if (if_block0) {
					if_block0.c();
					if_block0.m(section1, null);
				}
			}

			if (current_block_type_1 !== (current_block_type_1 = select_block_type_2(ctx, dirty))) {
				if_block1.d(1);
				if_block1 = current_block_type_1(ctx);

				if (if_block1) {
					if_block1.c();
					if_block1.m(section2, null);
				}
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) detach(section0);
			destroy_each(each_blocks, detaching);
			if (detaching) detach(t0);
			if (detaching) detach(section1);
			if_block0.d();
			if (detaching) detach(t1);
			if (detaching) detach(section2);
			if_block1.d();
		}
	};
}

// (74:8) {:else}
function create_else_block_2(ctx) {
	let strong;
	let t;

	return {
		c() {
			strong = element("strong");
			t = text("We can't determine what Operating System you're on.");
		},
		l(nodes) {
			strong = claim_element(nodes, "STRONG", {});
			var strong_nodes = children(strong);
			t = claim_text(strong_nodes, "We can't determine what Operating System you're on.");
			strong_nodes.forEach(detach);
		},
		m(target, anchor) {
			insert(target, strong, anchor);
			append(strong, t);
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(strong);
		}
	};
}

// (72:47) 
function create_if_block_8(ctx) {
	let windows;
	let current;
	windows = new Windows({});

	return {
		c() {
			create_component(windows.$$.fragment);
		},
		l(nodes) {
			claim_component(windows.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(windows, target, anchor);
			current = true;
		},
		i(local) {
			if (current) return;
			transition_in(windows.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(windows.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(windows, detaching);
		}
	};
}

// (70:43) 
function create_if_block_7(ctx) {
	let mac;
	let current;
	mac = new Mac({});

	return {
		c() {
			create_component(mac.$$.fragment);
		},
		l(nodes) {
			claim_component(mac.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(mac, target, anchor);
			current = true;
		},
		i(local) {
			if (current) return;
			transition_in(mac.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(mac.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(mac, detaching);
		}
	};
}

// (68:8) {#if currentOs.title == 'Linux'}
function create_if_block_6(ctx) {
	let linux;
	let current;
	linux = new Linux({});

	return {
		c() {
			create_component(linux.$$.fragment);
		},
		l(nodes) {
			claim_component(linux.$$.fragment, nodes);
		},
		m(target, anchor) {
			mount_component(linux, target, anchor);
			current = true;
		},
		i(local) {
			if (current) return;
			transition_in(linux.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(linux.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(linux, detaching);
		}
	};
}

// (66:4) {#each os as currentOs}
function create_each_block(ctx) {
	let div1;
	let current_block_type_index;
	let if_block;
	let t0;
	let div0;
	let t1_value = /*currentOs*/ ctx[7].title + "";
	let t1;
	let t2;
	let div1_class_value;
	let current;
	let mounted;
	let dispose;
	const if_block_creators = [create_if_block_6, create_if_block_7, create_if_block_8, create_else_block_2];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*currentOs*/ ctx[7].title == "Linux") return 0;
		if (/*currentOs*/ ctx[7].title == "Mac") return 1;
		if (/*currentOs*/ ctx[7].title == "Windows") return 2;
		return 3;
	}

	current_block_type_index = select_block_type(ctx, -1);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	function click_handler() {
		return /*click_handler*/ ctx[6](/*currentOs*/ ctx[7]);
	}

	return {
		c() {
			div1 = element("div");
			if_block.c();
			t0 = space();
			div0 = element("div");
			t1 = text(t1_value);
			t2 = space();
			this.h();
		},
		l(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			if_block.l(div1_nodes);
			t0 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t1 = claim_text(div0_nodes, t1_value);
			div0_nodes.forEach(detach);
			t2 = claim_space(div1_nodes);
			div1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "os-name svelte-1oxlflm");

			attr(div1, "class", div1_class_value = "os" + (/*currentOs*/ ctx[7].title == /*OSName*/ ctx[4]
			? " primary"
			: "") + " svelte-1oxlflm");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			if_blocks[current_block_type_index].m(div1, null);
			append(div1, t0);
			append(div1, div0);
			append(div0, t1);
			append(div1, t2);
			current = true;

			if (!mounted) {
				dispose = listen(div1, "click", click_handler);
				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx, dirty);

			if (current_block_type_index !== previous_block_index) {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					
				}

				transition_in(if_block, 1);
				if_block.m(div1, t0);
			}

			if ((!current || dirty & /*os*/ 8) && t1_value !== (t1_value = /*currentOs*/ ctx[7].title + "")) set_data(t1, t1_value);

			if (!current || dirty & /*os, OSName*/ 24 && div1_class_value !== (div1_class_value = "os" + (/*currentOs*/ ctx[7].title == /*OSName*/ ctx[4]
			? " primary"
			: "") + " svelte-1oxlflm")) {
				attr(div1, "class", div1_class_value);
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div1);
			if_blocks[current_block_type_index].d();
			mounted = false;
			dispose();
		}
	};
}

// (91:6) {:else}
function create_else_block_1(ctx) {
	let div0;
	let a;
	let t0;
	let t1;
	let div1;
	let t2;

	return {
		c() {
			div0 = element("div");
			a = element("a");
			t0 = text("See the latest releases");
			t1 = space();
			div1 = element("div");
			t2 = text("Or use one of the package managers below...");
			this.h();
		},
		l(nodes) {
			div0 = claim_element(nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			a = claim_element(div0_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t0 = claim_text(a_nodes, "See the latest releases");
			a_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t1 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			t2 = claim_text(div1_nodes, "Or use one of the package managers below...");
			div1_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a, "href", "https://github.com/plentico/plenti/releases/latest");
			attr(a, "class", "svelte-1oxlflm");
			attr(div0, "class", "selected svelte-1oxlflm");
			attr(div1, "class", "instructions svelte-1oxlflm");
		},
		m(target, anchor) {
			insert(target, div0, anchor);
			append(div0, a);
			append(a, t0);
			insert(target, t1, anchor);
			insert(target, div1, anchor);
			append(div1, t2);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(div0);
			if (detaching) detach(t1);
			if (detaching) detach(div1);
		}
	};
}

// (87:36) 
function create_if_block_5(ctx) {
	let div0;
	let t0;
	let t1;
	let t2;
	let t3;
	let div1;
	let strong0;
	let t4;
	let t5;
	let div2;
	let t6;
	let a;
	let t7;
	let t8;
	let strong1;

	return {
		c() {
			div0 = element("div");
			t0 = text("It looks like you're using a ");
			t1 = text(/*OSName*/ ctx[4]);
			t2 = text(" computer.");
			t3 = space();
			div1 = element("div");
			strong0 = element("strong");
			t4 = text("Unfortunately Windows is not currently supported.");
			t5 = space();
			div2 = element("div");
			t6 = text("If you'd like to help add Windows support, please see more details ");
			a = element("a");
			t7 = text("here");
			t8 = text(".");
			strong1 = element("strong");
			this.h();
		},
		l(nodes) {
			div0 = claim_element(nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, "It looks like you're using a ");
			t1 = claim_text(div0_nodes, /*OSName*/ ctx[4]);
			t2 = claim_text(div0_nodes, " computer.");
			div0_nodes.forEach(detach);
			t3 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			strong0 = claim_element(div1_nodes, "STRONG", {});
			var strong0_nodes = children(strong0);
			t4 = claim_text(strong0_nodes, "Unfortunately Windows is not currently supported.");
			strong0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			t5 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			t6 = claim_text(div2_nodes, "If you'd like to help add Windows support, please see more details ");

			a = claim_element(div2_nodes, "A", {
				href: true,
				target: true,
				rel: true,
				class: true
			});

			var a_nodes = children(a);
			t7 = claim_text(a_nodes, "here");
			a_nodes.forEach(detach);
			t8 = claim_text(div2_nodes, ".");
			strong1 = claim_element(div2_nodes, "STRONG", {});
			children(strong1).forEach(detach);
			div2_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "selected svelte-1oxlflm");
			attr(div1, "class", "selected svelte-1oxlflm");
			attr(a, "href", "https://github.com/plentico/plenti/issues/45");
			attr(a, "target", "blank");
			attr(a, "rel", "noopener noreferrer");
			attr(a, "class", "svelte-1oxlflm");
			attr(div2, "class", "selected svelte-1oxlflm");
		},
		m(target, anchor) {
			insert(target, div0, anchor);
			append(div0, t0);
			append(div0, t1);
			append(div0, t2);
			insert(target, t3, anchor);
			insert(target, div1, anchor);
			append(div1, strong0);
			append(strong0, t4);
			insert(target, t5, anchor);
			insert(target, div2, anchor);
			append(div2, t6);
			append(div2, a);
			append(a, t7);
			append(div2, t8);
			append(div2, strong1);
		},
		p(ctx, dirty) {
			if (dirty & /*OSName*/ 16) set_data(t1, /*OSName*/ ctx[4]);
		},
		d(detaching) {
			if (detaching) detach(div0);
			if (detaching) detach(t3);
			if (detaching) detach(div1);
			if (detaching) detach(t5);
			if (detaching) detach(div2);
		}
	};
}

// (82:6) {#if OSName == 'Linux' || OSName == 'Mac'}
function create_if_block_4(ctx) {
	let div0;
	let t0;
	let t1;
	let t2;
	let t3;
	let div1;
	let t4;
	let t5;
	let a0;
	let t6;
	let br0;
	let strong;
	let t7;
	let t8;
	let br1;
	let t9;
	let t10;
	let a0_href_value;
	let t11;
	let div2;
	let t12;
	let a1;
	let t13;
	let t14;

	return {
		c() {
			div0 = element("div");
			t0 = text("It looks like you're using a ");
			t1 = text(/*OSName*/ ctx[4]);
			t2 = text(" computer.");
			t3 = space();
			div1 = element("div");
			t4 = text("If that's not the case, choose a different Operating System above.");
			t5 = space();
			a0 = element("a");
			t6 = text("Download");
			br0 = element("br");
			strong = element("strong");
			t7 = text("version ");
			t8 = text(/*version*/ ctx[5]);
			br1 = element("br");
			t9 = text("for 64-bit ");
			t10 = text(/*OSName*/ ctx[4]);
			t11 = space();
			div2 = element("div");
			t12 = text("(");
			a1 = element("a");
			t13 = text("See more options");
			t14 = text(")");
			this.h();
		},
		l(nodes) {
			div0 = claim_element(nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, "It looks like you're using a ");
			t1 = claim_text(div0_nodes, /*OSName*/ ctx[4]);
			t2 = claim_text(div0_nodes, " computer.");
			div0_nodes.forEach(detach);
			t3 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			t4 = claim_text(div1_nodes, "If that's not the case, choose a different Operating System above.");
			div1_nodes.forEach(detach);
			t5 = claim_space(nodes);
			a0 = claim_element(nodes, "A", { class: true, href: true });
			var a0_nodes = children(a0);
			t6 = claim_text(a0_nodes, "Download");
			br0 = claim_element(a0_nodes, "BR", {});
			strong = claim_element(a0_nodes, "STRONG", {});
			var strong_nodes = children(strong);
			t7 = claim_text(strong_nodes, "version ");
			t8 = claim_text(strong_nodes, /*version*/ ctx[5]);
			strong_nodes.forEach(detach);
			br1 = claim_element(a0_nodes, "BR", {});
			t9 = claim_text(a0_nodes, "for 64-bit ");
			t10 = claim_text(a0_nodes, /*OSName*/ ctx[4]);
			a0_nodes.forEach(detach);
			t11 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", {});
			var div2_nodes = children(div2);
			t12 = claim_text(div2_nodes, "(");
			a1 = claim_element(div2_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t13 = claim_text(a1_nodes, "See more options");
			a1_nodes.forEach(detach);
			t14 = claim_text(div2_nodes, ")");
			div2_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "class", "selected svelte-1oxlflm");
			attr(div1, "class", "instructions svelte-1oxlflm");
			attr(a0, "class", "cta svelte-1oxlflm");
			attr(a0, "href", a0_href_value = "https://github.com/plentico/plenti/releases/download/v" + /*version*/ ctx[5] + "/plenti_" + /*version*/ ctx[5] + "_" + /*OSName*/ ctx[4] + "_64-bit.tar.gz");
			attr(a1, "href", "https://github.com/plentico/plenti/releases/latest");
			attr(a1, "class", "svelte-1oxlflm");
		},
		m(target, anchor) {
			insert(target, div0, anchor);
			append(div0, t0);
			append(div0, t1);
			append(div0, t2);
			insert(target, t3, anchor);
			insert(target, div1, anchor);
			append(div1, t4);
			insert(target, t5, anchor);
			insert(target, a0, anchor);
			append(a0, t6);
			append(a0, br0);
			append(a0, strong);
			append(strong, t7);
			append(strong, t8);
			append(a0, br1);
			append(a0, t9);
			append(a0, t10);
			insert(target, t11, anchor);
			insert(target, div2, anchor);
			append(div2, t12);
			append(div2, a1);
			append(a1, t13);
			append(div2, t14);
		},
		p(ctx, dirty) {
			if (dirty & /*OSName*/ 16) set_data(t1, /*OSName*/ ctx[4]);
			if (dirty & /*version*/ 32) set_data(t8, /*version*/ ctx[5]);
			if (dirty & /*OSName*/ 16) set_data(t10, /*OSName*/ ctx[4]);

			if (dirty & /*version, OSName*/ 48 && a0_href_value !== (a0_href_value = "https://github.com/plentico/plenti/releases/download/v" + /*version*/ ctx[5] + "/plenti_" + /*version*/ ctx[5] + "_" + /*OSName*/ ctx[4] + "_64-bit.tar.gz")) {
				attr(a0, "href", a0_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(div0);
			if (detaching) detach(t3);
			if (detaching) detach(div1);
			if (detaching) detach(t5);
			if (detaching) detach(a0);
			if (detaching) detach(t11);
			if (detaching) detach(div2);
		}
	};
}

// (114:6) {:else}
function create_else_block(ctx) {
	let strong0;
	let t0;
	let br0;
	let br1;
	let t1;
	let codeblock0;
	let t2;
	let t3;
	let strong1;
	let t4;
	let br2;
	let br3;
	let t5;
	let codeblock1;
	let t6;
	let br4;
	let t7;
	let t8;
	let strong2;
	let t9;
	let br5;
	let br6;
	let t10;
	let codeblock2;
	let t11;
	let br7;
	let t12;

	return {
		c() {
			strong0 = element("strong");
			t0 = text("Install using Snap:");
			br0 = element("br");
			br1 = element("br");
			t1 = space();
			codeblock0 = element("codeblock");
			t2 = text("sudo snap install plenti");
			t3 = space();
			strong1 = element("strong");
			t4 = text("Install using Homebrew:");
			br2 = element("br");
			br3 = element("br");
			t5 = space();
			codeblock1 = element("codeblock");
			t6 = text("brew tap plentico/homebrew-plenti\n          ");
			br4 = element("br");
			t7 = text("brew install plenti");
			t8 = space();
			strong2 = element("strong");
			t9 = text("Install using Scoop:");
			br5 = element("br");
			br6 = element("br");
			t10 = space();
			codeblock2 = element("codeblock");
			t11 = text("scoop bucket add org https://github.com/plentico/scoop-plenti.git\n          ");
			br7 = element("br");
			t12 = text("scoop install plentico/scoop-plenti");
		},
		l(nodes) {
			strong0 = claim_element(nodes, "STRONG", {});
			var strong0_nodes = children(strong0);
			t0 = claim_text(strong0_nodes, "Install using Snap:");
			strong0_nodes.forEach(detach);
			br0 = claim_element(nodes, "BR", {});
			br1 = claim_element(nodes, "BR", {});
			t1 = claim_space(nodes);
			codeblock0 = claim_element(nodes, "CODEBLOCK", {});
			var codeblock0_nodes = children(codeblock0);
			t2 = claim_text(codeblock0_nodes, "sudo snap install plenti");
			codeblock0_nodes.forEach(detach);
			t3 = claim_space(nodes);
			strong1 = claim_element(nodes, "STRONG", {});
			var strong1_nodes = children(strong1);
			t4 = claim_text(strong1_nodes, "Install using Homebrew:");
			strong1_nodes.forEach(detach);
			br2 = claim_element(nodes, "BR", {});
			br3 = claim_element(nodes, "BR", {});
			t5 = claim_space(nodes);
			codeblock1 = claim_element(nodes, "CODEBLOCK", {});
			var codeblock1_nodes = children(codeblock1);
			t6 = claim_text(codeblock1_nodes, "brew tap plentico/homebrew-plenti\n          ");
			br4 = claim_element(codeblock1_nodes, "BR", {});
			t7 = claim_text(codeblock1_nodes, "brew install plenti");
			codeblock1_nodes.forEach(detach);
			t8 = claim_space(nodes);
			strong2 = claim_element(nodes, "STRONG", {});
			var strong2_nodes = children(strong2);
			t9 = claim_text(strong2_nodes, "Install using Scoop:");
			strong2_nodes.forEach(detach);
			br5 = claim_element(nodes, "BR", {});
			br6 = claim_element(nodes, "BR", {});
			t10 = claim_space(nodes);
			codeblock2 = claim_element(nodes, "CODEBLOCK", {});
			var codeblock2_nodes = children(codeblock2);
			t11 = claim_text(codeblock2_nodes, "scoop bucket add org https://github.com/plentico/scoop-plenti.git\n          ");
			br7 = claim_element(codeblock2_nodes, "BR", {});
			t12 = claim_text(codeblock2_nodes, "scoop install plentico/scoop-plenti");
			codeblock2_nodes.forEach(detach);
		},
		m(target, anchor) {
			insert(target, strong0, anchor);
			append(strong0, t0);
			insert(target, br0, anchor);
			insert(target, br1, anchor);
			insert(target, t1, anchor);
			insert(target, codeblock0, anchor);
			append(codeblock0, t2);
			insert(target, t3, anchor);
			insert(target, strong1, anchor);
			append(strong1, t4);
			insert(target, br2, anchor);
			insert(target, br3, anchor);
			insert(target, t5, anchor);
			insert(target, codeblock1, anchor);
			append(codeblock1, t6);
			append(codeblock1, br4);
			append(codeblock1, t7);
			insert(target, t8, anchor);
			insert(target, strong2, anchor);
			append(strong2, t9);
			insert(target, br5, anchor);
			insert(target, br6, anchor);
			insert(target, t10, anchor);
			insert(target, codeblock2, anchor);
			append(codeblock2, t11);
			append(codeblock2, br7);
			append(codeblock2, t12);
		},
		d(detaching) {
			if (detaching) detach(strong0);
			if (detaching) detach(br0);
			if (detaching) detach(br1);
			if (detaching) detach(t1);
			if (detaching) detach(codeblock0);
			if (detaching) detach(t3);
			if (detaching) detach(strong1);
			if (detaching) detach(br2);
			if (detaching) detach(br3);
			if (detaching) detach(t5);
			if (detaching) detach(codeblock1);
			if (detaching) detach(t8);
			if (detaching) detach(strong2);
			if (detaching) detach(br5);
			if (detaching) detach(br6);
			if (detaching) detach(t10);
			if (detaching) detach(codeblock2);
		}
	};
}

// (108:36) 
function create_if_block_3(ctx) {
	let strong;
	let t0;
	let br0;
	let br1;
	let t1;
	let codeblock;
	let t2;
	let br2;
	let t3;

	return {
		c() {
			strong = element("strong");
			t0 = text("Or you can install using Scoop (Currently not supported):");
			br0 = element("br");
			br1 = element("br");
			t1 = space();
			codeblock = element("codeblock");
			t2 = text("scoop bucket add org https://github.com/plentico/scoop-plenti.git\n          ");
			br2 = element("br");
			t3 = text("scoop install plentico/scoop-plenti");
		},
		l(nodes) {
			strong = claim_element(nodes, "STRONG", {});
			var strong_nodes = children(strong);
			t0 = claim_text(strong_nodes, "Or you can install using Scoop (Currently not supported):");
			strong_nodes.forEach(detach);
			br0 = claim_element(nodes, "BR", {});
			br1 = claim_element(nodes, "BR", {});
			t1 = claim_space(nodes);
			codeblock = claim_element(nodes, "CODEBLOCK", {});
			var codeblock_nodes = children(codeblock);
			t2 = claim_text(codeblock_nodes, "scoop bucket add org https://github.com/plentico/scoop-plenti.git\n          ");
			br2 = claim_element(codeblock_nodes, "BR", {});
			t3 = claim_text(codeblock_nodes, "scoop install plentico/scoop-plenti");
			codeblock_nodes.forEach(detach);
		},
		m(target, anchor) {
			insert(target, strong, anchor);
			append(strong, t0);
			insert(target, br0, anchor);
			insert(target, br1, anchor);
			insert(target, t1, anchor);
			insert(target, codeblock, anchor);
			append(codeblock, t2);
			append(codeblock, br2);
			append(codeblock, t3);
		},
		d(detaching) {
			if (detaching) detach(strong);
			if (detaching) detach(br0);
			if (detaching) detach(br1);
			if (detaching) detach(t1);
			if (detaching) detach(codeblock);
		}
	};
}

// (102:32) 
function create_if_block_2(ctx) {
	let strong;
	let t0;
	let br0;
	let br1;
	let t1;
	let codeblock;
	let t2;
	let br2;
	let t3;

	return {
		c() {
			strong = element("strong");
			t0 = text("Or you can install using Homebrew:");
			br0 = element("br");
			br1 = element("br");
			t1 = space();
			codeblock = element("codeblock");
			t2 = text("brew tap plentico/homebrew-plenti\n          ");
			br2 = element("br");
			t3 = text("brew install plenti");
		},
		l(nodes) {
			strong = claim_element(nodes, "STRONG", {});
			var strong_nodes = children(strong);
			t0 = claim_text(strong_nodes, "Or you can install using Homebrew:");
			strong_nodes.forEach(detach);
			br0 = claim_element(nodes, "BR", {});
			br1 = claim_element(nodes, "BR", {});
			t1 = claim_space(nodes);
			codeblock = claim_element(nodes, "CODEBLOCK", {});
			var codeblock_nodes = children(codeblock);
			t2 = claim_text(codeblock_nodes, "brew tap plentico/homebrew-plenti\n          ");
			br2 = claim_element(codeblock_nodes, "BR", {});
			t3 = claim_text(codeblock_nodes, "brew install plenti");
			codeblock_nodes.forEach(detach);
		},
		m(target, anchor) {
			insert(target, strong, anchor);
			append(strong, t0);
			insert(target, br0, anchor);
			insert(target, br1, anchor);
			insert(target, t1, anchor);
			insert(target, codeblock, anchor);
			append(codeblock, t2);
			append(codeblock, br2);
			append(codeblock, t3);
		},
		d(detaching) {
			if (detaching) detach(strong);
			if (detaching) detach(br0);
			if (detaching) detach(br1);
			if (detaching) detach(t1);
			if (detaching) detach(codeblock);
		}
	};
}

// (97:6) {#if OSName == 'Linux'}
function create_if_block_1(ctx) {
	let strong;
	let t0;
	let br0;
	let br1;
	let t1;
	let codeblock;
	let t2;

	return {
		c() {
			strong = element("strong");
			t0 = text("Or you can install using Snap:");
			br0 = element("br");
			br1 = element("br");
			t1 = space();
			codeblock = element("codeblock");
			t2 = text("sudo snap install plenti");
		},
		l(nodes) {
			strong = claim_element(nodes, "STRONG", {});
			var strong_nodes = children(strong);
			t0 = claim_text(strong_nodes, "Or you can install using Snap:");
			strong_nodes.forEach(detach);
			br0 = claim_element(nodes, "BR", {});
			br1 = claim_element(nodes, "BR", {});
			t1 = claim_space(nodes);
			codeblock = claim_element(nodes, "CODEBLOCK", {});
			var codeblock_nodes = children(codeblock);
			t2 = claim_text(codeblock_nodes, "sudo snap install plenti");
			codeblock_nodes.forEach(detach);
		},
		m(target, anchor) {
			insert(target, strong, anchor);
			append(strong, t0);
			insert(target, br0, anchor);
			insert(target, br1, anchor);
			insert(target, t1, anchor);
			insert(target, codeblock, anchor);
			append(codeblock, t2);
		},
		d(detaching) {
			if (detaching) detach(strong);
			if (detaching) detach(br0);
			if (detaching) detach(br1);
			if (detaching) detach(t1);
			if (detaching) detach(codeblock);
		}
	};
}

function create_fragment(ctx) {
	let div;
	let h1;
	let t0;
	let t1;
	let t2;
	let t3;
	let current;
	let if_block0 = /*description*/ ctx[1] && create_if_block_10(ctx);
	let if_block1 = /*themes*/ ctx[2] && create_if_block_9(ctx);
	let if_block2 = /*os*/ ctx[3] && create_if_block(ctx);

	return {
		c() {
			div = element("div");
			h1 = element("h1");
			t0 = text(/*title*/ ctx[0]);
			t1 = space();
			if (if_block0) if_block0.c();
			t2 = space();
			if (if_block1) if_block1.c();
			t3 = space();
			if (if_block2) if_block2.c();
			this.h();
		},
		l(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			h1 = claim_element(div_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, /*title*/ ctx[0]);
			h1_nodes.forEach(detach);
			t1 = claim_space(div_nodes);
			if (if_block0) if_block0.l(div_nodes);
			t2 = claim_space(div_nodes);
			if (if_block1) if_block1.l(div_nodes);
			t3 = claim_space(div_nodes);
			if (if_block2) if_block2.l(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(h1, "class", "svelte-1oxlflm");
			attr(div, "class", "container");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			append(div, h1);
			append(h1, t0);
			append(div, t1);
			if (if_block0) if_block0.m(div, null);
			append(div, t2);
			if (if_block1) if_block1.m(div, null);
			append(div, t3);
			if (if_block2) if_block2.m(div, null);
			current = true;
		},
		p(ctx, [dirty]) {
			if (!current || dirty & /*title*/ 1) set_data(t0, /*title*/ ctx[0]);

			if (/*description*/ ctx[1]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_10(ctx);
					if_block0.c();
					if_block0.m(div, t2);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (/*themes*/ ctx[2]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block_9(ctx);
					if_block1.c();
					if_block1.m(div, t3);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (/*os*/ ctx[3]) {
				if (if_block2) {
					if_block2.p(ctx, dirty);

					if (dirty & /*os*/ 8) {
						transition_in(if_block2, 1);
					}
				} else {
					if_block2 = create_if_block(ctx);
					if_block2.c();
					transition_in(if_block2, 1);
					if_block2.m(div, null);
				}
			} else if (if_block2) {
				group_outros();

				transition_out(if_block2, 1, 1, () => {
					if_block2 = null;
				});

				check_outros();
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block2);
			current = true;
		},
		o(local) {
			transition_out(if_block2);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { title } = $$props,
		{ description } = $$props,
		{ themes } = $$props,
		{ os } = $$props;

	let OSName = "";
	let version = "";

	onMount(async () => {
		const usersOS = await navigator.appVersion;

		if (usersOS.indexOf("Win") != -1) {
			$$invalidate(4, OSName = "Windows");
		}

		if (usersOS.indexOf("Mac") != -1) {
			$$invalidate(4, OSName = "Mac");
		}

		if (usersOS.indexOf("Linux") != -1 || usersOS.indexOf("5.0 (X11)") != -1) {
			$$invalidate(4, OSName = "Linux");
		}

		// Get latest release version.
		try {
			let response = await fetch("https://api.github.com/repos/plentico/plenti/releases", {
				mode: "cors",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
				}
			});

			if (response.ok) {
				let json = await response.json();
				$$invalidate(5, version = json[0].name.substr(1));
			} else {
				alert("HTTP-Error: " + response.status);
			}
		} catch(err) {
			console.log(err); // Failed to fetch
		}
	});

	const click_handler = currentOs => $$invalidate(4, OSName = currentOs.title);

	$$self.$$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("description" in $$props) $$invalidate(1, description = $$props.description);
		if ("themes" in $$props) $$invalidate(2, themes = $$props.themes);
		if ("os" in $$props) $$invalidate(3, os = $$props.os);
	};

	return [title, description, themes, os, OSName, version, click_handler];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			title: 0,
			description: 1,
			themes: 2,
			os: 3
		});
	}
}

export default Component;