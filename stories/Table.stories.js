import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Table', module);
stories.add('Data Table', () => {
  const [tblData, setTblData] = useState([]);
  const [options, setOptions] = useState({
      totalRec: 200,
      totalRec: 200,
  })

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let data = await fetch('https://jsonplaceholder.typicode.com/todos');
    data = await data.json();
    setTblData(data);
  };

  return (
    <>
      <div className="table-responsive">
        <table className="table table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {tblData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
});
