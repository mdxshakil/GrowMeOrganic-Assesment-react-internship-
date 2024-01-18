import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { IPosts } from "../interfaces";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { PostDataColumns } from "../constants";
import ErrorElement from "./ErrorElement";

const DataTable = () => {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [error, setError] = useState<string>("");

  //fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const result = await res.json();
        setPosts(result);
        setIsLoading(false);
      } catch (error) {
        setError("An error occured while fetching posts!");
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorElement message={error} />;
  }

  return (
    <Box
      sx={{
        height: "90vh",
        width: "100vw",
        p: 3,
      }}
    >
      <DataGrid
        rows={posts}
        columns={PostDataColumns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default DataTable;
