import { n as e } from "./NewRedirect-DLZj9yTl.js";
import { invalidate as t, run as n, t as r, useAbility as i } from "@letterncms/sdk";
import { useEffect as a, useState as o } from "react";
import { DataView as s, EmptyState as c, Fields as l, IconButton as u, SaveBar as d } from "@letterncms/ui";
import { Fragment as f, jsx as p, jsxs as m } from "react/jsx-runtime";
// admin/src/Redirects.tsx
function h() {
	return {
		from: {
			handle: "from",
			type: "text",
			label: r("From"),
			size: "sm",
			mono: !0,
			placeholder: "/old-url"
		},
		to: {
			handle: "to",
			type: "text",
			label: r("To"),
			size: "sm",
			mono: !0,
			placeholder: r("/new-url or https://…")
		},
		status: {
			handle: "status",
			type: "select",
			label: r("Status"),
			size: "sm",
			required: !0,
			numeric: !0,
			options: {
				301: r("301 Permanent"),
				302: r("302 Temporary")
			}
		}
	};
}
function g(g) {
	let _ = i("redirects/list", {}, { refetchOnWindowFocus: !1 }), [v, y] = o(null), [b, x] = o(!1), [S, C] = o(null), { from: w, to: T, status: E } = h();
	a(() => {
		_.data && v === null && y(_.data);
	}, [_.data, v]);
	let D = v !== null && JSON.stringify(v) !== JSON.stringify(_.data), O = () => y((e) => [{
		from: "",
		to: "",
		status: 301,
		publishedAt: null,
		updatedAt: null
	}, ...e ?? _.data ?? []]);
	a(() => (e.addEventListener("add", O), () => e.removeEventListener("add", O)));
	let k = (v ?? []).map((e, t) => ({
		r: e,
		i: t
	})), A = (e, t) => y((n) => n.map((n, r) => r === e ? {
		...n,
		...t
	} : n)), j = async () => {
		if (D) {
			x(!0), C(null);
			try {
				let e = await n("redirects/save", { redirects: v.filter((e) => e.from.trim() && e.to.trim()) });
				y(e), t("redirects/");
			} catch (e) {
				C(e instanceof Error ? e.message : String(e));
			} finally {
				x(!1);
			}
		}
	};
	return /* @__PURE__ */ m(f, { children: [/* @__PURE__ */ p(d, {
		dirty: D,
		saving: b,
		error: S,
		onSave: () => void j(),
		onDiscard: () => {
			y(_.data ?? null), C(null);
		}
	}), /* @__PURE__ */ p(s, {
		id: "redirects",
		label: r("Redirects"),
		items: k,
		dates: ({ r: e }) => e,
		rowKey: ({ i: e }) => String(e),
		loading: !v && _.isLoading,
		error: _.isError,
		onRetry: () => void _.refetch(),
		searchText: ({ r: e }) => `${e.from} ${e.to}`,
		columns: [
			{
				id: "from",
				label: r("From"),
				width: "minmax(180px,1fr)",
				render: ({ r: e, i: t }) => /* @__PURE__ */ p(l, {
					bare: !0,
					fields: [w],
					values: e,
					onChange: (e, n) => A(t, { [e]: n })
				})
			},
			{
				id: "to",
				label: r("To"),
				width: "minmax(180px,1fr)",
				render: ({ r: e, i: t }) => /* @__PURE__ */ p(l, {
					bare: !0,
					fields: [T],
					values: e,
					onChange: (e, n) => A(t, { [e]: n })
				})
			},
			{
				id: "status",
				label: r("Status"),
				width: "152px",
				render: ({ r: e, i: t }) => /* @__PURE__ */ p(l, {
					bare: !0,
					fields: [E],
					values: e,
					onChange: (e, n) => A(t, { [e]: n })
				})
			}
		],
		actions: ({ i: e }) => /* @__PURE__ */ p(u, {
			icon: "trash",
			label: r("Delete"),
			size: "xs",
			onClick: () => y(v.filter((t, n) => n !== e))
		}),
		empty: /* @__PURE__ */ p(c, {
			icon: "arrow-up-right",
			title: r("No redirects")
		})
	})] });
}
export { g as default };
