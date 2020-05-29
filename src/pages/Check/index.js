import React, { useState, useCallback } from 'react';
import { isBefore, parseISO, isAfter, format, isEqual, isFuture, isToday } from 'date-fns';

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

function Check() {
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
        <CardHeader>Funções de comparação direta</CardHeader>
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
                () => setOutput(isBefore(parseISO(dates[0]), parseISO(dates[1])))
              }
            />
            <strong>"É antes"</strong> <pre>isBefore({dates[0] || 'date'}, {dates[1] || 'dateToCompare'})</pre>
          </label>

          <label>
            <input type="checkbox" name="format" onChange={
                () => setOutput(isAfter(parseISO(dates[0]), parseISO(dates[1])))
              }
            />
            <strong>"É depois"</strong> <pre>isAfter({dates[0] || 'date'}, {dates[1] || 'dateToCompare'})</pre>
          </label>

          <label>
            <input type="checkbox" name="format" onChange={
                () => setOutput(isEqual(parseISO(dates[0]), parseISO(dates[1])))
              }
            />
            <strong>"É igual"</strong> <pre>isEqual({dates[0] || 'dateLeft'}, {dates[1] || 'dateRight'})</pre>
          </label>

          <label>
            <input type="checkbox" name="format" onChange={
                () => setOutput(isFuture(parseISO(dates[0])))
              }
            />
            <strong>"É futuro"</strong> <pre>isFuture({dates[0] || 'date'})</pre>
          </label>

          <label>
            <input type="checkbox" name="format" onChange={
                () => setOutput(isToday(parseISO(dates[0])))
              }
            />
            <strong>"É hoje"</strong> <pre>isToday({dates[0] || 'date'})</pre>
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

export default Check;
