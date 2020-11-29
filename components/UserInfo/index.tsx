import React, { Dispatch, SetStateAction, useRef } from 'react';
import { IResult } from '../../interfaces';

interface IUserInfo {
  callback: Dispatch<SetStateAction<IResult>>;
}

const UserInfo: React.FC<IUserInfo> = ({ callback }) => {
  const FirstNameRef = useRef<HTMLInputElement>(null);
  const SecondNameRef = useRef<HTMLInputElement>(null);

  const sendResult = (firstName: string, secondName: string) => {
    const URL = `https://love-calculator.p.rapidapi.com/getPercentage?fname=${firstName}&sname=${secondName}`;
    const fetchConfig = {
      headers: {
        'x-rapidapi-key': '9058b30492msh842fde467889de9p106a5ejsncede12fd6ea1',
        'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
      },
    };

    fetch(URL, fetchConfig)
      .then((res) => res.json())
      .then((data) => callback({ ...data, show: true }))
      .catch(console.log);
  };

  return (
    <section className="container user-info">
      <div className="input-container">
        <input
          type="text"
          className="input first-name"
          ref={FirstNameRef}
          placeholder="Your name"
        />
        <strong>and</strong>
        <input
          type="text"
          className="input second-name"
          ref={SecondNameRef}
          placeholder="Partner name"
        />
      </div>

      <button
        className="submit-button"
        onClick={() => {
          const firstName = FirstNameRef.current.value;
          const secondName = SecondNameRef.current.value;

          if (!firstName || !secondName)
            return alert('please, fill all the fields!');

          return sendResult(firstName, secondName);
        }}
      >
        CALCULATE
      </button>
    </section>
  );
};

export default UserInfo;
