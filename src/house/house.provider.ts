import { House } from './house.model';

export const houseProviders = [
    {
        provide: 'HOUSE_REPOSITORY',
        useValue: House,
    },
];