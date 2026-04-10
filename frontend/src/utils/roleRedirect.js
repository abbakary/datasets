// src/utils/getDashboardPath.js

export const ROLE_ROUTES = {
  super_admin: "/admin",
  admin: "/admin",

  editor: "/editor/dashboard", // changed from reviewer

  seller: "/seller/dashboard",

  buyer: "/buyer/dashboard",

  viewer: "/public/home",
};

export function getDashboardPath(role) {
  const normalizedRole = String(role || "")
    .trim()
    .toLowerCase();

  return ROLE_ROUTES[normalizedRole] || "/public/home";
}
