 import {classNames} from "@/shared/lib/classNames/classNames";
 import classes from "./ModalCard.module.css";
 import {Button, ThemeButton} from "@/shared/ui/Button/Button";
 import Image from "next/image";

 interface ModalCardProps {
     className?: string;
     closeModal: () => void;
     removeTicket: () => void;
 }

 export const ModalCard = ({className, closeModal, removeTicket}: ModalCardProps) => {
     return (
         <div className={classNames(classes.ModalCard, {}, [className])}>
             <div className={classes.headerModal}>
                 <h1>Удаление билета</h1>
                 <Button
                     onClick={closeModal}
                     theme={ThemeButton.Clear}
                 >
                     <Image
                         src='/svg/close.svg'
                         alt='close'
                         width={14}
                         height={14}
                     />
                 </Button>
             </div>
             <div>
                 <p>Вы уверены, что хотите удалить билет?</p>
                 <div>
                     <Button onClick={removeTicket} className={classes.buttonOk} theme={ThemeButton.Fill}>Да</Button>
                     <Button onClick={closeModal} theme={ThemeButton.Cancel}>Нет</Button>
                 </div>
             </div>

         </div>
     );
 };