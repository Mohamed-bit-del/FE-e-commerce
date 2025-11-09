import { BrowserRouter } from 'react-router-dom';

import RoutesApp from './routes/Routes';

function App() {
  return (
    <div className='w-full max-w-[3500px] m-auto font-roboto font-normal'>
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
