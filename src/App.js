import logo from './logo.svg';
import './App.css';
import {AppHeader} from './appHeader/appHeader';
import {AppMenu} from './appMenu/appMenu';
import {AppFooter} from './appFooter/appFooter';
import {AppDashboard} from './appDashboard/appDashboard';
import {AppSetting} from './appSetting/appSetting';
import {AppHeaderDemo} from './appHeaderDemo/appHeaderDemo';
import {AppMenuDemo} from './appMenuDemo/appMenuDemo';
import {AppFooterDemo} from './appFooterDemo/appFooterDemo';
import {AppDashboardDemo} from './appDashboardDemo/appDashboardDemo';
import {AppSettingDemo} from './appSettingDemo/appSettingDemo';

function App() {
  return (
    <div className="wrapper">
      {/* <AppHeader />
      <AppMenu />
      <AppDashboard />
      <AppFooter />
      <AppSetting /> */}
      <AppHeaderDemo />
      <AppMenuDemo />
      <AppDashboardDemo />
      <AppFooterDemo />
      <AppSettingDemo />
    </div>
  );
}

export default App;
