import { useEffect, useRef } from "react";


export default function PreviousValue(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    // console.log('previous value '+ref.current )
    return ref.current;
  }