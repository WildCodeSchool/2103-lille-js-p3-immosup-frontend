import styled from 'styled-components';

const STenantCriteria = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: 3%;

  border-radius: 2%;

  .filterform {
    display: flex;
    flex-direction: column;

    margin-left: 25px;
    margin-top: 25px;
  }
  .titleCriteria {
    margin-top: 25px;
    font-size: 1.6em;
    font-weight: bold;
    text-align: center;
  }
  .PhotoCriteria {
    border-radius: 50%;
    margin-top: 25px;
    margin-left: 25px;
  }
  .selectprop {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }
  .numberprop {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export default STenantCriteria;
