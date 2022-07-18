// this is one of the first files to execute
// ...but only once, to render the root (<App/>)

import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);