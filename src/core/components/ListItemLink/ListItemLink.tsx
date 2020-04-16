import React from "react";
import {Link, LinkProps} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

type ListItemLinkProps = {
  icon: React.FunctionComponent;
  primary: string;
  to: string;
  selected?: string;
  clickHandle: FunctionStringCallback;
};

function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to, selected, clickHandle } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<LinkProps, "to">>((itemProps, ref) => (
        <Link to={to} ref={ref} {...itemProps} onClick={() => clickHandle(primary)} />
      )),
    [to, clickHandle, primary]
  );

  const checkSelected = React.useMemo(() => selected === primary, [selected, primary]);

  const Icon = icon;

  return (
    <li>
      <ListItem button component={renderLink} selected={checkSelected}>
        {Icon ? (
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
        ) : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

export default React.memo(ListItemLink);
