import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Formulario = () => {
  // State for meetings

  const [meeting, upgradeMeeting] = useState({
    pet: "",
    owner: "",
    date: "",
    time: "",
    symptoms: "",
  });
  const [error, updatError] = useState(false);

  const handleChange = (e) =>
    upgradeMeeting({
      ...meeting,
      [e.target.name]: e.target.value,
    });

  //Extracting values

  const { pet, owner, date, time, symptoms } = meeting;

  // When press confirm

  const submitMeeting = (e) => {
    e.preventDefault();

    //Validate
    if (
      pet.trim() === "" ||
      owner.trim() === "" ||
      date.trim === "" ||
      time.trim === "" ||
      symptoms.trim === ""
    ) {
      updatError(true);
      return;
    }
    //delete error message
    updatError(false);
    
    //id asigmnet
    meeting.id = uuidv4();
    console.log(meeting)
    //create a meeting

    //restart form
  };
  return (
    <Fragment>
      <h2>Create meeting</h2>
      {error ? (
        <p className="alerta-error"> You must fill in all the fields</p>
      ) : null}
      <form onSubmit={submitMeeting}>
        <label>Pet's name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Name of your pet"
          onChange={handleChange}
          value={pet}
        />
        <label>Owner's name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Your name"
          onChange={handleChange}
          value={owner}
        />
        <label>When will we see you?</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
          value={date}
        />
        <label>Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={handleChange}
          value={time}
        />
        <label>Symptoms</label>
        <textarea
          className="u-full-width"
          name="symptoms"
          placeholder="Tell us something about what happend"
          onChange={handleChange}
          value={symptoms}
        ></textarea>
        <button
          type="submit"
          className="u-full-width button-primary"
          onChange={handleChange}
        >
          Confirm
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
