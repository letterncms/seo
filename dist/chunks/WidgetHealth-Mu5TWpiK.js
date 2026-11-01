import { plural as e, t, useAbility as n, useManifest as r } from "@letterncms/sdk";
import { BarRow as i, Stat as a, Widget as o, WidgetRow as s, WidgetSkeleton as c, cn as l } from "@letterncms/ui";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
// admin/src/WidgetHealth.tsx
function p() {
	let p = n("seo/health", { limit: 5 }, { staleTime: 6e4 }), m = p.data, h = r().site.locales.length > 1;
	return /* @__PURE__ */ d(o, {
		query: p,
		skeleton: /* @__PURE__ */ d(c, { rows: 5 }),
		empty: m?.pages === 0 && {
			icon: "seo",
			title: t("No published pages yet")
		},
		children: m && /* @__PURE__ */ f(u, { children: [/* @__PURE__ */ f("div", {
			className: "grid grid-cols-2 gap-4 @md:grid-cols-3",
			children: [
				/* @__PURE__ */ d(a, {
					label: t("Average Score"),
					value: /* @__PURE__ */ f(u, { children: [m.score, /* @__PURE__ */ d("span", {
						className: "text-sm font-normal text-faint",
						children: "/100"
					})] })
				}),
				/* @__PURE__ */ d(a, {
					label: t("Need Attention"),
					value: /* @__PURE__ */ f(u, { children: [m.attention, /* @__PURE__ */ f("span", {
						className: "text-sm font-normal text-faint",
						children: [" / ", m.pages]
					})] })
				}),
				/* @__PURE__ */ d(a, {
					label: t("Pages Checked"),
					value: m.pages,
					className: "hidden @md:block"
				})
			]
		}), /* @__PURE__ */ f("div", {
			className: "mt-5 grid gap-x-8 gap-y-5 @lg:grid-cols-2",
			children: [m.issues.length > 0 && /* @__PURE__ */ f("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ d("p", {
					className: "m-0 mb-1 text-xs text-muted",
					children: t("Common Issues")
				}), m.issues.slice(0, 3).map((t) => /* @__PURE__ */ d(i, {
					label: t.label,
					value: e(t.pages, "{count} page", "{count} pages"),
					share: t.pages / m.pages
				}, t.id))]
			}), /* @__PURE__ */ f("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ d("p", {
					className: "m-0 mb-0.5 text-xs text-muted",
					children: t("Lowest Scores")
				}), m.worst.length === 0 ? /* @__PURE__ */ d("p", {
					className: "m-0 py-2 text-sm text-muted",
					children: t("Every page scores {score} or more.", { score: m.good })
				}) : m.worst.map((e, n) => /* @__PURE__ */ d(s, {
					to: `/content/${e.collection}/${e.id}`,
					icon: "file",
					title: /* @__PURE__ */ f(u, { children: [e.title || t("Untitled"), h && /* @__PURE__ */ d("span", {
						className: "ml-1.5 text-2xs uppercase text-faint",
						children: e.locale
					})] }),
					meta: /* @__PURE__ */ d("span", {
						className: l("tabular-nums", e.score < 50 ? "text-danger" : "text-muted"),
						children: e.score
					}),
					className: n >= 3 ? "hidden @md:flex" : void 0
				}, e.id))]
			})]
		})] })
	});
}
export { p as default };
