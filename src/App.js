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
import Login from './container/Login'
import PrivetROuting from './routing/PrivetROuting'
import PublicRouting from './routing/PublicRouting'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <PublicRouting exact path='/' component={Home} />
        <PublicRouting exact path="/about" component={About} />
        <PublicRouting exact path="/testimonial" component={Testimonial} />
        <PrivetROuting exact path="/product" component={Product} />
        <PublicRouting exact path="/blog" component={Blog} />
        <PublicRouting exact path="/contact" component={Contact} />
        <PublicRouting exact restrict={true} path="/login" component={Login} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
