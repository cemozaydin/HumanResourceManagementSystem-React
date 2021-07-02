import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Menu, Container, Icon, Image } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";


export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const history = useHistory();

  function handleSignOut() {
    setIsAuthenticated(false);
    history.push("/");
  }

  function handleSignIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu >
        <Container>
          <Menu.Item name="logo">
            <Icon name="bullseye" color="red"></Icon>
            <Image
              src="hrms_logo.png"
              size="small"
              href="/"
            />
           
          </Menu.Item>
          <Menu.Item name="searchjob">
            İş Ara &nbsp;
            <Icon name="search"></Icon>
          </Menu.Item>
          <Menu.Item name="profile"> Profil </Menu.Item>
          <Menu.Item name="resume"> Özgeçmişler </Menu.Item>
          <Menu.Item name="carrierguide"> Kariyer Rehberi </Menu.Item>
          <Menu.Item name="addjobposting"><NavLink to="/jobposting/add">İş İlanı Ekle</NavLink></Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item>
              {isAuthenticated ? (
                <SignedIn signOut={handleSignOut} />
              ) : (
                <SignedOut signIn={handleSignIn} />
              )}
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
