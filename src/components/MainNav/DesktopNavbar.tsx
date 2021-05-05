import { Menu } from "antd";
import React from "react";

const { SubMenu } = Menu;

const DesktopNavbar = () => {
  return (
    <div>
      <Menu>
        <SubMenu title="Men">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default DesktopNavbar;
