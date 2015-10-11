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

  handlePrevious: function(e){
    e.preventDefault();
    this.shiftData(-20);
  },

  handleNext: function(e){
    e.preventDefault();
    this.shiftData(+20);
  },

  shiftData: function(step){
    //_.cloneDeep to deep-clone the javascript object
    var newDomain = _.cloneDeep(this.props.domain);
    //Loop through a collection and return a deeply-nested
    //property from each item
    newDomain.x = _.map(newDomain.x, function(x){
      return x + step;
    });
    var newData = this.props.getData(newDomain);
    this.props.setAppState({
      data: newData,
      domain: newDomain
    });
  }
});