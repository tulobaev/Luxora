import React from "react";
import { Box, Stack, Pagination } from "@mui/material";
import { useProduct } from "../../context/ProductContext";

const PaginationProduct = () => {
  const { count, setPage } = useProduct();
  const handlerPage = (prev, next) => setPage(next);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", paddingBlock: "30px" }}
    >
      <Stack spacing={2}>
        <Pagination
          sx={{
            "& .MuiPaginationItem-page.Mui-selected": {
              backgroundColor: "rgba(199, 9, 196, 0.2)",
            },
            "& .MuiPaginationItem-page:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "blue",
            },
          }}
          onChange={handlerPage}
          count={count}
          variant="outlined"
          color="secondary"
        />
      </Stack>
    </Box>
  );
};

export default PaginationProduct;
