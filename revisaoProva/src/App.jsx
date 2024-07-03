
import './App.css';
function App() {
  
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => { 
    setCep(event.target.value);
  
  };

  const handleSearch = async () => { 
    try { 
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
    if (data.erro) { setError('CEP não encontrado.');
    setAddress(null);
  } else { 
    setAddress(data);  
    setError(null); 
  } 
}
  catch (error) { 
    setError('Erro ao buscar o CEP.'); 
    setAddress(null); 
  } 
};

  return ( 
  
    <div className='App'> 
    <h1>Busca de endereço por CEP</h1> 
    <div className='search'> 

    <input 
    type='text' 
    value={cep} 
    onChange={handleInputChange} 
    placeholder='Digite o CEP' 

    />

    <button onClick={handleSearch}>Buscar</button> 
    </div> {error && <p className='error'>{error}</p>} 
    {address && ( 
    <div className='address'> 

    <p><strong>Rua:</strong> {address.logradouro}</p> 
    <p><strong>Bairro:</strong> {address.bairro}</p> 
    <p><strong>Cidade:</strong> {address.localidade}</p> 
    <p><strong>Estado:</strong> {address.uf}</p> 

    </div> 
    )} 

    </div>

    ); 

    } 
    
  export default App;