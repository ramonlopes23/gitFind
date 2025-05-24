import { Header } from "../../components/Header";
import background from '../../assets/background.png';
import profile from '../../assets/profile.png';
import './styles.css';


function App() {
  return (
    <div className="App">
      <Header />  
      <div className="conteudo">
        <img src={background} className="background" alt="background app" />
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username"/>
            <button>Buscar</button>
          </div>
          <div className="perfil">
            <img 
              src={profile} 
              className="profile" 
              alt="imagem do perfil"
            />
          <div>
            <h3>Ramon Lopes</h3>
            <span>@ramonlopes23</span>
            <p>Descrição</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
  );
}

export default App;
