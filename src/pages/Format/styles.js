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

    & + label {
      margin-top: 10px;
    }

    pre {
      margin-left: 10px;
      font-size: 0.9rem;
    }

    input {
      margin-right: 5px;
    }
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
