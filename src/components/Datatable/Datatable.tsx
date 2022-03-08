import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';
import { TablePagination } from '@material-ui/core';





const columns: GridColDef[] = [  
    { field: 'id', headerName: 'ID', flex: 1 }, 
    { field: 'first_name', headerName: 'First Name', flex: 1 }, 
    { field: 'last_name', headerName: 'Last Name', flex: 1 },  
    // { field: 'height', headerName: 'Height', flex: 1 },
    // { field: 'height', headerName: 'Height', flex: 1 },        
    { field: 'position', headerName: 'Position', flex: 1},
    // { field: 'abbreviation', headerName: 'Team ABB', flex: 1 },
    // { field: 'team_city', headerName: 'Team City', flex: 1 },
    // { field: 'team_conference', headerName: 'Team Con', flex: 1 },
    // { field: 'team_div', headerName: 'Team Division', flex: 1 },
    // { field: 'team_full_name', headerName: 'Team Name', flex: 1 },
    // { field: 'team_id', headerName: 'Team ID', flex: 1 },
    // { field: 'team_name', headerName: 'Team id/name', flex: 1 },
    // { field: 'weight', headerName: 'Weight', flex: 1 }, 
];

  

export const Datatable = () => {

    const [tableData, setTableData] = useState([]);

    
    
    const getInfo = () => {
        var id = (document.querySelector('input') as HTMLInputElement).value
        fetch(`https://free-nba.p.rapidapi.com/players.data?search=${id}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-nba.p.rapidapi.com",
                "x-rapidapi-key": "df247d45ecmsh239d124812c7dc1p171cccjsn6fc4fc9e487c"
            }
        })
        .then((response) => response.json())
        .then((response) => setTableData(response.data))
    }

    // const getInfo = () => {
    //     let allResults = [];
    //     var id = (document.querySelector('input') as HTMLInputElement).value
    //     fetch(`https://free-nba.p.rapidapi.com/players.data?search=${id}`, {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": "free-nba.p.rapidapi.com",
    //             "x-rapidapi-key": "df247d45ecmsh239d124812c7dc1p171cccjsn6fc4fc9e487c"
    //         }
    //     })
    //     .then((response) => response.json())
    //     .then(function(json){
    //         let names = json;
    //         setTableData(names.results);
    //         let next = names.next;

    //         while ( next !== null){
    //             fetch(next)
    //             .then ( response => response.json() )
    //             .then( function (nextData){
    //                 setTableData(nextData.results);
    //                 next = nextData.next;
    //             })
    //         }
    //     })
    // }

    return (
        <div id='main' style={{ height: 600, width: '100%' }}>
            <h2>Player Information</h2>
            <form>
                <label htmlFor='name'>Player Name</label>   
                <input id='id' type='text' name='name' placeholder='Player Name'/>
                <Button onClick={ getInfo }>Get Stats</Button>            
            </form>                         
            <DataGrid                
                rows={tableData}
                columns={ columns }                
                components={{ Pagination: TablePagination }}
                componentsProps={{
                    pagination: {
                        count: 1,
                        page: 0,
                        onPageChange: () => {},
                        rowsPerPage: 25,
                    }
                }}             
            />           
        </div>
    )
}




