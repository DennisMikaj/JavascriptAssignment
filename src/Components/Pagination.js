import React from 'react'

const Pagination = () => {
  return (
    <>
    <nav>
    <ul className="pagination">
      <li className="page-item"><a className="page-link" href="#"><i className="fa-solid fa-arrow-left"></i></a></li>
      <li className="page-item"><a className="page-link" href="#">1</a></li>
      <li className="page-item"><a className="page-link" href="#">2</a></li>
      <li className="page-item"><a className="page-link" href="#">3</a></li>
      <li className="page-item"><a className="page-link" href="#">...</a></li>
      <li className="page-item"><a className="page-link" href="#">9</a></li>
      <li className="page-item"><a className="page-link" href="#"><i className="fa-solid fa-arrow-right"></i></a></li>
    </ul>
  </nav>
  </>
  )
}

export default Pagination