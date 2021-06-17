/* generated by Svelte v3.32.3 */
import {
	SvelteComponent,
	add_render_callback,
	append,
	attr,
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
	init,
	insert,
	listen,
	mount_component,
	safe_not_equal,
	set_data,
	set_style,
	space,
	text,
	transition_in,
	transition_out
} from '../web_modules/svelte/internal/index.mjs';

import Grid from '../components/grid.js';
import Waves from '../components/waves.js';
import { loadComponent } from '../scripts/load_component.js';

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
	child_ctx[5] = list[i];
	return child_ctx;
}

// (14:2) {#each intro.cta as cta}
function create_each_block_2(ctx) {
	let a;
	let t_value = /*cta*/ ctx[5].text + "";
	let t;
	let a_href_value;

	return {
		c() {
			a = element("a");
			t = text(t_value);
			this.h();
		},
		l(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t = claim_text(a_nodes, t_value);
			a_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a, "href", a_href_value = /*cta*/ ctx[5].link);
			attr(a, "class", "button svelte-1xa3nt3");
		},
		m(target, anchor) {
			insert(target, a, anchor);
			append(a, t);
		},
		p(ctx, dirty) {
			if (dirty & /*intro*/ 2 && t_value !== (t_value = /*cta*/ ctx[5].text + "")) set_data(t, t_value);

			if (dirty & /*intro*/ 2 && a_href_value !== (a_href_value = /*cta*/ ctx[5].link)) {
				attr(a, "href", a_href_value);
			}
		},
		d(detaching) {
			if (detaching) detach(a);
		}
	};
}

// (38:1) {#each features as feature}
function create_each_block_1(ctx) {
	let div1;
	let img;
	let img_src_value;
	let img_alt_value;
	let t0;
	let div0;
	let t1_value = /*feature*/ ctx[10].title + "";
	let t1;
	let t2;

	return {
		c() {
			div1 = element("div");
			img = element("img");
			t0 = space();
			div0 = element("div");
			t1 = text(t1_value);
			t2 = space();
			this.h();
		},
		l(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			img = claim_element(div1_nodes, "IMG", { src: true, alt: true, class: true });
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
			if (img.src !== (img_src_value = /*feature*/ ctx[10].img)) attr(img, "src", img_src_value);
			attr(img, "alt", img_alt_value = /*feature*/ ctx[10].title);
			attr(img, "class", "svelte-1xa3nt3");
			attr(div0, "class", "title svelte-1xa3nt3");
			attr(div1, "class", "feature svelte-1xa3nt3");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, img);
			append(div1, t0);
			append(div1, div0);
			append(div0, t1);
			append(div1, t2);
		},
		p(ctx, dirty) {
			if (dirty & /*features*/ 8 && img.src !== (img_src_value = /*feature*/ ctx[10].img)) {
				attr(img, "src", img_src_value);
			}

			if (dirty & /*features*/ 8 && img_alt_value !== (img_alt_value = /*feature*/ ctx[10].title)) {
				attr(img, "alt", img_alt_value);
			}

			if (dirty & /*features*/ 8 && t1_value !== (t1_value = /*feature*/ ctx[10].title + "")) set_data(t1, t1_value);
		},
		d(detaching) {
			if (detaching) detach(div1);
		}
	};
}

