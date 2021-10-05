import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { TablePagination, TableTop } from '../src';
import 'bootstrap/dist/css/bootstrap.min.css';

const stories = storiesOf('Table', module);

stories.add('Table', () => {
  const [tblData, setTblData] = useState({
    data: [],
    total: 0,
    limit: 10,
    page: 1,
  });

  useEffect(() => {
    fetchTblData(tblData.page, tblData.limit);
  }, []);

  useEffect(() => {
    fetchTblData(tblData.page, tblData.limit);
  }, [tblData.page]);
  useEffect(() => {
    fetchTblData(1, tblData.limit);
  }, [tblData.limit]);

  const fetchTblData = async (page, limit) => {
    let data = await fetch(
      'http://localhost:4000/?page=' + page + '&limit=' + limit
    );
    data = await data.json();
    setTblData((prev) => ({ ...prev, data: data.data, total: data.total }));
  };

  const changePage = (page) => setTblData((prev) => ({ ...prev, page }));
  const changeLimit = (limit) =>
    setTblData((prev) => ({ ...prev, limit, page: 1 }));

  return (
    <>
      <TableTop
        colors={[
          { color: 'green', title: 'Success' },
          { color: 'red', title: 'Reject' },
          { color: 'yellow', title: 'Pending' },
        ]}
      >Test</TableTop>
      <TablePagination
        data={tblData}
        changePage={changePage}
        changeLimit={changeLimit}
      >
        {tblData.data.length > 0 && (
          <table className="table table">
            <thead>
              <tr>
                <th>ID</th>
                <th>TITLE</th>
              </tr>
            </thead>
            <tbody>
              {tblData.data.length > 0 ? (
                tblData.data.map((item) => (
                  <tr key={item.specialist_id}>
                    <td>{item.specialist_id}</td>
                    <td>{item.specialist_name}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colspan="1000" className="text-center">
                    No records found!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </TablePagination>
    </>
  );
});
