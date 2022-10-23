import * as React from "react";
import { Table } from "flowbite-react";
import { priceList } from "../redux/constants";
import './ItemList.scss';

const ItemList = () => {
  return (
    <div>
      <div>
        <h2 className="text-l font-semibold leading-tight text-left uppercase mb-2">Catalogue</h2>
      </div>
      <Table id="item-list">
        <Table.Head>
          <Table.HeadCell>SKU</Table.HeadCell>
          <Table.HeadCell>NAME</Table.HeadCell>
          <Table.HeadCell>PRICE</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {priceList.map((list) => {
            return (
              <Table.Row key={list.code} className="bg-white dark:border-gray-700 dark:bg-gray-800">
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
    </div>
  );
};
export default ItemList;
