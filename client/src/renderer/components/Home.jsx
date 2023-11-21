import Sidebar from './Sidebar/Sidebar';

function Home() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="basis-full">
        <div className="flex items-center justify-center h-screen bg-zinc-50 dark:bg-slate-800 text-stone-800 dark:text-neutral-200 "></div>
      </div>
    </div>
  );
}

export default Home;
