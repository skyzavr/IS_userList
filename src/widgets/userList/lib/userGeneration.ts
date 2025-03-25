const names: string[] = [
  'Tim',
  'Jenny',
  'Tom',
  'Alex',
  'Lucy',
  'Melissa',
  'Jack',
  'Alisa',
  'Andrew',
];
const companies: string[] = ['LAPD', 'LAFD', 'Hulu', 'Amazon', 'Google'];

const getRandomValue = (list: string[]) => {
  const lastIndex = list.length - 1;
  const firstIndex = 0;
  return Math.floor(Math.random() * (lastIndex - firstIndex + 1) + firstIndex);
};

const generateUser = () => {
  return {
    id: Math.random().toString().slice(2),
    name: names[getRandomValue(names)],
    jobTitle: '',
    department: '',
    company: companies[getRandomValue(companies)],
  };
};

export const generateUserList = (itemCount: number) => {
  const users = [];
  for (let index = 0; index < itemCount; index++) {
    users.push(generateUser());
  }
  return users;
};
