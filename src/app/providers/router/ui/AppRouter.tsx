import React, {Suspense} from 'react';
import Loading from "pages/LoadingPage/Loading";
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className={'page-wrapper'}>
                                {element}
                            </div>
                        )}
                    />
                ))}
                {/*<Route path='/info/:id' element={<MealInfo/>}/>*/}
                {/*<Route path='/ingredient/:name' element={<IngredientPage/>}></Route>*/}
                {/*<Route path='/search/:name' element={<SearchPage/>}></Route>*/}
                {/*<Route path='/seafood' element={<SeaFood/>}></Route>*/}
                {/*<Route path='/categories' element={<CategoryPage/>}></Route>*/}
                {/*<Route path="/category/:categoryName" element={<CategoryListPage/>}/>*/}
                {/*<Route path='*' element={<NotFound/>}></Route>*/}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;