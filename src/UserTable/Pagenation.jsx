import React from "react";
import { Link } from 'react-router-dom';

const Pagination = ({ userPerPage, dataPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(dataPosts / userPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="d-flex justify-content-center">
      <nav >
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li className="page-item" key={number}>
              <Link 
                to={''}
                onClick={() => paginate(number)}
                className="page-link"
              >
                {number}
              </Link>
              {/* {console.log(number)} */}
            </li>
        
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
