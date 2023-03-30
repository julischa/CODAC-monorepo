import Button from './components/buttons/Button';
import MainContainer from './components/containers/MainContainer';

function App() {
  return (
    <MainContainer>
     <Button bg='bg-dark' text='text-dark'>Add Student</Button>
      <Button>Other Action</Button> 
      </MainContainer>);
}

export default App;
