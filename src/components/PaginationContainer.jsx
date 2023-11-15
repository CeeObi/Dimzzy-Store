import React from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const PaginationContainer = () => {
  const {meta} =useLoaderData();
  const {pageCount, page} =meta.pagination;

  const pages = Array.from({length:pageCount},(_,index) => {
    return index = index + 1;
  })

  const {search, pathname} = useLocation() //obtains 'search' and 'pathname' from the uselocation method in react-router
  const navigateTo = useNavigate() //initialize useNavigate method in react-router
  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);//locates the all the parameters and
    searchParams.set('page',pageNumber);  // Basically adds 'page=pageNumber' to the existing query parameters.
    navigateTo(`${pathname}?${searchParams.toString()}`)//basically navigate to the resulting url
  }

  if (pageCount < 2) {
    return null
  }  
  return (
    <div className='mt-16 flex justify-end'>
        <div className="join">
          <button className='btn btn-xs md:btn-md join-item' 
            onClick={() => {
              let prevPage = page - 1;
              if (prevPage < 1) { prevPage = pageCount;}
                handlePageChange(prevPage)
              }}>
            Prev
          </button>
          {pages.map((pageNum) => {
            return <button key={pageNum} onClick={() => handlePageChange(pageNum)} className={`btn btn-xs border-none sm:btn-md join-item ${pageNum == page?'bg-base-300 border-base-300':''}`}>{pageNum}</button> 
            })}
          <button className='btn btn-xs md:btn-md join-item' 
            onClick={() => {
              let nextPage = page + 1;
              if (nextPage > pageCount) {nextPage = 1;}
                handlePageChange(nextPage)
              }}>
            Next
          </button>
        </div>
    </div>
  )
}




export default PaginationContainer;