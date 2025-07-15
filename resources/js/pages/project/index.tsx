import Pagination from '@/components/pagination';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Projects',
        href: '/project',
    },
];

interface Project {
    id: number;
    name: string;
    description: string;
    due_date: string;
    status: string;
    created_by: {
        name: string;
    };
}

interface Props {
    projects: {
        data: Project[]; // Array of Project objects
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
}

function handleStatusColor(status: string) {
    switch (status) {
        case 'completed':
            return 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100';
        case 'in progress':
            return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100';
        case 'pending':
            return 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100';
        default:
            return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100';
    }
}

export default function Index({ projects }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Projects" />
            <div className="overflow-x-auto rounded-lg border border-sidebar-border/70 dark:border-sidebar-border">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                                Description
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                                Due Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                                Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                                Created By
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {projects.data.map((project) => (
                            <tr key={project.id} className="hover:bg-gray-50 dark:hover:bg-muted">
                                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900 dark:text-gray-100">{project.id}</td>
                                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900 dark:text-gray-100">{project.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{project.description}</td>
                                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900 dark:text-gray-100">{project.due_date}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={`inline-flex rounded-full px-2 text-xs leading-5 font-semibold ${handleStatusColor(project.status)}`}
                                    >
                                        {project.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900 dark:text-gray-100">{project.created_by.name}</td>
                                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900 dark:text-gray-100">
                                    <Link href={route('project.edit', project.id)} className="pr-1 text-blue-100 hover:underline dark:text-blue-800">
                                        Edit
                                    </Link>
                                    <Link href={route('project.destroy', project.id)} className="px-1 text-red-100 hover:underline dark:text-red-800">
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <Pagination data={projects}></Pagination>
            </div>
        </AppLayout>
    );
}
