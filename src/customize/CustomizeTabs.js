import React from "react";

import PropTypes from "prop-types";

import { Tabs, Tab, Typography, Box } from "@mui/material";

import CustomizeTableSunday from "./CustomizeTableSunday";
import CustomizeTableMonday from "./CustomizeTableMonday";
import CustomizeTableTuesday from "./CustomizeTableTuesday";
import CustomizeTableWednesday from "./CustomizeTableWednesday";
import CustomizeTableThursday from "./CustomizeTableThursday";
import CustomizeTableFriday from "./CustomizeTableFriday";
import CustomizeTableSaturday from "./CustomizeTableSaturday";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 7 }}>
          <Typography>{children}</Typography>
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
    <Box className="tabs" sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} centered>
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
        <div className="sunday-workout">
          <CustomizeTableSunday />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="monday-workout">
          <CustomizeTableMonday />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="tuesday-workout">
          <CustomizeTableTuesday />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div className="wednesday-workout">
          <CustomizeTableWednesday />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <div className="thursday-workout">
          <CustomizeTableThursday />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <div className="friday-workout">
          <CustomizeTableFriday />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <div className="saturday-workout">
          <CustomizeTableSaturday />
        </div>
      </CustomTabPanel>
    </Box>
  );
}

export default CustomizeTabs;
