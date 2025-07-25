import Pagination from '@/components/pagination';
import { SelectDropdown } from '@/components/select-dropdown';
import TextLink from '@/components/text-link';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import { COLORS, TABLE_CLASSES } from '@/lib/constants';
import { PaginatedResponse, Project, type BreadcrumbItem } from '@/types';
import { Head, router } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/',
    },
    {
        title: 'Projects',
        href: '/project',
    },
];

interface Props {
    projects: PaginatedResponse<Project>;
}

function handleStatusColor(status: string) {
    return COLORS.status[status as keyof typeof COLORS.status] || COLORS.status.default;
}

export default function Index({ projects }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Projects" />
            <div className={TABLE_CLASSES.container}>
                <table className={TABLE_CLASSES.table}>
                    <thead>
                        <tr className="border-bottom border">
                            <th className={TABLE_CLASSES.header}>ID</th>
                            <th className={TABLE_CLASSES.header}>Name</th>
                            <th className={TABLE_CLASSES.header}>Description</th>
                            <th className={TABLE_CLASSES.header}>Due Date</th>
                            <th className={TABLE_CLASSES.header}>Status</th>
                            <th className={TABLE_CLASSES.header}>Created By</th>
                            <th className={TABLE_CLASSES.header}>Actions</th>
                        </tr>
                        <tr>
                            <th className={TABLE_CLASSES.header}></th>
                            <th className={TABLE_CLASSES.header}>
                                <Input
                                    type="text"
                                    placeholder="name"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            router.get('/project', { name: (e.target as HTMLInputElement).value });
                                        }
                                    }}
                                ></Input>
                            </th>
                            <th className={TABLE_CLASSES.header}></th>
                            <th className={TABLE_CLASSES.header}></th>
                            <th className={TABLE_CLASSES.header}>
                                <SelectDropdown
                                    placeholder="Choose status"
                                    items={['All', 'Completed', 'In Progress', 'Pending']}
                                    className="max-w-xs"
                                    onSelect={(status) => {
                                        router.get('/project', { status });
                                    }}
                                />
                            </th>
                            <th className={TABLE_CLASSES.header}>
                                <Input
                                    type="text"
                                    placeholder="user"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            router.get('/project', { user: (e.target as HTMLInputElement).value });
                                        }
                                    }}
                                ></Input>
                            </th>
                            <th className={TABLE_CLASSES.header}></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {projects.data.map((project) => (
                            <tr key={project.id} className="hover:bg-gray-50 dark:hover:bg-muted">
                                <td className={TABLE_CLASSES.cell}>{project.id}</td>
                                <td className={TABLE_CLASSES.cell}>{project.name}</td>
                                <td className={TABLE_CLASSES.cell}>{project.description}</td>
                                <td className={`${TABLE_CLASSES.cell} whitespace-nowrap`}>{project.due_date}</td>
                                <td className={TABLE_CLASSES.cell}>
                                    <span
                                        className={`inline-flex rounded-full px-2 text-xs leading-5 font-semibold whitespace-nowrap ${handleStatusColor(project.status)}`}
                                    >
                                        {project.status.toUpperCase()}
                                    </span>
                                </td>
                                <td className={TABLE_CLASSES.cell}>{project.created_by.name}</td>
                                <td className={TABLE_CLASSES.cell}>
                                    <TextLink
                                        href={route('project.edit', project.id)}
                                        className="pr-1 text-blue-100 hover:underline dark:text-blue-800"
                                    >
                                        Edit
                                    </TextLink>
                                    <TextLink
                                        href={route('project.destroy', project.id)}
                                        className="px-1 text-red-100 hover:underline dark:text-red-800"
                                    >
                                        Delete
                                    </TextLink>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <Pagination data={projects}></Pagination>
            </div>
            {/* <pre>{JSON.stringify(projects, undefined, 2)}</pre> */}
        </AppLayout>
    );
}
