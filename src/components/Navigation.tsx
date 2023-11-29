import 'bootstrap'

const Navigation = () => {
  return (
    <div>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand " href="/">MOVIE MANIA</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
   
    <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
      <li className="nav-item ">
        <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/PopularMovies">Popular Movies</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="/Developer">About the Developer</a>
      </li>
    </ul>
  </div>
</nav>
</div>
  )
}

export default Navigation