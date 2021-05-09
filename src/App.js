import './App.css';

// import { render } from '@testing-library/react';

const plan = {
  "Basic": {
    "title":"Basic",
    "description":"For team and developers",
    "price":"0",
    "unit":"/month",
    "button":"Join for free",
  },
  "Team": {
    "title":"Team",
    "description":"Advanced collaboration and support for teams.",
    "price":"2",
    "unit":"/user/month",
    "button":"Continue with team",
  },
  "Enterprise": {
    "title":"Enterprise",
    "description":"Security and flexible deployment",
    "price":"40",
    "unit":"/user/month",
    "button":"Contact Sales",
  },
}
function App() {
  return (
    <div className="App">
      <div className="background-stripe">

      </div>
      <div className="card">
        
        <div className="card-header">
          <h3>
            Ready to get started ?
          </h3>
          <a href="#">View all pricing plans</a>
        </div>

        <div className="pricing-card-group">
          <PricingCard plan={plan["Basic"]}/>
          <PricingCard plan={plan["Team"]}/>
          <PricingCard plan={plan["Enterprise"]}/>
        </div>

      </div>
    </div>
  );
}

function PricingCard(props){
  return <div className="pricing-card">
  <h3 className="pricing-card-title"> {props.plan.title}</h3>
  
  <p className="body-text">{props.plan.description}</p>
  
  <div className="pricing-card-amount">
    <h1 className="pricing-card-price">${props.plan.price}</h1>
     <div className="body-text">{props.plan.unit}</div>
  </div>

  <button className="submit-button">{props.plan.button}</button>
 
</div>
}

export default App;
