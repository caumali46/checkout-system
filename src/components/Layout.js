import React from "react";
import ItemList from "./ItemList";
import { Card } from "flowbite-react";
const Layout = (props) => {
  return (
    <div class="grid grid-cols-7 gap-3">
      <div class=" col-span-2">
        <ItemList />
      </div>
      <div class="col-span-5">
        {" "}
        <Card>{props.children}</Card>
      </div>
    </div>
  );
};
export default Layout;
