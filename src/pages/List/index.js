import React, { useState, useCallback } from 'react';
import { parseISO, format, max, min, eachDayOfInterval } from 'date-fns';

import Card from "../../components/Card";
import CardHeader from "../../components/Card/Header";

import { Container, Content, Compare, DefaultContent, OutputData } from './styles';

const defaultDates = [
  '2019-05-10',
  '2019-09-30',
  format(new Date(), 'yyyy-MM-dd'),
  '2020-10-25',
  '2020-12-20',
];

function Format() {
  const [output, setOutput] = useState(null);
  const [dates, setDates] = useState([]);

  const toggleDate = useCallback((e) => {
    const { value } = e.target;

    const updateDates = dates;
    const dateIndex = updateDates.indexOf(value);

    if (dateIndex === -1) {
        updateDates.push(value);
    } else {
        updateDates.splice(dateIndex, 1);
    }

    setDates([...updateDates]);
  }, [dates]);

  return (
    <Container>
      <Card>
        <CardHeader>Funções de comparação em lista</CardHeader>
        <Content>
          <DefaultContent>
            {defaultDates.map(date => (
              <label key={date}>
                <input type="checkbox" value={date} defaultChecked={dates.includes(date)} onChange={toggleDate} />
                {format(parseISO(date), 'dd/MM/yyyy')}
              </label>
            ))}
          </DefaultContent>

          <hr/>

          <label>
            <input type="checkbox" name="format" onChange={
                () => dates.length === 2 && setOutput(format(max(dates.map(date => parseISO(date))), 'dd/MM/yyyy'))
              }
            />
            <strong>"Maior"</strong> <pre>max([{dates.join(', ')|| 'dates'}])</pre>
          </label>
          <label>
            <input type="checkbox" name="format" onChange={
                () => dates.length === 2 && setOutput(format(min(dates.map(date => parseISO(date))), 'dd/MM/yyyy'))
              }
            />
            <strong>"Menor"</strong> <pre>min([{dates.join(', ')|| 'dates'}])</pre>
          </label>
          <label>
            <input type="checkbox" name="format" onChange={
                () => dates.length === 2 && setOutput(eachDayOfInterval({
                  start: min(dates.map(date => parseISO(date))),
                  end: max(dates.map(date => parseISO(date))),
                }).map(date => format(date, 'dd/MM/yyyy')).join(', '))
              }
            />
            <strong>"Dias em um intervalo"</strong> <pre>eachDayOfInterval([{dates.join(', ')|| 'dates'}])</pre>
          </label>
        </Content>
        <Compare>
          <OutputData>
            <strong>Saída:</strong> {output !== null && output.toString()}
          </OutputData>
        </Compare>
      </Card>
    </Container>
  );
}

export default Format;
