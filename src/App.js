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
  const [tabPlanChoice, setTabPlanChoice] = useState()        // step2
  const [tabPicked, setTabPicked] = useState([])            //step3
  // const [pick, setPick] = useState(true)         //step3
  const [checked, setChecked] = useState(true);    //buttons et checkbox
  const[ totalPrice, setTotalPrice]=useState(null)   // step4 total 

  //step2 => tableau pour calcul total
  const handlePlan = (item) => {
    setTabPlanChoice(item)
  }
  useEffect(() =>
    console.log(tabPlanChoice)
  )


  const handlePickToggle = (element) => {
    const isSelected = tabPicked.includes(element);
    if (isSelected) {
      setTabPicked(tabPicked.filter((selected) => selected !== element));
    } else {
      setTabPicked([...tabPicked, element]);
    }
  };

  // useEffect(()=>
  //   console.log(tabPicked)
  // )


  // cacul total

  


  //slide pages
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
      // tabPlan={tabPlan}
      // setTabPlan={setTabPlan}
      handlePlan={handlePlan}
    />
  }
  else if (step === 3) {
    page = <Step3 step={step}
      // pick={pick} setPick={setPick}
      data={data.add}
      setStep={setStep}
      tabPicked={tabPicked} handlePickToggle={handlePickToggle}
    />

    //  handlePick={handlePick}
  }
  else if (step === 4) {
    page = <Step4 step={step} setStep={setStep}
      tabPicked={tabPicked} setTabPicked={setTabPicked}
      // tabPlan={tabPlan} setTabPlan={setTabPlan}
      tabPlanChoice={tabPlanChoice} setTabPlanChoice={setTabPlanChoice}
      checked={checked}
      totalPrice={totalPrice} />
  }
  else {
    page = <Summary/>
  }

  return (
    <div className="App">
      <SideBar step={step} setStep={setStep} />
      <div className=''>
        {page}
      </div>
    </div>
  );
}

export default App;

