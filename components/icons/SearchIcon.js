import styled from "styled-components";

export default function SearchIcon({className="w-6 h-6"}){

    const Icon = styled.div`
    width: 100%;
    background-image: url(https://clipground.com/images/magnifing-glass-clipart-8.jpg);
    background-size: cover;
    height: 0;
    padding: 0; /* reset */
    padding-bottom: 92%;
    border: thin dotted darkgrey;
    `
    return(
    <>
    <Icon></Icon>
    </>
    )
};


// https://icons8.com/icon/132/search
