import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import LoaderComponent from './LoaderComponent'
import { postActsingle } from './redux/action/postSingleproduct'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

function SingleProduct(props) {
    const params = useParams()
    const dispatch = useDispatch()
    const singleprod = useSelector((state) => state?.singleprod?.listComments)
    const loading = useSelector((state) => state.singleprod.isloading)

    useEffect(() => {
        if (params.id) {
            dispatch(postActsingle(Number(params.id)))

        }
    }, [dispatch, params.id])
    return (
        <div className='GetUserAndComment'>
            <Container>
                <div className="row GetUserAndCommentRow">
                    <div className="col-md-12">
                        {loading && <LoaderComponent />}
                    </div>

                    <div className="col-md-6 col-lg-4 d-flex">
                        <div className="single-box">
                            <div className="img-area" style={{ backgroundImage: `url(${singleprod?.image})` }}></div>
                            <div className="img-text">
                                <span className="header-text"><strong>{singleprod?.category}</strong></span>
                                <div className="line"></div>
                                <h3>Price : {singleprod?.price}$</h3>
                                <p>{singleprod?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SingleProduct
