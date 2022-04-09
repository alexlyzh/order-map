export type MapLocation = {
  latitude: number,
  longitude: number,
  zoom: number,
}

export type Location = {
  name: string,
  latitude: number,
  longitude: number,
}

export type Order = {
  name: string,
  source: string,
  destination: string,
}

export enum Waypoint {
  source = 'source',
  destination = 'destination',
}
