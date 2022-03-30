import ImageData from "./steps/image-data";
import ImageUpload from "./steps/image-upload";

export function multiStepData(
  setNextWindowHandler: Function,
  setPrevWindowHandler: Function,
  setImageData: any
) {
  return [
    {
      id: 1,
      title: "Upload photo",
      icon: null,
      comoponent: (
        <ImageUpload
          setImage={setImageData}
          nextWindowSetter={setNextWindowHandler}
        />
      ),
      isProtected: true,
    },
    {
      id: 2,
      title: "Fill informations",
      icon: null,
      comoponent: <ImageData prevWindowSetter={setPrevWindowHandler} />,
      isProtected: true,
    },
  ];
}
