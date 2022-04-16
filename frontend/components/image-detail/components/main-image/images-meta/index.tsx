import React from "react";
import { AlignCenter, Grid } from "shared/common/style";
import { MetaBody } from "../../../style";
import ButtonComponent from "shared/button";
import Icon from "shared/icons";
import { Theme } from "theme/theme";
import Link from "next/link";
import { processMetaData } from "./dataSeed";

const ImageMetaComponent = ({
  tags,
  title,
  location,
  creationDate,
  likes,
}: any) => {
  // Get metaDatas

  let metaData = processMetaData({
    title: title,
    location: location,
    creationDate: creationDate,
  });

  return (
    <>
      <MetaBody>
        <Grid direction="column" align="flex-start" justify="flex-start">
          <div>
            <AlignCenter>
              <ButtonComponent color="gray" size="md">
                <Icon type="share" size={14} color={Theme.colors.gray} />
                <span>Share</span>
              </ButtonComponent>
              <ButtonComponent color="danger" size="md">
                <Icon type="report" size={14} color={Theme.colors.danger} />
                <span>Report</span>
              </ButtonComponent>
              <ButtonComponent color="light" size="md">
                <Icon type="heart" size={14} color={Theme.colors.gray} />
                <span>{likes}</span>
              </ButtonComponent>
            </AlignCenter>
          </div>
          <div>
            <ul>
              {metaData.map((mt) => (
                <li key={mt.id}>
                  <div>
                    <Icon
                      type={mt.icon}
                      size={mt.iconSize}
                      color={mt.iconColor}
                    />
                  </div>
                  <p>{mt.title}</p>
                </li>
              ))}
            </ul>
          </div>
          <ul className="tags">
            {tags &&
              tags.map((t: any, l: any) => (
                <li key={l}>
                  <Link href={`/search/${t}`}>
                    <a>{t}</a>
                  </Link>
                </li>
              ))}
          </ul>
        </Grid>
      </MetaBody>
    </>
  );
};

export default ImageMetaComponent;
