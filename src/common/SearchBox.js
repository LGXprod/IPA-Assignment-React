import React from "react";
import SearchIcon from "images/icons/search.svg";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const SearchBox = () => {
  return (
    <div className="content-width search-container">
      <div className="centered-row center-ends">
        <div className="search-box-width">
          <div className="search-box-container centered-row">
            <div className="search-box">
              <input
                className="form-control"
                type="text"
                placeholder="SEARCH ARTICLES"
              />
            </div>

            <img
              style={{ marginLeft: "10px", marginRight: "10px" }}
              alt="Search icon"
              src={SearchIcon}
            />
          </div>
        </div>

        <div className="sort-dropdown">
          <label style={{ color: "#163f67" }} className="sortby-label">
            Sort By
          </label>

          <div className="sort-dropdown">
            <DropdownButton id="dropdown-basic-button" title="LOCATION">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </div>

          <div className="sort-dropdown">
            <DropdownButton id="dropdown-basic-button" title="SUBJECT">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </div>

          <div className="sort-dropdown">
            <DropdownButton id="dropdown-basic-button" title="ISSUE MONTH">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
