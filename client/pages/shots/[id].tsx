import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { ShotService } from "services/shots.service";
import { ShotModel } from "models/shot.model";
import HomeLayout from "layout/main-layouts/home";
import { GetStaticPaths, GetStaticProps } from "next";

const ShotDetail = dynamic(() => import("../../views/shot-detail"), {
  suspense: true,
});

type Props = {
  shot: ShotModel;
};

type PathsProps = {
  _id: string;
};

const Detail: React.FC<Props> = ({ shot }) => {
  return (
    <>
      <HomeLayout>
        <Suspense fallback={<h1>Loading...</h1>}>
          <ShotDetail shot={shot} />
        </Suspense>
      </HomeLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const shotsApiProvider = new ShotService();
  const { result } = await shotsApiProvider.getShotLenght();

  return {
    paths: result.map((id: PathsProps) => ({ params: { id: id._id } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id }: string | number | any = context.params;

  const shotsApiProvider = new ShotService();
  const data: ShotModel | undefined = await shotsApiProvider.getShot(id);

  return {
    props: {
      shot: data,
    },
    revalidate: 1800,
  };
};

export default Detail;
