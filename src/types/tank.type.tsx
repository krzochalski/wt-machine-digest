export enum Country {
  usa = 'usa',
  france = 'france',
  uk = 'uk',
  germany = 'germany',
  japan = 'japan',
  italy = 'italy',
  ussr = 'ussr',
  china = 'china',
}

export enum Driver {
  nightVision = 'Night Vision',
  hiResNV = 'Hi Res NV',
}

export enum Gunner {
  nightVision = 'Night Vision',
  thermal = 'Thermal',
  hiResThermal = 'Thermal Tier 4 (Hi Res NV stock)',
}

export enum GunnerThermalRes {
  //  @todo: add options
}

export enum Commander {
  //  @todo: add options
}

export type Tier = 1 | 2 | 3 | 4;

export type TankType = {
  name: string;
  country: Country;
  driver: Driver | null;
  gunner: Gunner | null;
  gunnerThermalRes: GunnerThermalRes | null;
  commander: Commander;
  tier: Tier;
};
