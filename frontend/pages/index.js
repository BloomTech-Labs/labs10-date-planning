import JoinUs from './joinus'
import User from '../components/Queries/User';
import Home from './home';
import Router from 'next/router'

const Index = () => (
  <User>
    {({data}) => {
     console.log(data)
      return (
      <>
      {data.currentUser ? <Home /> : <JoinUs />}
      </>
    )}}
  </User>
);

export default Index;
//
