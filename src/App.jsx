import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import SignInForm from './components/Login/SignInForm';
import DoctorBooking from './components/Booking/DoctorBooking/DoctorBooking';
import BookingSuccess from './components/Booking/BookingSuccess';
import BookingInvoice from './components/Booking/BookingInvoice/BookingInvoice';
import AdminDashboard from './components/Admin/Dashboard/Dashboard';
import AdminAppointments from './components/Admin/Appointments/Appointments';
import Doctors from './components/Admin/Doctors/Doctors';
import Patients from './components/Admin/Patients/Patients';
import Profile from './components/Admin/Profile/Profile';
import Transactions from './components/Admin/Transactions/Transactions';
import Specialites from './components/Admin/Specialites/Specialites';
import AdminReviews from './components/Admin/Reviews/Reviews';
import Blog from './components/Blog/Blog';
import BlogDetails from './components/Blog/BlogDetails';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Service from './components/Service/Service';
import AppointmentPage from './components/Appointment/AppointmentPage';
import TrackAppointment from './components/TrackAppointment/TrackAppointment';
import ForgotPassword from './components/Login/ForgotPassword';
import PrivateOutlet from './components/Shared/PrivateOutlet';
import NotFound from './components/UI/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateOutlet />}>
          <Route path='/dashboard' element={<AdminDashboard />} />
          <Route path='/admin/appointments' element={<AdminAppointments />} />
        </Route>
        <Route path='/login' element={<SignInForm />} />
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<BlogDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/reset-password/:userId/:uniqueString' element={<ForgotPassword />} />
        <Route path='/appointment' element={<AppointmentPage />} />
        <Route path='/track-appointment' element={<TrackAppointment />} />
        <Route path='/booking/success/:id' element={<BookingSuccess />} />
        <Route path='/booking/invoice/:id' element={<BookingInvoice />} />
        {/* Admin Dashboard  */}
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/admin/appointments' element={<AdminAppointments />} />
        <Route path='/admin/patients' element={<Patients />} />
        <Route path='/admin/profile' element={<Profile />} />
        <Route path='/admin/reviews' element={<AdminReviews />} />
        <Route path='/admin/transaction' element={<Transactions />} />
        <Route path='/admin/specialites' element={<Specialites />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
