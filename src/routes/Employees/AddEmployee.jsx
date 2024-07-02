import { IoCheckmark } from "react-icons/io5";
import unitedStates from "../../data/unitedStates";
import { DataSearch } from "sg-ui-kit";

function AddEmployee() {
  return (
    <main>
      <div id="main-header">
        <p className="h2">Create employee</p>
      </div>
      <div className="main-content" id="add-employee-content">
        <div className="card form-wrapper">
          <form id="add-form">
            <fieldset>
              <legend>Identity</legend>
              <div className="form-group-inline">
                <div className="form-group">
                  <label htmlFor="firstname">First name</label>
                  <input type="text" id="firstname" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastname">Last name</label>
                  <input type="text" id="lastname" />
                </div>
                <div className="form-group">
                  <label htmlFor="birthdate">Date of birth</label>
                  <input type="text" id="birthdate" />
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend>Address</legend>
              <div className="form-group-inline">
                <div className="form-group">
                  <label htmlFor="street">Street</label>
                  <input type="text" id="street" />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input type="text" id="city" />
                </div>
              </div>
              <div className="form-group-inline">
                <div className="form-group addon-right">
                  <label htmlFor="state">State</label>
                  <DataSearch data={unitedStates} id="state" addonClass="addon" resultClass="state-search-result" />
                </div>
                <div className="form-group">
                  <label htmlFor="zipcode">Zip code</label>
                  <input type="text" id="zipcode" />
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend>Company</legend>
              <div className="form-group-inline">
                <div className="form-group">
                  <label htmlFor="startdate">Start date</label>
                  <input type="text" id="startdate" />
                </div>
                <div className="form-group">
                  <label htmlFor="department">Department</label>
                  <input type="text" id="department" />
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
