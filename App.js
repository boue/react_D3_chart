var Chart = require('./Chart');

var sampleData = [
  {id: '5fbmzmtc', x: 7, y: 41, z: 6},
  {id: 's4f7phwm', x: 11, y: 45, z:9},
  {id: 's4f7pdsa', x: 9, y: 23, z:1},
  {id: 'as6h2njs', x: 36, y: 21, z:12}
];

var App = React.createClass({
  getInitialState: function(){
    return {
      data: sampleData,
      domain: {x: [0, 30], y: [0, 100]}
    };
  },

  render: function(){
    return (
      <div className="App">
        <Chart
          data={this.state.data}
          domain={this.state.domain} />
      </div>
    );
  }
});

React.renderComponent(App(), document.body);