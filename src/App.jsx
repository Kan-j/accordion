import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data'
import Questions from './Questions'
function App() {
  const [questions, setQuestions] = useState(data)

  return (
    <>
      <section>
        <Questions questions={questions}/>
      </section>
    </>
  )
}

export default App
