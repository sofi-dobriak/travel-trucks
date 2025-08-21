import type { FiltersInitialState } from '../redux/filters/filterSlice';

export interface FilterConfig {
  text: string;
  icon: string;
  id: string;
  filterKey: keyof FiltersInitialState;
  value?: string;
}

export const EQUIPMENT_FILTERS: FilterConfig[] = [
  { text: 'AC', icon: '#icon-wind', id: 'ac', filterKey: 'AC' },
  {
    text: 'Automatic',
    icon: '#icon-diagram',
    id: 'transmission',
    filterKey: 'transmission',
    value: 'automatic',
  },
  { text: 'Kitchen', icon: '#icon-cup', id: 'kitchen', filterKey: 'kitchen' },
  { text: 'TV', icon: '#icon-tv', id: 'tv', filterKey: 'TV' },
  { text: 'Bathroom', icon: '#icon-shower', id: 'bathroom', filterKey: 'bathroom' },
];

export const TYPE_FILTERS: FilterConfig[] = [
  { text: 'Van', icon: '#icon-grid-1x2', id: 'van', filterKey: 'form', value: 'van' },
  {
    text: 'Fully Integrated',
    icon: '#icon-grid-2x2',
    id: 'fullyIntegrated',
    filterKey: 'form',
    value: 'fullyIntegrated',
  },
  { text: 'Alcove', icon: '#icon-grid-3x3', id: 'alcove', filterKey: 'form', value: 'alcove' },
];
