import React from "react";
import styled from "styled-components";
import { EMIBANKS } from "../../constants";


function App() {
    const [secret,setSecret] = React.useState("State Bank");
  return (
    <>
        <Parent>
            <Title>Calculate your monthly instalment options.</Title>
            <Topside>
                <Select
                    id="bankemi"
                    required
                    name="emibank"
                    value={secret}
                    onChange={event => {
                        setSecret(event.target.value)
                    }}>
                    <option value="">- Select Bank -</option>
                    <optgroup label="Banks">
                        {EMIBANKS.map(option => (
                        <option 
                            key= {option.id}
                            value={option.bankname}>{option.bankname}
                        </option>
                        ))}
                    </optgroup>
                </Select>
                <Input 
                    id="order-amount"
                    value="1000" 
                    type="number" 
                    onChange={(event) => {
                        setSecret(event.target.value);
                    }}
                />
                <Caculate>Calculate</Caculate>
            </Topside>
            <Height />
            <Terms>
                <div>Terms</div>
                <div>Monthly Instalments</div>
            </Terms>
            <Height />
            <div className="parent" 
                        style={{
                            width: '100%',
                            backgroundColor: 'yellow',
                            padding: '20px',
                            display: 'flex',
                            justifyContent:'space-evenly',
                            flexDirection: 'row',
                            alignItems: 'baseline'
                    }}
                >
                    <div className="children">
                        <div style={{
                            color: '#bf4800',
                            fontWeight: 'lighter'
                            
                            }}>
                            No Cost EMI
                        </div>
                        <div style={{
                            fontWeight: 'bold'
                        }}
                        
                        >3 Instalments</div>
                        <div>₹10000.00 total cost includes 14% pa</div>
                    </div>
                    <div className="children-two">
                        <div style={{
                            fontWeight: 'bold',
                            fontSize: '2rem',
                            FontFace: 's'
                        }}
                        
                        >₹1667.00/mo.</div>
                        <div style={{
                            color: '#bf4800'
                        }}

                          >Includes total savings of ₹229.00.</div>
                    </div>
                </div>
        </Parent>
        
    </>
  );
}



const Nocostemi = styled.div`
    width: 100%;
    background-color: beige;
`;

const Height = styled.div`
    height: 20px;
`;

const Terms = styled.div`
    background-color: hotpink;
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: baseline;
`;


const Caculate = styled.button`
    padding: 20px 60px;
    font-size: 16px;
    text-align: center;
    color: white;
    border: none;
    background-color: #0071e3;
    border-radius: 14px;
`;
const Input = styled.input`
    height: 60px;
    border-color: rgb(210, 210, 215);
    border-radius: 15px;
    border-style: solid;
    width: 200px;
    font-size: 1rem;
    text-align: center;
`;

const Select = styled.select`
    width: 100%;
    padding: 29px  18px 15px 20px;
    background-color: yellow;
    border-color: rgb(210, 210, 215);
    font-family: 'Jost', sans-serif;
    
     &:after{
        content: "\256";
        border-radius: 15px;
    }
`;

const Topside = styled.form`
    padding-top: 100px;
    display: flex;
    gap: 20px;
    position: relative;
    font-size: 1.4rem;
    background-color: antiquewhite;
    border-radius: 15px;
    
`;

const Title = styled.div`
    padding-top: 120px;
    font-size: 2.5rem;
    font-weight: bold;
`;

const Parent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Jost', sans-serif;
`


export default App;
