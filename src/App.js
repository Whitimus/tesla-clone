import './App.css';
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
