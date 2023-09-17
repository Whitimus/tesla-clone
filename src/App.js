import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App({ children }) {
	return (
		<div className="App">
			<Header />
			{children}
		</div>
	);
}

export default App;
