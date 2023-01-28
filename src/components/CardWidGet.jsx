import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useContext} from 'react';
import { GlobalContext } from './Context/CartContext';

export default function CartWidget() {
  const { count } = useContext(GlobalContext)
  return (
    <>
        <div className='icon-button'>
            <ShoppingCartIcon fontSize='large'/>{count}
        </div>
    </>
  )}; 