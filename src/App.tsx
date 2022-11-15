import { useState, useEffect } from 'react';
import React from 'react';
import * as C from './App.styles'
import { Item } from './types/Item'
import { items } from './data/items'
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea'

function App() {
  const [list, setList] = useState(items); //minha lista geral
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());


  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]); //sempre que a lista ou o mes mudar a pagina eh renderizada dnv

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>

        {/* area para inserir dados */}

        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
}

export default App;
