import { classNames } from '@/shared/lib/classNames/classNames';
import './Loader.css';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames('loader-container', {}, [className])}>
        <div className="lds-ellipsis">
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
);
