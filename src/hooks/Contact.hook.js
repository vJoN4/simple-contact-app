import { useEffect, useState } from 'react';
import { getContacts } from "../environments/api";

export const useFetchContacts = () => {
  const [data, setData] = useState({ data: [] });
  const [loading, setLoading] = useState(false);

  const fetchContacts = async () => {
    setLoading(true);
    let aData = await getContacts();
    let docs = [];
    aData.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    
    if (docs.length) {
      setData(docs);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchContacts();
  }, [])

  const update = () => fetchContacts();

  return [data, loading, update];
};
