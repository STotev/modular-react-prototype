import Dashboard from "./Dashboard";
import DashboardIcon from "@material-ui/icons/Dashboard";

export default {
    routeProps: {
        path: "/",
        exact: true,
        component: Dashboard,
    },
    name: "Dashboard",
    icon: DashboardIcon,
    hidden: false
};
