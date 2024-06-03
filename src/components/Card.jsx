import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cardAct } from './redux/action/CardAction'
import Loader from './Loader'
import LoaderComponent from './LoaderComponent'
import { Container } from 'react-bootstrap'
import { postAct } from './redux/action/postAction'
import { SingleCartAction } from './redux/action/SingleCartAction'
import { useNavigate } from 'react-router-dom'

const Card = () => {
    const GetCard = useSelector((state) => state.card.cardlist.carts)
    const loading = useSelector((state) => state.card.isloading)
    const SingleCart = useSelector((state) => state.cartId.SingleCart)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handelClick = (id) => {
        // console.log(id)
        if (id) {
            dispatch(SingleCartAction(id))
            navigate(`/card/${id}`)

        }
    }

    console.log(SingleCart, "SingleCart")
    useEffect(() => {
        dispatch(cardAct())
    }, [])
    return (
        <>
            <div className='GetUserAndComment'>
                <Container>
                    <div className="row GetUserAndCommentRow">
                        <div className="col-md-12">
                            {loading && <LoaderComponent />}
                        </div>


                        {GetCard && GetCard.map((item) => {
                            return item?.products?.map((ele, i) => (
                                <div className="col-md-6 col-lg-4 d-flex" key={ele.id}>
                                    <div className="single-box">
                                        <button onClick={() => { handelClick(item.id) }}>
                                            <div className="img-area" style={{ backgroundImage: `url(${ele?.thumbnail})` }}></div>
                                        </button>
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
                        )
                        }
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Card
