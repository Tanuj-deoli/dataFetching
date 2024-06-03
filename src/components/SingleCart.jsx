import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { SingleCartAction } from './redux/action/SingleCartAction'
import { Container } from 'react-bootstrap'
import LoaderComponent from './LoaderComponent'

function SingleCart() {

    const loading = useSelector((state) => state.card.isloading)
    const SingleCart = useSelector((state) => state.cartId.SingleCart.products)
    const dispatch = useDispatch()

    const params = useParams()

    console.log(SingleCart, "SingleCart")
    useEffect(() => {
        if (params.id) {
            dispatch(SingleCartAction(Number(params.id)))
        }
    }, [dispatch, params.id])


    return (
        <div className='GetUserAndComment'>
            <Container>
                <div className="row GetUserAndCommentRow">
                    <div className="col-md-12">
                        {loading && <LoaderComponent />}
                    </div>


                    {SingleCart && SingleCart?.map((ele, i) => (
                        <div className="col-md-6 d-flex" key={ele.id}>
                            <div className="single-box">
                                <div className="img-area" style={{ backgroundImage: `url(${ele?.thumbnail})` }}></div>
                                <div className="img-text">
                                    <span className="header-text"><strong>{ele?.title}</strong></span>
                                    <div className="line"></div>
                                    <h3>Price : {ele?.price}$</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. copesge shskq?</p>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default SingleCart
