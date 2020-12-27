import React, { useState } from "react";
import style from "./post.image.module.css";
import FileBase from "react-file-base64";

function PostImage({ increaseStep, setPost, post, id }) {

    const saveImage = (file) => {
        setPost({
            ...post,
            image: file.map((item) => item.base64)
        });

    };

    return (
        <div className={style.container}>
            <div id={style.image_title}>
                <h2>Image</h2>
            </div>

            <div className={style.image_upload_area}>
                <p>Upload image (minimun 3)</p>
                <form>
                    {/* <i className={style.fa fa-file-image-o}></i> */}
                    <label className={style.custom_file_upload}>
                        {/* <input type="file" />
                            Upload */}
                        <FileBase
                            type="file"
                            multiple={true}
                            onDone={saveImage}
                        />
                        Upload
                    </label>
                </form>
                <div className={style.category} id={style.continue}>
                    <button id={style.continue_button} onClick={increaseStep}>
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PostImage;
