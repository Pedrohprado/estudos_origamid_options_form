/* eslint-disable react/prop-types */

const Radio = ({ pergunta, options, value, handleChange, id, active }) => {
  if (active === false) return null;
  return (
    <fieldset>
      <legend>{pergunta}</legend>
      {options.map((option, i) => (
        <label key={i}>
          <input
            id={id}
            type='radio'
            checked={value === option}
            value={option}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
