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
    padding: 30px;
  }

  .label-number {
    text-align: center;
  }

  .filterform {
    display: flex;
    flex-direction: column;
  }

  .titleCriteria {
    margin-top: 25px;
    margin-bottom: 20px;
    font-size: 60px;
    font-weight: bold;
  }

  .PhotoCriteria {
    width: 8vw;
    border-radius: 50%;
    margin-left: 50%;
    transform: translateX(-50%);
  }

  .selectprop {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    margin-left: 7%;
  }

  .select {
    display: flex;
    margin-top: 10px;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #797979;
    font-size: 20px;
    width: 280px;
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

  .buttonprop {
    width: 120px;
    align-self: center;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #109fe6;
    border-radius: 10px;
  }

  .submit-container {
    width: 100%;
    padding-top: 30px;

    button {
      margin: 0 auto;
    }
  }

  .inputs {
    padding: 20px 0;
  }

  .input-number {
    font-size: 20px;
    width: 60px;
    text-align: center;
    margin: 0 5px;

    h3 {
      font-size: 1.1em;
    }
  }
`;

export default STenantCriteria;
