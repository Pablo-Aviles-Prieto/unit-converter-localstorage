class Data {
  constructor(id, firstValue, firstUnit, secondValue, secondUnit) {
    this.id = id;
    this.firstValue = firstValue;
    this.firstUnit = firstUnit;
    this.secondValue = secondValue;
    this.secondUnit = secondUnit;
  }
  static saveLocalStorage(data) {
    const conversions = Data.getLocalStorage();
    conversions.push(data);
    localStorage.setItem('conversions', JSON.stringify(conversions));
  }
  static getLocalStorage() {
    const savedConversions = localStorage.getItem('conversions');
    const conversionParsed = JSON.parse(savedConversions);
    if (conversionParsed === null) {
      return [];
    }
    return Array.isArray(conversionParsed)
      ? conversionParsed
      : [conversionParsed];
  }

  static removeObjStorage(id) {
    const arrayStorage = Data.getLocalStorage();
    const arrayFiltered = arrayStorage.filter((obj) => obj.id != id);
    localStorage.setItem('conversions', JSON.stringify(arrayFiltered));
  }
}

export default Data;