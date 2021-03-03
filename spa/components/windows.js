/* generated by Svelte v3.32.3 */
import {
	SvelteComponent,
	append,
	attr,
	children,
	claim_element,
	claim_text,
	detach,
	init,
	insert,
	noop,
	safe_not_equal,
	svg_element,
	text
} from '/spa/web_modules/svelte/internal/index.mjs';

function create_fragment(ctx) {
	let svg;
	let metadata;
	let rdf_RDF;
	let cc_Work;
	let dc_format;
	let t;
	let dc_type;
	let dc_title;
	let g4;
	let g0;
	let polygon0;
	let g1;
	let polygon1;
	let g2;
	let polygon2;
	let g3;
	let polygon3;

	return {
		c() {
			svg = svg_element("svg");
			metadata = svg_element("metadata");
			rdf_RDF = svg_element("rdf:RDF");
			cc_Work = svg_element("cc:Work");
			dc_format = svg_element("dc:format");
			t = text("image/svg+xml");
			dc_type = svg_element("dc:type");
			dc_title = svg_element("dc:title");
			g4 = svg_element("g");
			g0 = svg_element("g");
			polygon0 = svg_element("polygon");
			g1 = svg_element("g");
			polygon1 = svg_element("polygon");
			g2 = svg_element("g");
			polygon2 = svg_element("polygon");
			g3 = svg_element("g");
			polygon3 = svg_element("polygon");
			this.h();
		},
		l(nodes) {
			svg = claim_element(
				nodes,
				"svg",
				{
					"enable-background": true,
					version: true,
					viewBox: true,
					"xml:space": true,
					xmlns: true,
					"xmlns:cc": true,
					"xmlns:dc": true,
					"xmlns:rdf": true
				},
				1
			);

			var svg_nodes = children(svg);
			metadata = claim_element(svg_nodes, "metadata", {}, 1);
			var metadata_nodes = children(metadata);
			rdf_RDF = claim_element(metadata_nodes, "rdf:RDF", {}, 1);
			var rdf_RDF_nodes = children(rdf_RDF);
			cc_Work = claim_element(rdf_RDF_nodes, "cc:Work", { "rdf:about": true }, 1);
			var cc_Work_nodes = children(cc_Work);
			dc_format = claim_element(cc_Work_nodes, "dc:format", {}, 1);
			var dc_format_nodes = children(dc_format);
			t = claim_text(dc_format_nodes, "image/svg+xml");
			dc_format_nodes.forEach(detach);
			dc_type = claim_element(cc_Work_nodes, "dc:type", { "rdf:resource": true }, 1);
			children(dc_type).forEach(detach);
			dc_title = claim_element(cc_Work_nodes, "dc:title", {}, 1);
			children(dc_title).forEach(detach);
			cc_Work_nodes.forEach(detach);
			rdf_RDF_nodes.forEach(detach);
			metadata_nodes.forEach(detach);
			g4 = claim_element(svg_nodes, "g", { fill: true }, 1);
			var g4_nodes = children(g4);
			g0 = claim_element(g4_nodes, "g", { fill: true }, 1);
			var g0_nodes = children(g0);
			polygon0 = claim_element(g0_nodes, "polygon", { points: true, fill: true }, 1);
			children(polygon0).forEach(detach);
			g0_nodes.forEach(detach);
			g1 = claim_element(g4_nodes, "g", { fill: true }, 1);
			var g1_nodes = children(g1);
			polygon1 = claim_element(g1_nodes, "polygon", { points: true, fill: true }, 1);
			children(polygon1).forEach(detach);
			g1_nodes.forEach(detach);
			g2 = claim_element(g4_nodes, "g", { fill: true }, 1);
			var g2_nodes = children(g2);
			polygon2 = claim_element(g2_nodes, "polygon", { points: true, fill: true }, 1);
			children(polygon2).forEach(detach);
			g2_nodes.forEach(detach);
			g3 = claim_element(g4_nodes, "g", { fill: true }, 1);
			var g3_nodes = children(g3);
			polygon3 = claim_element(g3_nodes, "polygon", { points: true, fill: true }, 1);
			children(polygon3).forEach(detach);
			g3_nodes.forEach(detach);
			g4_nodes.forEach(detach);
			svg_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(dc_type, "rdf:resource", "http://purl.org/dc/dcmitype/StillImage");
			attr(cc_Work, "rdf:about", "");
			attr(polygon0, "points", "224 52 0 80 0 240 224 240");
			attr(polygon0, "fill", "#3c3c3c");
			attr(g0, "fill", "#3c3c3c");
			attr(polygon1, "points", "512 240 512 16 256 48 256 240");
			attr(polygon1, "fill", "#3c3c3c");
			attr(g1, "fill", "#3c3c3c");
			attr(polygon2, "points", "512 272 256 272 256 464 512 496");
			attr(polygon2, "fill", "#3c3c3c");
			attr(g2, "fill", "#3c3c3c");
			attr(polygon3, "points", "224 272 0 272 0 432 224 460");
			attr(polygon3, "fill", "#3c3c3c");
			attr(g3, "fill", "#3c3c3c");
			attr(g4, "fill", "#3c3c3c");
			attr(svg, "enable-background", "new 0 0 512 512");
			attr(svg, "version", "1.1");
			attr(svg, "viewBox", "0 0 512 512");
			attr(svg, "xml:space", "preserve");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg, "xmlns:cc", "http://creativecommons.org/ns#");
			attr(svg, "xmlns:dc", "http://purl.org/dc/elements/1.1/");
			attr(svg, "xmlns:rdf", "http://www.w3.org/1999/02/22-rdf-syntax-ns#");
		},
		m(target, anchor) {
			insert(target, svg, anchor);
			append(svg, metadata);
			append(metadata, rdf_RDF);
			append(rdf_RDF, cc_Work);
			append(cc_Work, dc_format);
			append(dc_format, t);
			append(cc_Work, dc_type);
			append(cc_Work, dc_title);
			append(svg, g4);
			append(g4, g0);
			append(g0, polygon0);
			append(g4, g1);
			append(g1, polygon1);
			append(g4, g2);
			append(g2, polygon2);
			append(g4, g3);
			append(g3, polygon3);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(svg);
		}
	};
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default Component;