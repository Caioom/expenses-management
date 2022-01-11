import Expenses from './components/Expenses/Expenses'

function App() {
  const expenses = [
    {
      title: 'Car Insurance',
      amount: 298.78,
      date: new Date(2021, 2, 28)
    },
    {
      title: 'Car Fix',
      amount: 88.78,
      date: new Date(2021, 2, 28)
    },
    {
      title: 'Car Wheels',
      amount: 328.78,
      date: new Date(2021, 2, 28)
    },
    {
      title: 'Coffee',
      amount: 38.78,
      date: new Date(2021, 2, 20)
    }
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
