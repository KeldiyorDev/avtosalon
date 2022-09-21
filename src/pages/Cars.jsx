import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { addCars } from '../reducers/car/CarSlider';
import { API } from '../utils/Config';

const Cars = () => {

    const { id } = useParams()

    const dispatch = useDispatch()

    const cars = useSelector(state => state.car.data)

    console.log(cars);

    useEffect(() => {
        API.get(`car?limit=4&page=1&categoryId=${id}`, {
        }).then(res => dispatch(addCars(res.data.data)))
    }, [id, dispatch])

    return (
        <Wrapper>

            <div className="cars">
                {cars?.data?.map((car) => {
                    return (
                        <NavLink key={Math.random()} className='list-car' to={`/cars/${id}/${car._id}`}>
                            <ul className="list">
                                <li className="item">
                                    <img className="list-img" src={`https://cartestwebapp.herokuapp.com/${car.imgUrl}`} alt="car-img" />
                                    <h4 className="list-heading">{car?.marka?.name}</h4>
                                    <p className="list-text">Narxi: {car?.price} </p>
                                </li>
                            </ul>
                        </NavLink>
                    )
                })

                }
            </div>

        </Wrapper>
    );
}

export default Cars;


const Wrapper = styled.div`
    padding: 43px 94px;

    .cars {
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(290px, 1fr));
        grid-auto-rows: 370px;
        gap: 32px;

        img {
            width: 100%;
            height: 290px;
            object-fit: cover;
        }
    }

    .list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 0;
    margin-left: -32px;
    margin-bottom: -32px;
    padding: 0;
    list-style: none;
    }
    .item {
    margin-left: 32px;
    }
    /* .list-img {
    margin-left: 32px;
    } */
    .list-heading {
    margin: 0;
    width: 280px;
    font-family: 'Noto Sans';
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    text-transform: uppercase;
    color: #000000;
    font-style: normal;
    }
    .list-text {
    margin: 0;
    margin-top: 8px;
    font-family: 'Noto Sans';
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    color: rgba(0, 0, 0, 0.8);
    font-style: normal;
    }
    .list-car {
    text-decoration: none;
    }
`
