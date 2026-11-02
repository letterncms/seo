import { invalidate as e, run as t, t as n, useAbility as r } from "@letterncms/sdk";
import { useEffect as i, useState as a } from "react";
import { Button as o, DataView as s, EmptyState as c, Fields as l, IconButton as u, Page as d, toast as f } from "@letterncms/ui";
import { Fragment as p, jsx as m, jsxs as h } from "react/jsx-runtime";
// admin/src/RedirectsScreen.tsx
function g() {
	return {
		filter: {
			handle: "filter",
			type: "text",
			label: n("Filter"),
			icon: "search",
			size: "sm",
			placeholder: n("Filter…"),
			className: "w-64"
		},
		from: {
			handle: "from",
			type: "text",
			label: n("From"),
			size: "sm",
			mono: !0,
			placeholder: "/old-url"
		},
		to: {
			handle: "to",
			type: "text",
			label: n("To"),
			size: "sm",
			mono: !0,
			placeholder: n("/new-url or https://…")
		},
		status: {
			handle: "status",
			type: "select",
			label: n("Status"),
			size: "sm",
			required: !0,
			numeric: !0,
			options: {
				301: n("301 Permanent"),
				302: n("302 Temporary")
			}
		}
	};
}
function _() {
	let _ = r("redirects/list", {}, { refetchOnWindowFocus: !1 }), [v, y] = a(null), [b, x] = a(!1), { from: S, to: C, status: w } = g();
	i(() => {
		_.data && v === null && y(_.data);
	}, [_.data, v]);
	let T = v !== null && JSON.stringify(v) !== JSON.stringify(_.data), E = () => y((e) => [{
		from: "",
		to: "",
		status: 301,
		publishedAt: null,
		updatedAt: null
	}, ...e ?? []]), D = (v ?? []).map((e, t) => ({
		r: e,
		i: t
	})), O = (e, t) => y((n) => n.map((n, r) => r === e ? {
		...n,
		...t
	} : n));
	return /* @__PURE__ */ m(d, {
		width: "wide",
		crumbs: [{
			label: n("Redirects"),
			icon: "arrow-up-right"
		}],
		actions: /* @__PURE__ */ h(p, { children: [/* @__PURE__ */ m(o, {
			icon: "plus",
			onClick: E,
			children: n("New Redirect")
		}), /* @__PURE__ */ m(o, {
			variant: "primary",
			disabled: !T,
			loading: b,
			onClick: async () => {
				x(!0);
				try {
					let r = await t("redirects/save", { redirects: v.filter((e) => e.from.trim() && e.to.trim()) });
					y(r), e("redirects/"), f.success(n("Redirects saved"));
				} catch (e) {
					f.error(e);
				} finally {
					x(!1);
				}
			},
			children: n("Save")
		})] }),
		children: /* @__PURE__ */ m(s, {
			id: "redirects",
			label: n("Redirects"),
			items: D,
			dates: ({ r: e }) => e,
			rowKey: ({ i: e }) => String(e),
			loading: !v && _.isLoading,
			error: _.isError,
			onRetry: () => void _.refetch(),
			searchText: ({ r: e }) => `${e.from} ${e.to}`,
			columns: [
				{
					id: "from",
					label: n("From"),
					width: "minmax(220px,1fr)",
					render: ({ r: e, i: t }) => /* @__PURE__ */ m(l, {
						bare: !0,
						fields: [S],
						values: e,
						onChange: (e, n) => O(t, { [e]: n })
					})
				},
				{
					id: "to",
					label: n("To"),
					width: "minmax(220px,1fr)",
					render: ({ r: e, i: t }) => /* @__PURE__ */ m(l, {
						bare: !0,
						fields: [C],
						values: e,
						onChange: (e, n) => O(t, { [e]: n })
					})
				},
				{
					id: "status",
					label: n("Status"),
					width: "152px",
					render: ({ r: e, i: t }) => /* @__PURE__ */ m(l, {
						bare: !0,
						fields: [w],
						values: e,
						onChange: (e, n) => O(t, { [e]: n })
					})
				}
			],
			actions: ({ i: e }) => /* @__PURE__ */ m(u, {
				icon: "trash",
				label: n("Delete"),
				size: "xs",
				onClick: () => y(v.filter((t, n) => n !== e))
			}),
			empty: /* @__PURE__ */ m(c, {
				icon: "arrow-up-right",
				title: n("No redirects"),
				description: n("Send visitors from an old URL to a new one when you move or remove a page."),
				action: /* @__PURE__ */ m(o, {
					icon: "plus",
					onClick: E,
					children: n("New Redirect")
				})
			})
		})
	});
}
export { _ as default };
