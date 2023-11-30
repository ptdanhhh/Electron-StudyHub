import Sidebar from '../Sidebar/Sidebar';
import Home from './pages/Home';
import { ModalProvider } from './context/modalContext';

const Notes = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="basis-full">
        <div className="flex items-center justify-center h-screen bg-zinc-50 dark:bg-slate-800">
          <ModalProvider>
            <Home />
          </ModalProvider>
        </div>
      </div>
    </div>
  );
};

export default Notes;
