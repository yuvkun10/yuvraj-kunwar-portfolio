import { V as require_react, o as require_jsx_runtime, q as __toESM } from "./useStore-BpVovk15.js";
import { n as createLucideIcon, r as Link, t as ArrowDownRight } from "./arrow-down-right-BfiKAs2k.js";
import { t as Check } from "./check-DMipFBZi.js";
import { t as ExternalLink } from "./external-link-CTs6Pks5.js";
import { t as ShieldCheck } from "./shield-check-DJms27cc.js";
import { n as ProjectPager } from "./router-DkBwOxf5.js";
import { t as EvidenceStrip } from "./ui-BRKmAHPo.js";
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleUserRound = createLucideIcon("circle-user-round", [
	["path", {
		d: "M17.925 20.056a6 6 0 0 0-11.851.001",
		key: "z69sun"
	}],
	["circle", {
		cx: "12",
		cy: "11",
		r: "4",
		key: "1gt34v"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}]
]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var FileText = createLucideIcon("file-text", [
	["path", {
		d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
		key: "1oefj6"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M10 9H8",
		key: "b1mrlr"
	}],
	["path", {
		d: "M16 13H8",
		key: "t4e002"
	}],
	["path", {
		d: "M16 17H8",
		key: "z1uh3a"
	}]
]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Landmark = createLucideIcon("landmark", [
	["path", {
		d: "M10 18v-7",
		key: "wt116b"
	}],
	["path", {
		d: "M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z",
		key: "yxxwt6"
	}],
	["path", {
		d: "M14 18v-7",
		key: "vav6t3"
	}],
	["path", {
		d: "M18 18v-7",
		key: "aexdmj"
	}],
	["path", {
		d: "M3 22h18",
		key: "8prr45"
	}],
	["path", {
		d: "M6 18v-7",
		key: "1ivflk"
	}]
]);
/**
* @license lucide-react v1.33.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var TriangleAlert = createLucideIcon("triangle-alert", [
	["path", {
		d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
		key: "wmoenq"
	}],
	["path", {
		d: "M12 9v4",
		key: "juzpu7"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]);
//#endregion
//#region src/components/pennypay-workbench.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var anatomy = {
	context: {
		label: "Entity context",
		title: "Payee, client, and community stay visible",
		text: "Reviewers can verify who is being paid, which client received the service, and which community controls access."
	},
	compare: {
		label: "Source comparison",
		title: "Parsed data beside the original document",
		text: "The workspace keeps extracted fields and source evidence in one view so AI output never becomes invisible authority."
	},
	workflow: {
		label: "Approval workflow",
		title: "Current tier, completed decisions, and next action",
		text: "The right rail explains the exact approval state and only offers actions allowed for the current role and tier."
	},
	audit: {
		label: "Traceability",
		title: "Every payment action leaves evidence",
		text: "Staff identity, timestamps, notes, returns, rejects, submissions, and payment transitions remain reviewable."
	}
};
function PennyPayWorkbench() {
	const [active, setActive] = (0, import_react.useState)("compare");
	const selected = anatomy[active];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pennypay-demo",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "demo-toolbar",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "demo-brand",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PP" }), "PennyPay"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "demo-record",
						children: ["Invoice #2084 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pending T2" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "demo-budget",
						children: ["Quarter remaining ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "$42,640.00" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "demo-workspace",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "demo-sidebar",
						"aria-label": "Synthetic application navigation",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Workspace" }),
							[
								"Dashboard",
								"Tasks",
								"Calendar",
								"Messages"
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item }, item)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Invoices" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "active",
								children: "Requires approval"
							}),
							[
								"On hold",
								"All invoices",
								"Rejected",
								"Archive"
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item }, item)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Finance" }),
							["Payment run", "Remittances"].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item }, item))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "demo-context",
						"data-highlight": active === "context",
						"aria-label": "Synthetic invoice context",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "hotspot hotspot-context",
								onClick: () => setActive("context"),
								"aria-label": "Explain entity context",
								children: "1"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mini-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: "Worker / payable"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Northside Therapy Services" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Harbour · North" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Total to payee" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "$926.20" })] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mini-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: "Client"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Alex Morgan" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Community scoped" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "To Lookout" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "$1,033.30" })] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mini-card lines",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: "Service lines"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Physiotherapy · SERV-0028" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Indirect activities · SERV-0028" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Liaison and administration · SERV-0028" })
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "demo-compare",
						"data-highlight": active === "compare",
						"aria-label": "Synthetic invoice comparison",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "hotspot hotspot-compare",
								onClick: () => setActive("compare"),
								"aria-label": "Explain source comparison",
								children: "2"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "parsed-invoice",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "invoice-wordmark",
										children: "Tax Invoice"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: "Reference"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "INV-2084" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: "Supplier"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Northside Therapy Services" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "invoice-rule" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: "Service date"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "18 Aug 2026" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "invoice-items",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Physiotherapy ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "$151.80" })] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Indirect activities ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "$62.50" })] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Administration ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "$500.00" })] })
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "source-document",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "document-toolbar",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 15 }), " Original invoice"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "paper-sheet",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "TAX INVOICE #2084" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "paper-grid",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "paper-lines",
											children: Array.from({ length: 8 }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}, index))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "TOTAL $926.20" })
									]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "demo-approval",
						"data-highlight": active === "workflow" || active === "audit",
						"aria-label": "Synthetic approval workflow",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "hotspot hotspot-workflow",
								onClick: () => setActive("workflow"),
								"aria-label": "Explain approval workflow",
								children: "3"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "hotspot hotspot-audit",
								onClick: () => setActive("audit"),
								"aria-label": "Explain audit evidence",
								children: "4"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "trace-cards",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleUserRound, { size: 16 }), "Client"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landmark, { size: 16 }), "Payee"] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "approval-timeline",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 15 }), " Finance review complete"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { size: 15 }), " T1 approved"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "current",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " Awaiting T2"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "future",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " Submit to Lookout"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "future",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " Generate ABA"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "approve-button",
								type: "button",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 16 }), "Approve T2"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "decision-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									children: "Return"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { size: 14 }), "Reject"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "audit-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: "Audit trail"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "9 recorded events" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Role, note, and timestamp retained" })
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "anatomy-explainer",
				"aria-live": "polite",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: selected.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: selected.title }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: selected.text }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "anatomy-tabs",
						role: "tablist",
						"aria-label": "Product anatomy",
						children: Object.keys(anatomy).map((key, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							role: "tab",
							"aria-selected": active === key,
							onClick: () => setActive(key),
							children: index + 1
						}, key))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "demo-disclaimer",
				children: "Demonstration data only. Names, addresses, invoice numbers, and payment details are synthetic."
			})
		]
	});
}
//#endregion
//#region src/routes/work.pennypay.tsx?tsr-split=component
function PennyPayPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "case-page penny-case",
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
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Completed TypeScript platform / 2026" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "PENNYPAY" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "case-deck",
						children: "A multi-entity invoice operations platform where source evidence, pricing, approval state, access scope, and payment readiness stay visible together."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceStrip, { items: [
						"TypeScript",
						"TanStack Start",
						"React 19",
						"Hono",
						"Supabase",
						"Local OCR",
						"RAG"
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "penny-workbench-section page-shell",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PennyPayWorkbench, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "case-summary page-shell",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "01 / Why the screen is dense"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Every visible region answers a different operational question." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "case-summary-columns",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The product coordinates two aged-care entities without hiding complexity from the people accountable for a payment. Density is controlled through stable regions, semantic status, progressive actions, and a direct comparison between extracted data and source evidence." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Role" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "AI Engineer / system owner" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Scope" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Product, architecture, controls, release" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Data" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Synthetic demonstration above" })] })
						] })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "penny-invariants page-shell",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "02 / Non-negotiable invariants"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "invariant-records",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "01 / Access" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Scope is enforced server-side." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Finance can operate globally. Approvers remain limited to assigned communities and active tiers." })] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "02 / Boundary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "The API is the intended way into data." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Lists, documents, exports, and files pass through typed scope and capability guards." })] })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "03 / Payment" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Payment state is explicit." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ABA generation is the local paid event. Background publication remains retryable and auditable." })] })] })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "architecture-section page-shell",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "03 / Typed architecture"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "One monorepo, clear service boundaries." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "architecture-map penny-map",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Web" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "TanStack Start SSR · React 19 · Query · Router" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "API" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Hono · auth · pricing · workers · integrations" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Shared" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Domain · RBAC · rate card · Lookout · ABA" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Local engines" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "OCR · hybrid RAG · document conversion" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Infrastructure" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Supabase · Render · Vercel · Cloudflare tunnels" })] })
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "case-outcome page-shell",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "04 / Product posture"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "AI is visible, reviewable, and bounded." })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), "Local vision extraction keeps document processing close to operations"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), "Human review owns corrections and final routing readiness"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), "RAG suggestions do not override authoritative pricing rules"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), "Signed URLs follow a scope check before private documents reach the browser"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {}), "Audit evidence explains who acted, when, and under which role"] })
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "pill-link dark",
						href: "https://github.com/yuvkun10/pennypay-marketing",
						target: "_blank",
						rel: "noreferrer",
						children: ["View public entry-site source ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { size: 16 })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectPager, {
				previous: {
					to: "/work/dulciepay",
					label: "DulciePay"
				},
				next: {
					to: "/work/prompt-injection-detector",
					label: "Prompt Injection Detector"
				}
			})
		]
	});
}
//#endregion
export { PennyPayPage as component };