// (49:2) {#each setup as item}
function create_each_block(ctx) {
	let div2;
	let div0;
	let strong;
	let span;
	let t0_value = /*item*/ ctx[7].title_accent + "";
	let t0;
	let t1;
	let t2_value = /*item*/ ctx[7].title + "";
	let t2;
	let t3;
	let p;
	let t4_value = /*item*/ ctx[7].body + "";
	let t4;
	let t5;
	let div1;
	let img;
	let img_src_value;
	let t6;

	return {
		c() {
			div2 = element("div");
			div0 = element("div");
			strong = element("strong");
			span = element("span");
			t0 = text(t0_value);
			t1 = text(" ");
			t2 = text(t2_value);
			t3 = space();
			p = element("p");
			t4 = text(t4_value);
			t5 = space();
			div1 = element("div");
			img = element("img");
			t6 = space();
			this.h();
		},
		l(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			strong = claim_element(div0_nodes, "STRONG", {});
			var strong_nodes = children(strong);
			span = claim_element(strong_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t0 = claim_text(span_nodes, t0_value);
			span_nodes.forEach(detach);
			t1 = claim_text(strong_nodes, " ");
			t2 = claim_text(strong_nodes, t2_value);
			strong_nodes.forEach(detach);
			t3 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", { class: true });
			var p_nodes = children(p);
			t4 = claim_text(p_nodes, t4_value);
			p_nodes.forEach(detach);
			div0_nodes.forEach(detach);
			t5 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			img = claim_element(div1_nodes, "IMG", { src: true, class: true });
			div1_nodes.forEach(detach);
			t6 = claim_space(div2_nodes);
			div2_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(span, "class", "svelte-1xa3nt3");
			attr(p, "class", "svelte-1xa3nt3");
			attr(div0, "class", "content svelte-1xa3nt3");
			if (img.src !== (img_src_value = /*item*/ ctx[7].img)) attr(img, "src", img_src_value);
			attr(img, "class", "svelte-1xa3nt3");
			attr(div1, "class", "img svelte-1xa3nt3");
			attr(div2, "class", "item svelte-1xa3nt3");
		},
		m(target, anchor) {
			insert(target, div2, anchor);
			append(div2, div0);
			append(div0, strong);
			append(strong, span);
			append(span, t0);
			append(strong, t1);
			append(strong, t2);
			append(div0, t3);
			append(div0, p);
			append(p, t4);
			append(div2, t5);
			append(div2, div1);
			append(div1, img);
			append(div2, t6);
		},
		p(ctx, dirty) {
			if (dirty & /*setup*/ 16 && t0_value !== (t0_value = /*item*/ ctx[7].title_accent + "")) set_data(t0, t0_value);
			if (dirty & /*setup*/ 16 && t2_value !== (t2_value = /*item*/ ctx[7].title + "")) set_data(t2, t2_value);
			if (dirty & /*setup*/ 16 && t4_value !== (t4_value = /*item*/ ctx[7].body + "")) set_data(t4, t4_value);

			if (dirty & /*setup*/ 16 && img.src !== (img_src_value = /*item*/ ctx[7].img)) {
				attr(img, "src", img_src_value);
			}
		},
		d(detaching) {
			if (detaching) detach(div2);
		}
	};
}

function create_fragment(ctx) {
	let scrolling = false;

	let clear_scrolling = () => {
		scrolling = false;
	};

	let scrolling_timeout;
	let div2;
	let section0;
	let div0;
	let h1;
	let raw0_value = /*intro*/ ctx[1].title + "";
	let t0;
	let p0;
	let raw1_value = /*intro*/ ctx[1].body + "";
	let t1;
	let t2;
	let div1;
	let img0;
	let img0_src_value;
	let t3;
	let waves;
	let t4;
	let section1;
	let div5;
	let div3;
	let img1;
	let img1_src_value;
	let t5;
	let div4;
	let h30;
	let t6_value = /*editor*/ ctx[2].title + "";
	let t6;
	let t7;
	let p1;
	let t8_value = /*editor*/ ctx[2].body + "";
	let t8;
	let t9;
	let section2;
	let t10;
	let section3;
	let div6;
	let h31;
	let t11;
	let t12;
	let t13;
	let section4;
	let div8;
	let div7;
	let h32;
	let t14_value = /*cta*/ ctx[5].title + "";
	let t14;
	let t15;
	let a;
	let t16_value = /*cta*/ ctx[5].link.text + "";
	let t16;
	let a_href_value;
	let current;
	let mounted;
	let dispose;
	add_render_callback(/*onwindowscroll*/ ctx[6]);
	let each_value_2 = /*intro*/ ctx[1].cta;
	let each_blocks_2 = [];

	for (let i = 0; i < each_value_2.length; i += 1) {
		each_blocks_2[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
	}

	waves = new Waves({});
	let each_value_1 = /*features*/ ctx[3];
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	let each_value = /*setup*/ ctx[4];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			div2 = element("div");
			section0 = element("section");
			div0 = element("div");
			h1 = element("h1");
			t0 = space();
			p0 = element("p");
			t1 = space();

			for (let i = 0; i < each_blocks_2.length; i += 1) {
				each_blocks_2[i].c();
			}

			t2 = space();
			div1 = element("div");
			img0 = element("img");
			t3 = space();
			create_component(waves.$$.fragment);
			t4 = space();
			section1 = element("section");
			div5 = element("div");
			div3 = element("div");
			img1 = element("img");
			t5 = space();
			div4 = element("div");
			h30 = element("h3");
			t6 = text(t6_value);
			t7 = space();
			p1 = element("p");
			t8 = text(t8_value);
			t9 = space();
			section2 = element("section");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t10 = space();
			section3 = element("section");
			div6 = element("div");
			h31 = element("h3");
			t11 = text("Minimal Setup Required");
			t12 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t13 = space();
			section4 = element("section");
			div8 = element("div");
			div7 = element("div");
			h32 = element("h3");
			t14 = text(t14_value);
			t15 = space();
			a = element("a");
			t16 = text(t16_value);
			this.h();
		},
		l(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			section0 = claim_element(div2_nodes, "SECTION", { id: true, class: true });
			var section0_nodes = children(section0);
			div0 = claim_element(section0_nodes, "DIV", { id: true, class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", {});
			var h1_nodes = children(h1);
			h1_nodes.forEach(detach);
			t0 = claim_space(div0_nodes);
			p0 = claim_element(div0_nodes, "P", {});
			var p0_nodes = children(p0);
			p0_nodes.forEach(detach);
			t1 = claim_space(div0_nodes);

			for (let i = 0; i < each_blocks_2.length; i += 1) {
				each_blocks_2[i].l(div0_nodes);
			}

			div0_nodes.forEach(detach);
			t2 = claim_space(section0_nodes);
			div1 = claim_element(section0_nodes, "DIV", { id: true, class: true });
			var div1_nodes = children(div1);
			img0 = claim_element(div1_nodes, "IMG", { src: true, alt: true, class: true });
			div1_nodes.forEach(detach);
			section0_nodes.forEach(detach);
			div2_nodes.forEach(detach);
			t3 = claim_space(nodes);
			claim_component(waves.$$.fragment, nodes);
			t4 = claim_space(nodes);
			section1 = claim_element(nodes, "SECTION", { id: true, class: true });
			var section1_nodes = children(section1);
			div5 = claim_element(section1_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div3 = claim_element(div5_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			img1 = claim_element(div3_nodes, "IMG", { src: true, alt: true, class: true });
			div3_nodes.forEach(detach);
			t5 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			h30 = claim_element(div4_nodes, "H3", {});
			var h30_nodes = children(h30);
			t6 = claim_text(h30_nodes, t6_value);
			h30_nodes.forEach(detach);
			t7 = claim_space(div4_nodes);
			p1 = claim_element(div4_nodes, "P", { contenteditable: true });
			var p1_nodes = children(p1);
			t8 = claim_text(p1_nodes, t8_value);
			p1_nodes.forEach(detach);
			div4_nodes.forEach(detach);
			div5_nodes.forEach(detach);
			section1_nodes.forEach(detach);
			t9 = claim_space(nodes);
			section2 = claim_element(nodes, "SECTION", { id: true, style: true, class: true });
			var section2_nodes = children(section2);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(section2_nodes);
			}

			section2_nodes.forEach(detach);
			t10 = claim_space(nodes);
			section3 = claim_element(nodes, "SECTION", { id: true, class: true });
			var section3_nodes = children(section3);
			div6 = claim_element(section3_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			h31 = claim_element(div6_nodes, "H3", {});
			var h31_nodes = children(h31);
			t11 = claim_text(h31_nodes, "Minimal Setup Required");
			h31_nodes.forEach(detach);
			t12 = claim_space(div6_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div6_nodes);
			}

			div6_nodes.forEach(detach);
			section3_nodes.forEach(detach);
			t13 = claim_space(nodes);
			section4 = claim_element(nodes, "SECTION", { id: true, class: true });
			var section4_nodes = children(section4);
			div8 = claim_element(section4_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div7 = claim_element(div8_nodes, "DIV", { id: true, class: true });
			var div7_nodes = children(div7);
			h32 = claim_element(div7_nodes, "H3", {});
			var h32_nodes = children(h32);
			t14 = claim_text(h32_nodes, t14_value);
			h32_nodes.forEach(detach);
			t15 = claim_space(div7_nodes);
			a = claim_element(div7_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			t16 = claim_text(a_nodes, t16_value);
			a_nodes.forEach(detach);
			div7_nodes.forEach(detach);
			div8_nodes.forEach(detach);
			section4_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(div0, "id", "intro-text");
			attr(div0, "class", "svelte-1xa3nt3");
			if (img0.src !== (img0_src_value = "/assets/hero.svg")) attr(img0, "src", img0_src_value);
			attr(img0, "alt", "planarian looking at screen");
			attr(img0, "class", "svelte-1xa3nt3");
			attr(div1, "id", "intro-hero");
			attr(div1, "class", "svelte-1xa3nt3");
			attr(section0, "id", "intro");
			attr(section0, "class", "svelte-1xa3nt3");
			attr(div2, "class", "container");
			if (img1.src !== (img1_src_value = "/assets/edit.gif")) attr(img1, "src", img1_src_value);
			attr(img1, "alt", "Animation of typing on a computer");
			attr(img1, "class", "svelte-1xa3nt3");
			attr(div3, "class", "editor-graphic svelte-1xa3nt3");
			attr(p1, "contenteditable", "true");
			attr(div4, "class", "editor-content svelte-1xa3nt3");
			attr(div5, "class", "container svelte-1xa3nt3");
			attr(section1, "id", "editor");
			attr(section1, "class", "svelte-1xa3nt3");
			attr(section2, "id", "features");
			set_style(section2, "background-position-y", /*by*/ ctx[0] / 5 - 300 + "px");
			attr(section2, "class", "svelte-1xa3nt3");
			attr(div6, "class", "container");
			attr(section3, "id", "setup");
			attr(section3, "class", "svelte-1xa3nt3");
			attr(a, "href", a_href_value = /*cta*/ ctx[5].link.url);
			attr(a, "class", "svelte-1xa3nt3");
			attr(div7, "id", "cta");
			attr(div7, "class", "svelte-1xa3nt3");
			attr(div8, "class", "container");
			attr(section4, "id", "cta-wrapper");
			attr(section4, "class", "svelte-1xa3nt3");
		},
		m(target, anchor) {
			insert(target, div2, anchor);
			append(div2, section0);
			append(section0, div0);
			append(div0, h1);
			h1.innerHTML = raw0_value;
			append(div0, t0);
			append(div0, p0);
			p0.innerHTML = raw1_value;
			append(div0, t1);

			for (let i = 0; i < each_blocks_2.length; i += 1) {
				each_blocks_2[i].m(div0, null);
			}

			append(section0, t2);
			append(section0, div1);
			append(div1, img0);
			insert(target, t3, anchor);
			mount_component(waves, target, anchor);
			insert(target, t4, anchor);
			insert(target, section1, anchor);
			append(section1, div5);
			append(div5, div3);
			append(div3, img1);
			append(div5, t5);
			append(div5, div4);
			append(div4, h30);
			append(h30, t6);
			append(div4, t7);
			append(div4, p1);
			append(p1, t8);
			insert(target, t9, anchor);
			insert(target, section2, anchor);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(section2, null);
			}

			insert(target, t10, anchor);
			insert(target, section3, anchor);
			append(section3, div6);
			append(div6, h31);
			append(h31, t11);
			append(div6, t12);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div6, null);
			}

			insert(target, t13, anchor);
			insert(target, section4, anchor);
			append(section4, div8);
			append(div8, div7);
			append(div7, h32);
			append(h32, t14);
			append(div7, t15);
			append(div7, a);
			append(a, t16);
			current = true;

			if (!mounted) {
				dispose = listen(window, "scroll", () => {
					scrolling = true;
					clearTimeout(scrolling_timeout);
					scrolling_timeout = setTimeout(clear_scrolling, 100);
					/*onwindowscroll*/ ctx[6]();
				});

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*by*/ 1 && !scrolling) {
				scrolling = true;
				clearTimeout(scrolling_timeout);
				scrollTo(window.pageXOffset, /*by*/ ctx[0]);
				scrolling_timeout = setTimeout(clear_scrolling, 100);
			}

			if ((!current || dirty & /*intro*/ 2) && raw0_value !== (raw0_value = /*intro*/ ctx[1].title + "")) h1.innerHTML = raw0_value;;
			if ((!current || dirty & /*intro*/ 2) && raw1_value !== (raw1_value = /*intro*/ ctx[1].body + "")) p0.innerHTML = raw1_value;;

			if (dirty & /*intro*/ 2) {
				each_value_2 = /*intro*/ ctx[1].cta;
				let i;

				for (i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2(ctx, each_value_2, i);

					if (each_blocks_2[i]) {
						each_blocks_2[i].p(child_ctx, dirty);
					} else {
						each_blocks_2[i] = create_each_block_2(child_ctx);
						each_blocks_2[i].c();
						each_blocks_2[i].m(div0, null);
					}
				}

				for (; i < each_blocks_2.length; i += 1) {
					each_blocks_2[i].d(1);
				}

				each_blocks_2.length = each_value_2.length;
			}

			if ((!current || dirty & /*editor*/ 4) && t6_value !== (t6_value = /*editor*/ ctx[2].title + "")) set_data(t6, t6_value);
			if ((!current || dirty & /*editor*/ 4) && t8_value !== (t8_value = /*editor*/ ctx[2].body + "")) set_data(t8, t8_value);

			if (dirty & /*features*/ 8) {
				each_value_1 = /*features*/ ctx[3];
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_1(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(section2, null);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_1.length;
			}

			if (!current || dirty & /*by*/ 1) {
				set_style(section2, "background-position-y", /*by*/ ctx[0] / 5 - 300 + "px");
			}

			if (dirty & /*setup*/ 16) {
				each_value = /*setup*/ ctx[4];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div6, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if ((!current || dirty & /*cta*/ 32) && t14_value !== (t14_value = /*cta*/ ctx[5].title + "")) set_data(t14, t14_value);
			if ((!current || dirty & /*cta*/ 32) && t16_value !== (t16_value = /*cta*/ ctx[5].link.text + "")) set_data(t16, t16_value);

			if (!current || dirty & /*cta*/ 32 && a_href_value !== (a_href_value = /*cta*/ ctx[5].link.url)) {
				attr(a, "href", a_href_value);
			}
		},
		i(local) {
			if (current) return;
			transition_in(waves.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(waves.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div2);
			destroy_each(each_blocks_2, detaching);
			if (detaching) detach(t3);
			destroy_component(waves, detaching);
			if (detaching) detach(t4);
			if (detaching) detach(section1);
			if (detaching) detach(t9);
			if (detaching) detach(section2);
			destroy_each(each_blocks_1, detaching);
			if (detaching) detach(t10);
			if (detaching) detach(section3);
			destroy_each(each_blocks, detaching);
			if (detaching) detach(t13);
			if (detaching) detach(section4);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { intro } = $$props,
		{ editor } = $$props,
		{ features } = $$props,
		{ setup } = $$props,
		{ cta } = $$props;

	let { by = 0 } = $$props;

	function onwindowscroll() {
		$$invalidate(0, by = window.pageYOffset)
	}

	$$self.$$set = $$props => {
		if ("intro" in $$props) $$invalidate(1, intro = $$props.intro);
		if ("editor" in $$props) $$invalidate(2, editor = $$props.editor);
		if ("features" in $$props) $$invalidate(3, features = $$props.features);
		if ("setup" in $$props) $$invalidate(4, setup = $$props.setup);
		if ("cta" in $$props) $$invalidate(5, cta = $$props.cta);
		if ("by" in $$props) $$invalidate(0, by = $$props.by);
	};

	return [by, intro, editor, features, setup, cta, onwindowscroll];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			intro: 1,
			editor: 2,
			features: 3,
			setup: 4,
			cta: 5,
			by: 0
		});
	}
}

export default Component;