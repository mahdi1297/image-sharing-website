import React, {useState} from "react";
import TabSharedComponent from "shared/tab";
import {ContentWrapper, Tab} from "../ImageDetail.style";
import {TabModel} from "./ImageContent.TabData";
import UserImages from "./components/UserImages";
import ImagesComments from "./components/ImagesComments";

const ImagesContentComponent = () => {
    const [selectedTab, setSelectedTab] = useState<number>(1);

    return (
        <ContentWrapper>
            <TabSharedComponent
                data={TabModel}
                tab={selectedTab}
                setTab={setSelectedTab}
            />
            {selectedTab === 1 && <UserImages/>}
            {selectedTab === 2 && <ImagesComments/>}
        </ContentWrapper>
    );
};

export default ImagesContentComponent;
