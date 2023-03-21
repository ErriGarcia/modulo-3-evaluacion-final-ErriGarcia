const FilterHouse = ({handleSelectHouse, houseFilter}) => {
    const handleInput = (ev) => {
        handleSelectHouse(ev.target.value)
    }

    return (
        <fieldset>
            <label htmlFor="house">
                Selecciona la casa:
            </label>
            <select 
            name="house" 
            id="house"
            onChange={handleInput}
            value={houseFilter}>
                <option value="Elige la casa" disabled>Elige la casa</option>
                <option value="gryffindor">Gryffindor</option>
                <option value="hufflepuff">Hufflepuff</option>
                <option value="ravenclaw">Ravenclaw</option>
                <option value="slytherin">Slytherin</option>
            </select>
        </fieldset>
    )
}

export default FilterHouse