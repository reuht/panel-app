import { Container, Grid } from "@mui/material";
import LinearChart from "../../Components/LinearChart";
import BasicPie from "../../Components/BasicPieChart"; 
import SimpleBarChart from "../../Components/SimpleBarChart"; 

export default function BasicDashboard() {
  return (
    <>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={6} mb={2}>
            <LinearChart />
          </Grid>
          <Grid item xs={6} mb={2}>
         
          </Grid>
          <Grid xs={6} mb={2}>
             <SimpleBarChart/>
          </Grid>
          <Grid xs={6} mb={2}>
                <BasicPie/>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
