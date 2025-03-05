import {getCurrentUserId, getAllMails, sendMessage} from '../services/api';
import {useEffect, useState} from 'react';

const WriteMessages = () => {

  const [messageText, setMessageText] = useState('');
  const [usersToSend, setUsersToSend] = useState([]);
  const [userId, setUserId] = useState('');
  const [mails, setMails] = useState([]);

  useEffect(() => {
    retribuyenteId();
    buscaMails();
  }, []);

  const buscaMails = async () => {
    setMails(await getAllMails());
  };

  const enviarMensaje = (genteId, mensaje) => {
    sendMessage(genteId, mensaje);
  };

  const seeChecked = (activadoCb, sendToId) => {
    if(activadoCb){ setUsersToSend.add(sendToId.id);
    }else{
      const idToDelete = usersToSend.find(sendToId.id);
      usersToSend.pop(idToDelete);
    }
  };

  //No lo uso aún (para saber quién envia el mensaje):
  const retribuyenteId = async () => {
    const uid = await getCurrentUserId();
    setUserId(uid);
  };

  return(
    <>
    <h2>Write Messages</h2>
    <div>
      <textarea name="" id="message" onChange={(e) => setMessageText(e.target.value)}></textarea>
    </div>
    <br />

    <h3>¿A quién quieres mandarle el correo?</h3>
    <p>
      {mails.map(m => (
      <label key={m.id}>
        <input type="checkbox" name={m.id} onChange={(e) => seeChecked(e.target.checked, e.target.name)}/>
        {m.mail + ' '}
      </label>
      ))
      }
    </p>
    <br />
    <button onClick={() => enviarMensaje(usersToSend, messageText)}>Send Message</button>
    </>
  );
};
export default WriteMessages;