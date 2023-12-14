import { createBrowserRouter } from 'react-router-dom';
import SignUpForm from '../pages/signup-form';

const router = createBrowserRouter([
    {
        path: '/',
        element: <SignUpForm />,
    },
]);

export default router;
