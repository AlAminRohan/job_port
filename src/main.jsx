import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Security from './Component/Security/Security.jsx';
import Demo from './Component/Demo/Demo.jsx';
import Question from './Component/Question/Question.jsx';
import AddQus from './Component/AddQus/AddQus.jsx';
import JobPostingReview from './Component/JobPostingReview/JobPostingReview.jsx';
import AdminHome from './Component/Admin/AdminHome/AdminHome.jsx';
import AdminBusiness from './Component/Admin/AdminBusiness/AdminBusiness.jsx';
import AdminNotification from './Component/Admin/AdminNotification/AdminNotification.jsx';
import ActiveBusiness from './Component/Admin/ActiveBusiness/ActiveBusiness.jsx';
import AdminInbox from './Component/Admin/AdminInbox/AdminInbox.jsx';
import AllJobPost from './Component/AllJobPost/AllJobPost.jsx';
import AppliedJobs from './Component/AppliedJobs/AppliedJobs.jsx';
const router = createBrowserRouter([
  {
    path: "/security",
    element: <Security></Security>,
  },
  {
    path: "/demo",
    element: <Demo></Demo>
  },
  {
    path: "/qus",
    element: <Question></Question>
  },
  {
    path: "/add-qus",
    element: <AddQus></AddQus>
  },
  {
    path: "/job-post-review",
    element: <JobPostingReview></JobPostingReview>
  },
  {
    path: "/admin-Home",
    element: <AdminHome></AdminHome>
  },
  {
    path: "/admin-business",
    element: <AdminBusiness></AdminBusiness>
  },
  {
    path: "/admin-notification",
    element: <AdminNotification></AdminNotification>
  },
  {
    path: "/active-business",
    element: <ActiveBusiness></ActiveBusiness>
  },
  {
    path: "/inbox",
    element: <AdminInbox></AdminInbox>
  },
  {
    path: "/job-post",
    element: <AllJobPost></AllJobPost>
  },
  {
    path: "/applied-jobs",
    element: <AppliedJobs></AppliedJobs>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
