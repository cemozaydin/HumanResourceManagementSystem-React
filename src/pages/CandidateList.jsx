import React, { useState, useEffect } from "react";
import { Icon, Menu, Table,Header } from "semantic-ui-react";
import CandidateService from "../services/candidateService";


export default function CandidateList() {
  const [candidates, setCandidates] = useState([]);   

  useEffect(()=>{
      let candidateService = new CandidateService()
      candidateService.getCandidate().then(result=>setCandidates(result.data.data))
  })  
  
  return (
    <div>
      <div className="ui horizontal divider">
       <Header as="h3" inverted color="red" colSpan="4">
                <Icon name="list alternate outline" />
                <Header.Content>İş Arayan Listesi</Header.Content>
        </Header>
        </div>
      <Table celled>              
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Adı</Table.HeaderCell>
            <Table.HeaderCell>Soyadı</Table.HeaderCell>
            <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Mail</Table.HeaderCell>
            <Table.HeaderCell>Kimlik No</Table.HeaderCell>           
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {candidates.map((candidate) => (
            <Table.Row key={candidate.id}>
              <Table.Cell>{candidate.firstName}</Table.Cell>
              <Table.Cell>{candidate.lastName}</Table.Cell>
              <Table.Cell>{candidate.birthDate}</Table.Cell>
              <Table.Cell>{candidate.email}</Table.Cell>
              <Table.Cell>{candidate.identityNumber}</Table.Cell>            
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
