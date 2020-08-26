import React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;

/*
class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" exact>
            <Home items={this.props.items} />
          </Route>
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.pizzas.items,
  filters: state.filters,
});

const mapDispatchToProps = {
  setPizzas, //setPizzas: (items) => dispatch(setPizzas(items))
};

export default connect(mapStateToProps, mapDispatchToProps)(App); // connect для классовых компонентов
*/
