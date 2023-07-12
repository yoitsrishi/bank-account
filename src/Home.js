import React from 'react';

function Home({ isActive, dispatch, balance, loan }) {
  return (
    <>
      <h1>Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: 'active', payload: '500' });
          }}
          disabled={isActive}
        >
          Open account
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: 'deposit', payload: '150' });
          }}
          disabled={!isActive}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: 'withdrawl', payload: '100' });
          }}
          disabled={!isActive}
        >
          Withdraw 100
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: 'loan', payload: '5000' });
          }}
          disabled={!isActive}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: 'pay' });
          }}
          disabled={!isActive}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: 'close' });
          }}
          disabled={!isActive}
        >
          Close account
        </button>
      </p>
    </>
  );
}

export default Home;
