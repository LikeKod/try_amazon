import cn from 'clsx';
import { useState } from "react";
import { BsCaretDownFill } from "react-icons/bs";
import { ISelect } from "./select.interface";
import styles from './Select.module.scss';




function Select<K>({data, onChange, value, title}: ISelect<K>) {
    const [isOpen, setIsOpen] = useState(false)
    BsCaretDownFill, cn, styles
}

export default Select