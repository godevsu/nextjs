import Image from 'next/image';
import frameURL from './frame.svg' 


export default function SVGimport() {

console.log(frameURL);

  return(
    <>
    {console.log(frameURL)}
      <img src={frameURL.src} />
    </>
  )
}