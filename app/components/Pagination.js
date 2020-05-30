import React, { useEffect } from "react"

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination pagination-lg justify-content-center">
        {pageNumbers.map(number => {
          return (
            <li key={number} className="page-items">
              <a onClick={() => paginate(number)} href="#" className="page-Link">
                {number}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Pagination
