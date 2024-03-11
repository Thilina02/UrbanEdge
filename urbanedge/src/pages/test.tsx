import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

function estimated(event: React.FormEvent<HTMLFormElement>) { // Explicitly defining the type for event parameter
  event.preventDefault();
  var state = document.getElementById('mycheck') as HTMLInputElement;

  if(!state.checked){
    window.alert("please press the button");

    return;
  }else{
    alert("done and dusted");
  }

  // Your function logic here
}

export default function DividerText() {
  const content = (
    <div>
       <input type='checkbox' id='mycheck'></input>
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.`}
  
    </div>
  );

  return (
    <Root>
      <form onSubmit={estimated}> {/* Use the estimated function as the onSubmit handler */}
        {content}
        <button type="submit">Submit</button> {/* Button to submit the form */}
      </form>
    </Root>
  );
}
