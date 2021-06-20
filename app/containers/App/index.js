/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

 import React from 'react';
 import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
 import { Helmet } from 'react-helmet-async';
 
 import { hot } from 'react-hot-loader/root';
 import Layout from 'components/common/Layout/Loadable';
 import HomePage from 'containers/HomePage/Loadable';
 import InsuranceForm from 'containers/InsuranceFormPage/InsuranceForm';
 import LoginPage from 'containers/LoginPage/LoginPage';
 import NotFoundPage from 'containers/NotFoundPage/Loadable';
 
 import '../../assets/styles/tailwind.css';
 import '../../assets/styles/main.scss';
 
 
 function App() {
   const MainLayout = (props) => {
     return <Layout {...props}>{props.children}</Layout>;
   };
   return (
     <div>
       <Helmet
         titleTemplate="%s - React.js Boilerplate"
         defaultTitle="React.js Boilerplate"
       >
         <meta name="description" content="A React.js Boilerplate application" />
       </Helmet>
 
       <MainLayout>
         <Switch>
           <Route exact path="/" component={HomePage} />
           <Route path="/InsuranceForm" component={InsuranceForm} />
           <Route path="/Login" component={LoginPage} />
           <Route path="" component={NotFoundPage} />
         </Switch>
       </MainLayout>
     </div>
   );
 }
 export default hot(App);
 