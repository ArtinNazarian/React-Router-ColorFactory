import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./NewColorForm.css";

const NewColorForm = (addColor) => {
  const [newColor, setNewColor] = useState({ name: "", hex: "#ffffff" });
  const history = useHistory();

  const handleChage = (e) => {
    e.persist();
    setNewColor((c) => ({ ...c, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.prevneDefault();
    addColor({ [newColor.name]: newColor.hex });
    history.push("/colors");
  };

  const { hex, name } = newColor;
  return (
    <div className="NewColor">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Color</label>
          <input
            name="name"
            id="name"
            placeholder="New Color"
            value={name}
            onChange={handleChage}
          />
        </div>
        <div>
          <label htmlFor="hex">Color value</label>
          <input type="color" name="hex" id="hex" value={hex}></input>
        </div>

        <button>Add Color</button>
      </form>
    </div>
  );
};

export default NewColorForm;
