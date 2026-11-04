import { t as e } from "@letterncms/sdk";
import { Button as t } from "@letterncms/ui";
import { jsx as n } from "react/jsx-runtime";
// admin/src/NewRedirect.tsx
var r = new EventTarget();
function i() {
	return /* @__PURE__ */ n(t, {
		variant: "primary",
		icon: "plus",
		onClick: () => r.dispatchEvent(new Event("add")),
		children: e("New Redirect")
	});
}
export { r as n, i as t };
