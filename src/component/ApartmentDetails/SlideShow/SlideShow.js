import React, { useEffect, useState } from 'react'
import Carousel from "react-bootstrap/Carousel"
import style from './slideshow.module.css'

function SlideShow({ image }) {
    const [imgSrc, setimgSrc] = useState({})

    useEffect(() => {
        console.log(image, "hello")
        setimgSrc(image)
    }, [image])

    return (
        <div>
            <Carousel indicators="true">
                {(image.map((src, key) => (
                    <Carousel.Item key={key}>
                        <img
                            className={style.image}
                            src={src}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>
                                Nulla vitae elit libero, a pharetra augue mollis
                                interdum.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )))}
            </Carousel>
        </div>
    )
}

export default SlideShow
