import { Link, useNavigate } from 'react-router-dom';
import useDarkMode from 'renderer/hooks/useDarkMode';
import { CgDarkMode } from 'react-icons/cg';
import { getAuth, signOut } from 'firebase/auth';
type Props = {};

function Sidebar({}: Props) {
  const navigate = useNavigate();
  const [__, handleThemeSwitch] = useDarkMode();

  const logout = (e: any) => {
    e.preventDefault();
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate('/login');
        console.log('signed out success');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {/* <div className="flex flex-row"> */}
      {/* start sidebar */}
      <div className="basis-auto">
        <aside className="top-0 left-0 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0">
          <div className="flex flex-col justify-between h-full px-3 py-4 overflow-y-auto bg-zinc-100 dark:bg-slate-900">
            <div>
              <Link to="/" className="flex items-center pl-2.5 mb-5 ">
                <svg
                  className="h-9 w-9 text-stone-800 dark:text-neutral-200"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {' '}
                  <path stroke="none" d="M0 0h24v24H0z" />{' '}
                  <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />{' '}
                  <line x1="13" y1="8" x2="15" y2="8" />{' '}
                  <line x1="13" y1="12" x2="15" y2="12" />
                </svg>
                <span className="px-1 self-center text-xl font-semibold whitespace-nowrap text-stone-800 dark:text-neutral-200">
                  StudyHub
                </span>
              </Link>

              <ul className="space-y-2 font-medium">
                <li>
                  <Link
                    to="/Timer"
                    className="flex items-center p-2 text-slate-500  hover:text-slate-900 dark:text-slate-400 dark:hover:text-neutral-200 dark:hover:bg-slate-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">Timer</span>
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to="#"
                    className="flex items-center p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-neutral-200 dark:hover:bg-slate-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                      />
                    </svg>

                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Flashcards
                    </span>
                  </Link>
                </li> */}
                <li>
                  <Link
                    to="/note"
                    className="flex items-center p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-neutral-200 dark:hover:bg-slate-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>

                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Note Taking
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/todo"
                    className="flex items-center p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-neutral-200 dark:hover:bg-slate-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                      />
                    </svg>

                    <span className="flex-1 ml-3 whitespace-nowrap">
                      To Do List
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/chatai"
                    className="flex items-center p-2 text-slate-500  hover:text-slate-900 dark:text-slate-400 dark:hover:text-neutral-200 dark:hover:bg-slate-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      />
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      AI Chat
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 font-medium">
                <li>
                  <a
                    className="flex items-center p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-neutral-200 dark:hover:bg-slate-800"
                    onClick={handleThemeSwitch}
                    href="#"
                  >
                    <CgDarkMode size={25} />
                    <span className="flex-1 ml-3 whitespace-nowrap">Theme</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-neutral-200 dark:hover:bg-slate-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                      />
                    </svg>

                    <span
                      className="flex-1 ml-3 whitespace-nowrap"
                      onClick={logout}
                    >
                      Log out
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
      {/* end sidebar */}
      {/* Start content */}
      {/* <div className="basis-full  bg-white dark:bg-gray-900"></div> */}
      {/* end content */}
      {/* </div> */}
    </>
  );
}

export default Sidebar;
