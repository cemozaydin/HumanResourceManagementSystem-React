import React from "react";
import Sidebar from "./Sidebar";
import CandidateList from "../pages/CandidateList";
import { Grid } from "semantic-ui-react";
import EmployerList from "../pages/EmployerList";
import JobPostingList from "../pages/JobPostingList";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="4">
            <Sidebar></Sidebar>           
          </Grid.Column>

          <Grid.Column width="12">
            <CandidateList></CandidateList>
            <EmployerList></EmployerList>
            <JobPostingList></JobPostingList>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
