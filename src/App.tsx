import { useState, useEffect } from 'react';
import React from 'react';
import * as C from './App.styles'
import { Item } from './types/Item'
import { Category } from './types/Category'
import { catogories } from './data/category'
import { items } from './data/items'
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea'

function App() {
  const [list, setList] = useState(items); //minha lista geral
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filteredList, setFilteredList] = useState<Item[]>([]);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]); //sempre que a lista ou o mes mudar a pagina eh renderizada dnv

  return (
    <C.Container>

      <C.Header>
        <C.HeaderText>
          Financial App
        </C.HeaderText>

      </C.Header>

      <C.Body>

        {/* area de info */}

        {/* area de insercao */}

        <TableArea list={filteredList} />

      </C.Body>
    </C.Container>

  );
}

export default App;
