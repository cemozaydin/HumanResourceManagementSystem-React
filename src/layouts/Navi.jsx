import React from "react";
import { Button, Menu, Container, Icon, Image } from "semantic-ui-react";
import UserProfile from "./UserProfile";

export default function Navi() {
  return (
    <div>
      <Menu fixed="top">
        <Container>
          <Menu.Item name="logo">
            <Icon name="bullseye" color="green"></Icon>
            <Image src={process.env.PUBLIC_URL + 'hrms_logo.png'} size="small"></Image>
          </Menu.Item>
          <Menu.Item name="searchjob">
            İş Ara &nbsp;
            <Icon name="search"></Icon>
          </Menu.Item>
          <Menu.Item name="profile"> Profil </Menu.Item>
          <Menu.Item name="resume"> Özgeçmişler </Menu.Item>
          <Menu.Item name="carrierguide"> Kariyer Rehberi </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item name="userprofile">
              <UserProfile></UserProfile>
            </Menu.Item>

            <Menu.Item>
              <Button.Group>
                <Button primary>Üye Ol</Button>
                <Button.Or />
                <Button color="teal">Üye Girişi</Button>
              </Button.Group>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
