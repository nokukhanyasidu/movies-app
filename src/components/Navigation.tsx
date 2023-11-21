import 'bootstrap'

const Navigation = () => {
  return (
    <div>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand " href="/">Awesome Movies</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
   
    <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
      <li className="nav-item ">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Popular Movies</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">About the Developer</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-dark my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  )
}

export default Navigation