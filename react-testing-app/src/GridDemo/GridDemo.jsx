import { AgGridReact } from "ag-grid-react";
import { useState } from "react";

function GridDemo() {
  const [columnDefs, setColumnDefs] = useState([
    { field: "label" },
    { field: "status" },
  ]);

  const [rowData, setRowData] = useState([
    { label: "pot the plants", status: "pending" },
    { label: "renew car insurance", status: "completed" },
    { label: "go for shopping", status: "pending" },
    { label: "buy grocery", status: "completed" },
  ]);

  return (
    <>
      <div
        className="ag-theme-quartz" // applying the Data Grid theme
        style={{ height: 500 }} // the Data Grid will fill the size of the parent container
      >
        <AgGridReact
          defaultColDef={{ flex: 1 }}
          columnDefs={columnDefs}
          rowData={rowData}
        />
      </div>
    </>
  );
}

export default GridDemo;
