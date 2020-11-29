import React from 'react';
import { IResult } from '../../interfaces';
import CountUp from 'react-countup';

interface ResultType {
  result: IResult;
}

const Result: React.FC<ResultType> = ({ result }) => {
  const percentage = Number(result.percentage.replace('%', ''));
  const message = result.result;

  return (
    <section className="container result">
      <h1 className="result-percentage">
        <CountUp end={percentage} />%
      </h1>

      <p className="result-message">{message}</p>
    </section>
  );
};

export default Result;
