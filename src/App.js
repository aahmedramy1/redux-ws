import { useSelector, useDispatch} from 'react-redux'
import { deposit, withdraw } from './redux/slice/bank';

const App = () => {
    const { balance } = useSelector(state => state.bank );

    const dispatch = useDispatch();

    const handleDeposit = () => {
        dispatch(deposit(10))
    }

    const handleWithdraw = () => {
        dispatch(withdraw(10))
    }

  return (
      <div >
          <button onClick={handleDeposit}>Deposit $10</button>
          <p>
              Balance: { balance }
          </p>
          <button onClick={handleWithdraw}>Withdraw $10</button>
      </div>
  )
}

export default App;