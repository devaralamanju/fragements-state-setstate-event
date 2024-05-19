import React from 'react';

const ReactFragments = () => {
   return(
    <div style={{'display': 'flex', 'gap': 20, 'backgroundColor':'red','marginTop':'20px', 'marginBottom':'20px'}}>
        <FlexItems/>
    </div>
   )
}

function FlexItems(){
    return(
        <>
            <div>This is div1</div>
            <div>This is div2</div>
            <div>This is div3</div>
        </>
    )
}
export default ReactFragments