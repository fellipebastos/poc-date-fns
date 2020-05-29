import React, { useState, useCallback, useEffect } from 'react';
import { format, formatDistance, parseISO, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import Card from "../../components/Card";
import CardHeader from "../../components/Card/Header";

import { Container, Content, Compare, InputData, OutputData } from './styles';

function Format() {
  const [currentTime, setCurrentTime] = useState(0);

  const initCLock = useCallback(() => setInterval(() => {
    setCurrentTime(Date.now());
  }, 1000), []);

  useEffect(() => {
    initCLock();
  }, [initCLock]);

  const [output, setOutput] = useState(null);

  const handleFormat = useCallback((e) => {
    const { value } = e.target;

    setOutput(format(currentTime, value));
  }, [currentTime]);

  return (
    <Container>
      <Card>
        <CardHeader>Funções de formatação</CardHeader>
        <Content>
          <label>
            <input type="radio" name="format" value="dd/MM/yyyy HH:mm:ss" onChange={handleFormat} />
            <strong>Formato Brasileiro (dia/mês/ano)</strong> <pre>format('dd/MM/yyyy HH:mm:ss')</pre>
          </label>
          <label>
            <input type="radio" name="format" value="yyyy/MM/dd HH:mm:ss" onChange={handleFormat} />
            <strong>Formato Americano (ano/mês/dia)</strong> <pre>format('yyyy/MM/dd HH:mm:ss')</pre>
          </label>
          <label>
            <input
              type="radio"
              name="format"
              onChange={
                () => setOutput(formatDistance(parseISO('2020-12-20'), parseISO("2020-12-25"), { locale: ptBR }))
              }
            />
            <strong>Distância entre datas</strong> <pre>formatDistance(20/12/2020, 25/12/2020)</pre>
          </label>
          <label>
            <input
              type="radio"
              name="format"
              onChange={() => setOutput(formatDistanceToNow(parseISO('2020-12-20'), { addSuffix: true, locale: ptBR }))}
            />
            <strong>Distância de/até agora</strong> <pre>formatDistance(20/12/2020)</pre>
          </label>
        </Content>
        <Compare>
          <InputData>
            <strong>Entrada:</strong> {currentTime}
          </InputData>
          <OutputData>
            <strong>Saída:</strong> {output}
          </OutputData>
        </Compare>
      </Card>
    </Container>
  );
}

export default Format;
