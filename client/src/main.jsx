import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'



const App = () => {
  return (
    <div>
      <h1>SCENA</h1>
    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
