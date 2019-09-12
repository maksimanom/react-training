import React from 'react';
import './scss/less11task7.scss'

const App7 = ()=>{
  const [m, setM] = React.useState(new Date().getMonth())
  const y = new Date().getFullYear();

  const firstDayOfCurrentMonth = new Date(y, m, 1).getDay();
  const lastDateOfCurrentMonth = new Date(y, m + 1, 0).getDate();
  
  const ROWS = 6;
  const COLS = 7;
  
  
  
  return(
    <table>
      <thead>
        <tr>
          <td> S </td>
          <td> M </td>
          <td> T </td>
          <td> W </td>
          <td> T </td>
          <td> F </td>
          <td> S </td>
        </tr>
        {

        }
      </thead>
    </table>
  )
}
export default App7
