import { 
    createHashRouter, 
    createRoutesFromElements, 
    Route
} from "react-router-dom";

import App from './App'
import HomePage from "./pages/HomePage";

const getItems = async ({ request }) => {
    const response = await fetch('https://691b31912d8d78557571f317.mockapi.io/item/item');
    const json = await response.json();
    const url = new URL(request.url);
    const query = new URLSearchParams(url.search);
    
    const product = query.get('product') || 'burger'; 
    
    return json.filter(item => item.category?.includes(product));
};

const routes = createRoutesFromElements([
    <Route path='/' element={ <App /> }>
         <Route index element={ <HomePage /> } loader={ getItems } />
    </Route>
]);

const router = createHashRouter(routes);
export default router;
