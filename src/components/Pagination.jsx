import React from 'react'

const Pagination = ({ amountPerPage, totalAmount, currentPage, paginate }) => {
  const pageNumbers = [];

  for (var i = 1; i <= Math.ceil(totalAmount / amountPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className="pagination">
        <li>
          <a onClick={() => {
            if (currentPage - 1 >= 1) {
              paginate(currentPage - 1);
              console.log("Previous page")
            } else {
              alert("This is already the first page")
            }
          }}
            href="!#"
            className="page-link m-1">
            Previous
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
            onClick={() => {
              if (currentPage + 1 <= pageNumbers.length) {
                paginate(currentPage + 1)
              } else {
                alert("This is already the last page");
              }
            }}
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
