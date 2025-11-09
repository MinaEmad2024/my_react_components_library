import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import HomePage from './HomePage';
import Accordion from  '../components/accordion'
import RandomColor from '../components/randomColor';
import RatingStar from '../components/RatingStar';
import ImageSlider from '../components/ImageSlider';
import InfiniteLoad from '../components/InfiniteLoad';
import TreeNavigation from '../components/Tree-View/TreeNavigation';
import data from '../components/Tree-View/data'
import QrCodeGenerator from '../components/qr-code-generator/QrCode';
import DarkMode from '../components/darkMode/DarkMode';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import TabsParent from '../components/CustomTabs/TabsParent';
import ModalParent from '../components/Modal/ModalParent';
import GitHubProfileFinder from '../components/gitHupProfileFInder/gitHubparent';
import AutoCompleteSearch from '../components/autocomplete search/AutoComplete';
import TicTacToe from '../components/TicTacToe/TicTacToe';
import FeatureFlags from '../components/CustomFlags';
import CustomFlags from '../components/CustomFlags/context';
import CustomHook from '../components/customHookUseFetch';
import ClickOutside from '../components/customClickOutsideHook/ClickOutside';
import SizeHook from '../components/SizeHook/Size';
import ScrollToBottom from '../components/scrollToTopAndBottom/ScrollToTop';
import ScrollToSection from '../components/scrollToSection/ScrollToSection'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children:[
      {
        index:true,
        element: <HomePage />,
      },  
      {
        path:'/accordion',
        element: <Accordion />
      },
      {
        path:'/randomColor',
        element: <RandomColor />
      },
      {
        path:'/ratingStar',
        element: <RatingStar noOfStars={10} />
      },
      {
        path:'/imageSlider',
        element: <ImageSlider url='https://picsum.photos/v2/list?' page={1} limit={10}/>
      },
      { 
        path:'/infiniteload',
        element:<InfiniteLoad />
      },
      {
        path:'/treenavigation',
        element:<TreeNavigation data={data} />
      },
      {
        path:'/qr-code-generator',
        element:<QrCodeGenerator />
      },
      {
        path:'/dark-mode',
        element:<DarkMode />
      },
      {path:'/progress-bar',
       element:<ProgressBar url='https://dummyjson.com/products?limit=100'/>
      },
      {path:'/custom-tabs',
        element: <TabsParent />
      },
      {
        path: '/modal-component',
        element: <ModalParent />
      },
      {
        path: '/github-profile-finder',
        element : <GitHubProfileFinder />
      },
      {
        path: '/auto-complete-search',
        element: < AutoCompleteSearch />
      },
      {
        path: '/tic-tac-toe',
        element: <TicTacToe />
      },
      {
        path:'/custom-flags',
        element:(<CustomFlags>
          <FeatureFlags />
        </CustomFlags> )
      },
      {
        path:'/custom-hooks',
        element:<CustomHook />
      },
      {
        path:'/click-outside',
        element: <ClickOutside />
      },
      {
        path:'/window-size',
        element: <SizeHook />
      },
      {
        path: '/scroll-to-top',
        element: <ScrollToBottom />
      },
      {
        path: '/scroll-to-section',
        element: <ScrollToSection />
      }
    ],
  },
]);

export default router ;