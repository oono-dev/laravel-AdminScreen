import AppHeader from '@/Components/AppHeader';
import BreadClumb from '@/Components/BreadClumb';
import LogoutButton from '@/Components/LogoutButton';
import { Button } from '@/Components/ui/button';
import { PropsWithChildren, ReactNode } from 'react';

export default function AppLayout({
    title,
    register_button,
    breadcrumb,
    children,
    className,
}: PropsWithChildren<{
    title?: string;
    register_button?: ReactNode;
    breadcrumb?: ReactNode;
    className?: string;
}>) {
    return (
        <div className="flex bg-gray-100">
            <AppHeader />
            <main className={'ml-60 w-full ' + className}>
                <div className="mt-4 flex h-12 w-full items-center justify-between">
                    <BreadClumb>{breadcrumb}</BreadClumb>
                    <LogoutButton />
                </div>

                <div className="mt-16 flex w-full justify-between px-4 py-2">
                    <h1 className="text-3xl font-semibold text-gray-800">
                        {title}
                    </h1>
                    {register_button && (
                        <Button
                            asChild
                            className="bg-blue-500 p-6 hover:bg-blue-700"
                        >
                            {register_button}
                        </Button>
                    )}
                </div>

                {children}
            </main>
        </div>
    );
}
