// import logo from './logo.svg';
// import { Button } from 'antd';
import 'antd/dist/antd.css'
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import { adminRoutes } from './routes'
import Frame from './components/Frame/index'

function App() {
  return (
    <Frame>
      <Switch>
        {adminRoutes.map(route => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={routeProps => {
                return <route.component {...routeProps}></route.component>
              }}
            >
            </Route>
          );
        })}
        <Redirect to={adminRoutes[0].path} from='/admin'></Redirect>
        <Redirect to='/404'></Redirect>
      </Switch>
    </Frame>
  );
}

export default App;
