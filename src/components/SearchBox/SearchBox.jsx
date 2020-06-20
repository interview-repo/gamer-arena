import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from "../../redux/actions";
import IconSearch from "../../static/icons/IconSearch.png";
import { Search, Input, Button } from './style';

const SearchBox = _ => { 

  const [val, setVal] = useState("");
  const dispatch = useDispatch()

  const search = () => {
    if(val.length){
      dispatch(actions.searchDisputesPage(1))    
      dispatch(actions.searchDisputes(val)) 
    }else{
      dispatch(actions.searchDisputes(false)); 
    }
  }

  const onKeyDown = (e) => { if (e === "Enter") search() }

  return (
    <Search>
      <Input
        placeholder="Kullanıcı Adı"
        type="text"
        minLength={1}
        value={val}
        onChange={(e) => setVal(e.target.value)}
        onKeyDown={(e) => onKeyDown(e.key)}
      />
      <Button onClick={search}>
        <img src={IconSearch} alt="" />
      </Button>
    </Search>
  )
}

export default SearchBox;