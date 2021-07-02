import React, { useState, useEffect } from "react";
import JobPostingService from "../services/jobPostingService";
import {
  Icon,
  //Menu,
  Table,
  //Header,
  Button,
  //Divider,
  Image,
  Grid,
  Card,
  Label,
  //Segment,
  Container
} from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function JobPostingList() {
  const [jobPostings, setJobPostings] = useState([]); 

 useEffect(() => {
   let jobPostingService = new JobPostingService();
 
   jobPostingService.getAllJobPosting().then(result=>setJobPostings(result.data.data))
 },[])
    
  return (
    <div>
      <Container>
      {jobPostings.map((jobPosting) => (
        <Card fluid link color="black" className="ui main card"  key={jobPosting.id}>
          <Grid>
            <Grid.Column width={3}>
              <Image
                size="small"                
                src="https://res.cloudinary.com/cemozaydin/image/upload/v1624397334/kodlamaio/profilePhotos/iww2xtsmwz5fftsebiek.jpg"
                centered circular style={{padding:"1em", marginTop:"1.5em", span:"1em"}}
              />
            </Grid.Column>

            <Grid.Column width={9}>
              <Table>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell><strong>{jobPosting.jobTitle.title} </strong></Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>{jobPosting.employer.companyName}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Icon name="map marker alternate"></Icon>
                      {jobPosting.city.cityName}
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Icon name="clock outline"></Icon> Açılış Tarihi :
                      <strong>{jobPosting.postingReleaseDate}</strong> 
                      &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;/&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                      <Icon name="clock outline"></Icon>Kapanış Tarihi :
                      <strong>{jobPosting.postingDeadline}</strong>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Grid.Column>

            <Grid.Column id="cardColunm" width={4} className="ui grid column right">
              <p>
                <Label color="orange" size="small">{jobPosting.jobType.jobTypeDesc}</Label>
              </p>
              <p>
              <Label color="purple" size="small">{jobPosting.workplaceType.workplaceDesc}</Label>
              </p>
              <Link to={`/jobpostings/${jobPosting.id}`}>
                <Button inverted color="purple" size="large" floated="right">
                  <Icon name="eye" /> İncele
                </Button>
              </Link>
            </Grid.Column>
          </Grid>
        </Card>
      ))}

       </Container>
    </div>
  );
}

