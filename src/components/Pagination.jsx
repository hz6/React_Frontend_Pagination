import React from 'react'

const Pagination = ({ amountPerPage, totalAmount, paginate }) => {
  const pageNumbers = [];

  for (var i = 1; i <= Math.ceil(totalAmount / amountPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => {
          return (<li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link m-1">
              {number}
            </a>
          </li>)
        })}
      </ul>
    </nav>
  )
}

export default Pagination;
