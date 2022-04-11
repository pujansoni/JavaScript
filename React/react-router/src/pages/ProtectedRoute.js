import {Navigate} from "react-router-dom"

const ProtectedRoute = ({children, user}) => {
    // Here the children will contain the dashboard page
    if(!user) {
        return <Navigate to="/" />;
    }
    return children;
}

export default ProtectedRoute
