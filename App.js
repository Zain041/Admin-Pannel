
import { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import DraftCards from './views/Draftcards/draftCards';
import Dashboard from './views/Dashboard/dashboard';
import ExpiredCards from './views/Expiredcards/expiredCards';
import ActiveCards from './views/Activecards/activeCards';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sideBarOpen: false,
      activeItem: "dashboard"
    }

  }
  handleSidebar = () => {
    this.setState({
      sideBarOpen: !this.state.sideBarOpen
    })
  }

  render() {


    return (
      <>
        <Router>
          {/* sidebar */}
          <div className="d-flex h-100 master-wrapper ">
            <div className={`sidebar   ${this.state.sideBarOpen ? " d-block  " : "d-none"} d-lg-block d-md-block`}>
              <div onClick={this.handleSidebar} className="cross-button  d-lg-none d-md-none d-block">
                <i class="fas fa-times text-white fa-lg"></i>
              </div>
              <h3 className="logo text-center ">Logo</h3>
              <ul className="pl-0 ml-0">
                <Link onClick={() => {
                  this.setState({
                    activeItem: "dashboard"
                  })
                }} className={`links w-100 ${ this.state.activeItem == 'dashboard' ? 'active':''}`} to="/">  <li className="py-3 px-4 items "> <i class="fas fa-chart-bar px-3  "></i>Dashboard</li></Link>
                <Link   onClick={() => {
                  this.setState({
                    activeItem: "activeCards"
                  })
                }} className={`links w-100 ${ this.state.activeItem == 'activeCards' ? 'active':''}`} to="/active-cards"> <li className="py-3 px-4 items"> <i class="fas fa-check-circle px-3  "></i>Active Cards</li></Link>
              <Link   onClick={() => {
                this.setState({
                  activeItem: "draftCards"
                })
              }} className={`links w-100 ${ this.state.activeItem == 'draftCards' ? 'active':''}`} to="/draft-cards"> <li className="py-3 px-4  items"> <i class="fas fa-wrench px-3  "></i>Draft Cards</li></Link>
            <Link   onClick={() => {
              this.setState({
                activeItem: "expiredCards"
              })
            }} className={`links w-100 ${ this.state.activeItem == 'expiredCards' ? 'active':''}`} to="/expired-cards"> <li className="py-3 px-4 items "> <i class="fas fa-history px-3  "></i>Expired Cards</li></Link>
          <li className="py-3 px-4 "> <i class="fas fa-building px-3  "></i>Compony Profile</li>
          <li className="py-3 px-4"> <i class="fas fa-plus-circle px-3  "></i>Create Cards</li>
          <li style={{ marginTop: '90px' }} className="py-3 px-4"> <i class="fas fa-cog px-3  "></i>Settings</li>
          <li className="py-3 px-4"> <i class="fas fa-life-ring px-3  "></i>Help</li>

              </ul>

      </div>
            {/* toggle button */ }
    <div onClick={this.handleSidebar} className="hamburger d-block d-md-none d-lg-none">
      <i class="fas fa-lg text-secondary fa-bars  "></i>



    </div>

    {/* sidebar end */ }


    {/* toggle button end */ }
    <Switch>

      <div className="wrapper content-body mb-5 position-relative">
        <Route exact path="/" component={Dashboard} />
        <Route path="/draft-cards" component={DraftCards} />
        <Route path="/expired-cards" component={ExpiredCards} />
        <Route path="/active-cards" component={ActiveCards} />
        {/*<Route  path="/plans" component={Plans}/>
      <Route  path="/privacy" component={Privacy}/>
      <Route  path="/blogs" component={Blogs}/>
      <Route  path="/blog-post" component={BlogPosts}/>
      <Route  path="/dashboard" component={Dashboard}/> */}

        {/* footer */}
      </div>

    </Switch>
          </div >

        </Router >



      </>
    );
  }
}

export default App;
