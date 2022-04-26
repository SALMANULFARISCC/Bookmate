import React , {useState} from 'react';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const useConfirm = (text) =>{
    const [value , setValue] = useState(false);
    const createSnack = ()=> {
        return value ? <Alert>{text}</Alert> :null;
    }
    const handleConfirm = () =>{
        setValue(true);
        setTimeout(() => setValue(false) , 3000);

    };
    return{
        ConfirmSnack:createSnack,
        confirmToggler:handleConfirm,
    };

};
export default useConfirm;