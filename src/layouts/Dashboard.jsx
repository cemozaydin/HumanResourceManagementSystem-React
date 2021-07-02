import React from "react";
import Sidebar from "./Sidebar";
import { Grid } from "semantic-ui-react";
import {Route} from 'react-router';
import JobPostingList from "../pages/JobPostingList";
import JobPostingDetail from "../pages/JobPostingDetail";
import JobPostingAdd from "../pages/JobPostingAdd";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="4">
            <Sidebar></Sidebar>           
          </Grid.Column>

          <Grid.Column width="12">           
          <Route exact path="/" component={JobPostingList}/>
          <Route exact path="/jobpostings" component={JobPostingList}/>
          <Route exact path="/jobpostings/:id" component={JobPostingDetail}/>
          <Route exact path="/jobposting/add" component={JobPostingAdd}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
