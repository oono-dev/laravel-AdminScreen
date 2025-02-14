import AppLayout from '@/Layouts/Admin/AppLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AppLayout
            title="ダッシュボード"
            className="min-h-screen"
            breadcrumb={<p>ダッシュボード</p>}
        >
            <Head title="ダッシュボード" />
        </AppLayout>
    );
}
