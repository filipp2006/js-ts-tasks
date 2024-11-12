/**
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
  const salaries = [firstSalary, secondSalary, thirdSalary];
  const max = Math.max(...salaries);
  const min = Math.min(...salaries);
  return max - min;
};