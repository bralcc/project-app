import { Link } from '@inertiajs/react';

interface Props {
    data: {
        links: {
            first: string;
            last: string;
            prev: string;
            next: string;
        };
        meta: MetaProps;
    };
}

interface MetaLinksProps {
    url: string;
    label: string;
    active: boolean;
}

interface MetaProps {
    current_page: number;
    from: number;
    last_page: number;
    links: MetaLinksProps[];
}

export default function Pagination({ data }: Props & { className?: string }) {
    if (!data.meta.links || data.meta.links.length === 0) {
        return null;
    }

    return (
        <div>
            <nav className={`flex flex-row justify-center gap-2 p-3`}>
                {data.meta.links.map((link: MetaLinksProps) => (
                    <Link
                        preserveScroll={!!link.url}
                        key={link.label}
                        href={link.url || '#'}
                        onClick={(e) => !link.url && e.preventDefault()}
                        className={`rounded-lg px-3 py-2 ${link.active ? 'ring-1' : ''} ${!link.url ? 'disabled cursor-not-allowed text-muted' : 'ring-muted hover:ring-1'} `}
                    >
                        <span dangerouslySetInnerHTML={{ __html: link.label }}></span>
                    </Link>
                ))}
            </nav>
            {/* <pre>{JSON.stringify(data, undefined, 2)}</pre> */}
        </div>
    );
}
