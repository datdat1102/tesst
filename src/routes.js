import React from "react";

// States

const Dashboard = React.lazy(() => import("./views/dashboard"));
const Management = React.lazy(() => import("./views/management"));
const Setting = React.lazy(() => import("./views/setting"));

const routes = () => [
  { path: "/tesst/", exact: true, name: 'homePage' },
  { path: "/tesst/dashboard", name: 'dashboard', component: Dashboard },
  { path: "/tesst/managemet", name: 'dashboard', component: Management },
  { path: "/tesst/setting", name: 'dashboard', component: Setting },

];

export default routes;
