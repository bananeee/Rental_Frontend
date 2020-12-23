import React, { useEffect, useState } from "react";
import style from "./post.des.module.css";

function PostDes({ increaseStep, setPost, post }) {
    const [locationData, setLocationData] = useState({})
    const [priceData, setPriceData] = useState({})

    const handleChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        })

    }

    const handleChangeLocation = async (e) => {
        setLocationData({
            ...locationData,
            [e.target.name]: e.target.value
        })

        setPost({
            ...post,
            location: locationData
        })
    }

    const handleChangePrice = async (e) => {
        setPriceData({
            ...priceData,
            [e.target.name]: e.target.value
        })

        setPost({
            ...post,
            price: priceData
        })
    }

    // useEffect(() => {
    //     setPost({
    //         ...post,
    //         location: locationData
    //     })
    // }, [locationData])

    // useEffect(() => {
    //     setPriceData({
    //         ...post,
    //         price: priceData
    //     })
    // }, [priceData])

    return (
        <div className={style.container}>
            <div id={style.description}>
                <h2>Description</h2>
            </div>

            <div className={style.description_form}>
                <form>
                    <div className={style.category} id={style.title}>
                        <div className={style.category_name}>Title</div>
                        <div className={style.to_complete}>
                            <label for="title_title">Title</label>
                            <input
                                value={post.title === undefined ? "" : post.title}
                                onChange={handleChange}
                                name="title"
                                type="text"
                                id={style.title_title}
                                placeholder="Home Sweet Home"
                            />
                        </div>
                    </div>
                    <div className={style.category} id={style.location}>
                        <div className={style.category_name}>Location</div>
                        <div className={style.wrap_item}>
                            <div
                                className={style.to_complete}
                                id={style.location_no}
                            >
                                <label for="to_complete_no">No</label>
                                <input
                                    value={locationData.no === undefined ? "" : locationData.no}
                                    onChange={handleChangeLocation}
                                    name="no"
                                    type="text"
                                    id={style.to_complete_no}
                                    placeholder="144"
                                />
                            </div>
                            <div
                                className={style.to_complete}
                                id={style.location_street}
                            >
                                <label for="to_complete_street">
                                    Street
                                    </label>
                                <input
                                    value={locationData.street === undefined ? "" : locationData.street}
                                    onChange={handleChangeLocation}
                                    name="street"
                                    type="text"
                                    id={style.to_complete_street}
                                    placeholder="Xuân Thủy"
                                />
                            </div>
                            <div
                                className={style.to_complete}
                                id={style.location_ward}
                            >
                                <label for="to_complete_ward">Ward</label>
                                <input
                                    value={locationData.ward === undefined ? "" : locationData.ward}
                                    onChange={handleChangeLocation}
                                    name="ward"
                                    type="text"
                                    id={style.to_complete_ward}
                                    placeholder="Dịch Vọng Hậu"
                                />
                            </div>
                            <div
                                className={style.to_complete}
                                id={style.location_district}
                            >
                                <label for="to_complete_district">
                                    District
                                    </label>
                                <input
                                    value={locationData.district === undefined ? "" : locationData.district}
                                    onChange={handleChangeLocation}
                                    name="district"
                                    type="text"
                                    id={style.to_complete_district}
                                    placeholder="Cầu Giấy"
                                />
                            </div>
                            <div
                                className={style.to_complete}
                                id={style.location_city}
                            >
                                <label for="to_complete_city">City</label>
                                <input
                                    value={locationData.city === undefined ? "" : locationData.city}
                                    onChange={handleChangeLocation}
                                    name="city"
                                    type="text"
                                    id={style.to_complete_city}
                                    placeholder="Hà Nội"
                                />
                            </div>
                        </div>
                    </div>

                    <div className={style.category} id={style.nearby}>
                        <div className={style.category_name}>Nearby</div>
                        <div className={style.to_complete}>
                            <label for="to_complete_nearby">Nearby</label>
                            <textarea
                                value={post.nearby === undefined ? "" : post.nearby}
                                onChange={handleChange}
                                name="nearby"
                                id={style.to_complete_nearby}
                                placeholder="Trường học, bệnh viện,..."
                            ></textarea>
                        </div>
                    </div>

                    <div className={style.category} id={style.type}>
                        <div className={style.category_name}>Type</div>
                        <div
                            className={style.to_complete}
                            id={style.type_detail}
                        >
                            <label for="to_complete_detail">Type</label>
                            <select
                                value={post.type}
                                onChange={handleChange}
                                name="type"
                                id={style.to_complete_detail}
                            >
                                <option value="phong_tro">Phòng trọ</option>
                                <option value="chung_cu_mini">
                                    Chung cư mini
                                    </option>
                                <option value="nha">Nhà nguyên căn</option>
                                <option value="chung_cu_nguyen_can">
                                    Chung cư nguyên căn
                                    </option>
                            </select>
                        </div>
                        <div
                            className={style.to_complete}
                            id={style.type_room}
                        >
                            <label for="to_complete_room">
                                Number of room
                                </label>
                            <input
                                value={post.numOfRoom === undefined ? "" : post.numOfRoom}
                                onChange={handleChange}
                                name="numOfRoom"
                                type="text"
                                id={style.to_complete_room}
                                placeholder="2"
                            />
                        </div>
                    </div>

                    <div className={style.category} id={style.price}>
                        <div className={style.category_name}>Price</div>
                        <div
                            className={style.to_complete}
                            id={style.price_type}
                        >
                            <label for="to_complete_price_type">Type</label>
                            <select
                                value={priceData.category === undefined ? "" : priceData.category}

                                onChange={handleChangePrice}
                                name="category"
                                id={style.to_complete_detail}
                            >
                                <option value="thang">Tháng</option>
                                <option value="qui">Quí</option>
                                <option value="nam">Năm</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className={style.to_complete} id={style.price}>
                            <label for="to_complete_price">
                                Price (đồng)
                                </label>
                            <input
                                value={priceData.amount === undefined ? "" : priceData.amount}

                                onChange={handleChangePrice}
                                name="amount"
                                type="text"
                                id={style.to_complete_price}
                                placeholder="1,000,000"
                            />
                        </div>
                    </div>

                    <div className={style.category} id={style.area}>
                        <div className={style.category_name}>Area</div>
                        <div className={style.to_complete}>
                            <label for="to_complete_area">Area (m2)</label>
                            <input
                                value={post.size === undefined ? "" : post.size}

                                onChange={handleChange}
                                name="size"
                                type="text"
                                id={style.to_complete_area}
                                placeholder="50"
                            />
                        </div>
                    </div>

                    <div className={style.category} id={style.other}>
                        <div className={style.category_name}>Other</div>
                        <div className={style.to_complete}>
                            <label for="to_complete_other">Other</label>
                            <select

                                value={post.ownerType}
                                onChange={handleChange}
                                name="ownerType"
                                id={style.to_complete_other}
                            >
                                <option value="chung">Chung</option>
                                <option value="khong_chung">
                                    Không chung chủ
                                    </option>
                            </select>
                        </div>
                    </div>
                    <div className={style.category} id={style.continue}>
                        <button id={style.continue_button} onClick={increaseStep}>Continue</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostDes;
