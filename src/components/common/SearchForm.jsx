import React from 'react';


class SearchForm extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <form action="/search">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Search" name="q"
                 aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <div className="input-group-append">
            <button className="btn btn-primary" id="basic-addon2">
              <i className="fa fa-search" aria-hidden="true"/>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchForm;