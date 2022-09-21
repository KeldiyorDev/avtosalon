import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { addCategories } from '../reducers/categories/CategoriesSlider';
import { API } from '../utils/Config';

const Categories = () => {
    const dispatch = useDispatch()

    const categories = useSelector(state => state.categories.data)

    console.log(categories);

    useEffect(() => {
        API.get("category/marka?limit=4&page=1").then((res) => dispatch(addCategories(res.data.data)))
    }, [dispatch])

    return (
        <Wrapper>
            <div className="container">

                <ul className="list">
                    {
                        categories?.data?.map((model) => {
                            return (
                                <li className="item" key={Math.random()}>
                                    <NavLink className='navlink' to={`/cars/${model._id}`}>
                                        <img height={200} src={`https://cartestwebapp.herokuapp.com/${model.imgUrl}`} alt="Chevrolet-img" />
                                        <h4 className="car_name">{model.name}</h4>
                                    </NavLink>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>


        </Wrapper>
    );
}

export default Categories;


const Wrapper = styled.div`
    .navlink {
    margin-left: 50px;
    text-decoration: none;
    color: #000;
    }

    .list {
        display: grid;
            grid-template-columns: repeat( auto-fit, minmax(290px, 1fr));
            grid-auto-rows: 370px;
            gap: 32px;
    }

    .item {
    display: flex;
    flex-direction: column;
    margin-left: 32px;
    text-align: center;
    }

    .car_name {
    font-family: 'Noto Sans';
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    text-transform: uppercase;
    color: #000000;
    font-style: normal;
    }
`