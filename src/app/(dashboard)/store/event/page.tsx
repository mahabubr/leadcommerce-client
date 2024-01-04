import ViewEvents from '@/components/event/ViewEvents';
import style from "../dashboard/static/dashboard.module.css";

const page = () => {
    return (
        <div className={style.container}>
            <ViewEvents />
        </div>
    );
};

export default page;