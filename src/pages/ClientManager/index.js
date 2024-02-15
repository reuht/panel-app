import { Container, Grid } from "@mui/material";
import style from "./style.module.css";
import ClientTable from "../../Components/ClientTable";
import InputAutoComplete from "../../Components/InputAutoComplete";
import { useEffect, useState } from "react";

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 11, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 12, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 13, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 14, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 15, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 16, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 17, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const ClientManager = () => {
  return (
    <>
      <Container maxWidth="xl" className={style.container}>
        <Grid container spacing={2}>
          <Grid item xs={8} mb={2}>
           
          </Grid>
          <Grid className={style.containerGrid} item xs={4} mb={2}>
             <InputAutoComplete />
          </Grid>
          <Grid xs={12}>
            <ClientTable rows={rows} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ClientManager;
