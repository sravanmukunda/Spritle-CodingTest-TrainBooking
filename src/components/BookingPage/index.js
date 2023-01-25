import { useState } from "react";

import Header from "../Header";
import { v4 } from "uuid";
//import Ticket from "../Ticket"

import "./index.css";

const BookingPage = () => {
  const [ticktsno, setTicketsno] = useState(1);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [passengerList, setPassengerList] = useState([]);
  const [windowSeats, setWindowSeats] = useState([
    "A1",
    "A2",
    "A3",
    "A4",
    "A5"
  ]);
  const [middleSeats, setMiddleSeats] = useState([
    "B1",
    "B2",
    "B3",
    "B4",
    "B5"
  ]);

  const passangerHandler = (e) => {
    e.preventDefault();
    let availableSeats;
    if (age > 60) {
      if (gender === "Female") {
        availableSeats = windowSeats.filter(
          (seat) => !passengerList.some((p) => p.seat === seat)
        );
      }
      if (availableSeats.length === 0) {
        availableSeats = middleSeats.filter(
          (seat) => !passengerList.some((p) => p.seat === seat)
        );
      } else {
        availableSeats = [...windowSeats, ...middleSeats].filter(
          (seat) => !passengerList.some((p) => p.seat === seat)
        );
      }
    } else {
      availableSeats = [...windowSeats, ...middleSeats].filter(
        (seat) => !passengerList.some((p) => p.seat === seat)
      );
    }

    let allocatedseat;

    if (passengerList.length > 0) {
      allocatedseat = availableSeats.find(
        (seat) =>
          !passengerList.some((p) => p.gender === gender && p.seat === seat)
      );
    } else {
      allocatedseat = availableSeats[0];
    }

    setPassengerList([
      ...passengerList,
      {
        id: v4(),
        name: name,
        age: age,
        gender: gender,
        seat: allocatedseat
      }
    ]);
    setAge("");
    setName("");
  };

  return (
    <>
      <Header />
      <div className="bookin-container">
        <div className="head-form-container">
          <h1>Passenger Form</h1>
          <form onSubmit={passangerHandler} className="passanger-form">
            <div>
              <label className="label">NumberOfTickets : </label>
              <input
                value={ticktsno}
                onChange={(e) => setTicketsno(e.target.value)}
                placeholder="enter tickets"
                className="passanger-form-inputs"
                type="text"
              />
            </div>
            <div>
              <label className="label">Passenger Name: </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="enter passenger name"
                className="passanger-form-inputs"
                type="text"
              />
            </div>
            <div>
              <label className="label">Passenger Age : </label>
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="enter passenger age"
                className="passanger-form-inputs"
                type="text"
              />
            </div>
            <div>
              <label className="label">Passenger Gender: </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="passanger-form-inputs"
              >
                <option value="">Select</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>
            <button className="add-ticket-btn" type="submit">
              Book Tickets
            </button>
          </form>
        </div>
        <hr />
        <div className="bottom-container">
          <ul className="ul-con">
            {passengerList.map((passanger) => (
              <li className="li-container" key={passanger.id}>
                <div className="ticket-counter">
                  <div>
                    <div className="div-con">
                      <h5>Name:</h5>
                      <p className="desc">{passanger.name}</p>
                    </div>
                    <div className="div-con">
                      <h4>Age:</h4>
                      <p className="desc">{passanger.age}</p>
                    </div>
                  </div>
                  <div>
                    <div className="div-con">
                      <h4>Gender:</h4>
                      <p className="desc">{passanger.gender}</p>
                    </div>
                    <div className="div-con">
                      <h4>Seats:</h4>
                      <p className="desc">{passanger.seat}</p>
                    </div>
                  </div>
                </div>
                <hr />
                <p>please show booking Id at counter to collect ticket</p>
                <p>Bookin ID:{passanger.id}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default BookingPage;
