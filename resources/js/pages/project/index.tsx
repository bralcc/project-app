import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Projects',
        href: '/project',
    },
];

interface Props {
    projects: {
        data: any[];
        current_page: number;
        last_page: number;
        per_page: number;
        total: number;
    };
}

export default function Index({ projects }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Projects" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {/* <pre>{JSON.stringify(projects, undefined, 2)}</pre> */}
                    {projects.data.map((project) => (
                        <div
                            key={project.id}
                            className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border"
                        >
                            <div className="p-4">
                                <h3 className="text-lg font-semibold">{project.name}</h3>
                                <p className="mb-2 text-xs">Created by: {project.created_by.name}</p>
                                <p className="text-sm text-muted-foreground">{project.description}</p>
                            </div>
                            <div>
                                <h2 className="absolute right-0 bottom-0 p-4 text-xs text-muted-foreground">
                                    Tasks: {project.tasks} | Status: {project.status}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
