import React from 'react';

const Pagination = ({ amountPerPage, totalAmount, currentPage, paginate }) => {
  // List of page numbers
  const pageNumbers = [];

  for (var i = 1; i <= Math.ceil(totalAmount / amountPerPage); i++) {
    pageNumbers.push(i)
  }

  const backward = () => {
    if (currentPage - 1 >= 1) {
      paginate(currentPage - 1);
    } else {
      alert("This is already the first page")
    }
  }

  const forward = () => {
    if (currentPage + 1 <= pageNumbers.length) {
      paginate(currentPage + 1)
    } else {
      alert("This is already the last page");
    }
  }

  return (
    <nav>
      <ul className="pagination">
        <li>
          <a onClick={() => backward()}
            href="!#"
            className="page-link m-1">
            Back
          </a>
        </li>
        {pageNumbers.map(number => {
          return (<li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link m-1">
              {number}
            </a>
          </li>)
        })}
        <li>
          <a
            onClick={() => forward()}
            href="!#"
            className="page-link m-1">
            Next
          </a>
        </li>
      </ul>
      <p className="text-secondary">You are currently at page {currentPage}</p>
    </nav>
  )
}

export default Pagination;
