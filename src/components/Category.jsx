import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import './Category.css'

const Category = () => {
    return (
        <div className="category-container">
            <NavLink to={'/cuisine/Indian'}>
                <FaPizzaSlice />
                <p>Inaian</p>
            </NavLink>
            <NavLink to={'/cuisine/Tamil'}>
                <FaHamburger />
                <p>Tamil</p>
            </NavLink>
            <NavLink to={'/cuisine/North'}>
                <GiNoodles />
                <p>North</p>
            </NavLink>
            <NavLink to={'/cuisine/South'}>
                <GiChopsticks />
                <p>South</p>
            </NavLink>
        </div>
    )
}

export default Category;