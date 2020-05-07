export let sortOptions = [
    {
        disabled: true,
        selected: true,
        value: '',
        label: 'Order By Vote'
    },
    {
        disabled: false,
        selected: false,
        value: 'asc',
        label: 'Most voted'
    },
    {
        disabled: false,
        selected: false,
        value: 'desc',
        label: 'Less voted'
    }
]

export const LOCAL_STORAGE_KEY = 'LINK_LIST'