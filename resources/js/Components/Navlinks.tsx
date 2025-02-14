import NavLink from './NavLink';

const Navlinks = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        href={route('admin.dashboard.index')}
                        active={route().current('admin.dashboard.index')}
                        text="ダッシュボード"
                    />
                </li>
                {/* Add more links here */}
            </ul>
        </nav>
    );
};

export default Navlinks;
