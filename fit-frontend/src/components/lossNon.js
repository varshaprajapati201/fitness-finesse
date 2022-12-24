import React, { Component } from 'react'

export default class lossNon extends Component {
  render() {
    return (
   

<div className="associatePage2 associatePage">
    
 
    <div className="vegLossHeading">WeightLoss Diet (Non-Veg)</div>
    <div className="wtLossTips">
        <div className="vegLossHeadingTips">PRO TIPS</div>
        <ul className="vegLossBulletPoints">
  <li className="vegLossBulletPoints">Filling half of your plate with non-starchy vegetables.</li>
  <li className="vegLossBulletPoints">Incorporating protein at every meal and snack.</li>
  <li className="vegLossBulletPoints">Opting for complex carbs. </li>
  <li className="vegLossBulletPoints">Watching your portions of high-calorie foods.</li>
  <li className="vegLossBulletPoints">Limiting highly processed foods.</li>
</ul>
</div>

<div className="vegImg"> 
    <img src={require('../images/non1.png')}   alt="vegg"/>
    <img src={require('../images/non2.png')}  alt="veg"/>
    <img id="vegImg3" src={require('../images/non3.png')}   alt="ve"/>
</div>
    
    
</div>

      
    )
  }
}
