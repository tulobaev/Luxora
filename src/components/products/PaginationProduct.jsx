import React from "react";
import { Box, Stack, Pagination } from "@mui/material";
import { useProduct } from "../../context/ProductContext";

const PaginationProduct = () => {
  const { count, setPage } = useProduct();
  const handlerPage = (prev, next) => setPage(next);

  const isDarkTheme = document.body.style.background === "black";

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", paddingBlock: "30px" }}
    >
      <Stack spacing={2}>
        <Pagination
          sx={{
            "& .MuiPaginationItem-root": {
              color: isDarkTheme ? "white" : "inherit",
            },
            "& .MuiPaginationItem-page.Mui-selected": {
              backgroundColor: "rgba(199, 9, 196, 0.2)",
              color: isDarkTheme ? "white" : "inherit",
            },
            "& .MuiPaginationItem-page:hover": {
              backgroundColor: isDarkTheme
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(0, 0, 0, 0.1)",
              color: isDarkTheme ? "white" : "blue",
            },
            "& .MuiPaginationItem-ellipsis": {
              color: isDarkTheme ? "white" : "inherit",
            },
            "& .MuiPaginationItem-icon": {
              color: isDarkTheme ? "white" : "inherit",
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
