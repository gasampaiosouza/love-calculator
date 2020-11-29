import { useState } from 'react';
import Result from '../components/Result';
import UserInfo from '../components/UserInfo';
import { IResult } from '../interfaces';

const index = () => {
  const [result, setResult] = useState<IResult>();

  return (
    <section className="container">
      <h1 className="app-title">
        <strong>Love</strong> Calculator!
      </h1>

      {result?.show ? (
        <>
          <Result result={result} />
          <button
            onClick={() =>
              setResult(() => ({
                ...result,
                show: false,
              }))
            }
          >
            Try again!
          </button>
        </>
      ) : (
        <>
          <p className="empty-message">
            Will you match with the love of your life?
          </p>
          <UserInfo callback={setResult} />
        </>
      )}
    </section>
  );
};

export default index;
