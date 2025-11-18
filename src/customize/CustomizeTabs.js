import React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box, Container } from "@mui/material";
import DayWorkoutTable from "./DayWorkoutTable";
import './CustomizeTabs.css';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className="tab-panel"
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
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

function CustomizeTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" className="customize-container">
      <Box className="customize-box">
        <h1 className="customize-title">Your Weekly Workout Plan</h1>
        
        <Box className="tabs-wrapper">
          <Tabs 
            variant="scrollable" 
            scrollButtons="auto" 
            value={value} 
            onChange={handleChange} 
            className="custom-tabs"
            sx={{
              "& .MuiTab-root": {
                textTransform: 'capitalize',
                fontSize: '16px',
                fontWeight: 600,
                transition: 'all 0.3s ease',
              },
              "& .MuiTab-root:hover": {
                color: 'var(--primary-color)',
              },
              "& .MuiTabs-indicator": {
                background: 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))',
                height: 4,
                borderRadius: '2px',
              }
            }}
          >
            <Tab label="Sunday" {...a11yProps(0)} />
            <Tab label="Monday" {...a11yProps(1)} />
            <Tab label="Tuesday" {...a11yProps(2)} />
            <Tab label="Wednesday" {...a11yProps(3)} />
            <Tab label="Thursday" {...a11yProps(4)} />
            <Tab label="Friday" {...a11yProps(5)} />
            <Tab label="Saturday" {...a11yProps(6)} />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <DayWorkoutTable day="Sunday" />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <DayWorkoutTable day="Monday" />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <DayWorkoutTable day="Tuesday" />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <DayWorkoutTable day="Wednesday" />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <DayWorkoutTable day="Thursday" />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          <DayWorkoutTable day="Friday" />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={6}>
          <DayWorkoutTable day="Saturday" />
        </CustomTabPanel>
      </Box>
    </Container>
  );
}

export default CustomizeTabs;
