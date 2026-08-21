import { V as require_react, o as require_jsx_runtime, q as __toESM } from "./useStore-BpVovk15.js";
import { n as createLucideIcon, r as Link, t as ArrowDownRight } from "./arrow-down-right-BfiKAs2k.js";
import { t as Check } from "./check-DMipFBZi.js";
import { t as ExternalLink } from "./external-link-CTs6Pks5.js";
import { n as ProjectPager } from "./router-DkBwOxf5.js";
import { n as Reveal, t as EvidenceStrip } from "./ui-BRKmAHPo.js";
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleCheck = createLucideIcon("circle-check", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleDollarSign = createLucideIcon("circle-dollar-sign", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",
		key: "1h4pet"
	}],
	["path", {
		d: "M12 18V6",
		key: "zqpxq5"
	}]
]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var FileSearch = createLucideIcon("file-search", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["circle", {
		cx: "11.5",
		cy: "14.5",
		r: "2.5",
		key: "1bq0ko"
	}],
	["path", {
		d: "M13.3 16.3 15 18",
		key: "2quom7"
	}]
]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Send = createLucideIcon("send", [["path", {
	d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
	key: "1ffxy3"
}], ["path", {
	d: "m21.854 2.147-10.94 10.939",
	key: "12cjpa"
}]]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Upload = createLucideIcon("upload", [
	["path", {
		d: "M12 3v12",
		key: "1x0j5s"
	}],
	["path", {
		d: "m17 8-5-5-5 5",
		key: "7q97r8"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}]
]);
//#endregion
//#region src/components/dulcie-workflow.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var stages = [
	{
		id: "intake",
		label: "Intake",
		title: "Email, Drive, Snapforms, and Slack",
		text: "Controlled channels create one invoice record and retain the source document.",
		icon: Upload
	},
	{
		id: "review",
		label: "Review",
		title: "OCR with finance control",
		text: "AI extracts structured fields. Finance staff compare them with the original before routing.",
		icon: FileSearch
	},
	{
		id: "approval",
		label: "Approval",
		title: "Community and tier scoped",
		text: "The server resolves the approval chain and limits each approver to assigned communities and tiers.",
		icon: Check
	},
	{
		id: "submit",
		label: "Submit",
		title: "Lookout lifecycle",
		text: "Validated invoices move upstream with service codes, client contribution rules, and audit evidence.",
		icon: Send
	},
	{
		id: "payment",
		label: "Payment",
		title: "ABA generation and reconciliation",
		text: "Atomic claims prevent duplicate payment. Generated files remain immutable and failures close safely.",
		icon: CircleDollarSign
	}
];
function DulcieWorkflow() {
	const [active, setActive] = (0, import_react.useState)(stages[0].id);
	const selected = stages.find((stage) => stage.id === active) ?? stages[0];
	const Icon = selected.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "workflow-machine",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "workflow-track",
			role: "tablist",
			"aria-label": "DulciePay invoice lifecycle",
			children: stages.map((stage, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				role: "tab",
				"aria-selected": active === stage.id,
				"aria-controls": "workflow-panel",
				className: "workflow-step",
				"data-active": active === stage.id,
				onClick: () => setActive(stage.id),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String(index + 1).padStart(2, "0") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: stage.label })]
			}, stage.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "workflow-panel",
			id: "workflow-panel",
			role: "tabpanel",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				size: 28,
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Selected stage"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: selected.title }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: selected.text })
			] })]
		})]
	});
}
//#endregion
//#region src/routes/work.dulciepay.tsx?tsr-split=component
function DulciePayPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "case-page dulcie-case",
		id: "main-content",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "case-hero page-shell",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "case-kicker",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: "work",
							children: "Back to work"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Completed production platform / 2026" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "DULCIEPAY" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "case-deck",
						children: "One controlled path from invoice arrival to reviewed data, scoped approval, upstream submission, payment, and audit evidence."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceStrip, { items: [
						"React 19",
						"Node 22",
						"Prisma",
						"Supabase",
						"OCR",
						"Lookout",
						"ABA"
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "case-visual page-shell",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "dulcie-console",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "console-header",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DulciePay / Operations" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "live-indicator",
								children: "Live production"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "console-metrics",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Intake channels" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "4" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Approval scope" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Community + tier" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Payment event" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "ABA generation" })] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DulcieWorkflow, {})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "case-summary page-shell",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "01 / System brief"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Replacing a disconnected approval workflow with an owned operations platform." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "case-summary-columns",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I completed DulciePay for aged-care finance operations. It brings invoice intake, source documents, extraction, review, community mapping, approvals, Lookout submission, ABA processing, reports, and audit history into one product." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Role" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "AI Engineer / Full-stack lead" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Context" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Aged-care finance operations" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Status" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Live in production" })] })
						] })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "case-dark-section",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "page-shell",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "decision-intro",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "02 / Control model"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Authority stays visible in the system." })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "decision-records",
						children: [
							["Source comparison", "OCR fields remain beside the original document so reviewers can verify rather than trust an invisible model output."],
							["Scoped access", "Community approvers only see assigned communities and approval tiers. Finance roles retain global operational scope."],
							["Payment safety", "Atomic payment claims prevent duplicate selection. Generated ABA artifacts are immutable."],
							["Failure handling", "Submission and cleanup paths fail closed. Partial upstream state remains visible for reconciliation."]
						].map(([title, text], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String(index + 1).padStart(2, "0") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: text })
						] }, title))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "architecture-section page-shell",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "03 / Architecture"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "A complete path across interface, API, data, local inference, and external systems." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "architecture-map",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Intake" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Email · Drive · Snapforms · Slack" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Application" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "React · TanStack Query" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "API" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Express · permissions · lifecycle" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Data" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Supabase · Postgres · Prisma" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Operations" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Local OCR · Lookout · Render · Vercel" })] })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "case-outcome page-shell",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "04 / What shipped"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Production software, not a concept screen." })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {}), "Multi-channel invoice intake and retained source documents"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {}), "OCR extraction with explicit finance review"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {}), "Community and amount-tier approval routing"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {}), "Lookout submission and correction handling"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {}), "ABA generation, history, remittance, and audit trail"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {}), "Deployment checks, migrations, monitoring, and production support"] })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "pill-link dark",
						href: "https://dulciepay.com.au",
						target: "_blank",
						rel: "noreferrer",
						children: ["Visit public entry site ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 16 })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectPager, { next: {
				to: "/work/pennypay",
				label: "PennyPay"
			} })
		]
	});
}
//#endregion
export { DulciePayPage as component };
