import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('Хрен');
  const [surname, setSurname] = useState('Сгоры');
  const [age, setAge] = useState(777);
  const [isBanned, setIsBanned] = useState(false); // Добавили стейт для бана

  const handleBan = () => {
    setIsBanned(true);
  };

  const handleUnban = () => {
    setIsBanned(false);
  };

  return (
    <div>
      <p>{name} {surname} {age}y.o.</p>

      {isBanned ? (
        <button onClick={handleUnban}>Разбанить</button>
      ) : (
        <button onClick={handleBan}>Забанить</button>
      )}
    </div>
  );
}

export default App;