/* eslint-disable @next/next/no-img-element */
type Props = {
  path: string;
};

const ViewShotWindow: React.FC<Props> = ({ path }) => {
  return (
    <>
      <img src={path} width="100%" height="auto" alt="" />
    </>
  );
};

export default ViewShotWindow;
