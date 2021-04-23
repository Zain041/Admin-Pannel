
import { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import DraftCards from './views/Draftcards/draftCards';
import Dashboard from './views/Dashboard/dashboard';
import ExpiredCards from './views/Expiredcards/expiredCards';
import ActiveCards from './views/Activecards/activeCards';
import CompanyProfile from './views/companyProfile/companyProfile';
import CreateCard from './views/createCards/createCard';
import EditCard from './views/editCrds/editCard';



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
            <div className={`sidebar  ${this.state.sideBarOpen ? " d-block  " : "d-none"} d-lg-block`}>
              <div onClick={this.handleSidebar} className="cross-button  d-lg-none d-block">
                <i class="fas fa-lg fa-times text-white fa-lg"></i>
              </div>
              <h3 className="logo text-center ">Logo</h3>
              <ul className="pl-0 fw-bold ml-0 h-100 overflow-auto">
                <Link onClick={() => {
                  this.setState({
                    activeItem: "dashboard"
                  })
                }} className={`links w-100 ${this.state.activeItem == 'dashboard' ? 'active' : ''}`} to="/">  <li className="py-3 px-2 items d-flex"> {this.state.activeItem == 'dashboard' ? <img src={require('./assets/svg/bar-chart-pink.svg').default} /> : <img src={require('./assets/svg/bar-chart.svg').default} />}<span style={{fontSize:'15px'}}>Dashboard</span> </li></Link>
                <Link onClick={() => {
                  this.setState({
                    activeItem: "activeCards"
                  })
                }} className={`links w-100 ${this.state.activeItem == 'activeCards' ? 'active' : ''}`} to="/active-cards"> <li className="py-3 px-2 items"> <i class="fas fa-lg fa-check-circle px-3  "></i><span style={{fontSize:'15px'}}>Active Cards</span></li></Link>
                <Link onClick={() => {
                  this.setState({
                    activeItem: "draftCards"
                  })
                }} className={`links w-100 ${this.state.activeItem == 'draftCards' ? 'active' : ''}`} to="/draft-cards"> <li className="py-3 px-2 items"> <i class="fas fa-lg fa-wrench px-3  "></i><span style={{fontSize:'15px'}}>Draft Cards</span></li></Link>
                <Link onClick={() => {
                  this.setState({
                    activeItem: "expiredCards"
                  })
                }} className={`links w-100 ${this.state.activeItem ==  'expiredCards' ? 'active' : ''}`} to="/expired-cards"> <li className="py-3 px-2 items "> <i class="fas fa-lg fa-history px-3  "></i><span style={{fontSize:'15px'}}>Expired Cards</span></li></Link>
                <Link onClick={() => {
                  this.setState({
                    activeItem: "companyProfile"
                  })
                }} className={`links w-100 ${this.state.activeItem == 'companyProfile' ? 'active' : ''}`} to="/company-profile"> <li className="py-3 px-2 items"> <i class="fas fa-lg fa-building px-3  "></i><span style={{fontSize:'15px'}}>Compony Profile</span></li></Link>
                <Link onClick={() => {
                  this.setState({
                    activeItem: "createCard"
                  })
                }} className={`links w-100 ${this.state.activeItem == 'createCard' ? 'active' : ''}`} to="/create-cards"> <li className="py-3 px-2 items"> <i class="fas fa-lg fa-plus-circle px-3  "></i><span style={{fontSize:'15px'}}>Create Cards</span></li></Link>

                <div className="align-bottom mt-5">
                  <li style={{ marginTop: '60px' }} className="py-3 px-2 items d-flex">  <img src={require('./assets/svg/gear.svg').default} /><span style={{fontSize:'15px'}}> Settings</span></li>
                  <li className="py-3 px-2"> <i class="far fa-lg fa-life-ring px-3  "></i><span style={{fontSize:'15px'}}>Help</span></li>
                </div>
              </ul>

            </div>
            {/* toggle button */}
            <div onClick={this.handleSidebar} className="hamburger d-block d-lg-none">
              <i class="fas fa-lg fa-lg text-secondary fa-bars  "></i>
            </div>

            {/* sidebar end */}


            {/* toggle button end */}
            <Switch>
              <div className="wrapper content-body mb-5 position-relative">
                <Route exact path="/" component={Dashboard} />
                <Route path="/draft-cards" component={DraftCards} />
                <Route path="/expired-cards" component={ExpiredCards} />
                <Route path="/active-cards" component={ActiveCards} />
                <Route path="/company-profile" component={CompanyProfile} />
                <Route path="/create-cards" component={CreateCard} />
                <Route path="/edit-card" component={EditCard} />
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
