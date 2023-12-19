import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export default function DividerText() {
  const content = (
    <div>
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.`}
    </div>
  );

  return (
    <div>

 
    <Root>
      {content}
      <Divider>CENTER</Divider>
      {content}
      <Divider textAlign="left">LEFT</Divider>
      {content}
      <Divider textAlign="right">RIGHT</Divider>
      {content}
      <Divider>
        <Chip label="CHIP" />
      </Divider>
      {content}



    </Root>


<div className='whyUrban-container' style={{display:"flex", justifyContent:"space-between"}}>
      <div className='whyUrbanEdge'>
        <Root>
        hello this is first one ewrfwefw werfrw fwe fwewef fw efef wefw wef wfwef
        <Divider>Left</Divider>
        hello this is first one fwef wefw wef wfw wef 
        <Divider>Right</Divider>
        hello this is first one
        <Divider>Center</Divider>
        </Root>
      </div> <br/>

      <div className='vertical-line'></div>

      <div className='whyUrban2'>
        <Root>
        hello this is first one ewrfwefw werfrw fwe fwewef fw efef wefw wef wfwef
        <Divider>Left</Divider>
        hello this is first one fwef wefw wef wfw wef 
        <Divider>Right</Divider>
        hello this is first one
        <Divider>Center</Divider>
        </Root>
      </div>

      </div>
      </div>
      
  );
}