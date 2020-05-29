import styled from "styled-components";

import CardBody from "../../components/Card/Body";
import CardFooter from "../../components/Card/Footer";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;
`;

export const Content = styled(CardBody)`
  label {
    display: flex;
    align-items: center;

    pre {
      margin-left: 10px;
      font-size: 0.9rem;
    }

    input {
      margin-right: 5px;
    }
  }

  > label {
    & + label {
      margin-top: 10px;
    }
  }

  hr {
    margin: 1rem 0;
  }
`;

export const DefaultContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    label {
      margin: 0;
    }
`;

export const Compare = styled(CardFooter)`
  display: flex;
  margin-top: auto;
`;

export const InputData = styled.div`
  flex-grow: 1;
`;

export const OutputData = styled.div`
  flex-grow: 1;
`;
