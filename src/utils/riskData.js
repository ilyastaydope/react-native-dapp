const riskData = type => {
  const colors = {
    no_risk: {
      colors: ['#87c433', '#0eaa4f'],
      text: 'No Market Risk',
    },
    low: {
      colors: ['#ffde16', '#c0a400'],
      text: 'Low Market Risk',
    },
  };
  return colors[type];
};

export default riskData;
