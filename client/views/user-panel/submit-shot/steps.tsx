import SubmitData from "./steps/submit-data";
import UploadShot from "./steps/upload-shot";

export function multiStepData(
  setNextWindowHandler: Function,
  setPrevWindowHandler: Function
) {
  return [
    {
      id: 1,
      title: "Upload photo",
      icon: null,
      comoponent: <UploadShot setNextWindowHandler={setNextWindowHandler} />,
      isProtected: true,
    },
    {
      id: 2,
      title: "Fill informations",
      icon: null,
      comoponent: <SubmitData setPrevWindowHandler={setPrevWindowHandler} />,
      isProtected: true,
    },
  ];
}
