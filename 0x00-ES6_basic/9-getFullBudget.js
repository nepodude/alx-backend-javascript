import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);

  const fullBudget = {
    ...budget,

    // ES6 method shorthand (no "function" keyword) :contentReference[oaicite:0]{index=0}
    getIncomeInDollars(income) {
      return `$${income}`;
    },

    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
