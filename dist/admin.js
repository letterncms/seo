import { navigate as e, registry as t, t as n, useAbility as r, useManifest as i } from "@letterncms/sdk";
import { lazy as a, useEffect as o, useState as s } from "react";
import { Button as c, Dialog as l, Fields as u, Icon as d, QueryError as f, Select as p, Spinner as m, cn as h, fieldControlId as g } from "@letterncms/ui";
import { Fragment as _, jsx as v, jsxs as y } from "react/jsx-runtime";
// admin/src/SeoPanel.tsx
function b({ entry: e, collection: t, values: a, title: l, setValue: b, editable: E, errors: D }) {
	let O = i(), k = t.resolvedFields.find((e) => e.handle === "seo"), A = a.seo ?? {}, [j, M] = s(!1), [N, P] = s(!1), F = r("seo/analyze", { id: e?.id ?? "" }, {
		enabled: !!e,
		staleTime: 0
	});
	o(() => {
		e && F.refetch();
	}, [e?.version]);
	let I = A.title || l || F.data?.meta.title || "", L = A.description || F.data?.meta.description || "", R = O.site.url.replace(/^https?:\/\//, "").replace(/\/$/, ""), z = (F.data?.checks ?? []).filter((e) => e.status !== "pass"), B = k?.fields ?? [], V = /* @__PURE__ */ y(_, { children: [
		/* @__PURE__ */ v("span", {
			className: "min-w-0 flex-1 truncate",
			children: n("Score")
		}),
		F.data && /* @__PURE__ */ v("span", {
			className: "shrink-0 font-normal text-muted",
			children: z.length ? n("{count} to improve", { count: z.length }) : n("All checks pass")
		}),
		F.isLoading && /* @__PURE__ */ v(m, { size: 14 }),
		F.data && /* @__PURE__ */ v(w, { value: F.data.score })
	] });
	return /* @__PURE__ */ y("div", { children: [
		k && /* @__PURE__ */ v("section", {
			className: "border-b border-border px-4 py-3",
			children: B.map((t) => /* @__PURE__ */ v(C, {
				field: t,
				error: D[`seo.${t.handle}`],
				children: t.type === "select" && typeof t.placeholder == "string" ? /* @__PURE__ */ v(p, {
					id: g(t, ["seo"]),
					"aria-label": t.label,
					size: "sm",
					value: typeof A[t.handle] == "string" && A[t.handle] !== "" ? A[t.handle] : null,
					onChange: (e) => b("seo", {
						...A,
						[t.handle]: e
					}),
					options: Object.entries(t.options ?? {}).map(([e, t]) => ({
						value: e,
						label: String(t)
					})),
					defaultLabel: t.placeholder,
					invalid: !!D[`seo.${t.handle}`],
					disabled: !E,
					clearable: !0
				}) : /* @__PURE__ */ v(u, {
					bare: !0,
					context: {
						path: [k.handle],
						entry: e ?? void 0,
						collection: e?.collection
					},
					disabled: !E,
					errors: D,
					fields: [{
						...t,
						instructions: void 0,
						width: "full",
						size: "sm",
						rows: t.type === "textarea" ? 3 : t.rows,
						placeholder: (t.handle === "title" ? l || F.data?.meta.title : t.handle === "description" ? S(F.data?.meta.description) : void 0) || t.placeholder
					}],
					values: A,
					onChange: (e, t) => b("seo", {
						...A,
						[e]: t
					})
				})
			}, t.handle))
		}),
		/* @__PURE__ */ y("section", {
			className: "border-b border-border px-4 pb-4",
			children: [/* @__PURE__ */ v("h3", {
				className: "m-0 flex h-10 items-center text-xs font-semibold text-ink",
				children: n("Search Preview")
			}), /* @__PURE__ */ y("div", {
				className: "rounded-md bg-bg px-3 py-2.5 ring-1 ring-border",
				children: [
					/* @__PURE__ */ y("div", {
						className: "truncate text-xs text-muted",
						children: [R, e?.uri && e.uri !== "/" ? e.uri.replace(/\//g, " › ").replace(/^ › /, " › ") : ""]
					}),
					/* @__PURE__ */ v("div", {
						className: "mt-0.5 line-clamp-2 text-base leading-5 text-info",
						children: I
					}),
					/* @__PURE__ */ v("div", {
						className: "mt-1 line-clamp-2 text-xs text-muted",
						children: L || /* @__PURE__ */ v("span", {
							className: "text-faint",
							children: n("No description: the first paragraph is used.")
						})
					})
				]
			})]
		}),
		/* @__PURE__ */ y("section", {
			className: "border-b border-border px-4 pb-3 last:border-b-0",
			children: [
				z.length > 0 ? /* @__PURE__ */ y(c, {
					variant: "ghost",
					onClick: () => P(!N),
					"aria-expanded": N,
					className: x,
					children: [V, /* @__PURE__ */ v(d, {
						name: "chevron-down",
						size: 14,
						className: h("shrink-0 text-faint transition-transform duration-base", !N && "-rotate-90")
					})]
				}) : /* @__PURE__ */ v("div", {
					className: h(x, "flex"),
					children: V
				}),
				!e && /* @__PURE__ */ v("p", {
					className: "m-0 text-xs text-muted",
					children: n("Checks are available after the first save.")
				}),
				F.isError && /* @__PURE__ */ v(f, {
					compact: !0,
					message: n("Couldn’t load SEO checks."),
					onRetry: () => void F.refetch()
				}),
				N && z.length > 0 && /* @__PURE__ */ y("ul", {
					className: "m-0 mt-1 list-none space-y-3 p-0 pb-1",
					children: [z.map((e) => /* @__PURE__ */ y("li", {
						className: "flex gap-2.5",
						children: [/* @__PURE__ */ v("span", {
							className: h("mt-[7px] size-1.5 shrink-0 rounded-full", e.status === "warn" ? "bg-warning" : "bg-danger"),
							role: "img",
							"aria-label": e.status === "warn" ? n("Could Be Better") : n("Needs Fixing")
						}), /* @__PURE__ */ y("span", {
							className: "min-w-0",
							children: [/* @__PURE__ */ v("span", {
								className: "block text-sm text-text",
								children: e.label
							}), /* @__PURE__ */ v("span", {
								className: "block text-xs text-muted",
								children: e.message
							})]
						})]
					}, e.id)), /* @__PURE__ */ v("li", {
						className: "pl-4 text-xs text-faint",
						children: n("Based on the last save.")
					})]
				}),
				e && /* @__PURE__ */ y(c, {
					variant: "ghost",
					onClick: () => M(!0),
					className: x,
					children: [/* @__PURE__ */ v("span", {
						className: "min-w-0 flex-1 truncate",
						children: n("What AI Crawlers Read")
					}), /* @__PURE__ */ v(d, {
						name: "chevron-right",
						size: 14,
						className: "shrink-0 text-faint"
					})]
				})
			]
		}),
		j && e && /* @__PURE__ */ v(T, {
			id: e.id,
			onClose: () => M(!1)
		})
	] });
}
var x = "-mx-2 h-10! w-[calc(100%+16px)] items-center justify-start! gap-2! rounded-md! px-2! text-left text-xs! font-semibold! text-ink";
function S(e, t = 90) {
	if (!e || e.length <= t) return e;
	let n = e.slice(0, t);
	return `${n.slice(0, n.lastIndexOf(" ") > 40 ? n.lastIndexOf(" ") : t).replace(/[\s.,;:!?–-]+$/, "")}…`;
}
function C({ field: e, error: t, children: n }) {
	return e.type === "toggle" ? /* @__PURE__ */ v("div", {
		className: "flex min-h-7 items-center py-1",
		children: n
	}) : /* @__PURE__ */ y("div", {
		className: "pb-2 last:pb-0",
		"data-error": t ? "" : void 0,
		children: [/* @__PURE__ */ v("label", {
			htmlFor: g(e, ["seo"]),
			className: "flex h-7 min-w-0 items-center text-xs text-muted",
			children: /* @__PURE__ */ v("span", {
				className: "truncate",
				children: e.label
			})
		}), n]
	});
}
function w({ value: e }) {
	let t = e >= 85 ? "text-success" : e >= 60 ? "text-warning" : "text-danger", n = 2 * Math.PI * 6;
	return /* @__PURE__ */ y("span", {
		className: "flex shrink-0 items-center gap-1.5 text-sm font-medium tabular-nums text-ink",
		children: [/* @__PURE__ */ y("svg", {
			width: "16",
			height: "16",
			viewBox: "0 0 16 16",
			className: h("-rotate-90", t),
			"aria-hidden": !0,
			children: [/* @__PURE__ */ v("circle", {
				cx: "8",
				cy: "8",
				r: 6,
				fill: "none",
				stroke: "currentColor",
				strokeOpacity: "0.2",
				strokeWidth: "2"
			}), /* @__PURE__ */ v("circle", {
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
function T({ id: e, onClose: t }) {
	let i = r("seo/markdown", { id: e });
	return /* @__PURE__ */ v(l, {
		open: !0,
		onOpenChange: (e) => !e && t(),
		size: "lg",
		title: n("Markdown Version"),
		description: n("Published at /page.md and listed in /llms.txt for AI crawlers and agents."),
		children: i.isError ? /* @__PURE__ */ v(f, {
			message: n("Couldn’t load the Markdown version."),
			onRetry: () => void i.refetch()
		}) : i.data ? /* @__PURE__ */ v("pre", {
			className: "m-0 max-h-[60vh] overflow-auto whitespace-pre-wrap rounded-md bg-sunken p-4 font-mono text-xs leading-5",
			children: i.data.markdown
		}) : /* @__PURE__ */ v(m, {})
	});
}
t.panels.set("seo", {
	slot: "entry.sidebar",
	fieldHandles: ["seo"],
	label: "SEO",
	icon: "seo",
	component: b,
	order: 20,
	when: (e) => !!e.collection?.route
}), t.routes.set("/redirects", {
	path: "/redirects",
	component: E
}), t.widgets.set("seo-health", a(() => import("./chunks/WidgetHealth-Mu5TWpiK.js")));
function E() {
	return o(() => e("/settings/seo?tab=redirects", { replace: !0 }), []), null;
}
