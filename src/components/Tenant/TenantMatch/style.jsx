import styled from 'styled-components';

const boxShadow = '4px 4px 10px rgba(0, 0, 0, 0.25)';

const STenantMatch = styled.div`
  font-family: 'Roboto', serif;
  width: 1100px;
  margin: auto;

  h2 {
    font-weight: bold;
    font-size: 60px;
    padding-top: 50px;
  }

  .container {
    box-shadow: ${boxShadow};
    border-radius: 20px;
    margin-top: 50px;
    margin-bottom: 100px;

    .toto {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 50px;

      .profile {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 200px;
        height: 250px;
        margin: 20px;
        box-shadow: ${boxShadow};
        border-radius: 20px;
        &:hover {
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
        }

        .avatar {
          background-color: grey;
          border-radius: 100%;
          width: 150px;
          height: 150px;
          margin-top: 20px;
        }
        h3 {
          padding-top: 15px;
          font-size: 20px;
          font-weight: bold;
        }
        p {
          padding-top: 5px;
        }
      }
    }
  }
`;

export default STenantMatch;
