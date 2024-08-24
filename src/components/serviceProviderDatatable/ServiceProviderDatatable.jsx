import "./ServiceProviderDatatable.css"

import * as React from 'react';
import { userColumns,userRows } from "../../serviceProviderDatatableTestData";

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

// const columns: GridColDef[] = [
//     { field: 'id', headerName: 'ID', width: 90},
//     { field: 'user', headerName: 'User', width: 200 },
//     { field: 'email', headerName: 'Email', width: 180 },
//     { field: 'phno', headerName: 'Phone No', width: 160 },
//     { field: 'city', headerName: 'City', width: 110 },
//     { field: 'type', headerName: 'Type', width: 110},
//     { field: 'age', headerName: 'Age', width: 100},

// ];

// const rows = [
//     { id: 1, user: 'Snow', email: 'Jon@gmail.com', phno:"9988776699",city:"Bengaluru",type:"Advocate", age:"52"},
//     { id: 2, user: 'Snow', email: 'Jon@gmail.com', phno:"9988776699",city:"Bengaluru",type:"Advocate", age:"52"},
//     { id: 3, user: 'Snow', email: 'Jon@gmail.com', phno:"9988776699",city:"Bengaluru",type:"Advocate", age:"52"},
//     { id: 4, user: 'Snow', email: 'Jon@gmail.com', phno:"9988776699",city:"Bengaluru",type:"Advocate", age:"52"},
//     { id: 5, user: 'Snow', email: 'Jon@gmail.com', phno:"9988776699",city:"Bengaluru",type:"Advocate", age:"52"},
//     { id: 6, user: 'Snow', email: 'Jon@gmail.com', phno:"9988776699",city:"Bengaluru",type:"Advocate", age:"52"},
//     { id: 7, user: 'Snow', email: 'Jon@gmail.com', phno:"9988776699",city:"Bengaluru",type:"Advocate", age:"52"},
//     { id: 8, user: 'Snow', email: 'Jon@gmail.com', phno:"9988776699",city:"Bengaluru",type:"Advocate", age:"52"},
//     { id: 9, user: 'Snow', email: 'Jon@gmail.com', phno:"9988776699",city:"Bengaluru",type:"Advocate", age:"52"},
//     { id: 10, user: 'Snow', email: 'Jon@gmail.com', phno:"9988776699",city:"Bengaluru",type:"Advocate", age:"52"},
//     { id: 11, user: 'Snow', email: 'Jon@gmail.com', phno:"9988776699",city:"Bengaluru",type:"Advocate", age:"52"},
//     { id: 12, user: 'Snow', email: 'Jon@gmail.com', phno:"9988776699",city:"Bengaluru",type:"Advocate", age:"52"},
//     { id: 13, user: 'Snow', email: 'Jon@gmail.com', phno:"9988776699",city:"Bengaluru",type:"Advocate", age:"52"},
//     { id: 14, user: 'Snow', email: 'Jon@gmail.com', phno:"9988776699",city:"Bengaluru",type:"Advocate", age:"52"},
//     { id: 15, user: 'Snow', email: 'Jon@gmail.com', phno:"9988776699",city:"Bengaluru",type:"Advocate", age:"52"},
  
// ];


function ServiceProviderDatatable() {

    const actionColumn =[
        {
            field:'action',
            headerName:'Action',
            width:200,
            renderCell:()=>{
                return(
                    <div className="cellActionSPD">
                        <div className="detailsButtonSPD">Details</div>
                        <div className="deleteButtonSPD">Delete</div>
                    </div>
                )
            }
        }
    ]

    return (
        <div className="datatable">
            <h2>Verified Service Providers</h2>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 9 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    )
}

export default ServiceProviderDatatable

