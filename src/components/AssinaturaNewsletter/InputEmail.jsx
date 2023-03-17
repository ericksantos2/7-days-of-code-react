import styled from 'styled-components';
import { ReactComponent as MailSvg } from '@/assets/mail.svg';

const Mail = styled(MailSvg)`
  position: absolute;
  left: 17.43px;
  height: 100%;
`;

const InputDiv = styled.div`
  display: flex;
  position: relative;
  width: 585px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  background-color: #fff;
`;

const CampoInput = styled.input`
  border: none;
  width: 100%;
  font-family: $fonte-1;
  padding: 27px 230px 27px 55px;
  line-height: 20px;
  opacity: 0.3;
  font-size: 16px;
  &:focus {
    outline: 1px solid rgba(0, 0, 0, 0.5);
  }
`;

const BotaoInput = styled.button`
  font-family: $fonte-1;
  position: absolute;
  right: 0;
  border: none;
  padding: none;
  height: 100%;
  width: 194px;
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  background-color: #ffcb47;
  &:hover {
    cursor: pointer;
    transition: 500ms;
    opacity: .5;
  }
`;

export default function InputEmail({value, onChange, onFocus, required, children}) {
  return (
    <InputDiv>
        <Mail />
        <CampoInput
          type='text'
          placeholder='Insira seu e-mail'
          value={value}
          onChange={onChange}
          required={required}
          onFocus={onFocus}
        />
        <BotaoInput>
          {children}
        </BotaoInput>
      </InputDiv>
  )
}