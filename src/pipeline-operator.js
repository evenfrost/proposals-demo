const string = 'oh hai';

const addName = string => {
  return `${string} mark`;
};

const capitalize = string => {
  return string.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

const exclaim = string => {
  return `${string}!`;
};

console.log(string |> addName |> capitalize |> exclaim);
