import "./Booking.css";
import { FaCalendarAlt, FaClock, FaSpa, FaHandSparkles } from "react-icons/fa";

function Booking() {
  return (
    <div className="booking">
      <h1>დაჯავშნე სერვისი</h1>
      <form>
        <label>
          <FaHandSparkles /> სახელი:
          <input type="text" placeholder="თქვენი სახელი" />
        </label>

        <label>
          <FaSpa /> აირჩიეთ სერვისი:
          <select>
            <option>თმის შეჭრა</option>
            <option>მანიკიური</option>
            <option>პედიკიური</option>
            <option>მასაჟი</option>
          </select>
        </label>

        <label>
          <FaCalendarAlt /> თარიღი:
          <input type="date" />
        </label>

        <label>
          <FaClock /> დრო:
          <input type="time" />
        </label>

        <button type="submit">დაჯავშნა</button>
      </form>
    </div>
  );
}

export default Booking;
