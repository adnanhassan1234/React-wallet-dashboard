import React from "react";

const TabsContent = (props) => {
  return (
    <>
      <div className="lineBottom d-flex justify-content-between">
        <div className="full">
          <h4 className="mb-0">{props.title}</h4>
          <p>control colors, fonts, and look</p>
        </div>
        <div className="reset d-flex mt-2">
          <h4>Reset all</h4>
          &nbsp;  <i className="fa fa-ellipsis-v mt-1" aria-hidden="true"></i>
        </div>
      </div>

      {/* Main display theme */}
      <div className="main_content lineBottom my-4 mb-4">
        <div className="d-flex justify-content-between mb-4">
          <h4>Main display theme</h4>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
          </div>
        </div>
      </div>

      {/* Search bar */}
      <div className="main_content lineBottom my-4 mb-4">
        <div className="d-flex justify-content-between mb-4">
          <h4>Search bar</h4>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
          </div>
        </div>
      </div>

      {/* Subtitles + Text font */}
      <div className="main_content lineBottom my-4 mb-4">
        <div className="d-flex justify-content-between mb-4">
          <h4>Subtitles + Text font</h4>
          <div className="collapses">
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      {/* Main titles font size */}
      <div className="main_content lineBottom my-4 mb-4">
        <div className="d-flex justify-content-between mb-4">
          <h4>Main titles font size</h4>
          <div className="collapses">
            <input type="range" className="form-range" id="customRange1" />
          </div>
        </div>
      </div>

      {/* General font size */}
      <div className="main_content lineBottom my-4 mb-4">
        <div className="d-flex justify-content-between mb-4">
          <h4>General font size</h4>
          <div className="range">
            <input type="range" id="vol" name="vol" min="40" max="100" />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="main_content lineBottom my-4 mb-4">
        <div className="d-flex justify-content-between mb-4">
          <h4>Sidebar</h4>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
            <label className="form-check-label mt-1" htmlFor="flexRadioDefault1">
              Sidebar with text
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
            <label className="form-check-label mt-1" htmlFor="flexRadioDefault2">
              Sidebar with icons
            </label>
          </div>
        </div>
      </div>

         {/* Awosme bar */}
         <div className="main_content lineBottom my-4 mb-4">
        <div className="d-flex justify-content-between mb-4">
          <h4>Awasome bar</h4>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"  />
          </div>
        </div>
      </div>
    </>
  );
};

export default TabsContent;
