import Contacts from "./Contacts";
import ContactsIcon from "@material-ui/icons/Contacts";

export default {
    routeProps: {
        path: "/contacts",
        exact: false,
        component: Contacts,
    },
    name: "Contacts",
    icon: ContactsIcon,
    hidden: false
};
