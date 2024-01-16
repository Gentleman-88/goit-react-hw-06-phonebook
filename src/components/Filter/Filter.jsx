import css from './Filter.module.css'

export const Filter = ({ filter, handleChangeFilter }) => {
    return (
        <div className={css.filterContainer}>
            <p className={css.filterTitle}>Find contacts by name</p>
            <input
                className={css.filterInput}
                value={filter}
                onChange={handleChangeFilter}
                type="text"
                name="filter"
                placeholder="Katua..."
            />
        </div>
    );
}