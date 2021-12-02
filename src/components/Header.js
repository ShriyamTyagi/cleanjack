import React from "react";

function Header() {
    return (
        <section className="top-header">
            <section className="d-flex align-items-center justify-content-center header-section">
                <div>
                    <img src="logo.png" />
                </div>

                <div className="text-center flex-grow-1 heading">
                    <h1 className="blue">3.3 Beheer Rooters</h1>
                    <p className="blue">3.3.1 Pandlist</p>
                </div>
                </section>
                <section className="d-flex align-items-center section-border">
                <div className="flex-grow-1 d-flex align-items-center">
                    <div>
                    <img src="icon.png" />
                    <span className="red">schoonzorg</span>
                    </div>

                    <div className="right-arrow">
                    <span className="">
                        <img src="arrow-left-circle.svg" />
                    </span>
                    </div>
                </div>

                <div className="right-dropdown">
                    <div class="dropdown">
                    <button
                        class="dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <span className="fa fa-user"></span>
                        Rianne Kondon
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">
                        Action
                        </a>
                        <a class="dropdown-item" href="#">
                        Another action
                        </a>
                        <a class="dropdown-item" href="#">
                        Something else here
                        </a>
                    </div>
                    </div>
                </div>
                </section>
        </section>
    )
}

export default Header;