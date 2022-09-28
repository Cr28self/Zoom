import { useEffect, useState } from "react";


export default function useInput(initialValue){

    const [ value, setValue ] = useState(initialValue)

    const onChange = (e) => {
        //const value=e.target.value;
        const {target:{value}}=e;
        setValue(value);
      };
    
      return { value, onChange };
}

//비슷한 작업들을 하나의 커스텀 훅으로 해서 가능