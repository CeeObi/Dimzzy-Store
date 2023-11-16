import React from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const ComplexPaginationContainer = () => {
  const {meta} =useLoaderData();
  const {pageCount, page} =meta.pagination;


  const {search, pathname} = useLocation() //obtains 'search' and 'pathname' from the uselocation method in react-router
  const navigateTo = useNavigate() //initialize useNavigate method in react-router
  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);//locates the all the parameters and
    searchParams.set('page',pageNumber);  // Basically adds 'page=pageNumber' to the existing query parameters.
    navigateTo(`${pathname}?${searchParams.toString()}`)//basically navigate to the resulting url
  }

  const addPageButton = ({pageNumber, activeClass}) =>{
    return <button key={pageNumber} onClick={() => handlePageChange(pageNumber)} className={`btn btn-xs border-none sm:btn-md join-item ${activeClass ?'bg-base-300 border-base-300':''}`}>{pageNumber}</button>
  }

  const renderPageButton = () => {
    const pageButton = [];
    {/* First Button */}
    pageButton.push(addPageButton({pageNumber:1, activeClass:page === 1}))
    {/* dotdotdot Button_A */}
    if (page > 2){
    pageButton.push(<button className='join-item btn btn-xs sm:btn-md' key="dots-A">...</button>)}
    {/* Current Active Button */}
    if (page !== 1 && page !== pageCount){
      pageButton.push(addPageButton({pageNumber:page, activeClass: true}))}
    {/* dotdotdot Button_B */}
    if (page < (pageCount-1)){
    pageButton.push(<button className='join-item btn btn-xs sm:btn-md' key="dots-B">...</button>) }     
    {/* Last Button */}
    pageButton.push(addPageButton({pageNumber:pageCount, activeClass:page === pageCount}))
    return pageButton
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

          {renderPageButton()}

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




export default ComplexPaginationContainer;