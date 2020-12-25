import React, { useEffect, useState } from 'react'
import style from './search.module.css'
import axios from 'axios'

function SearchBar() {

    const [city, setCity] = useState([])
    const [district, setDistrict] = useState([])

    const [cityId, setCityId] = useState(-1)

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

    const handleCityIdChange = async (e) => {
        setCityId(e.target.value)
        
    }

    useEffect(() => {
        getCityData()
    }, [])

    useEffect(() => {
        getDistrictData()
    }, [cityId])


    return (
        <form className={style.searchBox}>
            <select name="" id="" value={cityId} onChange={handleCityIdChange}>
                {city.map((c, key) => <option key={key} value={c.province_id}>{c.province_name}</option>)}
            </select>
            <select name="" id="" >
                {district.map((d, key) => <option key={key} value={d.district_id}>{d.district_name}</option>)}
            </select>
            <select name="" id="">
                <option value="1000">Dưới 1 triệu</option>
                <option value="2000">2 triệu</option>
                <option value="3000">3 triệu</option>
                <option value="4000">4 triệu</option>
                <option value="5000">5 triệu</option>
            </select>
            <select name="" id="">
                <option value="10">Dưới 20 m2</option>
                <option value="20">20 m2</option>
                <option value="30">30 m2</option>
                <option value="40">40 m2</option>
                <option value="50">50 m2</option>
            </select>
            <button className={style.btnSearch} style={{
                color: "white",
                fontSize: "1.25rem"
            }}>Tìm kiếm</button>
        </form>
    )
}

export default SearchBar