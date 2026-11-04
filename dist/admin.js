import { t as e } from "./chunks/NewRedirect-DLZj9yTl.js";
import { navigate as t, registry as n, t as r, useAbility as i, useManifest as a } from "@letterncms/sdk";
import { lazy as o, useEffect as s, useState as c } from "react";
import { Button as l, Dialog as u, Fields as d, Icon as f, QueryError as p, Spinner as m, cn as h, fieldControlId as g } from "@letterncms/ui";
import { jsx as _, jsxs as v } from "react/jsx-runtime";
// admin/src/SeoPanel.tsx
function y({ entry: e, collection: t, values: n, title: o, setValue: u, editable: g, errors: y }) {
	let C = a(), w = t.resolvedFields.find((e) => e.handle === "seo"), T = n.seo ?? {}, [E, D] = c(!1), [O, k] = c(!1), A = i("seo/analyze", { id: e?.id ?? "" }, {
		enabled: !!e,
		staleTime: 0
	});
	s(() => {
		e && A.refetch();
	}, [e?.version]);
	let j = T.title || o || A.data?.meta.title || "", M = T.description || A.data?.meta.description || "", N = C.site.url.replace(/^https?:\/\//, "").replace(/\/$/, ""), P = (A.data?.checks ?? []).filter((e) => e.status !== "pass"), F = w?.fields ?? [];
	return /* @__PURE__ */ v("div", { children: [
		w && /* @__PURE__ */ _("section", {
			className: "border-b border-border px-4 py-3",
			children: F.map((t) => /* @__PURE__ */ _(b, {
				field: t,
				error: y[`seo.${t.handle}`],
				children: /* @__PURE__ */ _(d, {
					bare: !0,
					context: {
						path: [w.handle],
						entry: e ?? void 0,
						collection: e?.collection
					},
					disabled: !g,
					errors: y,
					fields: [{
						...t,
						instructions: void 0,
						width: "full",
						size: "sm",
						rows: t.type === "textarea" ? 3 : t.rows,
						placeholder: (t.handle === "title" ? o || A.data?.meta.title : t.handle === "description" ? A.data?.meta.description : void 0) || t.placeholder
					}],
					values: T,
					onChange: (e, t) => u("seo", {
						...T,
						[e]: t
					})
				})
			}, t.handle))
		}),
		/* @__PURE__ */ v("section", {
			className: "border-b border-border px-4 pb-4",
			children: [/* @__PURE__ */ _("h3", {
				className: "m-0 flex h-10 items-center text-xs font-semibold text-ink",
				children: r("Search Preview")
			}), /* @__PURE__ */ v("div", {
				className: "rounded-md bg-bg px-3 py-2.5 shadow-[0_0_0_1px_var(--cms-border)]",
				children: [
					/* @__PURE__ */ v("div", {
						className: "truncate text-xs text-muted",
						children: [N, e?.uri && e.uri !== "/" ? e.uri.replace(/\//g, " › ").replace(/^ › /, " › ") : ""]
					}),
					/* @__PURE__ */ _("div", {
						className: "mt-0.5 line-clamp-2 text-[15px] leading-5 text-[#1a0dab] dark:text-[#8ab4f8]",
						children: j
					}),
					/* @__PURE__ */ _("div", {
						className: "mt-1 line-clamp-2 text-xs leading-[18px] text-muted",
						children: M || /* @__PURE__ */ _("span", {
							className: "text-faint",
							children: r("No description: the first paragraph is used.")
						})
					})
				]
			})]
		}),
		/* @__PURE__ */ v("section", {
			className: "border-b border-border px-4 pb-3 last:border-b-0",
			children: [
				/* @__PURE__ */ v("button", {
					type: "button",
					disabled: !A.data || P.length === 0,
					onClick: () => k(!O),
					"aria-expanded": P.length > 0 ? O : void 0,
					className: "group/score -mx-2 flex h-10 w-[calc(100%+16px)] items-center gap-2 rounded-md px-2 text-left enabled:hover:bg-hover",
					children: [
						/* @__PURE__ */ _("span", {
							className: "min-w-0 flex-1 truncate text-xs font-semibold text-ink",
							children: r("Score")
						}),
						A.data && /* @__PURE__ */ _("span", {
							className: "shrink-0 text-xs text-muted",
							children: P.length ? r("{count} to improve", { count: P.length }) : r("All checks pass")
						}),
						A.isLoading && /* @__PURE__ */ _(m, { size: 14 }),
						A.data && /* @__PURE__ */ _(x, { value: A.data.score }),
						P.length > 0 && /* @__PURE__ */ _(f, {
							name: "chevron-down",
							size: 14,
							className: h("shrink-0 text-faint transition-transform duration-120", !O && "-rotate-90")
						})
					]
				}),
				!e && /* @__PURE__ */ _("p", {
					className: "m-0 text-xs text-muted",
					children: r("Checks are available after the first save.")
				}),
				A.isError && /* @__PURE__ */ _(p, {
					compact: !0,
					message: r("Couldn’t load SEO checks."),
					onRetry: () => void A.refetch()
				}),
				O && P.length > 0 && /* @__PURE__ */ v("ul", {
					className: "m-0 mt-1 list-none space-y-3 p-0 pb-1",
					children: [P.map((e) => /* @__PURE__ */ v("li", {
						className: "flex gap-2.5",
						children: [/* @__PURE__ */ _("span", {
							className: h("mt-[7px] size-1.5 shrink-0 rounded-full", e.status === "warn" ? "bg-warning" : "bg-danger"),
							role: "img",
							"aria-label": e.status === "warn" ? r("Could Be Better") : r("Needs Fixing")
						}), /* @__PURE__ */ v("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ _("span", {
								className: "block text-sm text-text",
								children: e.label
							}), /* @__PURE__ */ _("span", {
								className: "block text-xs text-muted",
								children: e.message
							})]
						})]
					}, e.id)), /* @__PURE__ */ _("li", {
						className: "pl-4 text-xs text-faint",
						children: r("Based on the last save.")
					})]
				}),
				e && /* @__PURE__ */ _(l, {
					size: "sm",
					variant: "ghost",
					icon: "markdown",
					className: "-ml-2 mt-1",
					onClick: () => D(!0),
					children: r("What AI Crawlers Read")
				})
			]
		}),
		E && e && /* @__PURE__ */ _(S, {
			id: e.id,
			onClose: () => D(!1)
		})
	] });
}
function b({ field: e, error: t, children: n }) {
	return e.type === "toggle" ? /* @__PURE__ */ _("div", {
		className: "flex min-h-7 items-center py-1",
		children: n
	}) : /* @__PURE__ */ v("div", {
		className: "pb-2 last:pb-0",
		"data-error": t ? "" : void 0,
		children: [/* @__PURE__ */ _("label", {
			htmlFor: g(e, ["seo"]),
			className: "flex h-7 min-w-0 items-center text-xs text-muted",
			children: /* @__PURE__ */ _("span", {
				className: "truncate",
				children: e.label
			})
		}), n]
	});
}
function x({ value: e }) {
	let t = e >= 85 ? "text-success" : e >= 60 ? "text-warning" : "text-danger", n = 2 * Math.PI * 6;
	return /* @__PURE__ */ v("span", {
		className: "flex shrink-0 items-center gap-1.5 text-sm font-medium tabular-nums text-ink",
		children: [/* @__PURE__ */ v("svg", {
			width: "16",
			height: "16",
			viewBox: "0 0 16 16",
			className: h("-rotate-90", t),
			"aria-hidden": !0,
			children: [/* @__PURE__ */ _("circle", {
				cx: "8",
				cy: "8",
				r: 6,
				fill: "none",
				stroke: "currentColor",
				strokeOpacity: "0.2",
				strokeWidth: "2"
			}), /* @__PURE__ */ _("circle", {
				cx: "8",
				cy: "8",
				r: 6,
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2",
				strokeDasharray: n,
				strokeDashoffset: n * (1 - e / 100),
				strokeLinecap: "round"
			})]
		}), e]
	});
}
function S({ id: e, onClose: t }) {
	let n = i("seo/markdown", { id: e });
	return /* @__PURE__ */ _(u, {
		open: !0,
		onOpenChange: (e) => !e && t(),
		size: "lg",
		title: r("Markdown Version"),
		description: r("Published at /page.md and listed in /llms.txt for AI crawlers and agents."),
		children: n.isError ? /* @__PURE__ */ _(p, {
			message: r("Couldn’t load the Markdown version."),
			onRetry: () => void n.refetch()
		}) : n.data ? /* @__PURE__ */ _("pre", {
			className: "m-0 max-h-[60vh] overflow-auto whitespace-pre-wrap rounded-md bg-sunken p-4 font-mono text-xs leading-5",
			children: n.data.markdown
		}) : /* @__PURE__ */ _(m, {})
	});
}
n.panels.set("seo", {
	id: "seo",
	slot: "entry.sidebar",
	fieldHandles: ["seo"],
	label: "SEO",
	icon: "seo",
	component: y,
	order: 20,
	when: (e) => !!e.collection?.route
}), n.panels.set("redirects", {
	id: "redirects",
	slot: "settings.tabs",
	label: r("Redirects"),
	component: o(() => import("./chunks/Redirects-3iae9nbe.js")),
	order: 10,
	when: (e) => e.namespace === "seo"
}), n.panels.set("redirects-new", {
	id: "redirects-new",
	slot: "settings.actions",
	component: e,
	when: (e) => e.namespace === "seo" && e.tab === "redirects"
}), n.routes.set("/redirects", {
	path: "/redirects",
	component: C
}), n.widgets.set("seo-health", o(() => import("./chunks/WidgetHealth-Mu5TWpiK.js")));
function C() {
	return s(() => t("/settings/seo?tab=redirects", { replace: !0 }), []), null;
}
