import React from "react";

const Popup = ({ city, handleInputChange, handleSubmit, popupActive, togglePopup }) => {
  return (
    <div
      className={`popup ${popupActive ? "active" : ""}`}
      id="popup">
      <form
        onSubmit={handleSubmit}
        className="form"
        id="form">
        <div className="form-group">
          <input
            type="text"
            value={city}
            onChange={handleInputChange}
            name="city"
            className="form-input"
            id="text-input"
            placeholder="London"
            required
          />
          <input
            type="submit"
            className="form-submit"
            id="submit-button"
            value="OK"
          />
        </div>
      </form>
      <div
        className="popup-close"
        id="close"
        onClick={togglePopup}>
        <span></span>
      </div>
    </div>
  );
};

export default Popup;
