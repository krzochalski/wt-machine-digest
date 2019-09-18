export class EnumsService {
  static getEnumValue(driver: string, enumToIterate: object) {
    return Object.values(enumToIterate).find(key => key);
  }
}
