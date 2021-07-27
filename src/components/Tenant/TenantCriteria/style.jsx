import styled from 'styled-components';

const STenantCriteria = styled.div`
  font-family: 'Roboto', serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 3%;
  border-radius: 2%;

  .pagestyle {
    box-shadow: 4px 4px 10px rgb(0 0 0 / 25%);
    border-radius: 20px;
  }

  .filterform {
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    margin-top: 25px;
  }

  .titleCriteria {
    margin-top: 25px;
    margin-bottom: 20px;
    font-size: 1.6em;
    font-weight: bold;
  }

  .PhotoCriteria {
    width: 8vw;
    border-radius: 50%;
    margin-top: 25px;
    margin-left: 40%;
  }

  .selectprop {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    margin-left: 7%;
  }

  .SelectCity {
    margin-bottom: 10px;
    width: 150px;
  }

  .SelectPets {
    margin-bottom: 10px;
    width: 150px;
  }

  .SelectGender,
  .SelectPets,
  .SelectCity {
    display: flex;
    margin-top: 10px;
  }

  .numberprop {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .townstyle,
  .petsstyle,
  .genderStyle,
  .cotenantstyle,
  .budgetStyle,
  .cotenantStyle {
    font-size: 1em;
    font-weight: bold;
  }

  #nbCotenantsMin,
  #nbCotenantsMax,
  #ageCotenantsMin,
  #ageCotenantsMax {
    width: 40px;
  }

  #budgetMin,
  #budgetMax {
    width: 50px;
  }

  .buttonprop {
    width: 120px;
    align-self: center;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #109fe6;
    border-radius: 10px;
  }
`;

export default STenantCriteria;
