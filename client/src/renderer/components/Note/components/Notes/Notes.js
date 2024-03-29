import { useEffect, useState } from 'react';
import NoteItem from './NoteItem';
import { db, auth } from 'fbconfig';
import { onSnapshot, query, orderBy, collection } from 'firebase/firestore';
import { notesData } from '../../publicData';
const Notes = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const noteRef = query(
      collection(db, 'users', auth.currentUser.uid, 'notes'),
      orderBy('createdAt', 'desc')
    );
    setLoading(true);
    setError(false);
    setRefresh(false);
    const unsubscribe = onSnapshot(
      noteRef,
      { includeMetadataChanges: true },
      (snap) => {
        if (!snap.metadata.hasPendingWrites) {
          if (!snap.metadata.fromCache) {
            const res = [];
            snap.forEach((item) => {
              res.push({ id: item.id, ...item.data() });
            });
            setError(false);
            setData(res);
            setLoading(false);
          } else {
            setLoading(false);
            setError(true);
          }
        }
      }
    );
    return () => {
      unsubscribe();
      setData(null);
    };
  }, [refresh]);

  const showData = () => {
    let showdata = [];
    data.map((item) => {
      showdata.push(
        <NoteItem
          key={item.id}
          id={item.id}
          title={item.title}
          text={item.text}
          color={item.colorInput}
          date={item.updatedAt}
        />
      );
    });
    const res = showdata.map((item) => {
      return item;
    });
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4  ">
        {res}
      </div>
    );
  };

  const noData = () => {
    return (
      <div className="flex flex-col items-center md:flex-row border-4 border-dashed border-gray-300 p-8  rounded-md">
        <img
          src={notesData.notes.noDataMessage.image.url}
          className="w-1/2 h-fit md:h-80"
        />
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 mt-8 md:m-0">
          <h3 className="text-2xl">{notesData.notes.noDataMessage.title}</h3>
          <span className="text-slate-600">
            {notesData.notes.noDataMessage.text}
          </span>
        </div>
      </div>
    );
  };

  const loadingNotes = () => {
    const loads = [];
    for (let i = 0; i < 15; i++) {
      loads.push(
        <div
          key={i}
          className="flex bg-slate-200 p-4 h-40 md:h-52 rounded-md animate-pulse"
        ></div>
      );
    }
    const res = loads.map((item) => {
      return item;
    });
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4  ">
        {res}
      </div>
    );
  };
  const errorContent = () => {
    return (
      <div className="flex flex-col items-center md:flex-row border-4 border-dashed border-gray-300 p-8  rounded-md">
        <img
          src={notesData.notes.errorMessage.image.url}
          className="w-1/2 h-fit md:h-80"
        />
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 mt-8 md:m-0">
          <h3 className="text-2xl">{notesData.notes.errorMessage.title}</h3>
          <span className="text-slate-600">
            {notesData.notes.errorMessage.text}
            <span
              className="text-blue-400 cursor-pointer"
              onClick={() => setRefresh(true)}
            >
              {notesData.notes.errorMessage.textButton}
            </span>
          </span>
        </div>
      </div>
    );
  };
  const showContent = () => {
    let content = null;
    if (data) {
      content = showData();
      if (data.length === 0) {
        content = noData();
      }
    }
    if (loading) {
      content = loadingNotes();
    }
    if (error) {
      content = errorContent();
    }
    return content;
  };

  return <div>{showContent()}</div>;
};

export default Notes;
