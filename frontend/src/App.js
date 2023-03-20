import './App.css';
// import { Button } from '@chakra-ui/react'
import {Route} from 'react-router-dom'
import homepage from './components/HomePage'
import chatpage from './components/ChatPage'
import searchPage from './components/SearchPage'
function App() {
  return (
    <div className="App">
      <Route path='/' component={homepage} exact/>
      <Route path='/chats' component={chatpage}/>
      {/* <Route path='/search' component={searchPage}/> */}
    </div>
  );
}
  
export default App;
