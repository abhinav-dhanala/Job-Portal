import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layouts/app-layout';
import LandingPage from './pages/Landing';
import Onboarding from './pages/Onboarding';
import JobListing from './pages/job-listing';
import PostJob from './pages/post-job';
import SavedJobs from './pages/saved-jobs';
import JobPage from './pages/job';
import ThemeProvider from './components/theme-provider';
import ProtectedRoute from './components/protected-route';
import MyJobs from './pages/my-jobs';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element:(<ProtectedRoute><LandingPage /></ProtectedRoute> ) },
      { path: "/onboarding", element:(<ProtectedRoute><Onboarding /></ProtectedRoute> )},
      { path: "/jobs", element:(<ProtectedRoute><JobListing /></ProtectedRoute>)},
      { path: "/job/:id", element:(<ProtectedRoute><JobPage /></ProtectedRoute> )},
      { path: "/post-job", element:(<ProtectedRoute><PostJob /></ProtectedRoute>)},
      { path: "/saved-jobs", element:(<ProtectedRoute><SavedJobs /></ProtectedRoute>)},
      { path: "/my-jobs", element:(<ProtectedRoute><MyJobs /></ProtectedRoute>)},
      
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
