import React from 'react';
import Header from './Layout/Header'
import { AuthContext } from '../contexts/AuthContext';


function Home(props) {
  const { user } = React.useContext(AuthContext)

  return (
    <>
      <Header />
  <h1>Bienvenido, {user.first_name}</h1>
    </>
  );
}
export default Home;
