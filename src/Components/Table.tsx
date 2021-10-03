import React, { ReactChild } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import classNames from 'classnames';
import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineLeft,
  AiOutlineRight,
} from 'react-icons/ai';

export interface TablePaginationProps {
  data?: any;
  changePage(page: number): any;
  changeLimit(limit: number): any;
  children?: ReactChild;
}

export const TablePagination = ({ data = [], changePage, changeLimit, children }: TablePaginationProps) => {
  let pagesList = [...Array(Math.ceil(data.total / data.limit)).keys()].map(
    (item) => item + 1
  );
  let showPageNos = [
    data.page - 1,
    data.page - 2,
    data.page,
    data.page + 1,
    data.page + 2,
  ];
  showPageNos = showPageNos.filter(
    (item) => item > 0 && pagesList.includes(item)
  );
  if (showPageNos.length < 6) {
    if (pagesList.includes(data.page + 3)) showPageNos.push(data.page + 3);
  }
  if (showPageNos.length < 6) {
    if (pagesList.includes(data.page + 4)) showPageNos.push(data.page + 4);
  }
  showPageNos = showPageNos.sort((a, b) => a - b);
  showPageNos = showPageNos.slice(0, 5);

  let startFrom = (data.page - 1) * data.limit + 1;
  let endAt =
    startFrom + (data.limit - 1) > data.total
      ? data.total
      : startFrom + (data.limit - 1);

  return (
    <>
      <div className="table-responsive">{children}</div>
      <TablePaginationStyle>
        <div className="info">
          Showing {startFrom} to {endAt} of {data.total} entries
        </div>
        <div className="paging">
          <select
            value={data.limit}
            onChange={(e) => changeLimit(parseInt(e.target.value))}
            className="form-control"
          >
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="500">500</option>
          </select>

          {pagesList.length > 1 && (
            <ul>
              {data.page != 1 && (
                <li onClick={() => changePage(1)}>
                  <AiOutlineDoubleLeft />
                </li>
              )}
              {data.page != 1 && (
                <li onClick={() => changePage(data.page - 1)}>
                  <AiOutlineLeft />
                </li>
              )}
              {showPageNos.map((item, key) => {
                return (
                  <li
                    key={key}
                    className={classNames({ active: data.page == item })}
                    onClick={() => changePage(item)}
                  >
                    {item}
                  </li>
                );
              })}
              {data.page < Math.ceil(data.total / data.limit) && (
                <li onClick={() => changePage(data.page + 1)}>
                  <AiOutlineRight />
                </li>
              )}
              {data.page < Math.ceil(data.total / data.limit) && (
                <li
                  onClick={() => changePage(Math.ceil(data.total / data.limit))}
                >
                  <AiOutlineDoubleRight />
                </li>
              )}
            </ul>
          )}
        </div>
      </TablePaginationStyle>
    </>
  );
};

const TablePaginationStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  flex-wrap: wrap;
  .paging {
    display: flex;
    align-items: center;
  }
  .info{color: #777;}
  select {
    margin-right: 10px;
    flex: 0 0 70px;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    li {
      &.active {
        background: #cecece;
      }
      &:last-of-type {
        margin-right: 0;
      }
      cursor: pointer;
      padding: 5px;
      background: #eee;
      margin-right: 5px;
      min-width: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
    }
  }
`;

interface ColorsType {
  color: "green" | "red" | "yellow" | "purple" | "orangered" | "gray" | "cyan" | "black" | "pink" | "white" | "violet";
  title: string;
}

export interface TableTopProps {
  colors?: Array<ColorsType>;
  children?: ReactChild;
}

export const TableTop = ({ colors = [], children }: TableTopProps) => {
  return (
    <TableTopStyle>
      <div className="indicators">
        {colors.length > 0 &&
          colors.map((item, key) => (
            <div key={key} className="single">
              <span className={classNames("color", { [`${item.color}`]: true })}></span> <span>{item.title}</span>
            </div>
          ))}
      </div>
      <div className="actions">{children}</div>
    </TableTopStyle>
  );
};

const TableTopStyle = styled.div`
 padding: 7px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  .indicators {
    display: flex;
    align-items: center;
    .single {
      margin-right: 10px;
      display: flex;
      align-items: center;
      span{font-size:14px;}
    }
    .color {
      width: 12px;
      height: 12px;
      margin-right: 5px;
      display: block;
    }
    .green {
      background: #28a745;
    }
    .red {
      background: #dc3545;
    }
    .yellow {
      background: #ffc107;
    }
    .purple {
      background: purple;
    }
    .orangered {
      background: orangered;
    }
    .gray {
      background: gray;
    }
    .cyan {
      background: cyan;
    }
    .black {
      background: black;
    }
    .pink {
      background: pink;
    }
    .white {
      background: white;
    }
    .violet {
      background: violet;
    }
  }
 
`;


