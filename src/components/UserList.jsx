import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { UserAct } from './redux/action/UserAction'
import Loader from './Loader'
import LoaderComponent from './LoaderComponent'
import { Container } from 'react-bootstrap'

const UserList = () => {
  const GetAllUser = useSelector((state) => state?.user?.userList)
  const ddddddd = useSelector((state) => state)
  console.log(ddddddd,"ddddd")
  const loading = useSelector((state) => state?.user?.isLoading)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(UserAct())
  }, [dispatch])
  return (
    <div className='GetUserAndComment'>
      <Container>
      <div className='row GetUserAndCommentRow'>
      {loading && <LoaderComponent/>}
      {GetAllUser && GetAllUser.map((item) => {
        return (
          <div className='col-lg-4 col-md-6' key={item.id}>
          <div className="GetAllUser" >
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </div>
          </div>
        )
      })}
      </div>
      </Container>
    </div>
  )
}

export default UserList
