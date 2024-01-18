import { GridColDef } from "@mui/x-data-grid";

export const AppRoutes = {
  home: "/",
  data: "/data",
};

export const ToastStyles = {
  background: "#0E1527",
  color: "#fff",
  border: "1px solid #f50057",
};

export const PostDataColumns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1, minWidth: 100, maxWidth: 100 },
  {
    field: "userId",
    headerName: "User ID",
    flex: 1,
    minWidth: 100,
    maxWidth: 100,
  },
  {
    field: "title",
    headerName: "Title",
    editable: true,
    flex: 1,
    minWidth: 300,
    maxWidth: 500,
  },
  {
    field: "body",
    headerName: "Body",
    editable: true,
    flex: 1,
    minWidth: 300,
    maxWidth: 500,
  },
];
