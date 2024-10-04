import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Box display={"flex"} flexDirection={"column"} height={"100%"}>
      <Header />

      <main>{children}</main>

      <Footer />
    </Box>
  );
};

export default Layout;
