import { PRIMARY, XL } from "constaints/consts";
import React, { useEffect, useState } from "react";
import ButtonShared from "shared/button";
import { CardFooter } from "shared/common/style";
import ImageUploaderShared from "shared/image-uploader";

const ImageUpload = ({ nextWindowSetter, setImage }: any) => {
  const [imageData, setImageData] = useState([]);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setImage(imageData);

    // Disables next button if image data is empty
    if (imageData.length !== 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [imageData, setImage]);

  function nextStepHandler() {
    // Navigates to next step
    nextWindowSetter();
  }

  return (
    <>
      <ImageUploaderShared setImageData={setImageData} />
      <CardFooter>
        <ButtonShared
          color={PRIMARY}
          size={XL}
          onclick={nextStepHandler}
          disabled={disabled}
        >
          Next
        </ButtonShared>
      </CardFooter>
    </>
  );
};

export default ImageUpload;
