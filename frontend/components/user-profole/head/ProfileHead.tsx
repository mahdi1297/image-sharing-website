import React, {useState} from "react";
import {Grid} from "shared/common/style";
import {ProfileHeadStyle} from "../UserProfile.style";
import HeadInfo from "./components/HeadInfo";
import UserData from "./components/UserData";

const ProfileHead = () => {
    return (
        <ProfileHeadStyle>
            <Grid direction="column" justify="flex-start" align="flex-start">
                <HeadInfo/>
                <UserData/>
            </Grid>
        </ProfileHeadStyle>
    );
};

export default ProfileHead;
