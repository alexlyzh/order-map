import { orders, locations } from '../const';
import { Order, Location } from '../types/types';

export const getOrders = (): Promise<Order[]> => new Promise((resolve) => {
  setTimeout(resolve, 500, orders);
});

export const getLocations = (): Promise<Location[]> => new Promise((resolve) => {
  setTimeout(resolve, 500, locations);
});
