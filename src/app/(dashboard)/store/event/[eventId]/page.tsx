'use client'

import EventDetails from "@/components/event/EventDetails";

const page = ({ params }: { params: { eventId: string } }) => {
    return <>
        <EventDetails eventId={params.eventId} />
    </>;
};

export default page;