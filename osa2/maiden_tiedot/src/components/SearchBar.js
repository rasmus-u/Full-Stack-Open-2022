
const SearchBar = ({search, setSearch, setFiltered, country}) => {
    
    const checkIfMatch = (name, query) => {
        let isMatch = false
        console.log(name)
        String(name).toLowerCase().includes(String(query).toLowerCase())
            ? isMatch = true
            : isMatch = false
        return isMatch
    }

    const changeSearch = (event) => {
        let a = []
        let inputName = event.target.value
        setSearch(inputName)
        country.forEach(one => {

            (checkIfMatch(one.name.common, inputName) || checkIfMatch(one.name.official, inputName))
                ? a = a.concat(one)
                : a = a
            })
        console.log(a)
        setFiltered(a)
    }

    return (
        <form>
            <div>
                find countries <input value={search} onChange={changeSearch} />
            </div>
        </form>
    )
}


export default SearchBar