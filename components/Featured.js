import Center from "./Center";
import styled from "styled-components";
import PrimaryBtn from "./Button";
import Button from "./Button";
import ButtonLink from "./ButtonLink";

export default function Featured({featuredProduct}) {

    const Bg = styled.div`
    
    background-color: #EEE;
    padding: 50px 0;
    `
    const Wrapper = styled.div`
        display: grid;
        grid-template-columns: .9fr 1.1fr;
        gap: 40px;
        img{
            max-width: 100%;
        }
          `
    ;
    const Column = styled.div`
        display: flex;
        aligned-items: center;
    `;
    const ButtonsWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top:25px;
    `;
    return(
        <Bg>
            <Center>
                <Wrapper>
                    <Column>
                        <div>
                            <h1>
                                {featuredProduct.title}
                            </h1>
                            <p>
                            {featuredProduct.description}
                            </p>
                            <ButtonsWrapper>
                            <ButtonLink href={"/products/" + featuredProduct._id} outline={1} white>Read More</ButtonLink>
                            <Button primary>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                                Add to Cart
                            </Button>
                            </ButtonsWrapper>
                        </div>
                    </Column>
                    <Column>
                        <img src={featuredProduct.images} alt=""/>
                    </Column>
                </Wrapper>
            </Center>
        </Bg>
    )
}