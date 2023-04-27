import {memo} from 'react'
import { NavLink } from 'react-router-dom';
import headerCss from './Header.module.css';

function Header():JSX.Element{
  return (
    <div className={headerCss['header-div']}>
        <div id={headerCss.titleDiv}>
            <h2>{"<"}<span id={headerCss['title']}>epam</span>{">"} BookStore</h2>
        </div>
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/cart">Cart</NavLink>
            <NavLink to="/order">Order</NavLink>
        </div>
    </div>
  )
}

export default memo(Header);