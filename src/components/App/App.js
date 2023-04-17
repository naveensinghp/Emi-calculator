import React from "react";
import styled from "styled-components";



const banks = [
    {
        bankname: "American Express"
    },
    {
        bankname: "Bank of Baroda"
    },
    {
        bankname: "Bank of Baroda"
    },{
        bankname: "Citibank"
    },{
        bankname: "HDFC Bank"
    },{
        bankname: "HSBC"
    },{
        bankname: "ICIC Bank"
    },{
        bankname: "State Bank"
    },
];

function App() {
    const [secret,setSecret] = React.useState();
  return (
    <>
        <Parent>
            <Title>
                Calculate your monthly instalment options.
            </Title>
            {/* Child */}
            <Topside>
                <form>
                      {/* dropdown Child -1 */}
                      <Select
                        id="bankemi"
                        value={secret}
                        onChange={event => {
                            setSecret(event.target.value)
                        }}
                    >
                    {banks.map(option => (
                        <option 
                            key= {option.bankname}
                            value={option.bankname}>
                                {option.bankname}
                            </option>
                        ))}
                    </Select>
                     {/* dropdown Child - 2 */}
                    <Input 
                        id="order-amount"
                        value="1000" 
                        type="number" 
                    />
                     {/* dropdown Child -3 */}
                    <Caculate>Calculate</Caculate>
                </form>
            </Topside>
            <Terms>
                <div>Terms</div>
                <div></div>
                <div>Monthly Instalments</div>
            </Terms>
        </Parent>
        
    </>
  );
}


const Terms = styled.div`
    display: flex;
    gap: 50px;
    flex-direction: row;
`;


const Caculate = styled.button`
    padding: 16px 50px;
    font-size: 16px;
    text-align: center;
    color: white;
    border: none;
    background-color: #0071e3;
    border-radius: 14px;
`;
const Input = styled.input`
    height: 50px;
    border-color: rgb(210, 210, 215);
    border-radius: 15px;
    border-style: solid;
`;

const Select = styled.select`
    width: 250px;
    padding: 29px  18px 15px 20px;
    border-radius: 15px;
    border-color: rgb(210, 210, 215);
    font-family: system-ui;
    font-size: 1rem;
`;

const Topside = styled.div`
    padding-top: 120px;
    display: flex;
    gap: 50px;
`;

const Title = styled.div`
    font-size: 2rem;   
`;

const Parent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`


export default App;
