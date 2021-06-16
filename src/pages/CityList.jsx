import React from 'react'
import { Dropdown, Table } from 'semantic-ui-react'

export default function CityList() {
    return (
        <div>
        <Table singleLine>
        <Table.Header >
          <Table.Row>
            <Table.HeaderCell>Şehirler</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell> 
                <Dropdownn placeholder='Select Country' fluid search selection options={}></Dropdownn>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
            
        </div>
    )
}
