import React, { useState } from "react";

import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { Button, Stack } from "@mui/material";

import CustomizeTabs from "./CustomizeTabs";

function CustomizeButton() {
  const [visible, setVisible] = useState(true);

  const removeElement = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className="customize-button">
      <Container>
        <Router>
          <ul>
            <li>
              <Link to="/regiment/customize">
                {visible && (
                  <Stack direction="row" spacing={2}>
                    <Button onClick={removeElement} variant="outlined">
                      Customize
                    </Button>
                  </Stack>
                )}
              </Link>
            </li>
          </ul>
          <Switch>
            <Route path="/regiment/customize" component={CustomizeTabs} />
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default CustomizeButton;
