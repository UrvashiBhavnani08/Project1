import Checkbox from '@mui/material/Checkbox';
import { Drawer, message} from 'antd';
import { useState } from 'react';
import { Field, Label, TabContentForm } from './styledComponents/StyledComponents';

import {
    UppercaseLetters,
    LowercaseLetters,
    Symbols,
    Numbers,
  } from "../data/Characters";

const RightBar = ({open, onClose}) => {

    const [messageApi, contextHolder] = message.useMessage();
    // const success = () => {
    //   messageApi.open({
    //     type: 'success',
    //     content: 'This is a success message',
    //   });
    // };
    
    const [password, setPassword] = useState("");
    const [strength, setStrength] = useState(20);
    const [includeUp, setIncludeUp] = useState(false);
    const [includeLow, setIncludeLow] = useState(false);
    const [includeNum, setIncludeNum] = useState(false);
    const [includeSym, setIncludeSym] = useState(false);
    const handlePassword = (e) => {

      let characterList = "";
  
      if (includeUp) {
        characterList += UppercaseLetters;
      }
  
      if (includeLow) {
        characterList += LowercaseLetters;
      }
  
      if (includeNum) {
        characterList += Numbers;
      }
  
      if (includeSym) {
        characterList += Symbols;
      }
  
      setPassword(createPassword(characterList));
    };
  
    const createPassword = (characterList) => {
      let password = "";
      const CharacterListLength = characterList.length;
  
      for (let i = 0; i < strength; i++) {
        const characterIndex = Math.floor(Math.random() * CharacterListLength);
        password += characterList.charAt(characterIndex);
      }
  
      return password;
    };
  
    const handleCopy = (e) => {
      navigator.clipboard.writeText(password);
      if (password.length > 0) {
        // setAlert("Password copied successfully..!");
        messageApi.open({
        type: 'success',
        content: 'Password copied successfully..!',
      });
      } else {
        // setAlert("Please Generate Password");
        messageApi.open({
            type: 'warning',
            content: 'Please Generate Password',
          });
      }
    };
  return (
    <>
    {contextHolder}
      <Drawer
        title="Password Generator"
        placement={"right"}
        closable={false}
        onClose={onClose}
        open={open}
        key={"right"}
      >
        <TabContentForm>
            
            <div style={{display:"flex", alignItems:"center"}}>
            <Field 
            value={password}
            style={{
                borderRadius:"6px 0px 0px 6px"}}
            />
            <button style={{

                background:"#1b98d0",
                padding:"13px 17px",
                position:"relative",
                top:"4px",
                color:"#fff",
                borderRadius:"0px 6px 6px 0px"

            }} onClick={handleCopy}>Copy</button>
            </div>

            <div className="mt-5">
                 <Label>Password length</Label>
                 <Field 
                 defaultValue={strength}
                 onChange={(e) => setStrength(e.target.value)}
                 type="number"
                 id="password-strength"
                 name="password-strength"
                 max="20"
                 min="10"
                 />
            </div>

            <div className="mt-5" 
            style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"20px"}}
            >

            <Label>Include Uppercase Letters</Label>
            <Checkbox
              checked={includeUp}
              id="uppercase-letters"
              name="uppercase-letters"
              onChange={(e) => setIncludeUp(e.target.checked)}
            />

            </div>


            <div className="mt-5" 
            style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"20px"}}
            >

            <Label>Include Lowercase Letters</Label>
            <Checkbox
            onChange={(e) => setIncludeLow(e.target.checked)}
            checked={includeLow}
            id="lowercase-letters"
            name="lowercase-letters"
            />

            </div>


            <div className="mt-5" 
            style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"20px"}}
            >

            <Label>Include Symbols</Label>
            <Checkbox
            onChange={(e) => setIncludeSym(e.target.checked)}
            checked={includeSym}
            id="include-symbols"
            name="include-symbols"
            />

            </div>


            <div className="mt-5" 
            style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"20px"}}
            >

            <Label>Include Numbers</Label>
            <Checkbox
            onChange={(e) => setIncludeNum(e.target.checked)}
            checked={includeNum}
            type="checkbox"
            id="include-number"
            name="include-number"
            />

            </div>


            <div className="mt-5">
                <button onClick={handlePassword} className="password-generator-btn" >Generate Password</button>
            </div>
        </TabContentForm>
      </Drawer>
    </>
  );
};
export default RightBar;