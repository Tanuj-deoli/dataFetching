import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Quotes } from './redux/action/QuotesAction'
import { Container } from 'react-bootstrap'
import LoaderComponent from './LoaderComponent'
import img from '../images/quotes.jfif'

function QuotesPage() {

    const [authorName, setAuthorName] = useState('')
    const dispatch = useDispatch()
    const GetQuotes = useSelector((state) => state.quotes.quotesList.quotes)
    const loading = useSelector((state) => state.quotes.isloading)


    const handelChange = (e) => {
        // console.log(e.target.value, "input")
        setAuthorName(e.target.value)
    }
    const CheckAuthorName = GetQuotes ? GetQuotes.filter((ele) => ele.author.toLowerCase().startsWith(authorName.toLowerCase()))
        :
        GetQuotes

    // console.log(CheckAuthorName, 'CheckAuthorName')

    useEffect(() => {
        dispatch(Quotes())
    }, [])
    return (
        <div className='GetUserAndComment'>
            <Container>
                <div className="row GetUserAndCommentRow">
                    <div className="col-md-12">
                        {loading && <LoaderComponent />}
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="SearchProduct">
                                    <input type="search" value={authorName} placeholder='Search by author name...' onChange={(e) => { handelChange(e) }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {CheckAuthorName && CheckAuthorName.map((ele) => (
                        <div className='col-md-4 d-flex QuotesPageCol' key={ele.id}>
                            <div className='single-box QuotesPage'>
                                <img src={img} alt="" className='mb-2' />
                                <h2>{ele.author}</h2>
                                <p>{ele.quote}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default QuotesPage
