import { useForm } from '@inertiajs/react';
import { LogOut } from 'lucide-react';
import DotProgress from './DotProgress';
import { Button } from './ui/button';

const LogoutButton = () => {
    const { post, processing } = useForm();

    return (
        <Button
            variant="outline"
            className="mr-4 mt-4 h-14 p-4 text-red-500 hover:bg-red-100 hover:text-red-700"
            onClick={() => post(route('admin.logout'))}
            disabled={processing}
        >
            <LogOut />
            {processing ? <DotProgress color="red" /> : 'ログアウト'}
        </Button>
    );
};

export default LogoutButton;
