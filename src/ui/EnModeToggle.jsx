import { GiFrance } from 'react-icons/gi';
import { RiEnglishInput } from 'react-icons/ri';
import ButtonIcon from './ButtonIcon';
import { useEnMode } from '../context/EnModeContext';

function EnModeToggle() {
  const { isEnMode, toggleEnMode } = useEnMode();

  return (
    <ButtonIcon onClick={toggleEnMode}>
      {isEnMode ? <GiFrance /> : <RiEnglishInput />}
    </ButtonIcon>
  );
}

export default EnModeToggle;
