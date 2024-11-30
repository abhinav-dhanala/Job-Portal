import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layouts/app-layout';
import LandingPage from './pages/Landing';
import Onboarding from './pages/Onboarding';
import JobListing from './pages/job-listing';
import PostJob from './pages/post-job';
import SavedJobs from './pages/saved-jobs';
import jobPage from './pages/job';
import ThemeProvider from './components/theme-provider';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/onboarding", element: <Onboarding /> },
      { path: "/jobs", element: <JobListing /> },
      { path: "/job/:id", element: <jobPage /> },
      { path: "/post-job", element: <PostJob /> },
      { path: "/saved-jobs", element: <SavedJobs /> },
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
