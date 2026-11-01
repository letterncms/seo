import { prefetchAbility as e, registry as t, t as n, useAbility as r, useManifest as i } from "@letterncms/sdk";
import { lazy as a, useEffect as o, useState as s } from "react";
import { Button as c, Dialog as l, Fields as u, Icon as d, QueryError as f, Spinner as p, cn as m } from "@letterncms/ui";
import { jsx as h, jsxs as g } from "react/jsx-runtime";
// admin/src/SeoPanel.tsx
function _({ entry: e, collection: t, values: a, title: l, setValue: _, editable: b, errors: x }) {
	let S = i(), C = t.resolvedFields.find((e) => e.handle === "seo"), w = a.seo ?? {}, [T, E] = s(!1), D = r("seo/analyze", { id: e?.id ?? "" }, {
		enabled: !!e,
		staleTime: 0
	});
	o(() => {
		e && D.refetch();
	}, [e?.version]);
	let O = w.title || l || D.data?.meta.title || "", k = w.description || D.data?.meta.description || "", A = S.site.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
	return /* @__PURE__ */ g("div", {
		className: "space-y-6 p-4",
		children: [
			/* @__PURE__ */ g("section", { children: [/* @__PURE__ */ h("div", {
				className: "cms-caps mb-2",
				children: n("Search Preview")
			}), /* @__PURE__ */ g("div", {
				className: "rounded-md border border-border p-3",
				children: [
					/* @__PURE__ */ g("div", {
						className: "truncate text-xs text-muted",
						children: [A, e?.uri && e.uri !== "/" ? e.uri.replace(/\//g, " › ").replace(/^ › /, " › ") : ""]
					}),
					/* @__PURE__ */ h("div", {
						className: "mt-0.5 line-clamp-2 text-[15px] leading-5 text-[#1a0dab] dark:text-[#8ab4f8]",
						children: O
					}),
					/* @__PURE__ */ h("div", {
						className: "mt-1 line-clamp-2 text-xs leading-[18px] text-muted",
						children: k || /* @__PURE__ */ h("span", {
							className: "text-faint",
							children: n("No description: the first paragraph is used.")
						})
					})
				]
			})] }),
			!e && /* @__PURE__ */ h("p", {
				className: "m-0 text-xs text-muted",
				children: n("Checks are available after the first save.")
			}),
			D.isError && /* @__PURE__ */ h(f, {
				compact: !0,
				message: n("Couldn’t load SEO checks."),
				onRetry: () => void D.refetch()
			}),
			D.data && /* @__PURE__ */ g("section", { children: [/* @__PURE__ */ g("div", {
				className: "mb-2 flex items-center justify-between",
				children: [/* @__PURE__ */ h("span", {
					className: "cms-caps",
					children: n("Checks · saved content")
				}), /* @__PURE__ */ h(v, { value: D.data.score })]
			}), /* @__PURE__ */ h("ul", {
				className: "m-0 list-none space-y-2 p-0",
				children: D.data.checks.map((e) => /* @__PURE__ */ g("li", {
					className: "flex gap-2 text-xs",
					children: [/* @__PURE__ */ h("span", {
						className: m("mt-0.5 grid size-4 shrink-0 place-items-center rounded-full", e.status === "pass" ? "bg-success/15 text-success" : e.status === "warn" ? "bg-warning/15 text-warning" : "bg-danger/15 text-danger"),
						children: /* @__PURE__ */ h(d, {
							name: e.status === "pass" ? "check" : e.status === "warn" ? "minus" : "close",
							size: 10
						})
					}), /* @__PURE__ */ g("span", { children: [/* @__PURE__ */ h("span", {
						className: "font-medium text-text",
						children: e.label
					}), /* @__PURE__ */ h("span", {
						className: "block text-faint",
						children: e.message
					})] })]
				}, e.id))
			})] }),
			D.isLoading && /* @__PURE__ */ h("div", {
				className: "flex justify-center text-faint",
				children: /* @__PURE__ */ h(p, {})
			}),
			C && /* @__PURE__ */ g("section", { children: [/* @__PURE__ */ h("div", {
				className: "cms-caps mb-3",
				children: n("Search & Social")
			}), /* @__PURE__ */ h(u, {
				context: {
					path: [C.handle],
					entry: e ?? void 0,
					collection: e?.collection
				},
				disabled: !b,
				errors: x,
				fields: (C.fields ?? []).map((e) => ({
					...e,
					width: "full"
				})),
				values: w,
				onChange: (e, t) => _("seo", {
					...w,
					[e]: t
				})
			})] }),
			e && /* @__PURE__ */ h(c, {
				size: "sm",
				icon: "markdown",
				className: "w-full",
				onClick: () => E(!0),
				children: n("What AI Crawlers Read")
			}),
			T && e && /* @__PURE__ */ h(y, {
				id: e.id,
				onClose: () => E(!1)
			})
		]
	});
}
function v({ value: e }) {
	let t = e >= 85 ? "text-success" : e >= 60 ? "text-warning" : "text-danger", n = 2 * Math.PI * 9;
	return /* @__PURE__ */ g("span", {
		className: m("flex items-center gap-1.5 text-xs font-semibold", t),
		children: [/* @__PURE__ */ g("svg", {
			width: "22",
			height: "22",
			viewBox: "0 0 22 22",
			className: "-rotate-90",
			children: [/* @__PURE__ */ h("circle", {
				cx: "11",
				cy: "11",
				r: 9,
				fill: "none",
				stroke: "currentColor",
				strokeOpacity: "0.18",
				strokeWidth: "2.5"
			}), /* @__PURE__ */ h("circle", {
				cx: "11",
				cy: "11",
				r: 9,
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2.5",
				strokeDasharray: n,
				strokeDashoffset: n * (1 - e / 100),
				strokeLinecap: "round"
			})]
		}), e]
	});
}
function y({ id: e, onClose: t }) {
	let i = r("seo/markdown", { id: e });
	return /* @__PURE__ */ h(l, {
		open: !0,
		onOpenChange: (e) => !e && t(),
		size: "lg",
		title: n("Markdown Version"),
		description: n("Published at /page.md and listed in /llms.txt for AI crawlers and agents."),
		children: i.isError ? /* @__PURE__ */ h(f, {
			message: n("Couldn’t load the Markdown version."),
			onRetry: () => void i.refetch()
		}) : i.data ? /* @__PURE__ */ h("pre", {
			className: "m-0 max-h-[60vh] overflow-auto whitespace-pre-wrap rounded-md bg-sunken p-4 font-mono text-xs leading-5",
			children: i.data.markdown
		}) : /* @__PURE__ */ h(p, {})
	});
}
t.panels.set("seo", {
	id: "seo",
	slot: "entry.sidebar",
	fieldHandles: ["seo"],
	label: "SEO",
	component: _,
	order: 20,
	when: (e) => !!e.collection?.route
}), t.routes.set("/redirects", {
	path: "/redirects",
	component: a(() => import("./chunks/RedirectsScreen-Byd7TaQN.js")),
	load: () => e("redirects/list")
}), t.widgets.set("seo-health", a(() => import("./chunks/WidgetHealth-Mu5TWpiK.js")));
