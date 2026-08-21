import { V as require_react, o as require_jsx_runtime, q as __toESM } from "./useStore-BpVovk15.js";
import { r as Link, t as ArrowDownRight } from "./arrow-down-right-BfiKAs2k.js";
//#region src/data/projects.ts
var import_react = /* @__PURE__ */ __toESM(require_react());
var projects = [
	{
		slug: "dulciepay",
		index: "01",
		name: "DulciePay",
		discipline: "AI engineering / Finance operations",
		proof: "Live production platform",
		year: "2026",
		summary: "Aged-care invoice intake, OCR review, community-scoped approvals, Lookout submission, and ABA payment processing in one controlled system.",
		tags: [
			"React 19",
			"Node 22",
			"Prisma",
			"Supabase",
			"OCR"
		],
		href: "/work/dulciepay",
		tone: "dulcie"
	},
	{
		slug: "pennypay",
		index: "02",
		name: "PennyPay",
		discipline: "TypeScript / Multi-entity finance",
		proof: "Completed production platform",
		year: "2026",
		summary: "A typed operations platform for Hazel and Coastal Home Care with local OCR, RAG, tiered approvals, Lookout submission, payments, and reconciliation.",
		tags: [
			"TypeScript",
			"TanStack Start",
			"Hono",
			"Supabase",
			"Local AI"
		],
		href: "/work/pennypay",
		tone: "penny"
	},
	{
		slug: "prompt-injection-detector",
		index: "03",
		name: "Prompt Injection Detector",
		discipline: "AI security / Open source",
		proof: "Library + API + CLI",
		year: "2026",
		summary: "A layered detector that combines deterministic rules with an optional model-assisted judge and runs without a hosted service.",
		tags: [
			"TypeScript",
			"HTTP API",
			"CLI",
			"Offline capable"
		],
		href: "/work/prompt-injection-detector",
		tone: "security"
	}
];
var technologyGroups = [
	{
		label: "Build",
		tools: [
			["TypeScript", "PennyPay, public tools, mobile"],
			["React 19", "DulciePay and PennyPay"],
			["TanStack Start", "PennyPay typed SSR frontend"],
			["Shadcn / Base UI", "Accessible product primitives"],
			["Tailwind CSS", "Product and design-system delivery"],
			["Hono / Node.js", "Typed APIs and production services"]
		]
	},
	{
		label: "Data + intelligence",
		tools: [
			["Supabase", "Auth, Postgres, storage, realtime"],
			["Prisma / Drizzle", "Typed data models and migrations"],
			["pgvector + RAG", "Citation-backed internal knowledge"],
			["OCR + vision models", "Invoice and document extraction"],
			["Evaluation gates", "AI quality and release controls"]
		]
	},
	{
		label: "Ship + operate",
		tools: [
			["Vercel", "Production frontend delivery"],
			["Render", "API and worker infrastructure"],
			["Cloudflare", "Named tunnels for local inference"],
			["GitHub Actions", "Checks, migrations, and deployment gates"],
			["Tracing", "Masked observability and failure review"]
		]
	},
	{
		label: "Mobile",
		tools: [
			["Expo", "DulciePay mobile companion"],
			["React Native", "Cross-platform product surfaces"],
			["TanStack Query", "Server-state and offline-aware flows"],
			["Secure Store", "Protected device credentials"]
		]
	}
];
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var import_jsx_runtime = require_jsx_runtime();
function HomePage() {
	const [activeProject, setActiveProject] = (0, import_react.useState)(projects[0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "home-page",
		id: "main-content",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "home-intro page-shell",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "intro-main",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Yuvraj Kunwar / AI Engineer"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "I build AI-assisted finance systems used in daily operations." })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "intro-context",
					"aria-label": "Current context",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Based in" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Melbourne, Australia" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Work at" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Dulcie Home Care" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Current role" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "AI Engineer" })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Focus" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Finance operations, OCR, RAG, workflow automation" })] })
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "intro-links",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:maddoxuv@gmail.com",
								children: "Email"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								children: "Background"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/Yuvraj_Kunwar_Resume.pdf",
								download: true,
								children: "Résumé"
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "work-index page-shell",
				id: "work",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "work-index-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Selected systems / 2026"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Private production work is described with synthetic data and public architecture details only." })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "work-index-layout",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "work-list",
						children: projects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: project.href,
							"data-active": activeProject.slug === project.slug,
							onMouseEnter: () => setActiveProject(project),
							onFocus: () => setActiveProject(project),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.index }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: project.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: project.discipline })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: project.proof }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {
									size: 20,
									"aria-hidden": "true"
								})
							]
						}) }, project.slug))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "work-preview",
						"data-tone": activeProject.tone,
						"aria-live": "polite",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewArtwork, { project: activeProject }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "preview-caption",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: activeProject.summary }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: activeProject.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: tag }, tag)) })]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "home-notes page-shell",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "What the work requires"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Product judgement before interface polish." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Model the operation" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Understand users, money, documents, exceptions, and the decisions the system must preserve." })] })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Keep authority explicit" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "AI can extract and suggest. People review. The server owns permissions, state transitions, and audit evidence." })] })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Operate what ships" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Release gates, migrations, tracing, support, and correction handling are part of the product." })] })] })
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "home-stack page-shell",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Working stack"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Tools attached to responsibilities." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "stack-records",
					children: technologyGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: group.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", { children: group.tools.map(([tool, evidence]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: tool }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: evidence })] }, tool)) })] }, group.label))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "home-current page-shell",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Current chapter"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "AI Engineer at Dulcie Home Care." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Progressed from full-stack intern to full-time AI Engineer in 2026." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Employee of the Quarter, June 2026." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Master of Information Technology completed, June 2026." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/about",
						children: ["Full background ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, { size: 18 })]
					})
				] })]
			})
		]
	});
}
function PreviewArtwork({ project }) {
	if (project.tone === "penny") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "preview-interface penny-preview",
		"aria-label": "Synthetic PennyPay interface preview",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "preview-sidebar" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "preview-context",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "preview-document",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tax Invoice" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "preview-source",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "preview-workflow",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
				]
			})
		]
	});
	if (project.tone === "security") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "preview-interface security-preview",
		"aria-label": "Prompt detector preview",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "INPUT INSPECTION" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "ignore previous instructions…" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Instruction override" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "HIGH" })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Prompt extraction" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "HIGH" })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("output", { children: "BLOCK / 80" })
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "preview-interface dulcie-preview",
		"aria-label": "DulciePay workflow preview",
		children: [
			"Invoice intake",
			"OCR + review",
			"Scoped approval",
			"Lookout",
			"ABA payment"
		].map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: String(index + 1).padStart(2, "0") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: label })] }, label))
	});
}
//#endregion
export { HomePage as component };
