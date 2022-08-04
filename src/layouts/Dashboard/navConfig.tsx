import {
  faWallet,
  faPiggyBank,
  faChartPie,
  faHandHoldingDollar,
  faMemory,
  faQuestionCircle,
  faStoreSlash,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const navDashboard = [
  {
    title: 'Market Overview',
    icon: <FontAwesomeIcon icon={faChartPie} />,
    path: '/markets',
  },
  {
    title: 'Deposit/Withdraw',
    icon: <FontAwesomeIcon icon={faWallet} />,
    path: '/dashboard',
  },
  {
    title: 'Borrow/Repay',
    icon: <FontAwesomeIcon icon={faPiggyBank} />,
    path: '/access',
  },
  {
    title: 'Borrow/Repay',
    icon: <FontAwesomeIcon icon={faHandHoldingDollar} />,
    path: '/borrow',
  },
  {
    title: 'Careers',
    icon: <FontAwesomeIcon icon={faMemory} />,
    path: '/records',
  },
  {
    title: 'Documentation',
    icon: <FontAwesomeIcon icon={faQuestionCircle} />,
    path: 'https://siberiankebab.gitbook.io/untitled/',
  },
]
/* 
export const navDashboard2 = [
  {
    title: 'DAO',
    icon: <FontAwesomeIcon icon={faStoreSlash} />,
    path: '/DAO',
  },
  {
    title: 'Bridges',
    icon: <FontAwesomeIcon icon={faStoreSlash} />,
    path: '/Bridges',
  },
  {
    title: 'NFT Gallery',
    icon: <FontAwesomeIcon icon={faStoreSlash} />,
    path: '/nft-market',
  },
] */
