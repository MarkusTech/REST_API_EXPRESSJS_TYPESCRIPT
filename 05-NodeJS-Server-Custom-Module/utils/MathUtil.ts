export class MathUtil {
  public static printTable(value: number): string {
    let tempStr: string = "";
    for (let i: number = 1; i <= 10; i++) {
      tempStr += `${value} * ${i} = ${value * i} \n`;
    }
    return tempStr;
  }
}
