import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const OrdersDataTable = (props) => {
  const rows = props.data;

  const columns = props.persistence.hideifyColumns([
    { field: 'id', headerName: 'Order ID', width: 100 },
    { field: 'vendor_name', headerName: 'Vendor', width: 130 },
    { field: 'product_name', headerName: 'Product', width: 200 },
    { field: 'product_price', headerName: 'Product Price', width: 130 },
    { field: 'status', headerName: 'Order Status', width: 130 },
    { field: 'sender_name', headerName: 'Sender Name', width: 130 },
    { field: 'recipient_name', headerName: 'Recipient Name', width: 130 },
    { field: 'created_at', headerName: 'Created At', width: 130 },
    { field: 'total_amount', headerName: 'Amount', type: 'number', width: 120 },
  ]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...props.persistence.attributes}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default OrdersDataTable;
