import React from 'react';
import Styles from "../styles/layout.module.scss";
import { Link } from 'react-router-dom';
import List from "../images/list.png";
import Stat from "../images/bar-chart.png";
import Menu from "../images/menu.png";



export default function Layout(props) {

  return (
    <section>
        <div className={Styles.mainContent}>
            <aside>
                <div className={Styles.hamburger}>
                    <img src={Menu} alt="menu"/>
                </div>
                <div className={Styles.mainAside}>
                    <ul className={Styles.navList}>
                        <li><Link to="/"><img src={List} alt="list"/></Link></li>
                        <li><Link to="/stats"><img src={Stat} alt="stat"/></Link></li>
                    </ul>
                </div>
            </aside>
            <main>
                <div className={Styles.header}>
                    <input className={Styles.searchBar} readOnly value="" placeholder="Search"/>
                    <div className={Styles.mobileHamburger}>
                        <img src={Menu} alt="menu"/>
                    </div>
                </div>
                {props.children}
            </main>
        </div>
    </section>
  )
}
