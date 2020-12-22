import React from "react";
import style from "./post.amenity.module.css";

function PostAmenity() {
    return (
        <div id={style.list_container}>
            <div id={style.container}>
                <div id={style.amenity}>
                    <h2>Amenity</h2>
                </div>

                <div className={style.amenity_form}>
                    <form>
                        <div className={style.category} id={style.bathroom}>
                            <div className={style.category_name}>Bathroom</div>
                            <div
                                className={style.to_complete}
                                id={style.bathroom_type}
                            >
                                <label for="to_complete_type">Type</label>
                                <select id={style.to_complete_type}>
                                    <option value="kin">Khép kín</option>
                                    <option value="chung">Chung</option>
                                </select>
                            </div>
                            <div
                                className={style.to_complete}
                                id={style.bathroom_water}
                            >
                                <label for="to_complete_water">Water</label>
                                <select id={style.to_complete_water}>
                                    <option value="nong">Có nóng lạnh</option>
                                    <option value="lanh">
                                        Không có nóng lạnh
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className={style.category} id={style.kitchen}>
                            <div className={style.category_name}>Kitchen</div>
                            <div className={style.to_complete}>
                                <label for="to_complete_kitchen">Kitchen</label>
                                <select id={style.to_complete_kitchen}>
                                    <option value="rieng">Khu bếp riêng</option>
                                    <option value="chung">Khu bếp chung</option>
                                    <option value="khong_nau_an">
                                        Không nấu ăn
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div
                            className={style.category}
                            id={style.air_conditioner}
                        >
                            <div className={style.category_name}>
                                Air conditioner
                            </div>
                            <div className={style.to_complete}>
                                <label for="to_complete_airconditioner">
                                    Air conditioner
                                </label>
                                <select id={style.to_complete_kitchen}>
                                    <option value="co">Có</option>
                                    <option value="khong">Không</option>
                                </select>
                            </div>
                        </div>
                        <div className={style.category} id={style.balcony}>
                            <div className={style.category_name}>Balcony</div>
                            <div className={style.to_complete}>
                                <label for="to_complete_balcony">Balcony</label>
                                <select id={style.to_complete_balcony}>
                                    <option value="co">Có</option>
                                    <option value="khong">Không</option>
                                </select>
                            </div>
                        </div>
                        <div
                            className={style.category}
                            id={style.electricity_water_bill}
                        >
                            <div className={style.category_name}>
                                Electricity and Water bill
                            </div>
                            <div
                                className={style.to_complete}
                                id={style.electricity_bill}
                            >
                                <label for="to_complete_electricity_bill">
                                    Electricity
                                </label>
                                <select id={style.to_complete_electricity_bill}>
                                    <option value="dan">Giá dân</option>
                                    <option value="thue">Giá thuê</option>
                                </select>
                            </div>
                            <div
                                className={style.to_complete}
                                id={style.water_bill}
                            >
                                <label for="to_complete_water_bill">
                                    Water (đồng/m3)
                                </label>
                                <input
                                    type="text"
                                    id={style.to_complete_water_bill}
                                    placeholder="5,000"
                                />
                            </div>
                        </div>
                        <div className={style.category} id={style.other}>
                            <div className={style.category_name}>Other</div>
                            <div className={style.to_complete}>
                                <label for="to_complete_other">Other</label>
                                <input
                                    type="text"
                                    id={style.to_complete_other}
                                    placeholder="Tủ lạnh/ máy giặt/ giường tủ"
                                />
                            </div>
                        </div>
                        <div className={style.category} id={style.continue}>
                            <button id={style.continue_button}>Continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PostAmenity;
