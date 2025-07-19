import { PaginationData, PaginationLink } from '@/types';
import { Link } from '@inertiajs/react';

interface PaginationProps {
    data: PaginationData;
    className?: string;
}

export default function Pagination({ data, className = '' }: PaginationProps) {
    if (!data.meta.links || data.meta.links.length === 0) {
        return null;
    }

    return (
        <div className={className}>
            <nav className="flex flex-row justify-center gap-2 p-3">
                {data.meta.links.map((link: PaginationLink, idx: number) => (
                    <Link
                        preserveScroll={!!link.url}
                        key={idx}
                        href={link.url || '#'}
                        onClick={(e) => !link.url && e.preventDefault()}
                        className={`rounded-lg px-3 py-2 transition-colors ${
                            link.active ? 'ring-1 ring-muted' : !link.url ? 'disabled cursor-not-allowed text-muted' : 'hover:ring-1 hover:ring-muted'
                        }`}
                    >
                        <span dangerouslySetInnerHTML={{ __html: link.label }} />
                    </Link>
                ))}
            </nav>
        </div>
    );
}
