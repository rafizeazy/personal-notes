import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = { query: '' };

    this.onQueryChangeEventHandler = this.onQueryChangeEventHandler.bind(this);
  }

  onQueryChangeEventHandler(event) {
    this.setState({ query: event.target.value }, () => {
      return this.props.searchNote(this.state);
    });
  }

  render() {
    return (
      <div className="note-search">
        <input type="text" placeholder="Search notes " value={this.state.query} onChange={this.onQueryChangeEventHandler} />
      </div>
    );
  }
}

export default Search;
