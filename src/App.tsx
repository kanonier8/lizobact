import React from 'react';
import { Provider } from 'react-redux';
import { Page } from './page';
import { Button } from './components/Button';
import { Product, ProductMobile } from './components/Product';
import { LogoWhite, LogoBlue } from "./components/Logo";
import {Progress} from "./components/Progress";
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Page />

        <Button isMargin isSuccess>Button 1</Button>
        <Button isMargin>Button 2</Button>
        <Button>Button 3</Button>

        <Product />
        <ProductMobile />
        <LogoBlue />
        <LogoWhite />

        <div>
          <Progress questions={[{}, {}, {}, {}, {}]}/>
        </div>

      </div>
    </Provider>
  );
}

export default App;
