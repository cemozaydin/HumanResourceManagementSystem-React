import React, { useState, useEffect } from "react";
import JobPostingService from "../services/jobPostingService";
import { Icon, Menu, Table, Header,Button } from "semantic-ui-react";

export default function JobPostingList() {
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    let jobPostingService = new JobPostingService();
    jobPostingService
      .getJobPosting()
      .then((result) => setJobPostings(result.data.data));
  });

  return (
    <div>
      <div className="ui horizontal divider">
        <Header as="h3" inverted color="red" colSpan="4">
          <Icon name="list alternate outline" />
          <Header.Content>İş İlanları</Header.Content>
        </Header>
      </div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>İlan Başlığı</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobPostings.map((jobPosting) => (
            <Table.Row key={jobPosting.id}>
              <Table.Cell>{jobPosting.companyName}</Table.Cell>
              <Table.Cell>{jobPosting.jobTitle}</Table.Cell>
              <Table.Cell>{jobPosting.postingTitle}</Table.Cell>
              <Table.Cell>{jobPosting.cityName}</Table.Cell>
              <Table.Cell textAlign="center">
                <Button color="instagram">
                  <Icon name="eye" /> İncele
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="5">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
