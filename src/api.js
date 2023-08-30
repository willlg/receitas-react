import data from './data.json';

export const getReceitas = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.receitas);
    }, 1000);
  });
};

export const addReceita = (receita) => {
  data.receitas.push(receita);
};
