import * as React from "react";
import { Table } from "flowbite-react";
import { priceList } from "../redux/constants";
import './ItemList.scss';

const ItemList = () => {
  return (
    <Table id="item-list">
      <Table.Head>
        <Table.HeadCell>SKU</Table.HeadCell>
        <Table.HeadCell>NAME</Table.HeadCell>
        <Table.HeadCell>PRICE</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {priceList.map((list) => {
          return (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {list.code}
              </Table.Cell>
              <Table.Cell>{list.name}</Table.Cell>
              <Table.Cell><b>$</b>{list.price}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};
export default ItemList;
