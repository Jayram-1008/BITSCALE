import { Box } from '@mui/material';
import './App.css';
import NoPriceCart from './components/NoPriceCart';
import PriceCart from './components/PriceCart';
import ToggleButton from './components/ToggleButton';
import { utilsData } from './utils';
import { useState } from 'react';

function App() {
  const data = utilsData;

  const monthlyData = data.filter(item => item.type === 'monthly');
  const monthlyDataWithFree = monthlyData.filter(item => item.ispaid === 'false');
  const monthlyDataWithPaid = monthlyData.filter(item => item.ispaid === 'true');
  const annualyData = data.filter(item => item.type === 'annual');
  const annualyDataWithFree = annualyData.filter(item => item.ispaid === 'false');
  const annualyDataWithPaid = annualyData.filter(item => item.ispaid === 'true');

  const [activeButton, setActiveButton] = useState('monthly');

  if (activeButton === 'monthly') {
    return (
      <div className="App" style={{margin:'5px 10px', padding:'10px'}}>
        <ToggleButton activeButton={activeButton} setActiveButton={setActiveButton} />
        {/* Check if data exists for monthly plans */}
        {monthlyDataWithFree.length > 0 && monthlyDataWithPaid.length > 0 ? (
          <Box sx={{ display: 'flex', gap: '20px', justifyContent: 'center', mt: 2 }}>
            <NoPriceCart
              upperTitle1={monthlyDataWithFree[0]?.upperTitle1}
              headingText={monthlyDataWithFree[0]?.headingText}
              headingSummery={monthlyDataWithFree[0]?.headingSummery}
              features={monthlyDataWithFree[0]?.features}
              additionalFeatures={monthlyDataWithFree[0]?.additionalFeatures}
              buttonText={monthlyDataWithFree[0]?.buttonText}
            />
            <PriceCart
              upperTitle1={monthlyDataWithPaid[0]?.upperTitle1}
              upperTitle2={monthlyDataWithPaid[0]?.upperTitle2}
              price={monthlyDataWithPaid[0]?.price}
              offer={monthlyDataWithPaid[0]?.offer}
              cutPrice={monthlyDataWithPaid[0]?.cutPrice}
              features={monthlyDataWithPaid[0]?.features}
              additionalFeatures={monthlyDataWithPaid[0]?.additionalFeatures}
              buttonText={monthlyDataWithPaid[0]?.buttonText}
              backgroundColor={monthlyDataWithPaid[0]?.backgroundColor}
            />
            <PriceCart
              upperTitle1={monthlyDataWithPaid[1]?.upperTitle1}
              upperTitle2={monthlyDataWithPaid[1]?.upperTitle2}
              price={monthlyDataWithPaid[1]?.price}
              offer={monthlyDataWithPaid[1]?.offer}
              cutPrice={monthlyDataWithPaid[1]?.cutPrice}
              features={monthlyDataWithPaid[1]?.features}
              additionalFeatures={monthlyDataWithPaid[1]?.additionalFeatures}
              buttonText={monthlyDataWithPaid[1]?.buttonText}
              backgroundColor={monthlyDataWithPaid[1]?.backgroundColor}
            />
            <NoPriceCart
              upperTitle1={monthlyDataWithFree[1]?.upperTitle1}
              headingText={monthlyDataWithFree[1]?.headingText}
              headingSummery={monthlyDataWithFree[1]?.headingSummery}
              features={monthlyDataWithFree[1]?.features}
              additionalFeatures={monthlyDataWithFree[1]?.additionalFeatures}
              buttonText={monthlyDataWithFree[1]?.buttonText}
            />
          </Box>
        ) : (
          <p>No monthly data available.</p>
        )}
      </div>
    );
  }

  if (activeButton === 'annual') {
    return (
      <div className="App" style={{margin:'5px 10px', padding:'10px'}}>
        <ToggleButton activeButton={activeButton} setActiveButton={setActiveButton} />
        {/* Check if data exists for annual plans */}
        {annualyDataWithFree.length > 0 && annualyDataWithPaid.length > 0 ? (
          <Box sx={{ display: 'flex', gap: '20px', justifyContent: 'center', mt: 2 }}>
            <NoPriceCart
              upperTitle1={annualyDataWithFree[0]?.upperTitle1}
              headingText={annualyDataWithFree[0]?.headingText}
              headingSummery={annualyDataWithFree[0]?.headingSummery}
              features={annualyDataWithFree[0]?.features}
              additionalFeatures={annualyDataWithFree[0]?.additionalFeatures}
              buttonText={annualyDataWithFree[0]?.buttonText}
            />
            <PriceCart
              upperTitle1={annualyDataWithPaid[0]?.upperTitle1}
              upperTitle2={annualyDataWithPaid[0]?.upperTitle2}
              price={annualyDataWithPaid[0]?.price}
              offer={annualyDataWithPaid[0]?.offer}
              cutPrice={annualyDataWithPaid[0]?.cutPrice}
              features={annualyDataWithPaid[0]?.features}
              additionalFeatures={annualyDataWithPaid[0]?.additionalFeatures}
              buttonText={annualyDataWithPaid[0]?.buttonText}
              backgroundColor={annualyDataWithPaid[0]?.backgroundColor}
            />
            <PriceCart
              upperTitle1={annualyDataWithPaid[1]?.upperTitle1}
              upperTitle2={annualyDataWithPaid[1]?.upperTitle2}
              price={annualyDataWithPaid[1]?.price}
              offer={annualyDataWithPaid[1]?.offer}
              cutPrice={annualyDataWithPaid[1]?.cutPrice}
              features={annualyDataWithPaid[1]?.features}
              additionalFeatures={annualyDataWithPaid[1]?.additionalFeatures}
              buttonText={annualyDataWithPaid[1]?.buttonText}
              backgroundColor={annualyDataWithPaid[1]?.backgroundColor}
            />
            <NoPriceCart
              upperTitle1={annualyDataWithFree[1]?.upperTitle1}
              headingText={annualyDataWithFree[1]?.headingText}
              headingSummery={annualyDataWithFree[1]?.headingSummery}
              features={annualyDataWithFree[1]?.features}
              additionalFeatures={annualyDataWithFree[1]?.additionalFeatures}
              buttonText={annualyDataWithFree[1]?.buttonText}
            />
          </Box>
        ) : (
          <p>No annual data available.</p>
        )}
      </div>
    );
  }

  return null;
}

export default App;
