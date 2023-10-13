//Button definition
export default function CategoryButton({clickHandler, buttonText}) {
    return (
      <button onClick={clickHandler}>{buttonText}</button>
    );
  }
