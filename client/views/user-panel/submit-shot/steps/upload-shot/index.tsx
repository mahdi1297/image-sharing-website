import { Next } from "@consts/index";
import Button from "@shared/button";
import Uploader from "@shared/uploader";
import { useContext, useEffect, useState } from "react";
import { SubmitShotContext } from "../../context";

type Props = {
  setNextWindowHandler: Function;
  setImageData?: Function;
};

const UploadShot: React.FC<Props> = ({ setNextWindowHandler }) => {
  //
  const [disabled, setIsDisabled] = useState(true);
  const [imageData, setImageData] = useState([]);

  const value: any = useContext(SubmitShotContext);

  useEffect(() => {
    value.data = imageData;

    if (value.data.length !== 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [value, imageData]);

  const nextBtnHandler = () => {
    if (!value.data || value.data.length === 0) {
      return;
    }
    setNextWindowHandler();
  };

  return (
    <div>
      <Uploader setImageData={setImageData} />
      <Button
        classname="btn-primary mt-30"
        text={Next}
        onclick={nextBtnHandler}
        disabled={disabled}
      />
    </div>
  );
};

export default UploadShot;
