import { ListOfTaskList } from "./listOfTaskList"
import { useState, useEffect, FC } from 'react'
import { useAppDispatch } from "../../../app/hooks/store"
import { fetchTaskList } from "../state";
import { Loader } from "../../../app/components";
import { Button, ButtonGroup, Container } from "@material-ui/core";
import { Link, Switch, Route } from "react-router-dom";
import { AppBarTaskList } from "./appBarTaskList";
import { CreateTaskList } from "./createTaskList";

export const TaskList: FC<{}> = () => {
  const dispatch = useAppDispatch();

  const [ isLoaded, setIsLoaded ] = useState(false);

  useEffect(() => {
    dispatch(fetchTaskList())
      .then(() => setIsLoaded(true));
  }, [dispatch])

  if(!isLoaded) return <Loader/>

  return (
    <Container>
      <AppBarTaskList/>
      <Switch>
        <Route path='/taskList/create'>
          <CreateTaskList/> 
        </Route>
        <Route path='/taskList'>
          <ListOfTaskList/>
        </Route>
      </Switch>
    </Container>
  )
}