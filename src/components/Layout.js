import React from "react";
import ItemList from "./ItemList";
import { Card } from "flowbite-react";
const Layout = (props) => {
  return (
    <div className="grid grid-cols-7 gap-3 m-4">
      <div className="sm:col-span-2 col-span-7">
        <ItemList />
      </div>
      <div className="sm:col-span-5 col-span-7">
        {" "}
        <Card>{props.children}</Card>
      </div>
    </div>
  );
};
export default Layout;
