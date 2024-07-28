import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';

const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<PageLoader />}>
                        <div className="page-wrapper">
                            {element}
                        </div>
                    </Suspense>
                )}
            />
        ))}
        {/* <Route path='/info/:id' element={<MealInfo/>}/> */}
        {/* <Route path='/ingredient/:name' element={<IngredientPage/>}></Route> */}
        {/* <Route path='/search/:name' element={<SearchPage/>}></Route> */}
        {/* <Route path='/seafood' element={<SeaFood/>}></Route> */}
        {/* <Route path='/categories' element={<CategoryPage/>}></Route> */}
        {/* <Route path="/category/:categoryName" element={<CategoryListPage/>}/> */}
        {/* <Route path='*' element={<NotFound/>}></Route> */}
    </Routes>
);

export default AppRouter;
