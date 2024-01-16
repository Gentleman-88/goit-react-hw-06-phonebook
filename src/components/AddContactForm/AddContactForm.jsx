import css from './AddProfileForm.module.css'

export const AddContactForm = ({handleAddContact}) => {
  const handleFormSubmit = event => {
    event.preventDefault();
    const name = event.currentTarget.name.value;
    const number = event.currentTarget.number.value;

    const formData = {
      name,
      number,
    };
    handleAddContact(formData);
    event.currentTarget.reset();
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label className={css.formLabel}>
        <span className={css.formLabelText}>Name</span>
        <input className={css.formInput} type="text" name="name" required />
      </label>
      <label className={css.formLabel}>
        <span className={css.formLabelText}>Number</span>
        <input className={css.formInput} type="tel" name="number" required />
      </label>
      <button className={css.formButton} type="submit">Add contact</button>
    </form>
  );
}