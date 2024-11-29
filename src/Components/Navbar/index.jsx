import { NavLink } from "react-router-dom"

const NavBar = () => {
	const activeStyle = "underline"

  return (
    <nav className="flex justify-betewwn items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
			<ul className="flex items-center gap-3">
				<li className="font-semibold text-lg">
					<NavLink 
						to="/"
						className={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						Shopi
					</NavLink>
				</li>

				<li>
					<NavLink 
						to="/all"
						className={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						All
					</NavLink>
				</li>

				<li>
					<NavLink
						to="/furnitures"
						className={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						Furnitures
					</NavLink>
				</li>
			</ul>

			<ul className="flex items-end gap-3">
				<li className="font-semibold text-lg">
					<NavLink 
						to="/"
						className={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						edst83@gmail.com
					</NavLink>
				</li>

				<li>
					<NavLink 
						to="/all"
						className={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						My Account
					</NavLink>
				</li>

				<li>
					<NavLink
						to="/furnitures"
						className={({ isActive }) =>
							isActive ? activeStyle : undefined
						}
					>
						My Orders
					</NavLink>
				</li>
			</ul>
    </nav>
  )
}

export default NavBar