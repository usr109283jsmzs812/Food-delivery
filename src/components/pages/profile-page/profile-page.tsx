import React from "react";
import styled from "styled-components";
import {
  EditProfileIconSvg,
  LogOutIconSvg,
  RenewPlansIconSvg,
  SettingsIconSvg,
  TermsAndPrivPolIconSvg,
  VipProfileCrownSvg,
} from "../../buttons/icons/profile-menu-icons/icons";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ProfilePageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100%;
  font-family: "Signika";
  margin-top: 50px ;
  h1 {
    font-size: 16px;
  }
  h2 {
    margin-top: 24px;
    font-size: 25px;
  }
  h3 {
    color: #a1a1a1;
    font-weight: 400;
    font-size: 16px;
  }
`;

const ProfilePhotoDiv = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 100px;
  margin-top: 35px;
  img {
    width: 160px;
    height: 160px;
    border-radius: 100px;
  }
  svg {
    position: absolute;
    top: 125px;
    left:  125px;
  }
`;

const ProfileMenuIcons = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
 
`;

const ProfilePageMenu = styled.div`
  display: flex;
  flex-direction: row;
  
`;

const ProfileMenuHeaders = styled.div`
  display: flex;
  flex-direction: column;
  color:#707070;
  h5 {
    font-size: 17px;
    line-height: 30px;
    flex-grow: 1;
    margin-left: 10px;
  }
`;

const ProfilePageMenuH4 = styled.div`
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  width: 300px;
  justify-content: space-between;
  padding-top: 25px;
  i {
    /* padding-left: 100px;  */
    display: flex;
    align-items: flex-start;
  }
`;

const ProfilePage = () => {

  const headersAndIcons = [
    {
      title: "Edit Profile",
      icon: <EditProfileIconSvg />,
      arrow: <ArrowForwardIosIcon fontSize="small" />
    },
    {
      title: "Renew Plans",
      icon: <RenewPlansIconSvg />,
      arrow: <ArrowForwardIosIcon fontSize="small" />
    },
    {
      title: "Settings",
      icon: <SettingsIconSvg />,
      arrow: <ArrowForwardIosIcon fontSize="small" />
    },
    {
      title: "Terms & Privacy Policy",
      icon: <TermsAndPrivPolIconSvg />,
      arrow: <ArrowForwardIosIcon fontSize="small" />
    },
    {
      title: "Log Out",
      icon: <LogOutIconSvg />,
      arrow: <ArrowForwardIosIcon fontSize="small" />
    },
  ];
  return (
    <ProfilePageDiv>
      <h1>Profile</h1>
      <ProfilePhotoDiv>
        <img src="https://www.newartsaxis.net/wp-content/uploads/2021/03/hair-color-for-woman-150x150.jpg"></img>
        <VipProfileCrownSvg />
      </ProfilePhotoDiv>
      <h2>Shambhavi Mishra</h2>
      <h3>Food blogger</h3>
      <ProfilePageMenu>
        <ProfileMenuHeaders>
          {headersAndIcons.map((item, idx) => (
            <ProfilePageMenuH4 key={idx}>
              <ProfileMenuIcons>
                {item.icon}
              </ProfileMenuIcons>
              <h5>
                {item.title}
              </h5>
              <i> <ArrowForwardIosIcon fontSize="small" /></i>
            </ProfilePageMenuH4>
          ))}
        </ProfileMenuHeaders>
      </ProfilePageMenu>
    </ProfilePageDiv>
  );
};

export default ProfilePage;
