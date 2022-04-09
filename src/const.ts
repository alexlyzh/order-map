import { Location, Order } from './types/types';

export const mapCenter = {
  latitude: 43,
  longitude: 35,
  zoom: 15
} as const;

export const waypoints = [
  [52.37554, 4.901976],
  [52.36854, 4.887976],
] as ReadonlyArray<ReadonlyArray<number>>;

export const locations: Location[] = [
  {
    name: 'Amsterdam',
    latitude: 52.37,
    longitude: 4.89,
  },
  {
    name: 'Moscow',
    latitude: 55.75,
    longitude: 37.62,
  },
  {
    name: 'Berlin',
    latitude: 52.52,
    longitude: 13.41,
  },
  {
    name: 'Vatican',
    latitude: 41.9,
    longitude: 12.45,
  },
  {
    name: 'Paris',
    latitude: 48.85,
    longitude: 2.35,
  },
  {
    name: 'London',
    latitude: 51.51,
    longitude: -0.13,
  },
  {
    name: 'Rome',
    latitude: 41.89,
    longitude: 12.51,
  },
  {
    name: 'Beijing',
    latitude: 39.90,
    longitude: 116.40,
  },
  {
    name: 'Dublin',
    latitude: 53.33,
    longitude: -6.24,
  },
];

export const orders: Order[] = [
  {
    name: 'Cars',
    source: 'Berlin',
    destination: 'Moscow',
  },
  {
    name: 'Gas',
    source: 'Moscow',
    destination: 'Berlin',
  },
  {
    name: 'Cellphones',
    source: 'Beijing',
    destination: 'Moscow',
  },
  {
    name: 'Crude oil',
    source: 'Moscow',
    destination: 'Beijing',
  },
  {
    name: 'Cheese',
    source: 'Paris',
    destination: 'Moscow',
  },
  {
    name: 'Pizza',
    source: 'Rome',
    destination: 'Moscow',
  },
  {
    name: 'Wine',
    source: 'Paris',
    destination: 'Moscow',
  },
  {
    name: 'Whiskey',
    source: 'Dublin',
    destination: 'Moscow',
  },
];
