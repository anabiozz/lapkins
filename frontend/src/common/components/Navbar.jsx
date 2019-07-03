import React from 'react'
import {Link} from 'react-router-dom'
const cart = 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZD0iTTExLjY4LDEzbC0wLjgzMy01aC0yLjk5QzcuNDExLDYuMjgsNS44NTksNSw0LDVDMS43OTQsNSwwLDYuNzk0LDAsOXMxLjc5NCw0LDQsNGMxLjg1OSwwLDMuNDExLTEuMjgsMy44NTgtM2gxLjI5NGwwLjUsMw0KCUg5LjYxNGw1LjE3MSwyNi4wMTZjLTIuNDY1LDAuMTg4LTQuNTE4LDIuMDg2LTQuNzYsNC40NzRjLTAuMTQyLDEuNDA1LDAuMzIsMi44MTIsMS4yNjgsMy44NThDMTIuMjQyLDQ4LjM5NywxMy41OTQsNDksMTUsNDloMg0KCWMwLDMuMzA5LDIuNjkxLDYsNiw2czYtMi42OTEsNi02aDExYzAsMy4zMDksMi42OTEsNiw2LDZzNi0yLjY5MSw2LTZoNGMwLjU1MywwLDEtMC40NDcsMS0xcy0wLjQ0Ny0xLTEtMWgtNC4zNQ0KCWMtMC44MjYtMi4zMjctMy4wNDMtNC01LjY1LTRzLTQuODI0LDEuNjczLTUuNjUsNGgtMTEuN2MtMC44MjYtMi4zMjctMy4wNDMtNC01LjY1LTRzLTQuODI0LDEuNjczLTUuNjUsNEgxNQ0KCWMtMC44NDIsMC0xLjY1Mi0wLjM2Mi0yLjIyNC0wLjk5M2MtMC41NzctMC42MzktMC44NDgtMS40NjEtMC43NjEtMi4zMTZjMC4xNTItMS41MDksMS41NDYtMi42OSwzLjE3My0yLjY5aDAuNzkxDQoJYzAuMDE0LDAsMC4wMjUsMCwwLjAzOSwwaDM4Ljk5NEM1Ny43NjMsNDEsNjAsMzguNzYzLDYwLDM2LjAxM1YxM0gxMS42OHogTTQsMTFjLTEuMTAzLDAtMi0wLjg5Ny0yLTJzMC44OTctMiwyLTJzMiwwLjg5NywyLDINCglTNS4xMDMsMTEsNCwxMXogTTQ2LDQ1YzIuMjA2LDAsNCwxLjc5NCw0LDRzLTEuNzk0LDQtNCw0cy00LTEuNzk0LTQtNFM0My43OTQsNDUsNDYsNDV6IE0yMyw0NWMyLjIwNiwwLDQsMS43OTQsNCw0cy0xLjc5NCw0LTQsNA0KCXMtNC0xLjc5NC00LTRTMjAuNzk0LDQ1LDIzLDQ1eiBNNTgsMzYuMDEzQzU4LDM3LjY2LDU2LjY2LDM5LDU1LjAxMywzOUgxNi44MjFsLTQuNzctMjRINThWMzYuMDEzeiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo='
const search = 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTIuOTY2IDUyLjk2NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTIuOTY2IDUyLjk2NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZD0iTTUxLjcwNCw1MS4yNzNMMzYuODQ1LDM1LjgyYzMuNzktMy44MDEsNi4xMzgtOS4wNDEsNi4xMzgtMTQuODJjMC0xMS41OC05LjQyLTIxLTIxLTIxcy0yMSw5LjQyLTIxLDIxczkuNDIsMjEsMjEsMjENCgljNS4wODMsMCw5Ljc0OC0xLjgxNywxMy4zODQtNC44MzJsMTQuODk1LDE1LjQ5MWMwLjE5NiwwLjIwNSwwLjQ1OCwwLjMwNywwLjcyMSwwLjMwN2MwLjI1LDAsMC40OTktMC4wOTMsMC42OTMtMC4yNzkNCglDNTIuMDc0LDUyLjMwNCw1Mi4wODYsNTEuNjcxLDUxLjcwNCw1MS4yNzN6IE0yMS45ODMsNDBjLTEwLjQ3NywwLTE5LTguNTIzLTE5LTE5czguNTIzLTE5LDE5LTE5czE5LDguNTIzLDE5LDE5DQoJUzMyLjQ1OSw0MCwyMS45ODMsNDB6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=='
const user = 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNjAgNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwIDYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBkPSJNNDguMDE0LDQyLjg4OWwtOS41NTMtNC43NzZDMzcuNTYsMzcuNjYyLDM3LDM2Ljc1NiwzNywzNS43NDh2LTMuMzgxYzAuMjI5LTAuMjgsMC40Ny0wLjU5OSwwLjcxOS0wLjk1MQ0KCWMxLjIzOS0xLjc1LDIuMjMyLTMuNjk4LDIuOTU0LTUuNzk5QzQyLjA4NCwyNC45Nyw0MywyMy41NzUsNDMsMjJ2LTRjMC0wLjk2My0wLjM2LTEuODk2LTEtMi42MjV2LTUuMzE5DQoJYzAuMDU2LTAuNTUsMC4yNzYtMy44MjQtMi4wOTItNi41MjVDMzcuODU0LDEuMTg4LDM0LjUyMSwwLDMwLDBzLTcuODU0LDEuMTg4LTkuOTA4LDMuNTNDMTcuNzI0LDYuMjMxLDE3Ljk0NCw5LjUwNiwxOCwxMC4wNTYNCgl2NS4zMTljLTAuNjQsMC43MjktMSwxLjY2Mi0xLDIuNjI1djRjMCwxLjIxNywwLjU1MywyLjM1MiwxLjQ5NywzLjEwOWMwLjkxNiwzLjYyNywyLjgzMyw2LjM2LDMuNTAzLDcuMjM3djMuMzA5DQoJYzAsMC45NjgtMC41MjgsMS44NTYtMS4zNzcsMi4zMmwtOC45MjEsNC44NjZDOC44MDEsNDQuNDI0LDcsNDcuNDU4LDcsNTAuNzYyVjU0YzAsNC43NDYsMTUuMDQ1LDYsMjMsNnMyMy0xLjI1NCwyMy02di0zLjA0Mw0KCUM1Myw0Ny41MTksNTEuMDg5LDQ0LjQyNyw0OC4wMTQsNDIuODg5eiBNNTEsNTRjMCwxLjM1Ny03LjQxMiw0LTIxLDRTOSw1NS4zNTcsOSw1NHYtMy4yMzhjMC0yLjU3MSwxLjQwMi00LjkzNCwzLjY1OS02LjE2NA0KCWw4LjkyMS00Ljg2NkMyMy4wNzMsMzguOTE3LDI0LDM3LjM1NCwyNCwzNS42NTV2LTQuMDE5bC0wLjIzMy0wLjI3OGMtMC4wMjQtMC4wMjktMi40NzUtMi45OTQtMy40MS03LjA2NWwtMC4wOTEtMC4zOTZsLTAuMzQxLTAuMjINCglDMTkuMzQ2LDIzLjMwMywxOSwyMi42NzYsMTksMjJ2LTRjMC0wLjU2MSwwLjIzOC0xLjA4NCwwLjY3LTEuNDc1TDIwLDE2LjIyOFYxMGwtMC4wMDktMC4xMzFjLTAuMDAzLTAuMDI3LTAuMzQzLTIuNzk5LDEuNjA1LTUuMDIxDQoJQzIzLjI1MywyLjk1OCwyNi4wODEsMiwzMCwyYzMuOTA1LDAsNi43MjcsMC45NTEsOC4zODYsMi44MjhjMS45NDcsMi4yMDEsMS42MjUsNS4wMTcsMS42MjMsNS4wNDFMNDAsMTYuMjI4bDAuMzMsMC4yOTgNCglDNDAuNzYyLDE2LjkxNiw0MSwxNy40MzksNDEsMTh2NGMwLDAuODczLTAuNTcyLDEuNjM3LTEuNDIyLDEuODk5bC0wLjQ5OCwwLjE1M2wtMC4xNiwwLjQ5NWMtMC42NjksMi4wODEtMS42MjIsNC4wMDMtMi44MzQsNS43MTMNCgljLTAuMjk3LDAuNDIxLTAuNTg2LDAuNzk0LTAuODM3LDEuMDc5TDM1LDMxLjYyM3Y0LjEyNWMwLDEuNzcsMC45ODMsMy4zNjEsMi41NjYsNC4xNTNsOS41NTMsNC43NzYNCglDNDkuNTEzLDQ1Ljg3NCw1MSw0OC4yOCw1MSw1MC45NTdWNTR6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=='

