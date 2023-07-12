import { useReducer } from 'react';
import Home from './Home';
import './style.css';
import Modal from './Modal';
import Main from './Main';
const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
  status: 'inactive',
};

function reducer(state, action) {
  switch (action.type) {
    case 'inactive':
      return {
        ...state,
        status: 'inactive',
      };
    case 'active':
      return {
        ...state,
        isActive: true,
        status: 'active',
        balance: Number(action.payload),
      };
    case 'deposit':
      return {
        ...state,
        balance: state.balance + Number(action.payload),
      };
    case 'withdrawl':
      return {
        ...state,
        balance:
          state.balance >= Number(action.payload)
            ? state.balance - Number(action.payload)
            : 0,
      };
    case 'loan':
      return {
        ...state,
        balance: state.balance + Number(action.payload),
        loan: state.loan + Number(action.payload),
      };
    case 'pay':
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
      };
    case 'close':
      if (state.balance > 0) {
        return {
          ...state,
          status: 'modal',
        };
      }
      return {
        ...state,
        status: 'inactive',
      };
    case 'reactive':
      return {
        ...state,
        status: 'active',
      };

    default:
      throw new Error('Action Unknown');
  }
}
function App() {
  const [{ balance, loan, isActive, status }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <>
      <Main>
        {status === 'inactive' && (
          <Home
            isActive={false}
            dispatch={dispatch}
            balance={balance}
            loan={loan}
          />
        )}
        {status === 'active' && (
          <Home
            isActive={isActive}
            dispatch={dispatch}
            balance={balance}
            loan={loan}
          />
        )}
        {status === 'modal' && <Modal dispatch={dispatch} />}
      </Main>
    </>
  );
}

export default App;
