/** IMPORTING STYLES */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../../../styles/nezado-custom-styles.css';
import 'react-datepicker/dist/react-datepicker.min.css';

/** OTHER IMPORTING */
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

/** IMPORTING COMPONENTS */
import React from 'react';
import store from '../store';
import NavBar from './NavBar';
import ManageApplicationsLayout from './layouts/ManageApplicationsLayout';
import ManageApplicantEmailsLayout from './layouts/ManageApplicantEmailsLayout';
import ManageHomepageLayout from './layouts/ManageHomepageLayout';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Route>
            <NavBar />
            <div className="mt-5" />
            <Route
              exact
              path="/manage-all-applications"
              component={ManageApplicationsLayout}
            />
            <Route
              exact
              path="/manage-all-applicants-e-mails"
              component={ManageApplicantEmailsLayout}
            />
            <Route
              exact
              path="/manage-homepage"
              component={ManageHomepageLayout}
            />
          </Route>
        </Router>
      </Provider>
    </div>

  );
}

export default App;
