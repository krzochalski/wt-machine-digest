enum Country {
  usa = 'usa',
  france = 'france',
  uk = 'uk',
  germany = 'germany',
  japan = 'japan',
  italy = 'italy',
  ussr = 'ussr',
  china = 'china',
}

enum Driver {
  nightVision = 'Night Vision',
  hiResNV = 'Hi Res NV',
}

enum Gunner {
  nightVision = 'Night Vision',
  thermal = 'Thermal',
  hiResThermal = 'Thermal Tier 4 (Hi Res NV stock)',
}

enum GunnerThermalRes {
  //  @todo: add options
}

enum Commander {
  //  @todo: add options
}

type Tier = 1 | 2 | 3 | 4;

export type TankType = {
  name: string;
  country: Country;
  driver: Driver | null;
  gunner: Gunner | null;
  gunnerThermalRes: GunnerThermalRes | null;
  commander: Commander;
  tier: Tier;
};
