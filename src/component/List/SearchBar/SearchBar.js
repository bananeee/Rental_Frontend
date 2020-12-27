import React, { useEffect, useState } from 'react'
import style from './search.module.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { getPostsByQuery } from '../../../actions/postAction'

function SearchBar() {

    const [city, setCity] = useState([])
    const [district, setDistrict] = useState([])
    const [cityId, setCityId] = useState(-1)
    const [searchField, setSearchField] = useState({})

    const { register, handleSubmit } = useForm({})

    const dispatch = useDispatch();

    const posts = useSelector((state) => state.posts);

    const history = useHistory()

    useEffect(() => {
        console.log(posts)
    }, [posts]);

    const onSubmit = (data) => {
        for (const propName in data) {
            if (data[propName] === "") {
                delete data[propName];
            }
        }
        console.log(data)
        dispatch(getPostsByQuery(data));
        history.push('/posts?find')
    };


    const getCityData = async () => {
        try {
            const response = await axios.get("https://vapi.vnappmob.com/api/province")
            setCity(response.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    const getDistrictData = async () => {
        try {
            const response = await axios.get("https://vapi.vnappmob.com/api/province/district/" + cityId)
            setDistrict(response.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    const handleCityChange = async (e) => {
        if (e.target.value === "")
            setCityId(-1)
        else
            setCityId(city.find(c => c.province_name === e.target.value).province_id)
        console.log(cityId)
        // handleInputChange(e)
    }

    useEffect(() => {
        getCityData()
    }, [])

    useEffect(() => {
        getDistrictData()
    }, [cityId])

    // const handleInputChange = async (e) => {
    //     setSearchField({
    //         ...searchField,
    //         [e.target.name]: e.target.value,
    //         // [e.target.name]: Object.keys(searchField[e.target.name]).reduce(
    //         //     (obj, key) => ({
    //         //         ...obj,
    //         //         [key]: e.target.value
    //         //     }),
    //         //     {}
    //         // )
    //     });
    // }

    // const submit = (e) => {
    //     e.preventDefault()
    //     console.log(searchField);
    // }

    return (
        <form className={style.searchBox}>
            <select name="city" id="" onChange={handleCityChange} ref={register}>
                <option value="">Tỉnh/Thành phố</option>
                {city.map((c, key) => <option key={key} value={c.province_name}>{c.province_name}</option>)}
            </select>
            <select name="district" id="" ref={register}>
                <option value="">Quận/Huyện</option>
                {district.map((d, key) => <option key={key} value={d.district_name}>{d.district_name}</option>)}
            </select>
            <select name="price" id="" ref={register}>
                <option value="">Giá tiền</option>
                <option value="1">Dưới 1 triệu</option>
                <option value="2">2 triệu</option>
                <option value="3">3 triệu</option>
                <option value="4">4 triệu</option>
                <option value="5">5 triệu</option>
            </select>
            <select name="size" id="" ref={register}>
                <option value="">Kích thước</option>
                <option value="1">Dưới 20 m2</option>
                <option value="2">20 m2</option>
                <option value="3">30 m2</option>
                <option value="4">40 m2</option>
                <option value="5">50 m2</option>
            </select>
            <button
                className={style.btnSearch}
                style={{
                    color: "white",
                    fontSize: "1.25rem"
                }}
                onClick={handleSubmit(onSubmit)}>Tìm kiếm</button>
        </form>
    )
}

export default SearchBar