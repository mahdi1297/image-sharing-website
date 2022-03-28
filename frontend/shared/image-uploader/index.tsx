/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import { SkeletonSingleLoaderShared } from "shared/loader";
import { UploaderBody } from "./style";
import { uploadImageUrl } from "constaints/data.const";
import ErrorShared from "shared/error";

const ImageUploaderShared = ({ setImageData }: any) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const maxNumber = 1;

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
      >
        {({
          imageList,
          onImageUpload,
          // onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
          errors,
        }) => (
          // write your building UI
          <UploaderBody>
            <div className="upload__image-wrapper">
              <button
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
                className={
                  images.length !== 0
                    ? "upload-btn in-active"
                    : "upload-btn active"
                }
              >
                <img src={uploadImageUrl} />
                Click or Drop An Image here
              </button>
              &nbsp;
              {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  {isLoading ? (
                    <SkeletonSingleLoaderShared />
                  ) : (
                    <>
                      <img
                        src={image["data_url"]}
                        alt=""
                        height="100%"
                        width="auto"
                      />

                      <div className="image-item__btn-wrapper">
                        <button
                          className="update-btn"
                          onClick={() => onImageUpdate(index)}
                        >
                          Update
                        </button>

                        <button
                          className="remove-btn"
                          onClick={() => onImageRemove(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
              {errors && (
                <div>
                  {errors.maxNumber && (
                    <ErrorShared message="Number of selected images exceed maxNumber" />
                  )}

                  {errors.acceptType && (
                    <ErrorShared message="Your selected file type is not allow" />
                  )}

                  {errors.maxFileSize && (
                    <ErrorShared message="Selected file size exceed maxFileSize" />
                  )}

                  {errors.resolution && (
                    <ErrorShared message="Selected file is not match your desired resolution" />
                  )}
                </div>
              )}
            </div>
          </UploaderBody>
        )}
      </ImageUploading>
    </div>
  );
};

export default ImageUploaderShared;
