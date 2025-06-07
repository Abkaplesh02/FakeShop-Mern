import { Provider } from 'react-redux'
import './App.css'
import Body from './Components/Body'
import store, { persistor } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
 

  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>   
      <Body/>
        </PersistGate>
      </Provider>
    </div>
  )
}

export default App
