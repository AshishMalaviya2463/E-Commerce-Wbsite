import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./container/Home";
import { Route } from 'react-router-dom'
import { Switch } from "react-router-dom";
import About from "./container/About";
import Testimonial from './container/Testimonial'
import Product from './container/Product'
import Blog from './container/Blog'
import Contact from './container/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/testimonial" component={Testimonial} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
