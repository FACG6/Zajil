exports.getStores = (req, res) => {
  console.log('getstoresback');
  const stores = [
    {
      value: 'Metro',
      label: 'Metro',
      id: 1,
    },
    {
      value: 'خانيونس',
      label: 'خانيونس',
      id: 2,
    },
    {
      value: 'رفح',
      label: 'رفح',
      id: 3,
    },
    {
      value: 'البريج',
      label: 'البريج',
      id: 4,
    },
    {
      value: 'المغازي',
      label: 'المغازي',
      id: 5,
    },
    {
      value: 'بيت حانون',
      label: 'بيت حانون',
      id: 6,
    },
  ];
  res.send(JSON.stringify(stores));
};
