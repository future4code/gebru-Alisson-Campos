import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from './img/foto.jpg';
import empresa from './img/empresa.jfif';
import defeitos from './img/defeitos.jfif';
import link from './img/link.png';
import insta from './img/insta.png'
import Email from './components/CardPequeno/CardPequeno';
import email from './img/email.jpg'
import {Endereco} from './components/CardPequeno/CardPequeno'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem = {foto} 
          nome="Alisson F Campos" 
          descricao="Sou um vendedor que ama tecnologia e resolveu mudar de carreira aos 37 anos,amo estar com minha família
          e amigos,adoro pescar e curtir um bom papo junto a um bom vinho, disconfio que só vivemos uma vez então tento ser 
          uma pessoa melhor a cada dia nesse presente de Deus que chamamos de vida."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        
      </div>

          <div>
          <Email
         imagem={email}
         email= "alissonferreiracampos@hotmail.com"
         />
          </div>
          
          <div>
          <Endereco
         imagem={email}
         endereco="Endereço : Rua dos Alfeneiros, nº4 em Little Whinging, Surrey"
         />
          </div>
      
       
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={empresa}
          nome="Carrossel Supermercados" 
          descricao="Trabalhei por 15 anos na empresa passando por vários cargos até o setor de TI,
          foi onde comecei o meu amor pela tecnologia." 
        />
        
        
        <CardGrande 
          imagem={defeitos} 
          nome="Defeitos" 
          descricao="Achar que não tem defeitos rsrs, brincadeiras a parte o meu maior defeito é 
          desconfiar de tudo, creio eu por ser mineiro rsrs."
          
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem={link}
          texto="linkedin" 
        />        

        <ImagemButton 
          imagem={insta}
          texto="Instagram" 
        />        
      </div>
    </div>
  );
}

export default App;
