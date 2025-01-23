import { createRoot } from 'react-dom/client';

import { ProfileForm } from './components/ProfileForm';
import './styles.css';


const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<ProfileForm />);
