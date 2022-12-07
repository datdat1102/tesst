import { Card, DataTable, Layout, Page } from '@shopify/polaris';
import React, { useCallback, useEffect, useState } from 'react';

const Management = () => {
  const [sortedRows, setSortedRows] = useState(null);
  const [data, setData] = useState(null);
  const fetchData = () => {
    // Where we're fetching data from
    return fetch("https://jsonplaceholder.typicode.com/posts")
      // We get the API response and receive data in JSON format
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    setData(fetchData());
  }, []);
  const initiallySortedRows = [];
  for (let i = 0; i < data?.length; i++) {
    const dataList = data[i];
    initiallySortedRows.push({
      ...dataList
    })
  };
  const rows = sortedRows ? sortedRows : initiallySortedRows;

  const handleSort = useCallback(
    (index, direction) => setSortedRows(sortCurrency(rows, index, direction)),
    [rows],
  );
  return (
    <Page title="Sales by product">
      <Card>
        <DataTable
          columnContentTypes={[
            'number',
            'number',
            'string',
          ]}
          headings={[
            'No',
            'Id',
            'Title',
          ]}
          rows={rows}
          totals={['', '', '', 255, '$155,830.00']}
          sortable={[false, true, true]}
          defaultSortDirection="descending"
          initialSortColumnIndex={4}
          onSort={handleSort}
        />
      </Card>
    </Page>
  );

  function sortCurrency(rows, index, direction) {
    return [...rows].sort((rowA, rowB) => {
      const amountA = parseFloat(rowA[index].substring(1));
      const amountB = parseFloat(rowB[index].substring(1));

      return direction === 'descending' ? amountB - amountA : amountA - amountB;
    });
  }
}
export default Management;