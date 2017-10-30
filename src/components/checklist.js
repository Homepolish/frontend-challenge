import React from 'react';
import styled from 'styled-components'

const SyledChecklist = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const Checklist = ({ tasks }) => (
  <SyledChecklist>
    <div>The checklist</div>
  </SyledChecklist>
);

export default Checklist;
