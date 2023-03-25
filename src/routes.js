import Category from "./pages/Category/Category";
import Index from "./pages/Index/Index";
import CompareProducts from "./pages/CompareProducts/CompareProducts";
import Contact from "./pages/Contact/Contact"
import Search from "./pages/Search/Search"

const routes =[
    
    { path: '/', element: <Index /> },
    { path: '/category-info/', element: <Category /> },
    { path: '/category-info/compare', element: <CompareProducts /> },
    { path: '/contact', element: <Contact /> },
    { path: '/search/:value', element: <Search /> },
]

export default routes