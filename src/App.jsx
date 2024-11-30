import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Room from './pages/Room';
import RoomMain from './pages/Room/RoomMain';
import LogDetail from './pages/Room/LogDetail';
import LogUpdate from './pages/Room/LogUpdate';
import LogHistory from './pages/Room/LogHistory';
import MyRewards from './pages/Room/MyRewards';
import ShareReward from './pages/Room/ShareReward';
import CreateLog from './pages/Room/CreateLog';
import DIYReward from './pages/Room/DIYReward';
import Community from './pages/Community';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import AlarmSet from './pages/AlarmSet';
import SignUp from './pages/SignUp';
import BottomNav from './components/Common/BottomNav';
import FriendList from './pages/Friend/FriendList';
import FriendRequest from './pages/Friend/FriendRequest';
import FriendSearch from './pages/Friend/FriendSearch';
import FriendDetail from './pages/Friend/FriendDetail';
import Setting from './pages/Setting';
import SettingProfile from './pages/Setting/SettingProfile';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex flex-col h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/alarmset" element={<AlarmSet />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/room" element={<Room />}>
              <Route index element={<RoomMain />} />
              <Route path="detail" element={<LogDetail />} />
              <Route path="update" element={<LogUpdate />} />
              <Route path="history" element={<LogHistory />} />
              <Route path="rewards" element={<MyRewards />} />
              <Route path="shareReward" element={<ShareReward />} />
              <Route path="createLog" element={<CreateLog />} />
              <Route path="diyReward" element={<DIYReward />} />
            </Route>
            <Route path="/community" element={<Community />} />
            <Route path="/friend" element={<Outlet />}>
              <Route index element={<FriendList />} />
              <Route path="request" element={<FriendRequest />} />
              <Route path="search" element={<FriendSearch />} />
              <Route path="detail/:id" element={<FriendDetail />} />
            </Route>
            <Route path="/settings" element={<Outlet />}>
              <Route index element={<Setting />} />
              <Route path="profile" element={<SettingProfile />} />
            </Route>
          </Routes>
          <BottomNav />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
