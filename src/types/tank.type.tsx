export enum Country {
  USA = 'USA',
  FRANCE = 'France',
  UK = 'UK',
  GERMANY = 'Germany',
  JAPAN = 'Japan',
  ITALY = 'Italy',
  USSR = 'USSR',
  CHINA = 'China',
}

export enum Driver {
  NIGHT_VISION = 'Night Vision',
  HI_RES_NV = 'Hi Res NV',
}

export enum Gunner {
  NIGHT_VISION = 'Night Vision',
  THERMAL = 'Thermal',
  HI_RES_THERMAL = 'Thermal Tier 4 (Hi Res NV stock)',
}

export enum GunnerThermalRes {
  FIVE_BY_THREE = '500x300',
  EIGHT_BY_SIX = '800x600',
  TWELVE_BY_EIGHT = '1200x800',
}

export enum Commander {
  NIGHT_VISION = 'Night Vision',
  HI_RES_NV = 'Hi Res NV',
  MID_RES_THERMAL = 'Mid Res Thermal',
  HI_RES_THERMAL = 'Hi Res Thermal',
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
