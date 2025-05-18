class Solution {
  /**
   * @param {number} target
   * @param {number[]} position
   * @param {number[]} speed
   * @return {number}
   */
  carFleet(target, position, speed) {
    const cars = position.map((pos, i) => {
      return [pos, (target - pos) / speed[i]];
    });

    cars.sort((a, b) => b[0] - a[0]);

    let fleets = 0;
    let time = 0;

    for (let [pos, t] of cars) {
      if (t > time) {
        fleets++;
        time = t;
      }
    }

    return fleets;
  }
}

const car = new Solution();
console.log(car.carFleet(10, [1, 4], [3, 2])); // 1
console.log(car.carFleet(10, [4, 1, 0, 7], [2, 2, 1, 1])); // 3
// console.log(car);
