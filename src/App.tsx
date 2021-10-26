import styled from "@emotion/styled";
import { Route, Switch } from "react-router";
import { HomePage } from "./modules/homePage";
import { TaskList } from "./modules/taskList/path";

const AppContainer = styled.div`
  height: 100%;
  width: 100%
`;

const App = () => {
  return (
    <AppContainer>
      <Switch>
        <Route path='/taskList'>
          <TaskList/>
        </Route>
        <Route path='/'>
          <HomePage/>
        </Route>
      </Switch>
    </AppContainer>
  )
}

export default App