/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import { MultiSkeletonLoader } from "@shared/loader";
import Button from "@shared/button";
import styles from "./style.module.scss";
import ErrorsIndicator from "./error-indicator";
import { UPDATE, CLICK_OR_DRAG_IMAGE, REMOVE } from "@consts/consts";
import { uploadImageUrl } from "@consts/data";

type Props = {
  setImageData: Function;
  maxNumber?: number;
  maximumFileSize?: number;
};

const Uploader: React.FC<Props> = ({
  setImageData,
  maxNumber = 1,
  maximumFileSize = 3145728,
}) => {
  //
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const acceptedFileTypes = ["png", "jpg", "jpeg", "webp", "avif"];

  const onChange = (imageList: any, addUpdateIndex: any) => {
    setIsLoading(true);
    setImages(imageList);
    setImageData(imageList);

    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        maxFileSize={maximumFileSize}
        acceptType={acceptedFileTypes}
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
          errors,
        }) => (
          <section className={styles.uploader__body}>
            <div className={styles.upload__image_wrapper}>
              <button
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
                className={
                  images.length !== 0
                    ? `${styles.upload_btn} ${styles.upload_btn_in_active}`
                    : `${styles.upload_btn} active`
                }
              >
                <img src={uploadImageUrl} />
                {CLICK_OR_DRAG_IMAGE}
              </button>

              {imageList.map((image, index) => (
                <div key={index} className={styles.image_item}>
                  {isLoading ? (
                    <MultiSkeletonLoader />
                  ) : (
                    <>
                      <img
                        src={image["data_url"]}
                        alt=""
                        height="100%"
                        width="auto"
                      />

                      <div className="image-item__btn-wrapper">
                        <Button
                          classname={`btn-success ${styles.update_btn} mb-10`}
                          onclick={() => onImageUpdate(index)}
                          text={UPDATE}
                        />
                        <Button
                          classname={`brn-danger ${styles.remove_btn}`}
                          onclick={() => onImageRemove(index)}
                          text={REMOVE}
                        />
                      </div>
                    </>
                  )}
                </div>
              ))}

              <ErrorsIndicator
                errors={errors}
                maximumFileSize={maximumFileSize}
                acceptedFileTypes={acceptedFileTypes}
              />
            </div>
          </section>
        )}
      </ImageUploading>
    </div>
  );
};

export default Uploader;
