import {getCurrentUserId, getMessagesByUserId } from '../services/api';
import {useEffect, useState} from 'react';

const SeeMessages = () => {

  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    showMessages();
  }, []);

  const showMessages = async () => {
    const uid = await getCurrentUserId();
    setUserId(uid);
    setMessages(await getMessagesByUserId(uid));
  };

  return(
    <>
    <h2>See Messages</h2>
    <p>
      {messages.map(t => (
        <li key={t.id}>
          {t.messageTxt + ' '}
        </li>
      ))
      }
    </p>
    </>
  );
};
export default SeeMessages;