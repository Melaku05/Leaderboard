const scoreArr = [
  {
    name: 'melaku',
    score: 96,
  },
  {
    name: 'shiferaw',
    score: 99,
  },
  {
    name: 'Eshetu',
    score: 93,
  },
];

const tableData = (item) => {
  const tableBD = document.querySelector('#table-body');
  const tableRow = document.createElement('tr');
  const tableTD1 = document.createElement('td');
  const tableTD2 = document.createElement('td');

  tableTD1.innerHTML = item.name;
  tableTD2.innerHTML = item.score;

  tableRow.appendChild(tableTD1);
  tableRow.appendChild(tableTD2);

  tableBD.appendChild(tableRow);
};

const displayScoreArr = () => {
  scoreArr.forEach((item) => {
    tableData(item);
  });
};
export default displayScoreArr();
