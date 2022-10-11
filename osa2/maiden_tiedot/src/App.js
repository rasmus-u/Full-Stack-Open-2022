import axios from 'axios';
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';

const App = () => {

  const [country, setCountry] = useState([])
  const [search, setSearch] = useState('')
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountry(response.data)
      })
  }, [])
  return (
    <SearchBar search={search} setSearch={setSearch} setFiltered={setFiltered} country={country} />

    // TODO: Add search results
  )




}


export default App;
