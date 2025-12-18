// import React, {useEffect,useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
// import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';


function TodoItem({tasks, deleteTask, toggleCompleted}) {
//   const rows = [];
//   tasks.map(task => {
//    rows.push({ id: task.id, item:  task.text, cellClassName: 'cell-item-stl' });
// });

// const [rows, setRows] = useState(
//   // { id: 1, col1: 'Value 1', col2: 'Value 2' },
//   // { id: 2, col1: 'Value 3', col2: 'Value 4' },
//   tasks.map(task => 
//        ({ id: task.id, item:  task.item, completed:task.completed, cellClassName: 'cell-item-stl' })
//   )
// );

  // useEffect(()=>{
  //   const rows = tasks;
  // },[tasks])


  const columns = [
    { field: 'item', headerName: 'Things To Do', minWidth: 330, flex: 1, headerClassName: 'title-header' },
    {
      field: 'actions',
      headerName: 'Actions',
      renderCell: (params) => (
        <div>
        <button onClick={() => toggleCompleted(params.row.id)}>
          Done
        </button>
        <button onClick={() => deleteTask(params.row.id)}>
          Delete
        </button>
      </div>
      ),
      minWidth: 330, flex: 1
    }
  ];

  const getRowClassName = (params) => {
    console.log('Row clicked:', params.row);
    return params.row.completed === 'true' ? {color:'red'} : {color:'green'};
  };

  // const handleRowClick = (params, event, details) => {
  //   console.log('Row clicked:', params.row);
  //   toggleCompleted(params.row.id);
  // }


    return (
        <div className="todo-item">
            {/* <ul> */}
            {/* <input type="checkbox" checked={task.completed} onChange={() => toggleCompleted(task.id)} />
            <p>{task.text}</p>
            <button onClick={() => deleteTask(task.id)}>X</button> */}
            {/* <Checkbox color="success" checked={task.completed} onChange={() => toggleCompleted(task.id)}/>
            <p>{task.text}</p>
            <Button variant="contained" onClick={() => deleteTask(task.id)}>X</Button> */}
            {/* </ul> */}

            <div>
            {/* style={{ width: '100%' }} */}
      <DataGrid rows={tasks} columns={columns}
       pageSize={5}
       rowsPerPageOptions={[5]}
      sx={{
        boxShadow: 2,
        border: 50,
        borderColor: 'primary.light',
        'MuiDataGrid-cell': {
          'text-decoration': 'line-through'
        }
      }}
      getRowClassName={getRowClassName}/>
      {/* checkboxSelection */}
    </div>


        </div>
        );

}

export default TodoItem;