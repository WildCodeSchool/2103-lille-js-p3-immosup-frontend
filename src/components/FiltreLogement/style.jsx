import styled from 'styled-components';

const SFiltreLogement = styled.div`
  background-color: #ffffff;

  .h2 {
    margin: 5px 10px;
  }
  .h3 {
    display: block;
    margin-bottom: 3em;
  }
  .blocCriteres {
    display: flow-root;
    box-sizing: border-box;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  }
  .CriteresBox {
    display: flex;
    justify-content: space-around;
    margin-top: 5vh;
  }
  .PhotoCriteres {
    width: 200px;
    clip-path: ellipse(50% 50%);
  }
  .PhotoStyle {
    margin: 0 auto;
    width: 200px;
  }
  .CriteresButton {
    float: right;
    margin-top: 5vh;
    margin-right: 10vw;
    margin-bottom: 5vh;
  }
  .FiltreRange {
    display: flex;
    flex-direction: column;
    margin: 50px 70px;
  }
  .default {
    background-color: #109fe6;
    width: 150px;
    height: 40px;
    border-radius: 10px;
  }
  .NombreColoc {
    width: 200px;
    height: 70px;
    padding: 0;
    margin-bottom: 20px;
  }
  .AnneeColoc {
    width: 200px;
    height: 70px;
    padding: 0;
    margin-bottom: 30px;
  }
  .AgeColoc {
    width: 200px;
    height: 70px;
    padding: 0;
    margin-bottom: 10px;
  }
`;

export default SFiltreLogement;
