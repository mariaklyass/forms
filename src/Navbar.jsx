import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SimpleForm from "./SimpleForm";
import ThreeStepsForm from "./ThreeStepsForm";
import { Container } from "@mui/material";
import Contact from "./ContactForm";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Container
      sx={{
        width: {
          xs: 300,
          sm: 350,
          md: 400,
          lg: 450,
          xl: 500,
        },
      }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Container>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          m: 1,
          borderRadius: 1,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          // sx={{ justifyContent: "center" }}
        >
          <Tab label="Super Simple Form" {...a11yProps(0)} />
          <Tab label="Contact Form" {...a11yProps(1)} />
          <Tab label="Three Steps Form" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <SimpleForm />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Contact />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ThreeStepsForm />
      </CustomTabPanel>
    </Box>
  );
}
