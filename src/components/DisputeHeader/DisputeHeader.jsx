import React from 'react';
import SearchBox from '../SearchBox';
import { Header, Title } from './style';

const DisputeHeader = _ => { 
  return (
    <Header>
      <Title>İtirazlar</Title>

      <SearchBox />
    </Header>
  )
}

export default DisputeHeader;