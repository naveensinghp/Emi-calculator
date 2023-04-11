import React from "react";
import styled from "styled-components";



function App() {
    //const [secret,setSecret] = React.useState();
  return (
    <>
        <Wrapper>
            <Title>
                Calculate your monthly instalment options.
            </Title>
            <Topside>
                <form>
                    <Select>
                        <option value="mcb_bank">Standard Chart Bank</option>
                    </Select>
                </form>
                <Input value="NaveenSingh" type="text" />
                <Caculate>Calculate</Caculate>
            </Topside>
        </Wrapper>
    </>
  );
}

const Caculate = styled.button`
    padding: 16px 26px;
    font-size: 16px;
    text-align: center;
    color: white;
    border: none;
    background-color: #0071e3;
     border-radius: 16px;
`;

const Input = styled.input`
    height: 50px;
    border-color: rgb(210, 210, 215);
    border-radius: 20px;
`;

const Select = styled.select`
    width: 250px;
    padding: 20px;
    border-radius: 20px;
    border-color: rgb(210, 210, 215);
    font-family: system-ui;
    font-size: 1rem;
`;


const Topside = styled.div`
    padding-top: 120px;
    display: flex;
    flex-direction: row;
    gap: 120px;
    border-radius: 20px;
`;

const Title = styled.div`
    font-size: 2rem;`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;    
`;

export default App;
