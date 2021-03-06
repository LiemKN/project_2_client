import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendEmail } from './actions';

export function Form() {
  const dispatch = useDispatch();
  const [send_year, setYear] = useState();
  const [send_month, setMonth] = useState();
  const [send_day, setDay] = useState();
  const [email_address, setEmail] = useState();
  const [code_content, setCode] = useState();
  const isWaiting = useSelector(state => state.isWaiting);

  const onSend = () => {
    dispatch(sendEmail(send_year, send_month, send_day, email_address, code_content));
  }

  return (
    <div className="emailform">
      <div className="email-input">
        <p>Email</p>
        <input type="email" onChange={e => { String(setEmail(e.target.value)) }} />
      </div>
      <div className="code-input">
        <p>Code Sample</p>
        <textarea onChange={e => { String(setCode(e.target.value)) }} />
      </div>
      <div className="send-date">
        <p>Send on</p>
        <select className="month-selection select" onChange={e => { parseInt(setMonth(e.target.value)) }} >
          <option>-Month-</option>
          <option value={1}>January</option>
          <option value={2}>February</option>
          <option value={3}>March</option>
          <option value={4}>April</option>
          <option value={5}>May</option>
          <option value={6}>June</option>
          <option value={7}>July</option>
          <option value={8}>August</option>
          <option value={9}>September</option>
          <option value={10}>October</option>
          <option value={11}>November</option>
          <option value={12}>December</option>
        </select>
        <select className="day-selection select" onChange={e => { parseInt(setDay(e.target.value)) }} >
          <option>-Day-</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
          <option value={12}>12</option>
          <option value={13}>13</option>
          <option value={14}>14</option>
          <option value={15}>15</option>
          <option value={16}>16</option>
          <option value={17}>17</option>
          <option value={18}>18</option>
          <option value={19}>19</option>
          <option value={20}>20</option>
          <option value={21}>21</option>
          <option value={22}>22</option>
          <option value={23}>23</option>
          <option value={24}>24</option>
          <option value={25}>25</option>
          <option value={26}>26</option>
          <option value={27}>27</option>
          <option value={28}>28</option>
          <option value={29}>29</option>
          <option value={30}>30</option>
          <option value={31}>31</option>
        </select>
        <select className="year-selection select" onChange={e => { parseInt(setYear(e.target.value)) }} >
          <option>-Year-</option>
          <option value={2020}>2020</option>
          <option value={2021}>2021</option>
          <option value={2022}>2022</option>
          <option value={2023}>2023</option>
          <option value={2024}>2024</option>
          <option value={2025}>2025</option>
          <option value={2026}>2026</option>
          <option value={2027}>2027</option>
          <option value={2028}>2028</option>
          <option value={2029}>2029</option>
          <option value={2030}>2030</option>
        </select>
        {isWaiting && <div className="loader" />}
        <button className="send-button" onClick={onSend}>Send Email!</button>
      </div>
    </div>
  );
}