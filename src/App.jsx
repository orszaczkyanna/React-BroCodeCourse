import Card from './02_Cards/Card.jsx'
import Button from './03_CSS/Button/Button.jsx'
import ButtonSecond from './03_CSS/ButtonSecond.jsx'
import Student from './04_Props/Student.jsx'
import UserGreeting from './05_ConditionalRender/UserGreeting.jsx'

import List from './06_Lists/List.jsx'
import ListSimpleArray from './06_Lists/ListSimpleArray.jsx'
import ListObjectArray from './06_Lists/ListObjectArray.jsx'

import ButtonClick from './07_ClickEvents/Button.jsx'
import ProfilePictureButton from './07_ClickEvents/ProfilePictureButton.jsx'

import MyComponentUseState from './08_useState/MyComponentUseState.jsx';
import Counter from './08_useState/Counter';
import MyComponentOnChange from './09_onChange/MyComponentOnChange.jsx';
import ColorPicker from "./10_ColorPicker/ColorPicker.jsx";
import UpdaterFunction from './11_UpdaterFunction/UpdaterFunction'

function App() {


  // const fruits = [{ id: 1, name: "apple", calories: 95 },
  //                 { id: 2, name: "orange", calories: 45 },
  //                 { id: 3, name: "banana", calories: 105 },
  //                 { id: 4, name: "coconut", calories: 159 },
  //                 { id: 5, name: "pineapple", calories: 37 }]
  // const vegetables = [{ id: 6, name: "ptatoes", calories: 110 },
  //                     { id: 7, name: "celery", calories: 15 },
  //                     { id: 8, name: "carrots", calories: 25 },
  //                     { id: 9, name: "corn", calories: 63 },
  //                     { id: 10, name: "broccoli", calories: 50 }]

  return (
    <>
      {/* <Card /> */}
      {/* <Button />
      <ButtonSecond /> */}
      {/* <Student /> */}
      {/* <UserGreeting isLoggedIn={true} username="User" /> */}


      {/* <p>Simple Array List</p>
      <ListSimpleArray />
      <hr />
      <p>Object Array List</p>
      <ListObjectArray />
      <hr />
      <p>Reusable (props version)</p>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />} */}

      {/* <ButtonClick />
      <ProfilePictureButton /> */}

      {/* <MyComponentUseState />
      <Counter /> */}

      {/* <MyComponentOnChange /> */}

      {/* <ColorPicker /> */}

      {/* <UpdaterFunction /> */}
    </>
  )
}

export default App
