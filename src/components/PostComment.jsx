import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import LoaderComponent from './LoaderComponent'
import { Container } from 'react-bootstrap'
import { postAct, productsCat } from './redux/action/postAction'
import Pagination from './Pagination'
import { useNavigate } from 'react-router-dom';
import { postActsingle } from './redux/action/postSingleproduct'

const PostComment = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [currentPage, setCurrentPage] = useState(1);
    const [itemcat, setItemcat] = useState('');
    const [searchInput, setSearchInput] = useState('')
    const itemsPerPage = 6
    const loading = useSelector((state) => state.postc.isloading)
    const PostComment = useSelector((state) => state.postc.listComment)
    const category = useSelector((state) => state.category.categorydata)

    let indexOfLastItem;
    let indexOfFirstItem;
    let currentItems = []
    let totalPages = 0


    // const filterItem = itemcat ? PostComment?.filter((comment) => comment.category === itemcat)
    //     :
    //     PostComment?.filter((ele) => ele.description.toLowerCase().startsWith(searchInput.toLowerCase()))


    const filterItem = itemcat ? PostComment?.filter((comment) => comment.category === itemcat)
        :
        PostComment?.filter((ele) => {
            if (searchInput) {
                return ele.description.toLowerCase().startsWith(searchInput.toLowerCase())
            }
            else {
                return true
            }
        })

    const CureentPageDataFunc = () => {
        if (Array.isArray(filterItem)) {
            indexOfLastItem = currentPage * itemsPerPage
            indexOfFirstItem = indexOfLastItem - itemsPerPage
            currentItems = filterItem?.slice(indexOfFirstItem, indexOfLastItem)
            totalPages = Math.ceil(filterItem.length / itemsPerPage)
        }
        return currentItems, totalPages
    }
    CureentPageDataFunc()

    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    const handelClick = (id) => {
        if (id) {
            dispatch(postActsingle(id))
            navigate(`/about/${id}`)
        }
    }

    const GetCategory = (item) => {
        setItemcat(item)
    }

    //filter for search
    // const getSearchProduct = PostComment.filter((ele) => ele.description.includes(searchInput))

    const SearchProduct = (e) => {
        setSearchInput(e.target.value)
    }

    useEffect(() => {
        dispatch(postAct())
        dispatch(productsCat())
    }, [dispatch, itemcat])

    return (
        <>
            <div className='GetUserAndComment'>
                <Container>
                    <div className="row GetUserAndCommentRow">
                        <div className="col-md-12">
                            {loading && <LoaderComponent />}
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <ul className='categoryItem'>
                                    {category && category.map((item, index) => (
                                        <li key={index + 1}> <button onClick={() => { GetCategory(item) }}>{item}</button></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <div className="SearchProduct">
                                    <input type="search" placeholder='Search...' value={searchInput} onChange={(e) => { SearchProduct(e) }} />
                                </div>
                            </div>
                        </div>
                        {currentItems && currentItems.map((ele, id) => (
                            <div className="col-md-6 col-lg-4 d-flex" key={ele.id}>
                                <div className="single-box">
                                    <button onClick={() => handelClick(ele.id)}>
                                        <div className="img-area" style={{ backgroundImage: `url(${ele?.image})` }}></div></button>
                                    <div className="img-text">
                                        <span className="header-text"><strong>{ele?.category}</strong></span>
                                        <div className="line"></div>
                                        <h3>Price : {ele?.price}$</h3>
                                        <p>{ele?.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {currentItems && currentItems.length > 0 ?
                            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} /> :
                            <div>
                                <p className='text-center'>No Data found...</p>
                            </div>
                        }
                    </div>
                </Container>
            </div>
        </>
    )
}

export default PostComment
