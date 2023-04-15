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
        <Wrapper>
            <Title>
                Calculate your monthly instalment options.
            </Title>
            <Topside>
                <form>
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
                   <Subtile>
                    Bank
                   </Subtile>
                </form>
                <Input value="NaveenSingh" type="text" />
                <Caculate>Calculate</Caculate>
            </Topside>
            <div style={{'display': 'flex'}}>
                <div>Terms</div>
                <div>Monthly instalment</div>
            </div>
            {secret}
        </Wrapper>
        
    </>
  );
}

const Subtile = styled.span`
    position: absolute;
    top: 11.2rem;
    left: 40rem;
    right: 2rem;
    font-size: 12px;
    padding: 10px;
    color:  #aeaeb0;

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
`;

const Select = styled.select`
    width: 250px;
    padding: 29px  18px 15px 20px;
    border-radius: 15px;
    border-color: rgb(210, 210, 215);
    font-family: system-ui;
    font-size: 1rem;
    :after{

    }
`;


const Topside = styled.div`
    padding-top: 120px;
    display: flex;
    flex-direction: row;
    gap: 50px;
    border-radius: 20px;
`;

const Title = styled.div`
    font-size: 2rem;
        
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;    
`;

export default App;
