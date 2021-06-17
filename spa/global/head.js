/* generated by Svelte v3.32.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_space,
	claim_text,
	detach,
	element,
	init,
	insert,
	noop,
	safe_not_equal,
	set_data,
	space,
	text
} from '../web_modules/svelte/internal/index.mjs';

function create_if_block(ctx) {
	let meta0;
	let meta0_content_value;
	let t;
	let meta1;
	let meta1_content_value;

	return {
		c() {
			meta0 = element("meta");
			t = space();
			meta1 = element("meta");
			this.h();
		},
		l(nodes) {
			meta0 = claim_element(nodes, "META", { name: true, content: true });
			t = claim_space(nodes);
			meta1 = claim_element(nodes, "META", { name: true, content: true });
			this.h();
		},
		h() {
			attr(meta0, "name", "description");
			attr(meta0, "content", meta0_content_value = /*meta*/ ctx[1].desc);
			attr(meta1, "name", "keywords");
			attr(meta1, "content", meta1_content_value = /*meta*/ ctx[1].keywords);
		},
		m(target, anchor) {
			insert(target, meta0, anchor);
			insert(target, t, anchor);
			insert(target, meta1, anchor);
		},
		p(ctx, dirty) {
			if (dirty & /*meta*/ 2 && meta0_content_value !== (meta0_content_value = /*meta*/ ctx[1].desc)) {
				attr(meta0, "content", meta0_content_value);
			}

			if (dirty & /*meta*/ 2 && meta1_content_value !== (meta1_content_value = /*meta*/ ctx[1].keywords)) {
				attr(meta1, "content", meta1_content_value);
			}
		},
		d(detaching) {
			if (detaching) detach(meta0);
			if (detaching) detach(t);
			if (detaching) detach(meta1);
		}
	};
}

function create_fragment(ctx) {
	let head;
	let meta0;
	let t0;
	let meta1;
	let t1;
	let title_1;
	let t2;
	let t3;
	let t4;
	let t5;
	let base;
	let base_href_value;
	let t6;
	let script;
	let script_src_value;
	let t7;
	let link0;
	let t8;
	let link1;
	let t9;
	let link2;
	let if_block = /*meta*/ ctx[1] && create_if_block(ctx);

	return {
		c() {
			head = element("head");
			meta0 = element("meta");
			t0 = space();
			meta1 = element("meta");
			t1 = space();
			title_1 = element("title");
			t2 = text(/*title*/ ctx[0]);
			t3 = text(" | Plenti - A Static Site Generator for Svelte");
			t4 = space();
			if (if_block) if_block.c();
			t5 = space();
			base = element("base");
			t6 = space();
			script = element("script");
			t7 = space();
			link0 = element("link");
			t8 = space();
			link1 = element("link");
			t9 = space();
			link2 = element("link");
			this.h();
		},
		l(nodes) {
			head = claim_element(nodes, "HEAD", {});
			var head_nodes = children(head);
			meta0 = claim_element(head_nodes, "META", { charset: true });
			t0 = claim_space(head_nodes);
			meta1 = claim_element(head_nodes, "META", { name: true, content: true });
			t1 = claim_space(head_nodes);
			title_1 = claim_element(head_nodes, "TITLE", {});
			var title_1_nodes = children(title_1);
			t2 = claim_text(title_1_nodes, /*title*/ ctx[0]);
			t3 = claim_text(title_1_nodes, " | Plenti - A Static Site Generator for Svelte");
			title_1_nodes.forEach(detach);
			t4 = claim_space(head_nodes);
			if (if_block) if_block.l(head_nodes);
			t5 = claim_space(head_nodes);
			base = claim_element(head_nodes, "BASE", { href: true });
			t6 = claim_space(head_nodes);
			script = claim_element(head_nodes, "SCRIPT", { type: true, src: true });
			var script_nodes = children(script);
			script_nodes.forEach(detach);
			t7 = claim_space(head_nodes);
			link0 = claim_element(head_nodes, "LINK", { href: true, rel: true });
			t8 = claim_space(head_nodes);
			link1 = claim_element(head_nodes, "LINK", { rel: true, type: true, href: true });
			t9 = claim_space(head_nodes);
			link2 = claim_element(head_nodes, "LINK", { rel: true, href: true });
			head_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(meta0, "charset", "utf-8");
			attr(meta1, "name", "viewport");
			attr(meta1, "content", "width=device-width,initial-scale=1");
			attr(base, "href", base_href_value = /*env*/ ctx[2].local ? "/" : /*env*/ ctx[2].baseurl);
			attr(script, "type", "module");
			if (script.src !== (script_src_value = "/spa/ejected/main.js")) attr(script, "src", script_src_value);
			attr(link0, "href", "https://fonts.googleapis.com/css2?family=NTR&display=swap&family=Heebo:wght@900&family=Kalam&display=swap");
			attr(link0, "rel", "stylesheet");
			attr(link1, "rel", "icon");
			attr(link1, "type", "image/svg+xml");
			attr(link1, "href", "/assets/p.svg");
			attr(link2, "rel", "stylesheet");
			attr(link2, "href", "/spa/bundle.css");
		},
		m(target, anchor) {
			insert(target, head, anchor);
			append(head, meta0);
			append(head, t0);
			append(head, meta1);
			append(head, t1);
			append(head, title_1);
			append(title_1, t2);
			append(title_1, t3);
			append(head, t4);
			if (if_block) if_block.m(head, null);
			append(head, t5);
			append(head, base);
			append(head, t6);
			append(head, script);
			append(head, t7);
			append(head, link0);
			append(head, t8);
			append(head, link1);
			append(head, t9);
			append(head, link2);
		},
		p(ctx, [dirty]) {
			if (dirty & /*title*/ 1) set_data(t2, /*title*/ ctx[0]);

			if (/*meta*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(head, t5);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*env*/ 4 && base_href_value !== (base_href_value = /*env*/ ctx[2].local ? "/" : /*env*/ ctx[2].baseurl)) {
				attr(base, "href", base_href_value);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(head);
			if (if_block) if_block.d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { title } = $$props, { meta } = $$props, { env } = $$props;

	$$self.$$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("meta" in $$props) $$invalidate(1, meta = $$props.meta);
		if ("env" in $$props) $$invalidate(2, env = $$props.env);
	};

	return [title, meta, env];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { title: 0, meta: 1, env: 2 });
	}
}

export default Component;