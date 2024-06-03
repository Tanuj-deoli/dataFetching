import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { RecipeAction } from './redux/action/recipesAction'
import { Link } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'

function Recipes() {
    const dispatch = useDispatch()
    const getRecipes = useSelector((state) => state.foodStore.recipeList.recipes)
    const loading = useSelector((state) => state.foodStore.isloading)
    const [recipes, setRecipes] = useState();
    console.log(getRecipes, 'getRecipes')


    const getCusine = getRecipes && getRecipes.map((ele) => ele.cuisine)

    const RemoveDuplicate = (data) => {
        return [...new Set(data)]
    }

    const cusineName = RemoveDuplicate(getCusine)

    const handelClick = (item) => {
        const getItem = item ? getRecipes.filter((data) => data.cuisine === item) : getRecipes
        console.log(getItem)
        setRecipes(getItem)
    }
    useEffect(() => {
        dispatch(RecipeAction())
    }, [])
    return (
        <div className='GetUserAndComment'>
            <Container>
                <div className="row GetUserAndCommentRow">
                    {loading && <LoaderComponent />}
                    <div className="col-md-12">
                        <div className="cusineList">
                            {cusineName && cusineName.map((item, i) => (
                                <button onClick={() => { handelClick(item) }} key={i + 1}>{item}</button>
                            ))}
                        </div>
                    </div>
                    {!recipes ? (
                        <>
                            {getRecipes && getRecipes.map((ele) => (
                                <div className='col-lg-4 col-md-6 d-flex' key={ele.id}>
                                    <div className="getRecipes single-box">
                                        <Link to={`/recipes/${ele.id}`}>
                                            <img src={ele.image} alt="" className='img-fluid' />
                                            <h2>{ele.name}</h2>
                                            <h4>cuisine: {ele.cuisine}</h4>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <>
                            {recipes && recipes.map((ele) => (
                                <div className='col-lg-4 col-md-6 d-flex' key={ele.id}>
                                    <div className="getRecipes single-box">
                                        <Link to={`/recipes/${ele.id}`}>
                                            <img src={ele.image} alt="" className='img-fluid' />
                                            <h2>{ele.name}</h2>
                                            <h4>cuisine: {ele.cuisine}</h4>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </Container>
        </div>
    )
}

export default Recipes
