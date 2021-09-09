async function fetchPools() {
  const tabs = await fetch('https://defirex.org/api/v1/pools/all')
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(error => {
      console.log('error' + error);
    });
  return tabs;
}

export default fetchPools;
