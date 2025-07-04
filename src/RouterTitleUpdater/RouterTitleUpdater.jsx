import { useLocation } from 'react-router';
import { useEffect } from 'react';

const RouteTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    let title = 'Events'; // default title

    if (path === '/') {
      title = 'Home | Home';
    } else if (path === '/manageEvents') {
      title = 'Manage Events | ManageEvents';
    } else if (path.startsWith('/updateEvent')) {
      title = 'Update Event | UpdatedEventPage';
    } else if (path === '/create-event') {
      title = 'Create New Event | CreateEvent';
    } else if (path === '/login') {
      title = 'Login | Login';
    } else if (path === '/register') {
      title = 'Register | Register';
    } else if (path.startsWith('/events/')) {
      title = 'Event Details | EventPage';
    } 
    else if (path === '/myBookings') {
      title = 'Manage Events | MyBookings';
    } 
    

    document.title = title;
  }, [location]);

  return null; 
};

export default RouteTitleUpdater;
