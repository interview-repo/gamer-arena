import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { selectDisputes, searchDisputes, searchDisputesPage } from "../../redux/actions";

import DisputesItem from "../../components/DisputesItem";
import DisputeHeader from "../../components/DisputeHeader";
import { DisputeList, Pager, Previous, Next, Alert } from './style'
import Loading from "../../components/Loading";



const DisputesList = ({
  searchedDisputes,
  searchDispatch,
  searchPageDispatch,

  disputesDispatch,
  isFetching,
  data,
}) => {

  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
    const div = document.getElementById('dispute');
    div.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  }, [page]);



  const fetchData = () => {
    if(searchedDisputes){
      searchPageDispatch(page);
      searchDispatch(searchedDisputes, page);      

    }else{
      disputesDispatch(page);
    }
  };
  
  
  return (
    <>
      <DisputeHeader />
      <DisputeList>
        
        {isFetching && <Loading />}
        {!isFetching && data?.results?.length === 0 && <Alert>Sonuç Bulunamadı</Alert>}
        {!isFetching && data?.results?.length > 0 && (
          
          <>
            {data?.results.map((item, index) =>  <DisputesItem key={index} data={item} />)}
            {data?.previous || data?.next ? (

              <Pager>
                <Previous
                  className="btn"
                  disabled={!data?.previous} 
                  onClick={() => setPage(page -1)} />

                <Next 
                  className="btn"
                  disabled={!data?.next} 
                  onClick={() => setPage(page + 1)} />
              </Pager>
              
            ) : (<></>)}

          </>
        
        )}

      </DisputeList>
    </>
  );
};



const mapStateToProps = ({ 
  selectedDisputes, 
  disputesResults, 

  searchedDisputes,
  searchedDisputesPage,
  searchedResults 

}) => {
  
  if(searchedDisputes){

    return {
      searchedDisputes,
      ...searchedResults[searchedDisputes][searchedDisputesPage],
    };


  }else{
    return {
      selectedDisputes,
      ...disputesResults[selectedDisputes],
    };
  }

  
};
const mapDispatchToProps = (dispatch) => {
  return {
    disputesDispatch: (value) => dispatch(selectDisputes(value)),
    searchDispatch: (value, page) => dispatch(searchDisputes(value, page)),
    searchPageDispatch: (page) => dispatch(searchDisputesPage(page)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DisputesList);