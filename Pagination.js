var Pagination = React.createClass({
  propTypes: {
    domain: React.PropTypes.object,
    getData: React.PropTypes.func,
    setAppState: React.PropTypes.func
  },

  render: function(){
    return (
      <p>
        {'Pages: '}
        <a href="#" onClick={this.handlePrevious}>Previous</a>
        <span> - </span>
        <a href="#" onClick={this.handleNext}>Next</a>
      </p>
    );
  },
  
});