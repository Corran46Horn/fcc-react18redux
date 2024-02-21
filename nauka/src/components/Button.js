const Button = (props) => {
  const handleButtonClick = () => {
    alert('handle button click');
  };
  return <button onClick={handleButtonClick}>klik</button>;
};
export default Button;
