import React, { useEffect, useContext } from "react";
import { useObserver } from "mobx-react";
import { UserStoreContex } from "./user_store";
import {
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  Grid
} from "@material-ui/core";
import axios from "axios";
import { configure } from "mobx";

//actions
//computed
//reactions
//observable
//observer

configure({ enforceActions: "observed" });

const App = () => {
  const user_store = useContext(UserStoreContex);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        user_store.setUser(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user_store]);

  return useObserver(() => (
    <div className="App">
      <Grid container spacing={2} justify="center">
        {user_store.users &&
          user_store.users.map((el) => (
            <Grid item key={el.username}>
              <Card style={{ width: 300 }}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    {el.name}
                  </Typography>
                  <Typography variant="h5" component="h2"></Typography>
                  <Typography variant="body2" component="p">
                    phone: {el.phone}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Look!</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  ));
};

export default App;
