import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://video.fbsb1-1.fna.fbcdn.net/v/t1.6435-9/123329655_3767088906647999_3038195217353416027_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHtnB_IfGzHyV1HOU4xS2gO_xSt0WHexZH_FK3RYd7FkZzXQS9r7SYswnPXyiCC41SEwpmMak-bcFNTk3-QPjVU&_nc_ohc=CAZU9AYVcFAAX-lMdEb&_nc_oc=AQnyNVVqwe-rMTGLlFWSXioJ8ntq1V_u8Hkq0r7syWAgtw_M_VezI5Ga3rSl7BZxlmYCNqKmac9gsumNxQJw2baR&_nc_ht=video.fbsb1-1.fna&oh=00_AT__wEd39PMOGOkREGwwtcaD0DoQHWqZdU1056XcdyozLg&oe=62DA45E7" 
          nome="Ricardo Ferrão" 
          descricao="Oi, eu sou o Ricardo Veronezi Ferrão. Sou o mais novo estudante da Labenu. Pertenço a turma Jemison e serei mais um Dev Full Stack formado por esta escola."
        />
          <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />

      </div>
      <div>
        <CardPequeno 
          imagem="https://upload.wikimedia.org/wikipedia/commons/5/50/TK_email_icon.svg" 
          item="E-mail:"
          informacao="rvferrao@gmail.com"
        />
      </div>

      <div>
        <CardPequeno 
          imagem="https://mpng.subpng.com/20180407/rie/kisspng-ip-address-computer-icons-encapsulated-postscript-address-5ac8637d4c2167.0521451315230821093118.jpg" 
          item="Endereço:"
          informacao="Rua das Casas, Predio com Janelas, app 999"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://video.fbsb1-1.fna.fbcdn.net/v/t1.6435-9/129850890_3585434748177408_806221412148686310_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFN8f1eL89TQ6V_K8uPV_grf-sPRnpjiMd_6w9GemOIxzLVxDooW30fVzRl2fmwBdiIoqLNxDokWZDv2_uL3tC7&_nc_ohc=Hhk1TxTicrUAX8umCpd&_nc_ht=video.fbsb1-1.fna&oh=00_AT8Paw1GemJ-JEW_1rzIdqlsd-x1jyXrLcvxFp_pJ-QcJQ&oe=62DAA6BB" 
          nome="Teatino Hamburgueria" 
          descricao="Chef Hamburgueiro desde 2015. Fazendo o melhor hamburguer caseiro de Brasília!" 
        />
        
        <CardGrande 
          imagem="https://wscom.com.br/wp-content/uploads/201311301138580000007293.jpg" 
          nome="Ministério da Educação - MEC" 
          descricao="Consultor para a Conferencia Infanto Juvenil de 2013." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