export default() => (
  <header className="nav">

    <div className="container">
    
      <div className="row">

        <div className="col-4">
          <div className="logo">
            <Link to="/">Lapkin Home</Link>
          </div>
        </div>

        <div className="col-6 nav-quicklist">
          <ul >
            <li className="drop"><Link to="/products/wallart">Открытки</Link></li>
            <li><Link to="/products/stationary">Канцелярия</Link></li>
            <li><Link to="/products/gifts">Подарки</Link></li>
            <li><Link to="/products/wraps">Обертка</Link></li>
          </ul>
        </div>

        <div className="col-2">
          <ul className="icons">

            <li className="icon">
              <Link to="/">
                <span className="icon-search">
                  <img src={`data:image/svg+xml;base64,${search}`} />
                </span>
              </Link>
            </li>

            <li className="icon">
              <Link to="/">
                <span className="icon-user">
                  <img src={`data:image/svg+xml;base64,${user}`} />
                </span>
              </Link>
            </li>

            <li className="icon">
              <Link to="/cart">
                <span className="icon-cart">
                  <img src={`data:image/svg+xml;base64,${cart}`} />
                </span>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>

    {/* <div className="nav-section-container">
      <div className="brand">
        <Link to="/">
            <img/>
        </Link>
      </div>
    </div> */}

    

  </header>
)