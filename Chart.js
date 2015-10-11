var d3Chart = require('./d3Chart');

var Chart = React.createClass({
  propTypes: {
    data: React.PropTypes.array,
    domain: React.PropTypes.object
  },

  //we hook into React's lifecycle methods componentDidMount, componentDidUpdate, 
  //componentWillUnmount, which fit well with our D3 chart's create, update, 
  //destroy functions.
  componentDidMount: function(){
    var el = this.getDOMNode();
    d3Chart.create(el, {
      width: '100%',
      height: '300px'
    }, this.getChartState());
  },

  componentDidUpdate: function(){
    //selects element and adds the object returned from getChartState
    var el = this.getDOMNode();
    d3Chart.update(el, this.getChartState());
  },

  getChartState: function(){
    return {
      data: this.props.data,
      domain: this.props.domain
    };
  },

  componentWillUnmount: function(){
    var el = this.getDOMNode();
    d3Chart.destroy(el);
  },

  render: function(){
    return (
      <div className="Chart"></div>
    );
  }
});