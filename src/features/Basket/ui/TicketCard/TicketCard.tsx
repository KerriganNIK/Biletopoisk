'use client';
import {classNames} from "@/shared/lib/classNames/classNames";
import classes from "./TicketCard.module.css";
import {Counter} from "@/entities/Counter";
import {Film} from "@/entities/Films/model/type/film";
import useTranslatedGenre from "@/shared/lib/hooks/useTranslatedGenre/useTranslatedGenre";
import {Button, ThemeButton} from "@/shared/ui/Button/Button";
import Image from "next/image";
import {useState} from "react";
import {Modal} from "@/shared/ui/Modal/Modal";
import {useDispatch} from "react-redux";
import {ModalCard} from "@/features/Basket/ui/ModalCard/ModalCard";
import {removeFilmCount} from "@/entities/Counter/model/slice/CounterSlice";

interface TicketCardProps {
    className?: string;
    data: Film;
    idTicket: string;
}

export const TicketCard = ({className, data, idTicket}: TicketCardProps) => {
    const translatedGenre = useTranslatedGenre(data.genre);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    function closeModal() {
        setIsOpen(false);
    }

    function removeTicket() {
        dispatch(removeFilmCount(idTicket));
    }

    return (
        <div className={classNames(classes.TicketCard, {}, [className])}>
            <div className={classes.Image}>
                <img src={data.posterUrl} alt="" />
            </div>
            <div className={classes.Details}>
                <div className={classes.Title}>
                    <div>
                        {data.title}
                    </div>
                    <div className={classes.activeButton}>
                        <Counter
                            className={classes.count}
                            movie={data}
                        />
                        <Button
                            onClick={() => setIsOpen(true)}
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
                </div>
                <div className={classes.Genre}>
                    {translatedGenre}
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <ModalCard closeModal={closeModal} removeTicket={removeTicket}/>
            </Modal>
        </div>
    );
};