import { V as require_react, o as require_jsx_runtime, q as __toESM } from "./useStore-BpVovk15.js";
import { n as createLucideIcon, r as Link, t as ArrowDownRight } from "./arrow-down-right-BfiKAs2k.js";
import { t as Check } from "./check-DMipFBZi.js";
import { t as ExternalLink } from "./external-link-CTs6Pks5.js";
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Copy = createLucideIcon("copy", [["rect", {
	width: "14",
	height: "14",
	x: "8",
	y: "8",
	rx: "2",
	ry: "2",
	key: "17jyea"
}], ["path", {
	d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
	key: "zix9uf"
}]]);
//#endregion
//#region src/routes/contact.tsx?tsr-split=component
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const email = "maddoxuv@gmail.com";
	async function copyEmail() {
		await navigator.clipboard.writeText(email);
		setCopied(true);
		window.setTimeout(() => setCopied(false), 2e3);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "contact-page page-shell",
		id: "main-content",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "contact-hero",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Contact / Melbourne"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
					"LET'S WORK",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"TOGETHER."
				] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "contact-details",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${email}`,
							children: email
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Location" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Melbourne, Australia" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Current role" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "AI Engineer · Dulcie Home Care" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Connect" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://github.com/yuvkun10",
							target: "_blank",
							rel: "noreferrer",
							children: ["GitHub ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 14 })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://www.linkedin.com/in/yuvraj-kunwar/",
							target: "_blank",
							rel: "noreferrer",
							children: ["LinkedIn ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 14 })]
						})] })] })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "contact-action",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "For AI engineering roles, product work, or a conversation about operational systems." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: copyEmail,
					children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {}), copied ? "Copied" : "Copy email"]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `mailto:${email}`,
					children: ["Start a conversation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "contact-navigation",
				"aria-label": "Explore the portfolio",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						hash: "work",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Work" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/about",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "About" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/Yuvraj_Kunwar_Resume.pdf",
						download: true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Résumé" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://github.com/yuvkun10",
						target: "_blank",
						rel: "noreferrer",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "04" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "GitHub" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { ContactPage as component };
