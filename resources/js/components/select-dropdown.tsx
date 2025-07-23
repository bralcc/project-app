import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';

interface SelectDropdownProps {
    placeholder: string;
    items: string[];
    onSelect: (item: string) => void;
    className?: string;
}

export function SelectDropdown({ placeholder, items, onSelect, className = '' }: SelectDropdownProps) {
    const [selected, setSelected] = useState<string | null>(null);

    const handleSelect = (item: string) => {
        setSelected(item);
        onSelect(item);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className={cn('w-full rounded-lg px-4 py-2 text-white ring-1 ring-muted dark:bg-black', className)}>
                    {selected || placeholder}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {items.map((item: string, index: number) => (
                    <React.Fragment key={index}>
                        <DropdownMenuItem key={index} onClick={() => handleSelect(item)}>
                            {item}
                        </DropdownMenuItem>
                        {index < items.length - 1 && <DropdownMenuSeparator />}
                    </React.Fragment>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
