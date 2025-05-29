import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';
import { GrClose } from "react-icons/gr";

const Terms = ({ lang }) => {
  const [ fullTerm , setFullTerm ] = useState(false);
  const { t } = useTranslation();
  
  return (
    <React.Fragment>
    <TermBox className="" lang={lang}>
              <p className="uc-game-head-title">{t('t&c heading')}</p>
              <p 
              style={{ fontSize: "9px"}}
              className="uc-game-head-title">{t('t&c sub heading')}</p>
              <ul>
                <li>{t('t&c list one')}</li>
                <li>{t('t&c list two')}</li>
                <li>{t('t&c list three')}</li>
                <li>{t('t&c list four')}</li>
                <li>{t('t&c list five')}</li>
                
                <li>{t("t&c list six")} <span 
                onClick={() => setFullTerm(true)}
                style={{
                    color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer",
                }}>{t("click")}</span></li>
                <hr className="mt-2"></hr>
                <p style={{
                  color: "grey",
                  textAlign: "center"
                }}>{t('support email')}</p>
              </ul>
    </TermBox>
    {
        fullTerm && (
            <Modal className='wow slideInUp'>
                <div className='container'>
                    <ModalContent lang={lang}>
                        <Close>
                            <GrClose 
                            className='close'
                            onClick={() => setFullTerm(false)}
                            size={25} 
                            color='red'/>
                        </Close>
                        <ul>
                            <li>{t('t&c list one')}</li>
                            <li>{t('t&c list two')}</li>
                            <li>{t('t&c list three')}</li>
                            <li>{t('t&c list four')}</li>
                            <li>{t('t&c list five')}</li>
                            <hr style={{
                              color: "black"
                            }}></hr>
                            <p style={{
                              textAlign: 'center',
                              color: "blue"
                            }}>{t('support email')}</p>
                        </ul>
                    </ModalContent>
                </div>
            </Modal>
        )
    }
    </React.Fragment>
  )
}

export default Terms;


const TermBox = styled.div`
  background-color: rgba(0,0,0,0.5);
  border-radius: 4px;
  margin-top: 10px;

  p{
    text-align: center;
  }
  ul{
    padding: 20px;
    /* list-style-type: circle; */
    li{
      width: 100%;
      font-size: ${(props) => props.lang === "en" ? "11px" : "13px" };
      color: grey;
      list-style-type: circle;
      text-align: ${(props) => props.lang === "en" ? "left" : "right" };
    }
  }
`;

const Modal = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 20%;
  left: 0;
  right: 0;
  background-color: whitesmoke;
  transition: all 0.5s linear ease-in;

`;

const ModalContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    ul{
        padding: 20px;
        li{
            width: 100%;
            font-size: ${(props) => props.lang === "en" ? "15px" : "16px" };
            color: grey;
            list-style-type: circle;
            text-align: ${(props) => props.lang === "en" ? "left" : "right" };
        }
    }
`;

const Close = styled.div`
    display: flex;
    justify-content: end;
    padding: 10px;
    cursor: pointer;
    .color{
        color: red;
    }
`;