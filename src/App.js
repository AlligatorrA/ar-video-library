import "./App.css";
import HeaderNav from "./components/navbar/HeaderNav";
import { useTheme } from "./contexts/theme-context";
import './components/navbar/asidenav.css'
import VideolistingPage from "./pages/listingpage/VideolistingPage";
import { Route, Routes } from "react-router-dom";
import Playlist from "./pages/library/Playlist";
import History from "./pages/history/History";
import WatchLater from "./pages/watch-later/WatchLater";
import Liked from "./pages/liked-videos/Liked";
import Login from "./components/auth-form/Login";
import SolePlayer from "./pages/sole-player/SolePlayer";
import Banner from "./pages/banner/Banner";
import SignUp from "./components/auth-form/SignUp";
import RequireAuth from "./custom-hooks/RequireAuth";
import Users from "./components/auth-form/users/Users";
import PlaylistPlay from "./components/playlistPlayer/PlaylistPlay";

function App() {
  const { theme } = useTheme()
  return (
    <div className="App" style={{ color: theme === 'light' ? 'black' : 'white', backgroundColor: theme === 'light' ? 'white' : "#232529" }}>


      <HeaderNav />

      <Routes>

        <Route path='/Library' element={
          <RequireAuth>
            <Playlist />
          </RequireAuth>
        } />

        <Route path='/Video' element={<VideolistingPage />} />
        <Route path='/' element={<Banner />} />

        <Route path='/History' element={
          <RequireAuth>
            <History />
          </RequireAuth>
        } />
        <Route path='/WatchLater' element={
          <RequireAuth>
            <WatchLater />
          </RequireAuth>
        } />
        <Route path='/SolePlayer/:videoId' element={<SolePlayer />} />
        <Route path="/Library/:playlistId" element={
          <RequireAuth >
            <PlaylistPlay />
          </RequireAuth>} />
        <Route path='/Liked' element={
          <RequireAuth>
            <Liked />
          </RequireAuth>
        } />
        <Route path='/Login' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Users' element={<Users />} />


        <Route path='*' element={
          <div className='asideAnd_main just_flex align_flex'>
            <h1>You have been misguided mate, nothing here </h1>
          </div>
        } />

      </Routes>
    </div>
  );
}

export default App;
