import React, { useState, useEffect } from "react";
import {
  Header,
  Segment,
  Container,
  Grid,
  Input,
  Button,
  //Icon,
} from "semantic-ui-react";
import CityService from "../services/cityService";
import JobTitleService from "../services/jobTitleService";

export default function Filter() {
  const [cities, setCities] = useState([]);
  const [jobtitles, setJobTitles] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getAll().then((result) => setCities(result.data.data));
  }, []);

  useEffect(() => {
    let jobTitleService = new JobTitleService();
    jobTitleService.getJobTitles().then((result) => setJobTitles(result.data.data));
  }, []);

  return (
    <div>
      <Segment
        textAlign="center"
        style={{ minHeight: 500, padding: "1em 0em" }}
        vertical
      >
        <Container>
          <Segment color="grey">
            <Segment color="grey">
              <Header textAlign="left"></Header>
              <Grid.Row columns="equal" textAlign="center">
                <Grid.Row verticalAlign="middle">
                  <Grid.Column>
                    <Input
                    clearable="true"
                      icon="search"
                      iconPosition="left"
                      placeholder="Arama..."
                    />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row verticalAlign="middle">
                  <Grid.Column>
                    <Input
                    clearable="true"
                      search="true"
                      list="cities"
                      icon="location arrow"
                      iconPosition="left"
                      placeholder="Şehirler..."
                    />
                    <datalist id="cities">
                      {cities.map((city) => (
                        <option key={city.id}>{city.cityName}</option>
                      ))}
                    </datalist>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row verticalAlign="middle"></Grid.Row>
                <Grid.Column>
                  <Input
                    list="jobtitles"
                    icon="list alternate"
                    iconPosition="left"
                    placeholder="Pozisyon..."
                  />
                  <datalist id="jobtitles">
                    {jobtitles.map((jobtitle) => (
                      <option key={jobtitle.id}>{jobtitle.title}</option>
                    ))}
                  </datalist>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column padding="1em">
                  <Button color="purple" size="medium">
                    <Button.Content visible>Submit</Button.Content>
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Segment>
          </Segment>
        </Container>
      </Segment>
    </div>
  );
}
