import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SpreadTest from "./210129/array/SpreadTest";
import FunctionObjectTest2 from "./210129/function/FunctionObjectTest2";
import Homework from "./210201/Homework/Homework";
import Homework2 from "./210201/Homework/Homework2";

import Prob from "./210202/exercise/Prob";
import NewSetTest from "./210203/Set-Test/NewSetTest";
import NewSetInitTest from "./210203/Set-Test/NewSetInitTest";
import AddSetTest from "./210203/Set-Test/AddSetTest";
import SetKeyIterationTest from "./210203/Set-Test/SetKeyIterationTest";
import SetEntryIterationTest from "./210203/Set-Test/SetEntryIterationTest";
import ForEachWithSet from "./210203/Set-Test/ForEachWithSet";
import NewMapTest from "./210203/map-test/NewMapTest";
import NewMapInitTest from "./210203/map-test/NewMapInitTest";
import MapSetTest from "./210203/map-test/MapSetTest";
import MapDeleteTest from "./210203/map-test/MapDeleteTest";
import MapIterationTest from "./210203/map-test/MapIterationTest";
import ForWithSetMap from "./210203/for-test/ForWithSetMap";
import IteratorTest from "./210203/iterator-test/IteratorTest";
import IteratorTest2 from "./210203/iterator-test/IteratorTest2";
import IteratorTest3 from "./210203/iterator-test/IteratorTest3";
import Review from "./210203/Set-Test/Review";


ReactDOM.render(
    <React.StrictMode>

        {/*<NewSetTest/>*/}
        {/*<NewSetInitTest/>*/}
        {/*<AddSetTest/>*/}
        {/*<SetKeyIterationTest/>*/}
        {/*<SetEntryIterationTest/>*/}
        {/*<ForEachWithSet/>*/}
        {/*<NewMapTest/>*/}
        {/*<NewMapInitTest/>*/}
        {/*<MapSetTest/>*/}
        {/*<MapDeleteTest/>*/}
        {/*<MapIterationTest/>*/}
        {/*<ForWithSetMap/>*/}
        {/*<IteratorTest/>*/}
        <IteratorTest2/>
        {/*<IteratorTest3/>*/}
        <Review/>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
