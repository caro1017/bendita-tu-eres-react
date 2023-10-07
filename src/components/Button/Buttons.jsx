// eslint-disable-next-line react/prop-types
export const Buttons = ({ text, onClick, icon, dataTarget }) => {
  const buttonStyle = {
    backgroundColor: "#e8aeb1",
    fontWeight: 450,
  };

  const iconStyle = {
    color: "#fff",
  };

  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button
      data-target={dataTarget}
      className="btn waves-effect waves-light modal-trigge"
      type="submit"
      name="action"
      style={buttonStyle}
      onClick={handleClick}
    >
      {text}
      <i className="material-icons" style={iconStyle}>
        {icon}
      </i>
    </button>
  );
};
