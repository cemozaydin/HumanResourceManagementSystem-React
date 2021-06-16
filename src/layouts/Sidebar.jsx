import React from "react";
import { Menu } from "semantic-ui-react";
import Filter from "./Filter";

export default function SideBar() {

  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item name="home"> İş Arayanlar </Menu.Item>
        <Menu.Item name="messages" > İş Verenler </Menu.Item>
        <Menu.Item name="friends" > İş İlanları </Menu.Item>
      </Menu>
      <div className="ui divider"></div>
      <Filter></Filter>
    </div>
  );
}
