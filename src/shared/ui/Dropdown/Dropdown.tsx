import { ReactNode, useState } from 'react';
import classes from "./Dropdown.module.css";
import Image from "next/image";
import {classNames} from "@/shared/lib/classNames/classNames";

interface DropdownProps {
    className?: string;
    trigger: ReactNode;
    items: DropdownItem[];
}

interface DropdownItem {
    content: ReactNode;
    href?: string;
    onClick?: () => void;
    disabled?: boolean;
}

export function Dropdown({ className, trigger, items }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={classNames(classes.Dropdown, {}, [className])}>
            <button onClick={toggleDropdown} className={classes.header}>
                {trigger}
                <Image
                    src="/svg/arrow_Dropdown_close.svg"
                    alt="arrow_Dropdown_close"
                    width={17}
                    height={17}
                />
            </button>
            {isOpen && (
                <div className={classes.content}>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index} onClick={item.onClick}>
                                {item.href ? (
                                    <a href={item.href}>{item.content}</a>
                                ) : (
                                    item.content
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
