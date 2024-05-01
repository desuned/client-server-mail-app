import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from './pages/Profile.jsx';
import Main from './pages/Main.jsx';
import About from './pages/About.jsx';

export default function App() {
	return (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Main/> } />
			<Route path="/profile/" element={<Profile/> } />
			<Route path="/about/" element={<About/>} />
			<Route path="/mail/:id"  element={<Main/>}/>
		</Routes>
  	</BrowserRouter>
  );
}