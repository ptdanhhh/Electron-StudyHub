import Sidebar from './Sidebar/Sidebar';

import { getAuth } from '@firebase/auth';

function Home() {
  const auth = getAuth();
  const user = auth.currentUser;

  const email = user.email;
  const uid = user.uid;
  console.log(email);
  console.log(uid);

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="basis-full">
        <div className="flex items-center justify-center h-screen bg-zinc-50 dark:bg-slate-800 text-stone-800 dark:text-neutral-200 ">
          Welcome {email}
        </div>
      </div>
    </div>
  );
}

export default Home;
