// Styling constants for the application

// Common color classes
export const COLORS = {
    // Status colors
    status: {
        completed: 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100',
        'in progress': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100',
        pending: 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100',
        default: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
    },

    // Button variants
    button: {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600',
        danger: 'bg-red-500 text-white hover:bg-red-600',
        success: 'bg-green-500 text-white hover:bg-green-600',
    },

    // Link colors
    link: {
        edit: 'text-blue-600 hover:text-blue-800 dark:text-blue-400',
        delete: 'text-red-600 hover:text-red-800 dark:text-red-400',
        view: 'text-gray-600 hover:text-gray-800 dark:text-gray-400',
    },
} as const;

// Common spacing classes
export const SPACING = {
    padding: {
        small: 'p-2',
        medium: 'p-4',
        large: 'p-6',
    },
    margin: {
        small: 'm-2',
        medium: 'm-4',
        large: 'm-6',
    },
} as const;

// Table styling
export const TABLE_CLASSES = {
    container: 'overflow-x-auto rounded-lg border border-sidebar-border/70 dark:border-sidebar-border',
    table: 'min-w-full divide-y divide-gray-200 dark:divide-gray-700',
    header: 'px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400',
    cell: 'px-6 py-4 text-sm text-gray-900 dark:text-gray-100',
    row: 'hover:bg-gray-50 dark:hover:bg-muted',
} as const;

// Pagination styling
export const PAGINATION_CLASSES = {
    container: 'flex flex-row justify-center gap-2 p-3',
    link: {
        base: 'rounded-lg px-3 py-2 transition-colors',
        active: 'bg-blue-500 text-white ring-1 ring-blue-500',
        disabled: 'cursor-not-allowed text-gray-400 bg-gray-100',
        normal: 'text-gray-700 hover:bg-gray-100 hover:ring-1 hover:ring-gray-300',
    },
} as const;
