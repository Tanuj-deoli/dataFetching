import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUserAct } from './redux/action/getUserAction'
import Loader from './Loader'
import LoaderComponent from './LoaderComponent'
import { Container } from 'react-bootstrap'
import Pagination from './Pagination'


const Comment = () => {


  const [currentPage, setCurrentPage] = useState(1)
  const ItemPerPage = 6;


  const usercomment = useSelector((state) => state.comment.getUserComment)
  const loading = useSelector((state) => state.comment.isloading)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserAct())
  }, [dispatch])



  const indexOfLastItem = currentPage * ItemPerPage
  // console.log(indexOfLastItem, "indexOfLastItem")

  const indexOfFirstItem = indexOfLastItem - ItemPerPage
  // console.log(indexOfFirstItem, 'indexOfFirstItem')

  const currentItems = usercomment.slice(indexOfFirstItem, indexOfLastItem)
  // console.log(currentItems, 'currentItems')

  const totalPages = Math.ceil(usercomment.length / ItemPerPage)
  // console.log(totalPages, 'totalPages')

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }


  return (
    <div className='GetUserAndComment'>
      <Container>
        <div className='row GetUserAndCommentRow'>
          {loading && <LoaderComponent />}
          {!loading && currentItems.length > 0 && currentItems && currentItems.map((item) => {
            return (
              <div className='col-lg-4 col-md-6' key={item.id}>
                <div className="usercomment" >
                  <h2>{item.name}</h2>
                  <h5>{item.email}</h5>
                  <p>{item.body}</p>
                </div>
              </div>
            )
          })}
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        </div>
      </Container>
    </div>
  )
}

export default Comment
