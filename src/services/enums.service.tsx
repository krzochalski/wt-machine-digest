export class EnumsService {
  static getEnumValue(property: string, enumToIterate: object) {
    // @todo: get some fucking sleep and find a workaround
    // @ts-ignore
    const key: keyof typeof enumToIterate = Object.keys(enumToIterate).find(key => key === property);
    return key !== undefined ? enumToIterate[key] : '';
  }
}
