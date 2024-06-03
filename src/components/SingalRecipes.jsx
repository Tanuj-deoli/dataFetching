import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { SingleRecipiAction } from './redux/action/recipesAction'
import { Container } from 'react-bootstrap'
import LoaderComponent from './LoaderComponent'

function SingalRecipes() {

    const dispatch = useDispatch()
    const params = useParams()

    const SingalRecipeList = useSelector((state) => state.SingalRecipe.singalrecipeList)
    const loading = useSelector((state) => state.SingalRecipe.isloading)
    console.log(SingalRecipeList, "SingalRecipeList")

    useEffect(() => {
        dispatch(SingleRecipiAction(params.id))
    }, [dispatch, params.id])

    return (
        <Container>
            <h1 style={{ color: '#343a40', margin: '20px 0', textAlign: 'center', fontSize: '2.5rem' }}> {SingalRecipeList.name} Recipe Details</h1>
            <div className='row'>
                {loading && <LoaderComponent />}
                <div className='col-lg-12 col-md-12' key={SingalRecipeList.id}>
                    <div className="getRecipes single-box SingalRecipeList">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={SingalRecipeList.image} alt="" className='img-fluid' />
                            </div>
                            <div className="col-md-6">
                                <h1>{SingalRecipeList.name}</h1>
                                <h4>cuisine: {SingalRecipeList.cuisine}</h4>
                                <div className="row">
                                    <p className='col-md-6'>cookTimeMinutes : {SingalRecipeList.cookTimeMinutes}</p>
                                    <p className='col-md-6'>Rating : {SingalRecipeList.rating}⭐ </p>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h3>Ingredients:</h3>
                                        <ul>
                                            {SingalRecipeList?.ingredients?.map((item) => (
                                                <li>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>

            </div>
        </Container>
    )
}

export default SingalRecipes
