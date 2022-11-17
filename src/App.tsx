import { useState, useEffect } from 'react';
import React from 'react';
import * as C from './App.styles'
import { Item } from './types/Item'
import { items } from './data/items'
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea'
import { InfoArea } from './components/InfoArea'

function App() {
  const [list, setList] = useState(items); //minha lista geral
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  console.log(filteredList)

  useEffect(() => {
    setFilteredList(filterListByMonth(items, currentMonth));
  }, [items, currentMonth]); //sempre que a lista ou o mes mudar a pagina eh renderizada dnv

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

        <InfoArea currentMonth={currentMonth} />

        <TableArea list={items} />
      </C.Body>
    </C.Container>
  );
}

export default App;
