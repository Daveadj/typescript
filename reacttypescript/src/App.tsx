

import './App.css'
import { Usercard } from './components/01_RequiredOptionalProps'
import { GreetA, GreetB } from './components/02_DefaultProps'
import { Panel, RequiredChildrenPanel } from './components/03_ChildreenReactNode'
import { Badge } from './components/04_AsConst'
import { Button } from './components/05_componentsProps'
import { Counter } from './components/06_state'
import { TypedUseReducer } from './components/08_TypedUseReducer'

function App() {


  return (
    <>
     {/* <Usercard id="1" name="John Doe" substitle= {<p>Subtitle</p>} />
     <GreetA />
     <GreetB name="John Doe" shout={true} /> */}
     {/* <Panel title='Panel' children={<ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
     </ul>} />

     <RequiredChildrenPanel title='RequiredChildrenPanel' children={<ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
     </ul>} />

     <RequiredChildrenPanel title='RequiredChildrenPanel'>  <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
     </ul></RequiredChildrenPanel>

     <Badge label="Badge" variant="tertiary">  
      
     </Badge> */}

     {/* <Button onClick={() => alert('clicked')}> Click</Button> */}

     <Counter/>
     <TypedUseReducer/>
    </>
  )
}

export default App
