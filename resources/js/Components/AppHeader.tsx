import ApplicationLogo from './ApplicationLogo';
import Navlinks from './Navlinks';

const AppHeader = () => {
    return (
        <header className="fixed left-0 top-0 flex h-full w-60 flex-col bg-white shadow-lg">
            <div className="m-4">
                <ApplicationLogo className="mb-4 w-full" />
                <Navlinks />
            </div>
        </header>
    );
};

export default AppHeader;
