import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from './pages/Profile.jsx';
import Main from './pages/Main.jsx';
import Calender from './pages/Calender.jsx';
import SavedFiles from './pages/SavedFiles.jsx';
import About from './pages/About.jsx';

function App() {
	return (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Main/> } />
			<Route path="/profile/" element={<Profile/> } />
			<Route path="/calender/" element={<Calender/>} />
			<Route path="/savedfiles/" element={<SavedFiles/>} />
			<Route path="/about/" element={<About/>} />
			<Route path="/mail/:id"  element={<Main/>}/>
		</Routes>
  	</BrowserRouter>
  );
}

export default App;