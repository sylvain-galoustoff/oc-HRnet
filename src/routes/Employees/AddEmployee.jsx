import { useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import unitedStates from "../../data/unitedStates";
import { DataSearch, useToast } from "supergalactic-uikit";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../redux/employeeSlice";

function AddEmployee() {
  const [form, setForm] = useState({
    id: null,
    firstname: "",
    lastname: "",
    birthdate: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    startdate: "",
    department: "sales",
  });
  const dispatch = useDispatch();
  const sendToast = useToast();

  const inputChange = (e, target) => {
    setForm((prevState) => ({
      ...prevState,
      [target]: e.target.value,
    }));
  };

  const stateChange = (state) => {
    setForm((prevState) => ({
      ...prevState,
      state,
    }));
  };

  const handleBirthdate = (date) => {
    setForm((prevState) => ({
      ...prevState,
      birthdate: date.toISOString(),
    }));
  };

  const handleStartDate = (date) => {
    setForm((prevState) => ({
      ...prevState,
      startdate: date.toISOString(),
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    const formCopy = { ...form };
    formCopy.id = Date.now();
    dispatch(addEmployee(formCopy));

    sendToast("success", "Message du toast via hook");
  };

  return (
    <main>
      <div id="main-header">
        <p className="h2">Create employee</p>
      </div>
      <div className="main-content" id="add-employee-content">
        <div className="card form-wrapper">
          <form id="add-form" onSubmit={submitForm}>
            <fieldset>
              <legend>Identity</legend>
              <div className="form-group-inline">
                <div className="form-group">
                  <label htmlFor="firstname">First name</label>
                  <input
                    type="text"
                    id="firstname"
                    onChange={(e) => inputChange(e, "firstname")}
                    value={form.firstname}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastname">Last name</label>
                  <input type="text" id="lastname" onChange={(e) => inputChange(e, "lastname")} value={form.lastname} />
                </div>
                <div className="form-group">
                  <label htmlFor="birthdate">Date of birth</label>
                  <DatePicker selected={form.birthdate} onChange={(date) => handleBirthdate(date)} id="birthdate" />
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend>Address</legend>
              <div className="form-group-inline">
                <div className="form-group">
                  <label htmlFor="street">Street</label>
                  <input type="text" id="street" onChange={(e) => inputChange(e, "street")} value={form.street} />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input type="text" id="city" onChange={(e) => inputChange(e, "city")} value={form.city} />
                </div>
              </div>
              <div className="form-group-inline">
                <div className="form-group addon-right">
                  <label htmlFor="state">State</label>
                  <DataSearch
                    data={unitedStates}
                    id="state"
                    addonClass="addon"
                    resultClass="state-search-result"
                    callback={stateChange}
                    value={form.state}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="zipcode">Zip code</label>
                  <input type="text" id="zipcode" onChange={(e) => inputChange(e, "zipcode")} value={form.zipcode} />
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend>Company</legend>
              <div className="form-group-inline">
                <div className="form-group">
                  <label htmlFor="startdate">Start date</label>
                  <DatePicker selected={form.startdate} onChange={(date) => handleStartDate(date)} id="startdate" />
                </div>
                <div className="form-group">
                  <label htmlFor="department">Department</label>
                  <select onChange={(e) => inputChange(e, "department")} value={form.department} id="department">
                    <option value="sales">Sales</option>
                    <option value="marketing">Marketing</option>
                    <option value="engineering">Engineering</option>
                    <option value="human">Human ressources</option>
                    <option value="legal">Legal</option>
                  </select>
                </div>
              </div>
            </fieldset>
            <div className="button-group">
              <button type="submit" className="primary">
                <IoCheckmark />
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default AddEmployee;
