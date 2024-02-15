import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


export default function DynamicTable({ columns, rows }) {
  // props: {columns, rows}
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        
        rows={ rows }
        columns={ columns }
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        
      />
    </div>
  );
}