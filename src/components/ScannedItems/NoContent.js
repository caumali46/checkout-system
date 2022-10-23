import * as React from "react";

const NoContent = () => (
  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <td className="w-4 p-4" colSpan={5}>
      <div className="text-center">
        <label className="text-muted">No Scanned Items</label>
      </div>
    </td>
  </tr>
);
export default NoContent;
