import { navigate as e, registry as t, t as n, useAbility as r, useManifest as i } from "@letterncms/sdk";
import { lazy as a, useEffect as o, useState as s } from "react";
import { Button as c, Dialog as l, Fields as u, Icon as d, QueryError as f, Spinner as p, cn as m, fieldControlId as h } from "@letterncms/ui";
import { jsx as g, jsxs as _ } from "react/jsx-runtime";
// admin/src/SeoPanel.tsx
function v({ entry: e, collection: t, values: a, title: l, setValue: h, editable: v, errors: S }) {
	let C = i(), w = t.resolvedFields.find((e) => e.handle === "seo"), T = a.seo ?? {}, [E, D] = s(!1), [O, k] = s(!1), A = r("seo/analyze", { id: e?.id ?? "" }, {
		enabled: !!e,
		staleTime: 0
	});
	o(() => {
		e && A.refetch();
	}, [e?.version]);
	let j = T.title || l || A.data?.meta.title || "", M = T.description || A.data?.meta.description || "", N = C.site.url.replace(/^https?:\/\//, "").replace(/\/$/, ""), P = (A.data?.checks ?? []).filter((e) => e.status !== "pass"), F = w?.fields ?? [];
	return /* @__PURE__ */ _("div", { children: [
		w && /* @__PURE__ */ g("section", {
			className: "border-b border-border px-4 py-3",
			children: F.map((t) => /* @__PURE__ */ g(y, {
				field: t,
				error: S[`seo.${t.handle}`],
				children: /* @__PURE__ */ g(u, {
					bare: !0,
					context: {
						path: [w.handle],
						entry: e ?? void 0,
						collection: e?.collection
					},
					disabled: !v,
					errors: S,
					fields: [{
						...t,
						instructions: void 0,
						width: "full",
						size: "sm",
						rows: t.type === "textarea" ? 3 : t.rows,
						placeholder: (t.handle === "title" ? l || A.data?.meta.title : t.handle === "description" ? A.data?.meta.description : void 0) || t.placeholder
					}],
					values: T,
					onChange: (e, t) => h("seo", {
						...T,
						[e]: t
					})
				})
			}, t.handle))
		}),
		/* @__PURE__ */ _("section", {
			className: "border-b border-border px-4 pb-4",
			children: [/* @__PURE__ */ g("h3", {
				className: "m-0 flex h-10 items-center text-xs font-semibold text-ink",
				children: n("Search Preview")
			}), /* @__PURE__ */ _("div", {
				className: "rounded-md bg-bg px-3 py-2.5 shadow-[0_0_0_1px_var(--cms-border)]",
				children: [
					/* @__PURE__ */ _("div", {
						className: "truncate text-xs text-muted",
						children: [N, e?.uri && e.uri !== "/" ? e.uri.replace(/\//g, " › ").replace(/^ › /, " › ") : ""]
					}),
					/* @__PURE__ */ g("div", {
						className: "mt-0.5 line-clamp-2 text-[15px] leading-5 text-[#1a0dab] dark:text-[#8ab4f8]",
						children: j
					}),
					/* @__PURE__ */ g("div", {
						className: "mt-1 line-clamp-2 text-xs leading-[18px] text-muted",
						children: M || /* @__PURE__ */ g("span", {
							className: "text-faint",
							children: n("No description: the first paragraph is used.")
						})
					})
				]
			})]
		}),
		/* @__PURE__ */ _("section", {
			className: "border-b border-border px-4 pb-3 last:border-b-0",
			children: [
				/* @__PURE__ */ _("button", {
					type: "button",
					disabled: !A.data || P.length === 0,
					onClick: () => k(!O),
					"aria-expanded": P.length > 0 ? O : void 0,
					className: "group/score -mx-2 flex h-10 w-[calc(100%+16px)] items-center gap-2 rounded-md px-2 text-left enabled:hover:bg-hover",
					children: [
						/* @__PURE__ */ g("span", {
							className: "min-w-0 flex-1 truncate text-xs font-semibold text-ink",
							children: n("Score")
						}),
						A.data && /* @__PURE__ */ g("span", {
							className: "shrink-0 text-xs text-muted",
							children: P.length ? n("{count} to improve", { count: P.length }) : n("All checks pass")
						}),
						A.isLoading && /* @__PURE__ */ g(p, { size: 14 }),
						A.data && /* @__PURE__ */ g(b, { value: A.data.score }),
						P.length > 0 && /* @__PURE__ */ g(d, {
							name: "chevron-down",
							size: 14,
							className: m("shrink-0 text-faint transition-transform duration-120", !O && "-rotate-90")
						})
					]
				}),
				!e && /* @__PURE__ */ g("p", {
					className: "m-0 text-xs text-muted",
					children: n("Checks are available after the first save.")
				}),
				A.isError && /* @__PURE__ */ g(f, {
					compact: !0,
					message: n("Couldn’t load SEO checks."),
					onRetry: () => void A.refetch()
				}),
				O && P.length > 0 && /* @__PURE__ */ _("ul", {
					className: "m-0 mt-1 list-none space-y-3 p-0 pb-1",
					children: [P.map((e) => /* @__PURE__ */ _("li", {
						className: "flex gap-2.5",
						children: [/* @__PURE__ */ g("span", {
							className: m("mt-[7px] size-1.5 shrink-0 rounded-full", e.status === "warn" ? "bg-warning" : "bg-danger"),
							role: "img",
							"aria-label": e.status === "warn" ? n("Could Be Better") : n("Needs Fixing")
						}), /* @__PURE__ */ _("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ g("span", {
								className: "block text-sm text-text",
								children: e.label
							}), /* @__PURE__ */ g("span", {
								className: "block text-xs text-muted",
								children: e.message
							})]
						})]
					}, e.id)), /* @__PURE__ */ g("li", {
						className: "pl-4 text-xs text-faint",
						children: n("Based on the last save.")
					})]
				}),
				e && /* @__PURE__ */ g(c, {
					size: "sm",
					variant: "ghost",
					icon: "markdown",
					className: "-ml-2 mt-1",
					onClick: () => D(!0),
					children: n("What AI Crawlers Read")
				})
			]
		}),
		E && e && /* @__PURE__ */ g(x, {
			id: e.id,
			onClose: () => D(!1)
		})
	] });
}
function y({ field: e, error: t, children: n }) {
	return e.type === "toggle" ? /* @__PURE__ */ g("div", {
		className: "flex min-h-7 items-center py-1",
		children: n
	}) : /* @__PURE__ */ _("div", {
		className: "pb-2 last:pb-0",
		"data-error": t ? "" : void 0,
		children: [/* @__PURE__ */ g("label", {
			htmlFor: h(e, ["seo"]),
			className: "flex h-7 min-w-0 items-center text-xs text-muted",
			children: /* @__PURE__ */ g("span", {
				className: "truncate",
				children: e.label
			})
		}), n]
	});
}
function b({ value: e }) {
	let t = e >= 85 ? "text-success" : e >= 60 ? "text-warning" : "text-danger", n = 2 * Math.PI * 6;
	return /* @__PURE__ */ _("span", {
		className: "flex shrink-0 items-center gap-1.5 text-sm font-medium tabular-nums text-ink",
		children: [/* @__PURE__ */ _("svg", {
			width: "16",
			height: "16",
			viewBox: "0 0 16 16",
			className: m("-rotate-90", t),
			"aria-hidden": !0,
			children: [/* @__PURE__ */ g("circle", {
				cx: "8",
				cy: "8",
				r: 6,
				fill: "none",
				stroke: "currentColor",
				strokeOpacity: "0.2",
				strokeWidth: "2"
			}), /* @__PURE__ */ g("circle", {
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
function x({ id: e, onClose: t }) {
	let i = r("seo/markdown", { id: e });
	return /* @__PURE__ */ g(l, {
		open: !0,
		onOpenChange: (e) => !e && t(),
		size: "lg",
		title: n("Markdown Version"),
		description: n("Published at /page.md and listed in /llms.txt for AI crawlers and agents."),
		children: i.isError ? /* @__PURE__ */ g(f, {
			message: n("Couldn’t load the Markdown version."),
			onRetry: () => void i.refetch()
		}) : i.data ? /* @__PURE__ */ g("pre", {
			className: "m-0 max-h-[60vh] overflow-auto whitespace-pre-wrap rounded-md bg-sunken p-4 font-mono text-xs leading-5",
			children: i.data.markdown
		}) : /* @__PURE__ */ g(p, {})
	});
}
t.panels.set("seo", {
	id: "seo",
	slot: "entry.sidebar",
	fieldHandles: ["seo"],
	label: "SEO",
	icon: "seo",
	component: v,
	order: 20,
	when: (e) => !!e.collection?.route
}), t.routes.set("/redirects", {
	path: "/redirects",
	component: S
}), t.widgets.set("seo-health", a(() => import("./chunks/WidgetHealth-Mu5TWpiK.js")));
function S() {
	return o(() => e("/settings/seo?tab=redirects", { replace: !0 }), []), null;
}
