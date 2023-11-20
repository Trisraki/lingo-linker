import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import ContentDetailsPage from './pages/ContentDetails/ContentDetailsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/content/:id" component={ContentDetailsPage} />
      </Switch>
    </Router>
  );
}

export default App;

