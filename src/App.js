import React, { useEffect, useState } from 'react';
import data from './data.json'
import './App.css';
import SideBar from './components/SideBar/SideBar';
import Step1 from './components/Step1/Step1';
import Step2 from './components/Step2/Step2';
import Step3 from './components/Step3/Step3';
import Step4 from './components/Step4/Step4';
import Summary from './components/Summary/Summary';




function App() {
  const[tabPlan, setTabPlan]=useState([])        // step2
  const [pick, setPick] = useState(true)
  const [tabPick, setTabPick] = useState([])
  const [checked, setChecked] = useState(true);

  const handlePlan = (item) => {
    if (tabPlan.length!==1) {
      setTabPlan([...tabPlan, item])  
      // console.log(item)
  }
    }
      

  const handlePick = (item) => {
    if (pick) {
      setTabPick([...tabPick, item])  
    }
  }


useEffect(()=>
  console.log(tabPick)
)



  //slide page
  const [step, setStep] = useState(1)

  let page;
  if (step === 1) {
    page = <Step1 step={step} setStep={setStep} />
  }
  else if (step === 2) {
    page = <Step2
      step={step} setStep={setStep}
      data={data.select}
      checked={checked} setChecked={setChecked}
      tabPlan={tabPlan}
      setTabPlan={setTabPlan}
      handlePlan={handlePlan}
    />
  }
  else if (step === 3) {
    page = <Step3 step={step}
      pick={pick} setPick={setPick}
      data={data.add}
      setStep={setStep}
      tabPick={tabPick} setTabPick={setTabPick}
      handlePick={handlePick} />
  }
  else if (step === 4) {
    page = <Step4 step={step} setStep={setStep} 
    tabPick={tabPick} setTabPick={setTabPick}
    tabPlan={tabPlan} setTabPlan={setTabPlan}
    checked={checked}/>
  }
  else 
  {
    page= <Summary/>   
  }

  return (
    <div className="App">
      <SideBar  step={step} setStep={setStep} />
      <div className=''>
        {page}
      </div>
    </div>
  );
}

export default App;

