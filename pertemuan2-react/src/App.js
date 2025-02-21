// import React from 'react';
import React, {useState} from 'react';
import Counter from './Counter'
import Gretting from './Gretting'
import TodoList from './Todo'
function Example(){
  const[name, SetName] = useState('');
  const[age, setAge] = useState(0);
  const[email, setEmail] = useState('');

  const handleNameChange = (e) =>{
    SetName(e.target.value);
  };

  const handleAgeChange = (e) =>{
    setAge(e.target.value);
  };

  const handleEmailChange = (e) =>{
    setEmail(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Nama" value={name} onChange={handleNameChange} />

      <input type="number" placeholder="Umur" value={age} onChange={handleAgeChange} />

      <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />

      <p>{name} berumur {age} tahun dan Emailnya adalah {email}</p>

    </div>
  );
}

function Header(){
  return(
    <header>
      <h1>Aplikasi React Saya</h1>
    </header>
  );
}

function Main(){
  return(
    <main>
      <h2>Selamat Datang di Aplikasi React Saya</h2>
      <p>Ini adalah area konten utama</p>
    </main>
  );
}

function Footer(){
  return(
    <footer>
      <p>&Copy; 2025 Aplikasi React Saya</p>
    </footer>
  );
}

function App(){
  return(
    <div>
      <Header />
      <Main />
      <Gretting name="Sony" />
      <Counter />
      <Example />
      <TodoList tasks={["Tidur"]}/>
      <Footer />
    </div>
  )
}
export default App;
