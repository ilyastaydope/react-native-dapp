const listOfUrls = {
  etherScan:
    'https://etherscan.io/address/0x0bcbab2fecc30b7341132b4ebb36d352e035f1bd#tokentxns',
  securityAudit:
    'https://github.com/pessimistic-io/audits/blob/main/DeFireX%20Security%20Audit%20by%20Pessimistic%20Public.pdf',
  github: 'https://github.com/DeFireX',
  guide: 'https://defirex.org/assets/data/autonome_client_instruction_en.pdf',
  contract:
    'https://etherscan.io/address/0xb942ca22e0eb0f2524f53f999ae33fd3b2d58e3e#code',
  licence: 'https://www.teatmik.ee/en/personlegal/14829989-Defirex-O%C3%9C',
};

const goToUrl = url => {
  return listOfUrls[url];
};

export default goToUrl;
