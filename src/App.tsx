import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import RootPage from './components/RootPage/RootPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Layout />}>
          <Route index element={<RootPage />} path="*" />

          {/* <Route path="search/:searchField" element={<RootPage />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
