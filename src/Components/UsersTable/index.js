import DynamicTable from "../DynamicTable";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "firstName",
    headerName: "Nombre",
    width: 130,
  },
  {
    field: "lastName",
    headerName: "Apellido",
    width: 130,
  },
  {
    field: "Role",
    headerName: "Rol",
    width: 90,
    sortable: false,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const UsersTable = ({ rows }) => {
  return (
    <>
      <DynamicTable rows={rows} columns={columns} />
    </>
  );
};

export default UsersTable;
