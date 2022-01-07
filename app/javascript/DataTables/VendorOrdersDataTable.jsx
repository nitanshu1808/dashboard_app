import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Order ID', width: 100 },
  { field: 'product_name', headerName: 'Product', width: 150 },
  { field: 'product_price', headerName: 'Product Price', width: 130 },
  { field: 'status', headerName: 'Order Status', width: 130 },
  { field: 'sender_name', headerName: 'Sender Name', width: 150 },
  { field: 'recipient_name', headerName: 'Recipient Name', width: 150 },
  { field: 'total_amount', headerName: 'Amount', type: 'number', width: 100 },
  { field: 'created_at', headerName: 'Created At', width: 120 },
];

const VendorOrdersDataTable = (props) => {
  const rows = props.orders;

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default VendorOrdersDataTable;
