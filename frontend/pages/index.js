import JoinUs from './joinus'
import User from '../components/Queries/User';
import Home from './home';

const Index = () => (
  <User>
    {({data}) => {
     
      return (
      <>
      {data.currentUser ? <Home /> : <JoinUs />}
      </>
    )}}
  </User>
);

export default Index;
//
