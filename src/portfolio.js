const header = {
  homepage: 'https://shivraj203.github.io/Portfolio',
  title: 'SP',
}

const about = {
  name: 'Shivraj Phadtare',
  role: 'Blockchain Developer',
  description:
    'As a Blockchain Developer with expertise in Solidity, Ethereum, Hyperledger, and JavaScript. Experienced in smart contract development, dApps, and front-end interfaces, including ERC-20 and ERC-721 tokens. I possess a deep understanding of Hyperledger-Fabric. My focus is on innovation, providing valuable solutions to complex problems in the field of blockchain technology.',
  resume: 'https://drive.google.com/file/d/12YCemz8WYsfEsNyEYnZ8OHWPA58ZrZvu/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/shivrajphadtare/',
    github: 'https://github.com/shivraj203/',
  },
}

const projects = [
  {
    name: 'Drug Counterfeiting Problem',
    description:
      'The contract includes several data structures and functions to facilitate the registration of companies, addition of drugs by manufacturers, creation of purchase orders (PO) by buyers, creation of shipments by sellers, updating shipments by transporters, and retailing drugs by retailers. This aims to enable the management and tracking of drugs throughout the supply chain, ensuring transparency and accountability among the involved parties.',
    stack: ['Solidity','Javascript','Hardhat'],
    sourceCode: 'https://github.com/shivraj203/Drug-Counterfeiting-Problem', 
  },
  {
    name: 'E-Voting Smart Contract',
    description:
      'A decentralized voting system that leverages the power of blockchain technology. Using Solidity and Ethereum, I developed a smart contract that enables voters to cast their votes securely, anonymously, and transparently.To ensure the integrity of the voting process, I implemented a range of security measures, such as multi-factor authentications.',
    stack: ['Solidity'],
    sourceCode: 'https://github.com/shivraj203/Voting-System',
  },
  {
    name: 'Bank KYC-System Smart Contract',
    description:
      'Developed a smart contract that automates the KYC process, reducing the time and resources required to onboard new customers while ensuring compliance with regulatory requirements. The functionalities are, Add Request to KYC, Remove Request to KYC, Add Customer, View Customer, Modify Customer, Up Vote, Down Vote, View Bank Details, Get Complaints , Report Complaints, Add Bank, Modify Bank Voting Status, Remove Bank.',
    stack: ['Solidity'],
    sourceCode: 'https://github.comhttps://github.com/shivraj203/Bank-KYC-System',
  },
  {
    name: 'Decentralized Finance Application',
    description:
      'Created an Decentralized system for P2P lending and borrow the money without any intermediaries or centralized institutions. With multiple functionalities. Using ERC-20 Token for executing the whole process.',
    stack: ['Solidity','JavaScript','Angular'],
    sourceCode: 'https://github.com/shivraj203/DeFi-Platform',

  },
  {
    name: 'For More Projects',
    description:
      'Vist the GitHub Profile',
    stack: ['Solidity','JavaScript','Angular', 'RectJs'],
    sourceCode: 'https://github.com/shivraj203/',

  },
]

const skills = [
  'Solidity',
  'JavaScript',
  'ReactJs',
  'NodeJs',
  'Git',
  'Hyperledger-Fabric',
  'HTML', 
  'CSS',
  'Web3.js', 
  'Ether.js', 
  'Openzeppelin', 
  'Mocha.js', 
  'Chai.js', 
  'Hardhat', 
  'Truffle', 
  'Ganache'
]

const contact = {
  email: 'shivrajphadtare.blockchain@gmail.com',
}

export { header, about, projects, skills, contact }
