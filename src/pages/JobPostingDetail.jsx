import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Image, Icon } from "semantic-ui-react";
import JobPostingService from "../services/jobPostingService";


export default function JobPostingDetail() {
  let { id } = useParams();

  const [jobPosting, setJobPosting] = useState([]);

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService.getJobPostingDetailsById(id).then(result => setJobPosting(result.data.data));
  },[id]);

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image floated="left" size="mini" src=""/>
            <Card.Header>{jobPosting.postingTitle}</Card.Header>
            <Card.Meta>{jobPosting.companyName}</Card.Meta>
            <Card.Description>
              {jobPosting.postingDescription}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Başvur
              </Button>
              <Button basic color="red" style={{marginLeft:"0.5em"}}>
                <Icon name="save outline"/> Kaydet
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
