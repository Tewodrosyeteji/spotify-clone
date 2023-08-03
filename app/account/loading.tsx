"use client";

import Box from "@/components/Box";
import { BounceLoader } from "react-spinners";

const loading = () => {
  return (
    <Box className="flex items-center justify-center h-full">
      <BounceLoader size={40} color="#22c55e" />
    </Box>
  );
};

export default loading;
