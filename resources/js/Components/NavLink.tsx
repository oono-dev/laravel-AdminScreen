import { InertiaLinkProps, Link } from '@inertiajs/react';
import { Button } from './ui/button';

export default function NavLink({
    active = false,
    text,
    ...props
}: InertiaLinkProps & { active: boolean; text: string }) {
    return (
        <Button
            asChild
            className={
                active
                    ? 'my-2 w-full bg-blue-400 py-6 hover:bg-blue-500'
                    : 'my-2 w-full bg-white py-6 hover:bg-gray-100'
            }
        >
            <Link {...props}>
                <p
                    className={
                        active ? 'text-xl text-white' : 'text-xl text-black'
                    }
                >
                    {text}
                </p>
            </Link>
        </Button>
    );
}
