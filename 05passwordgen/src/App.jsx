import { useCallback, useState, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(0)
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [passwordText, setPasswordText] = useState('initialpasstext');
  
  //useRef hook
  const passwordRef = useRef(null)

  
  const genPass = useCallback(() => {
    let pass = ''
    const passLen = document.getElementById('rng_passLen').value;
    let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllow) charList += "1234567890"
    if(charAllow) charList += `!@$%^&*()-_=+\|[]{};:/?.><`;
    for (let i = 0; i < passLen; i++) {
      let charIndex = Math.floor(Math.random() * charList.length);
      pass += charList[charIndex];
    }
    setPasswordText(pass);
    console.log(charList, pass);
  }, [numAllow, charAllow, length, setPasswordText]);
  
  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(passwordText);
  }, [passwordText])

  useEffect(() => {
    genPass();
  }, [length, numAllow, charAllow, genPass])

  return (
    
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-green-700 bg-gray-800'>
        <h1 className='text-white text-center my-2'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">  
          <input 
            type="text"
            value={passwordText}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0"
          onClick={copyPassToClipboard}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" name="" id="rng_passLen" 
              onChange={(e) => {setLength(e.target.value)}}
              min="6"
              max="20"
              step="1"
              value={length}
              className='cursor-pointer'
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox" 
              defaultChecked={numAllow}
              name="" 
              id="chk_numAllow"
              onChange={() => {
                setNumAllow((prev) => !prev)
              }}
            />
            <label htmlFor="chk_numAllow">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="chk_charAllow"
              onChange={() => {
                setCharAllow((prev) => !prev )
              }}
            />
            <label htmlFor="chk_charAllow">Characters</label>
          </div>
          
        </div>
      </div>
    
  )

}

export default App
