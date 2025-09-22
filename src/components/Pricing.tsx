import React from 'react';

export default function Pricing() {
  return (
	  <section className="pricing fade-up !z-[10000]" id="pricing">
      <div className="pricing-container">
        <div className="section-header">
          <h2 className="section-title">Access Levels</h2>
          <p className="section-subtitle">Choose your gateway to the future of collaboration</p>
        </div>

        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="plan-name">Initiate</div>
			<div className="plan-price">$49</div>
            <div className="plan-period">per neural link</div>
            <ul className="plan-features">
              <li>Basic quantum processing</li>
              <li>5 holographic workspaces</li>
              <li>Standard encryption</li>
              <li>Community support matrix</li>
              <li>Reality sync enabled</li>
            </ul>
            <a href="#" className="btn-secondary">Enter System</a>
          </div>

			<div className="pricing-card featured">
            <div className="plan-name">Nexus</div>
            <div className="plan-price">$149</div>
            <div className="plan-period">per neural link</div>
            <ul className="plan-features">
              <li>Advanced quantum algorithms</li>
              <li>Unlimited holo-workspaces</li>
              <li>Quantum encryption fortress</li>
              <li>Priority neural support</li>
              <li>Mind-reading analytics</li>
              <li>Hyperdrive sync protocol</li>
            </ul>
            <a href="#" className="btn-primary">Jack In</a>
          </div>

          <div className="pricing-card">
            <div className="plan-name">Transcend</div>
            <div className="plan-price">$399</div>
            <div className="plan-period">per neural link</div>
            <ul className="plan-features">
              <li>Infinite processing power</li>
              <li>Custom reality matrices</li>
              <li>Temporal encryption layers</li>
              <li>Direct neural interface</li>
              <li>Predictive consciousness</li>
              <li>Quantum entanglement sync</li>
            </ul>
            <a href="#" className="btn-secondary">Ascend</a>
          </div>
        </div>
      </div>
    </section>
  );
}
