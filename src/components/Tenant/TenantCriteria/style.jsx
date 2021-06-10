import styled from 'styled-components';

const STenantCriteria = styled.div`
  background-color: #ffffff;
  width: 1100px;
  margin: 0 auto;

  .titleCriteria {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    line-height: 70px;
    margin-left: 6vw;
    margin-top: 5vh;
  }
  .titleTown {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 29px;
  }
  .titlePets {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 29px;
  }
  .titleCoTenant {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 29px;
  }
  .titleNumberCoTenant {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
  }
  .titleYarsCoTenant {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
  }
  .titleAgeCoTenant {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
  }

  .blocCriteria {
    display: flow-root;
    box-sizing: border-box;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  }
  .CriteriaBox {
    display: flex;
    justify-content: space-around;
    margin-top: 5vh;
  }
  .PhotoCriteria {
    width: 150px;
    clip-path: ellipse(50% 50%);
  }
  .PhotoStyle {
    margin: 0 auto;
    width: 200px;
  }
  .CriteriaButton {
    margin-top: 27vh;
    margin-left: 5vw;
  }

  .RangeButton {
    display: flex;
    justify-content: space-around;
    margin-bottom: 3vh;
    margin-right: 4vw;
  }
  .FiltreRange {
    display: flex;
    flex-direction: column;
    margin-top: 8vh;
    margin-left: 5vw;
    box-shadow: 2px 2px 2px 2px #dcdcdc;
  }
  .default {
    background-color: #109fe6;
    width: 150px;
    height: 40px;
    border-radius: 10px;
  }
  .NumberCoTenant {
    width: 35vw;
    height: 60px;
    padding: 0;
    margin-bottom: 20px;
    padding-left: 30px;
    padding-right: 30px;
  }
  .YearsCoTenant {
    width: 35vw;
    height: 60px;
    padding: 0;
    margin-bottom: 30px;
    padding-left: 30px;
    padding-right: 30px;
  }
  .AgeCoTenant {
    width: 35vw;
    height: 60px;
    padding: 0;
    margin-bottom: 10px;
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export default STenantCriteria;
