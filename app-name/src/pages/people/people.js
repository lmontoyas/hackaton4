import React from 'react';
import { useEffect, useState } from 'react';
import { fetchPeople } from '../../api/dataService';
import 'devextreme/data/odata/store';
import DataGrid, { Column, } from 'devextreme-react/data-grid';

 
export default function People() {
    const [peopleWithGroupCount, setPeopleWithGroupCount] = useState();
    
    useEffect (() =>{
        fetchPeople()
        .then((response)=>{
            const peopleData = response.data;

            console.log(peopleData);
            setPeopleWithGroupCount(peopleData.map(people =>({
                id: people.id,
                name: people.name,
            }))) 
        }).catch((error) =>{
            console.log(error);
        })    
    },[]);

    return (
        <DataGrid
    
        className={'dx-card wide-card'}
        dataSource={peopleWithGroupCount}
        showBorders={false}
        >
            <Column dataField='id' width={50} />
            <Column dataField='name' />
          </DataGrid>
      )
}
