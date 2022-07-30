import React, { useState } from "react";
import { Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { createUseStyles } from "react-jss";

import { menu } from "./Items";

/**
 * Add your all dropdown categories here with unique key
 */
const dropdownCategories = [
  {
    key: 0,
    content: "Week",
    value: "week",
  },
  {
    key: 1,
    content: "Month",
    value: "month",
  },
  {
    key: 2,
    content: "6 Month",
    value: "sixmonth",
  },
  {
    key: 3,
    content: "Year",
    value: "year",
  },
  {
    key: 4,
    content: "5 Year",
    value: "fiveyear",
  },
  {
    key: 5,
    content: "ALL",
    value: "all",
  },
];

/**
 * Stylesheet using react-jss
 */
const useStyles = createUseStyles(() => ({
  container: {
    position: "absolute",
  marginTop:"20px",
    right: 10,
    "& button": {
      color: "black",
      border: "1.5px solid #EDEEF1",
      width: 150,
      borderRadius: "15px",
    },
  },
}));

export const DropdownSelector = ({ fetchCustomData }) => {
  const classes = useStyles();

  // This state is used to track selected value from dropdown
  const [activeTimeFrame, setActiveTimeFrame] = useState(2);

  const handleDataFetching = (key, value) => {
    setActiveTimeFrame(key);
    /**
     * This function invokes when user selectes an item from dropdown,
     * you can call a function to fetch data with key or value
     * @here we called @function fetchCustomData(value)
     */
    fetchCustomData(value);
  };

  return (
    <div className={classes.container}>
      <Dropdown
        overlay={menu(
          handleDataFetching,
          dropdownCategories,
          dropdownCategories[activeTimeFrame]
        )}
      >
        <Button>
          {dropdownCategories[activeTimeFrame].content} <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
};

export default DropdownSelector