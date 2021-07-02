import React from "react";
import {
  //Menu,
  Container,
  Grid,
  List,
  Header,
  Icon,
  Segment,
} from "semantic-ui-react";

export default function Footer() {
  return (
    <div>
      <Segment
        vertical
        inverted
        color="black"
        style={{ marginTop: "3em", padding: "5em 0em" }}
      >
        <Container inverted>
          <Grid.Row>
            <Grid columns={5} divided>
              <Grid.Row stretched>
                <Grid.Column>
                  <Segment inverted color="black" textAlign="left">
                    <Header size="small">SİTE KULLANIMI</Header>
                    <List link inverted>
                      <List.Item>Genel Koşullar</List.Item>
                      <List.Item>Site Haritası</List.Item>
                    </List>
                  </Segment>
                </Grid.Column>

                <Grid.Column>
                  <Segment inverted color="black" textAlign="left">
                    <Header size="small">VERİ POLİTİKAMIZ</Header>
                    <List link inverted>
                      <List.Item>Aday Üyelik Aydınlatma Metni</List.Item>
                      <List.Item>Çalışan Aydınlatma Metni</List.Item>
                      <List.Item>
                        İşveren Müşteri Temsilcisi Aydınlatma Metni
                      </List.Item>
                      <List.Item>
                        Tedarikçi/İş Ortağı Temsilcisi Aydınlatma Metni
                      </List.Item>
                      <List.Item>Bilgi Güvenliği Politikası</List.Item>
                    </List>
                  </Segment>
                </Grid.Column>

                <Grid.Column>
                  <Segment inverted color="black" textAlign="left">
                    <Header size="small">HAKKIMIZDA</Header>
                    <List link inverted>
                      <List.Item as="a">Hakkımızda</List.Item>
                      <List.Item as="a">Reklam Verin</List.Item>
                      <List.Item as="a">İletişim</List.Item>
                      <List.Item as="a">İlan Satın Al</List.Item>
                      <List.Item as="a">Kariyer Rehberi</List.Item>
                    </List>
                  </Segment>
                </Grid.Column>

                <Grid.Column>
                  <Segment inverted color="black" textAlign="left">
                    <Header size="small">YARDIM</Header>
                    <List link inverted>
                      <List.Item as="a">Sorum Var</List.Item>
                      <List.Item as="a">Önerim Var</List.Item>
                      <List.Item as="a">Sık Sorulan Sorular</List.Item>
                    </List>
                  </Segment>
                </Grid.Column>

                <Grid.Column>
                  <Segment inverted color="black" textAlign="left">
                    <Header size="small">SOSYAL MEDYA</Header>
                    <List link inverted>
                      <List.Item as="a"><Icon name="facebook" color="white"/> Facebook</List.Item>
                      <List.Item as="a"><Icon name="twitter" color="white"/> Twitter</List.Item>
                      <List.Item as="a"><Icon name="instagram" color="white"/> Instagram</List.Item>
                      <List.Item as="a"><Icon name="youtube" color="white"/> Youtube</List.Item>
                    </List>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Row>
        </Container>
      </Segment>
    </div>
  );
}
